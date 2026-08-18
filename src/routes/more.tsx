import { createFileRoute, Link } from "@tanstack/react-router";

import { branding } from "@/customization/branding";
import { content } from "@/customization/content";
import { AppShell } from "@/components/shell/AppShell";
import { Card, ScreenHeader } from "@/components/ui/primitives";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "More — TwoHearts" },
      { name: "description", content: "Memories, notes, reminders, timeline and app settings." },
      { property: "og:title", content: "More — TwoHearts" },
      { property: "og:description", content: "Memories, notes, reminders, timeline and settings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: More,
});

const links = [
  { to: "/memories", label: "Memories", emoji: "📷" },
  { to: "/notes", label: "Notes", emoji: "✍️" },
  { to: "/reminders", label: "Reminders", emoji: "⏰" },
  { to: "/timeline", label: "Timeline", emoji: "🕰️" },
] as const;

function More() {
  return (
    <AppShell>
      <ScreenHeader title={content.more.title} subtitle={content.more.subtitle} />
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to}>
              <Card className="flex items-center gap-3 py-4">
                <span className="text-xl">{l.emoji}</span>
                <span className="font-medium">{l.label}</span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        {branding.appName} v{branding.version}
      </p>
    </AppShell>
  );
}
