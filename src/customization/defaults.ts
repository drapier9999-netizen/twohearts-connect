/** Feature defaults the owner may want to tune. */

export const reminderDefaults = {
  defaultTime: "09:00",
  repeatOptions: ["none", "daily", "weekly", "monthly", "yearly"] as const,
  defaultRepeat: "none" as const,
  categories: [
    { id: "date", label: "Date night", icon: "heart" },
    { id: "anniversary", label: "Anniversary", icon: "calendar-heart" },
    { id: "birthday", label: "Birthday", icon: "cake" },
    { id: "checkin", label: "Check in", icon: "message-circle" },
    { id: "other", label: "Other", icon: "bell" },
  ],
  leadTimeMinutes: 0,
};

export const periodTrackerDefaults = {
  enabled: false,
  cycleLength: 28,
  periodLength: 5,
  lutealPhaseLength: 14,
  predictAhead: 6, // cycles predicted forward
  remindBeforePeriodDays: 2,
  remindFertileWindow: true,
  privateByDefault: true,
  flowLevels: ["light", "medium", "heavy"] as const,
  symptoms: ["cramps", "headache", "fatigue", "bloating", "mood swings", "back pain", "nausea"],
};

export const moodDefaults = {
  moods: [
    { id: "loved", label: "Loved", emoji: "🥰" },
    { id: "happy", label: "Happy", emoji: "😊" },
    { id: "calm", label: "Calm", emoji: "🙂" },
    { id: "tired", label: "Tired", emoji: "😴" },
    { id: "sad", label: "Sad", emoji: "😔" },
    { id: "stressed", label: "Stressed", emoji: "😣" },
  ],
};

export const appDefaults = {
  theme: "light" as "light" | "dark" | "system",
  fontScale: "default" as const,
  appLockEnabled: false,
  hapticsEnabled: true,
  firstDayOfWeek: 1, // Monday
};
