/**
 * Local-first storage layer.
 *
 * Everything is persisted in the device's localStorage under versioned keys and
 * exposed through a tiny reactive store so React components never touch storage
 * directly. Swapping in Capacitor Preferences/SQLite later only means changing
 * `readRaw`/`writeRaw`.
 */
import { useCallback, useSyncExternalStore } from "react";

import { appDefaults, periodTrackerDefaults } from "@/customization/defaults";
import type {
  AppMeta,
  CycleLog,
  GameScore,
  Memory,
  MoodEntry,
  Note,
  PeriodSettings,
  Place,
  Profile,
  Relationship,
  Reminder,
  Settings,
  TimelineEvent,
  VaultItem,
} from "./types";

const PREFIX = "twohearts.v1.";
export const SCHEMA_VERSION = 1;

export type Collections = {
  meta: AppMeta;
  profile: Profile;
  relationship: Relationship;
  memories: Memory[];
  notes: Note[];
  reminders: Reminder[];
  timeline: TimelineEvent[];
  moods: MoodEntry[];
  places: Place[];
  cycles: CycleLog[];
  periodSettings: PeriodSettings;
  vault: VaultItem[];
  gameScores: GameScore[];
  settings: Settings;
};

export const defaults: Collections = {
  meta: { onboardingComplete: false, schemaVersion: SCHEMA_VERSION, installedAt: "" },
  profile: { name: "" },
  relationship: { partnerName: "" },
  memories: [],
  notes: [],
  reminders: [],
  timeline: [],
  moods: [],
  places: [],
  cycles: [],
  periodSettings: {
    enabled: periodTrackerDefaults.enabled,
    cycleLength: periodTrackerDefaults.cycleLength,
    periodLength: periodTrackerDefaults.periodLength,
    remindBeforeDays: periodTrackerDefaults.remindBeforePeriodDays,
    remindFertileWindow: periodTrackerDefaults.remindFertileWindow,
    private: periodTrackerDefaults.privateByDefault,
  },
  vault: [],
  gameScores: [],
  settings: {
    theme: appDefaults.theme,
    fontScale: appDefaults.fontScale,
    appLockEnabled: appDefaults.appLockEnabled,
    appLockPin: null,
    hapticsEnabled: appDefaults.hapticsEnabled,
    notificationsEnabled: true,
  },
};

const cache = new Map<string, unknown>();
const listeners = new Map<string, Set<() => void>>();

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readRaw<K extends keyof Collections>(key: K): Collections[K] {
  if (cache.has(key as string)) return cache.get(key as string) as Collections[K];
  const fallback = defaults[key];
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + String(key));
    const value = raw === null ? fallback : (JSON.parse(raw) as Collections[K]);
    cache.set(key as string, value);
    return value;
  } catch {
    return fallback;
  }
}

function writeRaw<K extends keyof Collections>(key: K, value: Collections[K]) {
  cache.set(key as string, value);
  if (isBrowser()) {
    try {
      window.localStorage.setItem(PREFIX + String(key), JSON.stringify(value));
    } catch (error) {
      console.error("TwoHearts storage write failed", error);
    }
  }
  listeners.get(key as string)?.forEach((fn) => fn());
}

function subscribe(key: string, fn: () => void) {
  const set = listeners.get(key) ?? new Set<() => void>();
  set.add(fn);
  listeners.set(key, set);
  return () => set.delete(fn);
}

export const storage = {
  get: readRaw,
  set: writeRaw,
  update<K extends keyof Collections>(key: K, fn: (current: Collections[K]) => Collections[K]) {
    writeRaw(key, fn(readRaw(key)));
  },
  clearAll() {
    if (!isBrowser()) return;
    Object.keys(defaults).forEach((k) => window.localStorage.removeItem(PREFIX + k));
    cache.clear();
    listeners.forEach((set) => set.forEach((fn) => fn()));
  },
  export(): string {
    const dump: Record<string, unknown> = {};
    (Object.keys(defaults) as (keyof Collections)[]).forEach((k) => {
      dump[k as string] = readRaw(k);
    });
    return JSON.stringify({ schemaVersion: SCHEMA_VERSION, data: dump }, null, 2);
  },
  import(json: string) {
    const parsed = JSON.parse(json) as { data?: Record<string, unknown> };
    if (!parsed.data) throw new Error("Invalid backup file");
    (Object.keys(defaults) as (keyof Collections)[]).forEach((k) => {
      if (k in parsed.data!) writeRaw(k, parsed.data![k as string] as Collections[typeof k]);
    });
  },
};

/** Reactive read/write hook, SSR-safe (server renders the default value). */
export function useStore<K extends keyof Collections>(
  key: K,
): [Collections[K], (next: Collections[K] | ((cur: Collections[K]) => Collections[K])) => void] {
  const value = useSyncExternalStore(
    (fn) => subscribe(key as string, fn),
    () => readRaw(key),
    () => defaults[key],
  );

  const setValue = useCallback(
    (next: Collections[K] | ((cur: Collections[K]) => Collections[K])) => {
      const resolved =
        typeof next === "function"
          ? (next as (cur: Collections[K]) => Collections[K])(readRaw(key))
          : next;
      writeRaw(key, resolved);
    },
    [key],
  );

  return [value, setValue];
}

export function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function nowIso() {
  return new Date().toISOString();
}
