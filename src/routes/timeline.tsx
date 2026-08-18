import { createFileRoute } from "@tanstack/react-router";

import { content } from "@/customization/content";
import { AppShell } from "@/components/shell/AppShell";
import { Card, EmptyState, ScreenHeader } from "@/components/ui/primitives";
import { useStore } from "@/lib/storage/store";
import { formatDate } from "@/lib/date";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — TwoHearts" },
      { name: "description", content: "Your milestones and memories, in order." },
      { property: "og:title", content: "Timeline — TwoHearts" },
      { property: "og:description", content: "Your milestones and memories, in order." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Timeline,
});

function Timeline() {
  const [events] = useStore("timeline");
  const [memories] = useStore("memories");

  const items = [
    ...events.map((e) => ({ id: e.id, title: e.title, date: e.date, note: e.description })),
    ...memories.map((m) => ({ id: m.id, title: m.title, date: m.date, note: m.description })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <AppShell>
      <ScreenHeader title={content.timeline.title} subtitle="Everything, in order" />
      {items.length === 0 ? (
        <EmptyState emoji="🕰️" title="Nothing here yet" body={content.timeline.empty} />
      ) : (
        <ol className="relative space-y-4 border-l border-border pl-5">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute top-4 -left-[1.6rem] h-2.5 w-2.5 rounded-full bg-primary" />
              <Card>
                <p className="text-xs text-muted-foreground">{formatDate(item.date)}</p>
                <p className="font-display text-lg">{item.title}</p>
                {item.note ? <p className="mt-1 text-sm text-muted-foreground">{item.note}</p> : null}
              </Card>
            </li>
          ))}
        </ol>
      )}
    </AppShell>
  );
}
