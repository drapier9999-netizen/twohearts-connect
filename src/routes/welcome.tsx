import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { branding } from "@/customization/branding";
import { content } from "@/customization/content";
import { Button, Field, inputClass } from "@/components/ui/primitives";
import { useStore, nowIso } from "@/lib/storage/store";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome — TwoHearts" },
      { name: "description", content: "Set up your private TwoHearts space in a few taps." },
      { property: "og:title", content: "Welcome to TwoHearts" },
      { property: "og:description", content: "Set up your private TwoHearts space in a few taps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Welcome,
});

const steps = ["welcome", "you", "us", "look", "done"] as const;

function Welcome() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useStore("profile");
  const [relationship, setRelationship] = useStore("relationship");
  const [settings, setSettings] = useStore("settings");
  const [, setMeta] = useStore("meta");

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const finish = () => {
    setMeta({ onboardingComplete: true, schemaVersion: 1, installedAt: nowIso() });
    navigate({ to: "/home", replace: true });
  };

  const current = steps[step];

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-background px-6 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mb-8 flex gap-1.5">
        {steps.map((s, i) => (
          <span
            key={s}
            className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>

      <div className="flex-1">
        {current === "welcome" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary text-3xl text-primary-foreground">
              ♥
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold">
              {content.onboarding.welcomeTitle}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.onboarding.welcomeBody}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">{branding.splashSubtitle}</p>
          </div>
        )}

        {current === "you" && (
          <div className="space-y-5">
            <h1 className="font-display text-2xl font-semibold">
              {content.onboarding.profileTitle}
            </h1>
            <p className="text-sm text-muted-foreground">{content.onboarding.profileBody}</p>
            <Field label="Your name">
              <input
                className={inputClass}
                value={profile.name}
                placeholder="Name"
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </Field>
            <Field label="Your birthday" hint="Optional — used for gentle reminders.">
              <input
                type="date"
                className={inputClass}
                value={profile.birthday ?? ""}
                onChange={(e) => setProfile({ ...profile, birthday: e.target.value })}
              />
            </Field>
          </div>
        )}

        {current === "us" && (
          <div className="space-y-5">
            <h1 className="font-display text-2xl font-semibold">
              {content.onboarding.relationshipTitle}
            </h1>
            <p className="text-sm text-muted-foreground">{content.onboarding.relationshipBody}</p>
            <Field label="Their name">
              <input
                className={inputClass}
                value={relationship.partnerName}
                placeholder={content.partnerLabel}
                onChange={(e) =>
                  setRelationship({ ...relationship, partnerName: e.target.value })
                }
              />
            </Field>
            <Field label="Their birthday">
              <input
                type="date"
                className={inputClass}
                value={relationship.partnerBirthday ?? ""}
                onChange={(e) =>
                  setRelationship({ ...relationship, partnerBirthday: e.target.value })
                }
              />
            </Field>
            <Field label="The day it began" hint="Powers your together-counter on Home.">
              <input
                type="date"
                className={inputClass}
                value={relationship.startDate ?? ""}
                onChange={(e) => setRelationship({ ...relationship, startDate: e.target.value })}
              />
            </Field>
          </div>
        )}

        {current === "look" && (
          <div className="space-y-5">
            <h1 className="font-display text-2xl font-semibold">
              {content.onboarding.personalizationTitle}
            </h1>
            <p className="text-sm text-muted-foreground">
              {content.onboarding.personalizationBody}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(["light", "dark", "system"] as const).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSettings({ ...settings, theme })}
                  className={`rounded-2xl border px-3 py-4 text-sm capitalize transition-colors ${
                    settings.theme === theme
                      ? "border-primary bg-accent text-accent-foreground"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
            <Field label="Text size">
              <div className="grid grid-cols-4 gap-2">
                {(["small", "default", "large", "larger"] as const).map((scale) => (
                  <button
                    key={scale}
                    onClick={() => setSettings({ ...settings, fontScale: scale })}
                    className={`rounded-2xl border px-2 py-3 text-xs capitalize ${
                      settings.fontScale === scale
                        ? "border-primary bg-accent text-accent-foreground"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {scale}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        )}

        {current === "done" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="text-4xl">🤍</span>
            <h1 className="mt-4 font-display text-2xl font-semibold">
              {content.onboarding.completeTitle}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{content.onboarding.completeBody}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        {step > 0 && current !== "done" ? (
          <Button variant="outline" size="lg" onClick={back} className="flex-1">
            {content.common.back}
          </Button>
        ) : null}
        {current === "done" ? (
          <Button size="lg" className="flex-1" onClick={finish}>
            {content.onboarding.finishCta}
          </Button>
        ) : (
          <Button size="lg" className="flex-1" onClick={next}>
            {step === 0 ? content.onboarding.startCta : content.onboarding.continueCta}
          </Button>
        )}
      </div>
    </div>
  );
}
