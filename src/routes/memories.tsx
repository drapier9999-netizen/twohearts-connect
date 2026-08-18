import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { content } from "@/customization/content";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Card, EmptyState, Field, ScreenHeader, inputClass } from "@/components/ui/primitives";
import { memories as memoriesApi } from "@/lib/storage/collections";
import { useStore } from "@/lib/storage/store";
import { formatDate } from "@/lib/date";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories — TwoHearts" },
      { name: "description", content: "Save the moments worth keeping, privately on your device." },
      { property: "og:title", content: "Memories — TwoHearts" },
      { property: "og:description", content: "Save the moments worth keeping." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Memories,
});

function Memories() {
  const [memories] = useStore("memories");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState("");

  const save = () => {
    if (!title.trim()) return;
    memoriesApi.add({ title: title.trim(), date, description: description.trim() });
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <AppShell>
      <ScreenHeader
        title={content.memories.title}
        action={
          <Button size="sm" onClick={() => setOpen((v) => !v)}>
            {open ? content.common.cancel : content.memories.addCta}
          </Button>
        }
      />

      {open ? (
        <Card className="mb-6 space-y-4">
          <Field label="Title">
            <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Date">
            <input type="date" className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>
          <Field label="Description">
            <textarea
              className={`${inputClass} min-h-24`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Field>
          <Button className="w-full" onClick={save}>
            {content.common.save}
          </Button>
        </Card>
      ) : null}

      {memories.length === 0 ? (
        <EmptyState emoji="📷" title="No memories yet" body={content.memories.empty} />
      ) : (
        <ul className="space-y-3">
          {memories.map((m) => (
            <Card key={m.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(m.date)}</p>
                  {m.description ? <p className="mt-2 text-sm">{m.description}</p> : null}
                </div>
                <button
                  className="text-xs text-muted-foreground"
                  onClick={() => memoriesApi.remove(m.id)}
                >
                  {content.common.delete}
                </button>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
