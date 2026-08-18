import { createFileRoute, Link } from "@tanstack/react-router";

import { content } from "@/customization/content";
import { AppShell } from "@/components/shell/AppShell";
import { Card, EmptyState, ScreenHeader } from "@/components/ui/primitives";
import { durationSince, formatDate, nextAnnualOccurrence, parseDate } from "@/lib/date";
import { useStore } from "@/lib/storage/store";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Home — TwoHearts" },
      { name: "description", content: "Your together-counter, upcoming dates and quick actions." },
      { property: "og:title", content: "Home — TwoHearts" },
      {
        property: "og:description",
        content: "Your together-counter, upcoming dates and quick actions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return content.home.greetingMorning;
  if (h < 18) return content.home.greetingAfternoon;
  return content.home.greetingEvening;
}

function Home() {
  const [profile] = useStore("profile");
  const [relationship] = useStore("relationship");
  const [reminders] = useStore("reminders");

  const start = parseDate(relationship.startDate);
  const together = start ? durationSince(start) : null;
  const anniversary = relationship.startDate
    ? nextAnnualOccurrence(relationship.startDate)
    : null;

  const upcoming = [...reminders]
    .filter((r) => !r.done)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  const quick = [
    { to: "/memories", label: "Memory", emoji: "📷" },
    { to: "/notes", label: "Note", emoji: "✍️" },
    { to: "/reminders", label: "Reminder", emoji: "⏰" },
    { to: "/timeline", label: "Timeline", emoji: "🕰️" },
  ] as const;

  return (
    <AppShell>
      <ScreenHeader
        title={`${greeting()}${profile.name ? `, ${profile.name}` : ""}`}
        subtitle={
          relationship.partnerName ? `You & ${relationship.partnerName}` : content.partnerLabel
        }
      />

      <Card className="bg-primary text-primary-foreground">
        <p className="text-xs tracking-wide uppercase opacity-80">{content.home.counterLabel}</p>
        {together ? (
          <>
            <p className="mt-2 font-display text-3xl font-semibold">
              {together.years}y {together.months}m {together.days}d
            </p>
            <p className="mt-1 text-sm opacity-85">{together.totalDays} days together</p>
          </>
        ) : (
          <p className="mt-2 text-sm opacity-90">
            Add your start date in Settings to begin the counter.
          </p>
        )}
        {anniversary ? (
          <p className="mt-4 text-xs opacity-85">Next anniversary · {formatDate(anniversary)}</p>
        ) : null}
      </Card>

      <section className="mt-7">
        <h2 className="mb-3 text-sm font-semibold text-foreground">{content.home.quickActions}</h2>
        <div className="grid grid-cols-4 gap-3">
          {quick.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border/70 bg-card py-4 text-[0.7rem] text-muted-foreground active:scale-[0.97]"
            >
              <span className="text-xl">{q.emoji}</span>
              {q.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-3 text-sm font-semibold text-foreground">{content.home.upcoming}</h2>
        {upcoming.length === 0 ? (
          <EmptyState emoji="📅" title="Nothing scheduled" body={content.home.emptyUpcoming} />
        ) : (
          <ul className="space-y-3">
            {upcoming.map((r) => (
              <Card key={r.id} className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-foreground">{r.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(r.date)} · {r.time}
                  </p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-[0.65rem] text-accent-foreground capitalize">
                  {r.category}
                </span>
              </Card>
            ))}
          </ul>
        )}
      </section>
    </AppShell>
  );
}
