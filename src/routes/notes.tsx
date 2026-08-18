import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { content } from "@/customization/content";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Card, EmptyState, Field, ScreenHeader, inputClass } from "@/components/ui/primitives";
import { notes as notesApi } from "@/lib/storage/collections";
import { useStore } from "@/lib/storage/store";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — TwoHearts" },
      { name: "description", content: "Little messages and lists, kept private on your device." },
      { property: "og:title", content: "Notes — TwoHearts" },
      { property: "og:description", content: "Little messages and lists, kept private." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Notes,
});

function Notes() {
  const [notes] = useStore("notes");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const save = () => {
    if (!title.trim() && !body.trim()) return;
    notesApi.add({ title: title.trim() || "Untitled", body: body.trim() });
    setTitle("");
    setBody("");
    setOpen(false);
  };

  return (
    <AppShell>
      <ScreenHeader
        title={content.notes.title}
        action={
          <Button size="sm" onClick={() => setOpen((v) => !v)}>
            {open ? content.common.cancel : content.notes.addCta}
          </Button>
        }
      />
      {open ? (
        <Card className="mb-6 space-y-4">
          <Field label="Title">
            <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Note">
            <textarea
              className={`${inputClass} min-h-32`}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Field>
          <Button className="w-full" onClick={save}>
            {content.common.save}
          </Button>
        </Card>
      ) : null}

      {notes.length === 0 ? (
        <EmptyState emoji="✍️" title="No notes yet" body={content.notes.empty} />
      ) : (
        <ul className="space-y-3">
          {notes.map((n) => (
            <Card key={n.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg">{n.title}</p>
                  <p className="mt-1 text-sm whitespace-pre-wrap text-muted-foreground">{n.body}</p>
                </div>
                <button className="text-xs text-muted-foreground" onClick={() => notesApi.remove(n.id)}>
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
