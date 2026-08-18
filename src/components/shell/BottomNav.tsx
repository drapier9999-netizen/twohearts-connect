import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Home, Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/us", label: "Us", icon: Heart },
  { to: "/games", label: "Play", icon: Sparkles },
  { to: "/more", label: "More", icon: Menu },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md border-t border-border/70 bg-card/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur">
      <ul className="flex items-stretch justify-around px-2 pt-2">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || pathname.startsWith(`${to}/`);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.7rem] font-medium transition-colors active:scale-[0.97]",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-12 items-center justify-center rounded-full transition-colors",
                    active && "bg-accent",
                  )}
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={active ? 2.4 : 1.8} />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
