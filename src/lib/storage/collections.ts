/** Typed CRUD helpers over the store — UI never builds records by hand. */
import { createId, nowIso, storage, type Collections } from "./store";
import type { Memory, MoodEntry, Note, Place, Reminder, TimelineEvent } from "./types";

type ListKeys = {
  [K in keyof Collections]: Collections[K] extends Array<unknown> ? K : never;
}[keyof Collections];

function addTo<K extends ListKeys>(key: K, item: Collections[K][number]) {
  storage.update(key, (list) => [item, ...(list as unknown[])] as Collections[K]);
  return item;
}

function updateIn<K extends ListKeys>(
  key: K,
  id: string,
  patch: Partial<Collections[K][number]>,
) {
  storage.update(
    key,
    (list) =>
      (list as { id: string }[]).map((item) =>
        item.id === id ? { ...item, ...patch, updatedAt: nowIso() } : item,
      ) as Collections[K],
  );
}

function removeFrom<K extends ListKeys>(key: K, id: string) {
  storage.update(
    key,
    (list) => (list as { id: string }[]).filter((item) => item.id !== id) as Collections[K],
  );
}

export const memories = {
  add(input: Omit<Memory, "id" | "createdAt" | "updatedAt">) {
    return addTo("memories", { ...input, id: createId(), createdAt: nowIso(), updatedAt: nowIso() });
  },
  update: (id: string, patch: Partial<Memory>) => updateIn("memories", id, patch),
  remove: (id: string) => removeFrom("memories", id),
};

export const notes = {
  add(input: Omit<Note, "id" | "createdAt" | "updatedAt">) {
    return addTo("notes", { ...input, id: createId(), createdAt: nowIso(), updatedAt: nowIso() });
  },
  update: (id: string, patch: Partial<Note>) => updateIn("notes", id, patch),
  remove: (id: string) => removeFrom("notes", id),
};

export const reminders = {
  add(input: Omit<Reminder, "id" | "createdAt">) {
    return addTo("reminders", { ...input, id: createId(), createdAt: nowIso() });
  },
  update: (id: string, patch: Partial<Reminder>) => updateIn("reminders", id, patch),
  remove: (id: string) => removeFrom("reminders", id),
};

export const timeline = {
  add(input: Omit<TimelineEvent, "id" | "createdAt">) {
    return addTo("timeline", { ...input, id: createId(), createdAt: nowIso() });
  },
  remove: (id: string) => removeFrom("timeline", id),
};

export const moods = {
  add(input: Omit<MoodEntry, "id" | "createdAt">) {
    return addTo("moods", { ...input, id: createId(), createdAt: nowIso() });
  },
  remove: (id: string) => removeFrom("moods", id),
};

export const places = {
  add(input: Omit<Place, "id" | "createdAt">) {
    return addTo("places", { ...input, id: createId(), createdAt: nowIso() });
  },
  update: (id: string, patch: Partial<Place>) => updateIn("places", id, patch),
  remove: (id: string) => removeFrom("places", id),
};
