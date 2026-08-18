import { createFileRoute } from "@tanstack/react-router";

import { categoryLabels, gameCatalog, type GameCategory } from "@/customization/games";
import { AppShell } from "@/components/shell/AppShell";
import { Card, ScreenHeader } from "@/components/ui/primitives";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — TwoHearts" },
      { name: "description", content: "Couple games, word games and brain teasers to play together." },
      { property: "og:title", content: "Games — TwoHearts" },
      { property: "og:description", content: "Couple games and puzzles to play together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Games,
});

function Games() {
  const categories = Object.keys(categoryLabels) as GameCategory[];

  return (
    <AppShell>
      <ScreenHeader title="Play" subtitle="Something to do together" />
      {categories.map((category) => {
        const games = gameCatalog.filter((g) => g.category === category);
        if (games.length === 0) return null;
        return (
          <section key={category} className="mb-7">
            <h2 className="mb-3 text-sm font-semibold">{categoryLabels[category]}</h2>
            <div className="grid grid-cols-2 gap-3">
              {games.map((game) => (
                <Card key={game.id} className="p-4">
                  <span className="text-xl">{game.emoji}</span>
                  <p className="mt-2 font-display text-base leading-tight">{game.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{game.blurb}</p>
                  <p className="mt-2 text-[0.65rem] text-muted-foreground">
                    {game.ready ? `${game.players} players` : "Coming soon"}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </AppShell>
  );
}
