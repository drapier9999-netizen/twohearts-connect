import { createFileRoute } from "@tanstack/react-router";

import { content } from "@/customization/content";
import { moodDefaults } from "@/customization/defaults";
import { AppShell } from "@/components/shell/AppShell";
import { Card, ScreenHeader } from "@/components/ui/primitives";
import { moods as moodsApi } from "@/lib/storage/collections";
import { useStore } from "@/lib/storage/store";
import { formatDate } from "@/lib/date";

export const Route = createFileRoute("/us")({
  head: () => ({
    meta: [
      { title: "Us — TwoHearts" },
      { name: "description", content: "Moods, milestones and the little things you share." },
      { property: "og:title", content: "Us — TwoHearts" },
      { property: "og:description", content: "Moods, milestones and the little things you share." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Us,
});

function Us() {
  const [moods] = useStore("moods");
  const [relationship] = useStore("relationship");

  return (
    <AppShell>
      <ScreenHeader
        title={content.us.title}
        subtitle={
          relationship.partnerName ? `You & ${relationship.partnerName}` : content.us.subtitle
        }
      />

      <Card>
        <p className="text-sm font-semibold">How are you today?</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {moodDefaults.moods.map((m) => (
            <button
              key={m.id}
              onClick={() =>
                moodsApi.add({ date: new Date().toISOString().slice(0, 10), mood: m.id })
              }
              className="flex flex-col items-center gap-1 rounded-2xl border border-border/70 bg-secondary/50 py-3 text-[0.7rem] text-muted-foreground active:scale-[0.97]"
            >
              <span className="text-xl">{m.emoji}</span>
              {m.label}
            </button>
          ))}
        </div>
      </Card>

      <section className="mt-7">
        <h2 className="mb-3 text-sm font-semibold">Recent moods</h2>
        {moods.length === 0 ? (
          <p className="text-sm text-muted-foreground">No moods logged yet.</p>
        ) : (
          <ul className="space-y-2">
            {moods.slice(0, 10).map((entry) => {
              const mood = moodDefaults.moods.find((m) => m.id === entry.mood);
              return (
                <Card key={entry.id} className="flex items-center gap-3 py-3">
                  <span className="text-xl">{mood?.emoji ?? "🙂"}</span>
                  <div>
                    <p className="text-sm font-medium">{mood?.label ?? entry.mood}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(entry.date)}</p>
                  </div>
                </Card>
              );
            })}
          </ul>
        )}
      </section>
    </AppShell>
  );
}
