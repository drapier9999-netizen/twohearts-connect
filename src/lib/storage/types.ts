/** Domain types for TwoHearts local-first data. */

export type ID = string;

export type Profile = {
  name: string;
  birthday?: string; // ISO date
  photo?: string | null;
};

export type Relationship = {
  partnerName: string;
  partnerBirthday?: string;
  partnerPhoto?: string | null;
  startDate?: string; // ISO date the story began
  status?: string;
};

export type Memory = {
  id: ID;
  title: string;
  date: string; // ISO
  description?: string;
  photos?: string[]; // data URLs / file URIs
  tags?: string[];
  favourite?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: ID;
  title: string;
  body: string;
  pinned?: boolean;
  color?: string;
  createdAt: string;
  updatedAt: string;
};

export type Reminder = {
  id: ID;
  label: string;
  date: string; // ISO date
  time: string; // HH:mm
  repeat: "none" | "daily" | "weekly" | "monthly" | "yearly";
  category: string;
  notify: boolean;
  notificationId?: number;
  done?: boolean;
  createdAt: string;
};

export type TimelineEvent = {
  id: ID;
  title: string;
  date: string;
  description?: string;
  icon?: string;
  createdAt: string;
};

export type MoodEntry = {
  id: ID;
  date: string;
  mood: string;
  note?: string;
  createdAt: string;
};

export type Place = {
  id: ID;
  name: string;
  note?: string;
  date?: string;
  visited: boolean;
  createdAt: string;
};

export type CycleLog = {
  id: ID;
  startDate: string;
  endDate?: string;
  flow?: string;
  symptoms?: string[];
  note?: string;
};

export type PeriodSettings = {
  enabled: boolean;
  cycleLength: number;
  periodLength: number;
  remindBeforeDays: number;
  remindFertileWindow: boolean;
  private: boolean;
};

export type VaultItem = {
  id: ID;
  title: string;
  body?: string;
  kind: "note" | "photo";
  data?: string;
  createdAt: string;
};

export type GameScore = {
  id: ID;
  gameId: string;
  playedAt: string;
  score: number;
  total: number;
  detail?: string;
};

export type Settings = {
  theme: "light" | "dark" | "system";
  fontScale: "small" | "default" | "large" | "larger";
  appLockEnabled: boolean;
  appLockPin?: string | null;
  hapticsEnabled: boolean;
  notificationsEnabled: boolean;
};

export type AppMeta = {
  onboardingComplete: boolean;
  schemaVersion: number;
  installedAt: string;
};
