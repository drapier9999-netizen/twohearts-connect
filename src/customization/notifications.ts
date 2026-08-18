/** Local notification copy + schedule defaults (Capacitor LocalNotifications). */
export const notifications = {
  channelId: "twohearts-reminders",
  channelName: "TwoHearts reminders",
  templates: {
    reminder: {
      title: "A little reminder",
      body: (label: string) => label,
    },
    anniversary: {
      title: "Today matters",
      body: (label: string) => `${label} — don't let today pass quietly.`,
    },
    dailyThought: {
      title: "Thinking of them?",
      body: () => "Write down one thing you're grateful for today.",
    },
    periodUpcoming: {
      title: "Cycle reminder",
      body: (days: number) => `Period expected in ${days} day${days === 1 ? "" : "s"}.`,
    },
    periodStart: {
      title: "Cycle reminder",
      body: () => "Your period is expected to start today.",
    },
  },
  defaultTimes: {
    dailyThought: "20:00",
    reminder: "09:00",
    period: "08:00",
  },
};
