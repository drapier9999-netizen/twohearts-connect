import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { branding } from "@/customization/branding";
import { storage } from "@/lib/storage/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TwoHearts — A private keepsake app for two" },
      {
        name: "description",
        content:
          "TwoHearts keeps your memories, notes, important dates and little games in one private, offline-first place.",
      },
      { property: "og:title", content: "TwoHearts — A private keepsake app for two" },
      {
        property: "og:description",
        content: "Memories, notes, dates and games — kept privately on your device.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const done = storage.get("meta").onboardingComplete;
    const timer = window.setTimeout(() => {
      navigate({ to: done ? "/home" : "/welcome", replace: true });
    }, 700);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary text-3xl text-primary-foreground shadow-lg">
        ♥
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-foreground">
        {branding.appName}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{branding.tagline}</p>
    </div>
  );
}
