import type { ReactNode } from "react";

import { BottomNav } from "./BottomNav";
import { cn } from "@/lib/utils";

export function AppShell({
  children,
  className,
  hideNav,
}: {
  children: ReactNode;
  className?: string;
  hideNav?: boolean;
}) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col bg-background">
      <main
        className={cn(
          "flex-1 overflow-x-hidden px-5 pt-[max(1rem,env(safe-area-inset-top))]",
          hideNav ? "pb-[max(1.5rem,env(safe-area-inset-bottom))]" : "pb-32",
          className,
        )}
      >
        {children}
      </main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}
