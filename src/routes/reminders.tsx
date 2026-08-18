import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { content } from "@/customization/content";
import { reminderDefaults } from "@/customization/defaults";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Card, EmptyState, Field, ScreenHeader, inputClass } from "@/components/ui/primitives";
import { reminders as remindersApi } from "@/lib/storage/collections";
import { useStore } from "@/lib/storage/store";
import { formatDate } from "@/lib/date";

export const Route = createFileRoute("/reminders")({
  head: () => ({
    meta: [
      { title: "Reminders — TwoHearts" },
      { name: "description", content: "Dates, anniversaries and check-ins so nothing slips by." },
      { property: "og:title", content: "Reminders — TwoHearts" },
      { property: "og:description", content: "Dates and anniversaries so nothing slips by." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reminders,
});

function Reminders() {
  const [reminders] = useStore("reminders");
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(reminderDefaults.defaultTime);
  const [category, setCategory] = useState(reminderDefaults.categories[0]!.id);

  const save = () => {
    if (!label.trim()) return;
    remindersApi.add({
      label: label.trim(),
      date,
      time,
      category,
      repeat: reminderDefaults.defaultRepeat,
      notify: true,
    });
    setLabel("");
    setOpen(false);
  };

  return (
    <AppShell>
      <ScreenHeader
        title={content.reminders.title}
        action={
          <Button size="sm" onClick={() => setOpen((v) => !v)}>
            {open ? content.common.cancel : content.reminders.addCta}
          </Button>
        }
      />
      {open ? (
        <Card className="mb-6 space-y-4">
          <Field label="What is it?">
            <input className={inputClass} value={label} onChange={(e) => setLabel(e.target.value)} />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Date">
              <input type="date" className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
            </Field>
            <Field label="Time">
              <input type="time" className={inputClass} value={time} onChange={(e) => setTime(e.target.value)} />
            </Field>
          </div>
          <Field label="Category">
            <select className={inputClass} value={category} onChange={(e) => setCategory(e.target.value)}>
              {reminderDefaults.categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
          <Button className="w-full" onClick={save}>
            {content.common.save}
          </Button>
        </Card>
      ) : null}

      {reminders.length === 0 ? (
        <EmptyState emoji="⏰" title="No reminders yet" body={content.reminders.empty} />
      ) : (
        <ul className="space-y-3">
          {reminders.map((r) => (
            <Card key={r.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium">{r.label}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(r.date)} · {r.time}
                </p>
              </div>
              <button className="text-xs text-muted-foreground" onClick={() => remindersApi.remove(r.id)}>
                {content.common.delete}
              </button>
            </Card>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
