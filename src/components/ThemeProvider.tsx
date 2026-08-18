import { useEffect } from "react";

import { darkTheme, fontScales, lightTheme } from "@/customization/theme";
import { useStore } from "@/lib/storage/store";

function applyTokens(tokens: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([name, value]) => root.style.setProperty(`--${name}`, value));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [settings] = useStore("settings");

  useEffect(() => {
    const prefersDark =
      settings.theme === "dark" ||
      (settings.theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", prefersDark);
    applyTokens(prefersDark ? darkTheme : lightTheme);
    document.documentElement.style.setProperty(
      "--font-scale",
      String(fontScales[settings.fontScale] ?? 1),
    );
  }, [settings.theme, settings.fontScale]);

  return <>{children}</>;
}
