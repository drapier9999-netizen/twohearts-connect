/**
 * TwoHearts theme tokens.
 * Values are applied to CSS custom properties at runtime by ThemeProvider,
 * so changing them here re-skins the whole app.
 */

export type ThemeTokens = Record<string, string>;

export const lightTheme: ThemeTokens = {
  background: "oklch(0.975 0.012 74)", // warm cream
  foreground: "oklch(0.26 0.02 20)", // deep charcoal-plum
  card: "oklch(0.995 0.006 80)",
  "card-foreground": "oklch(0.26 0.02 20)",
  popover: "oklch(0.995 0.006 80)",
  "popover-foreground": "oklch(0.26 0.02 20)",
  primary: "oklch(0.4 0.135 18)", // burgundy red
  "primary-foreground": "oklch(0.985 0.008 80)",
  secondary: "oklch(0.93 0.028 40)", // warm beige
  "secondary-foreground": "oklch(0.34 0.06 20)",
  muted: "oklch(0.945 0.016 60)",
  "muted-foreground": "oklch(0.52 0.03 30)",
  accent: "oklch(0.9 0.045 15)", // soft blush
  "accent-foreground": "oklch(0.36 0.1 18)",
  destructive: "oklch(0.55 0.19 25)",
  "destructive-foreground": "oklch(0.985 0.008 80)",
  border: "oklch(0.9 0.02 45)",
  input: "oklch(0.9 0.02 45)",
  ring: "oklch(0.5 0.11 18)",
  rose: "oklch(0.66 0.11 12)", // muted rose
  "burgundy-deep": "oklch(0.3 0.11 18)",
  "burgundy-soft": "oklch(0.56 0.13 15)",
  radius: "1rem",
};

export const darkTheme: ThemeTokens = {
  background: "oklch(0.19 0.02 20)",
  foreground: "oklch(0.96 0.01 70)",
  card: "oklch(0.235 0.026 20)",
  "card-foreground": "oklch(0.96 0.01 70)",
  popover: "oklch(0.235 0.026 20)",
  "popover-foreground": "oklch(0.96 0.01 70)",
  primary: "oklch(0.62 0.14 16)",
  "primary-foreground": "oklch(0.15 0.02 20)",
  secondary: "oklch(0.3 0.03 25)",
  "secondary-foreground": "oklch(0.95 0.01 70)",
  muted: "oklch(0.29 0.025 25)",
  "muted-foreground": "oklch(0.74 0.02 50)",
  accent: "oklch(0.35 0.06 15)",
  "accent-foreground": "oklch(0.95 0.02 40)",
  destructive: "oklch(0.62 0.18 25)",
  "destructive-foreground": "oklch(0.98 0.005 80)",
  border: "oklch(1 0 0 / 12%)",
  input: "oklch(1 0 0 / 16%)",
  ring: "oklch(0.62 0.12 16)",
  rose: "oklch(0.7 0.1 12)",
  "burgundy-deep": "oklch(0.28 0.1 18)",
  "burgundy-soft": "oklch(0.6 0.13 15)",
  radius: "1rem",
};

export const fonts = {
  /** Headings / brand voice */
  display: '"Fraunces", "Iowan Old Style", Georgia, serif',
  /** Body & UI */
  body: '"Manrope", system-ui, -apple-system, sans-serif',
};

/** Base UI scale, adjustable from Appearance settings. */
export const fontScales = {
  small: 0.92,
  default: 1,
  large: 1.1,
  larger: 1.2,
} as const;

export type FontScale = keyof typeof fontScales;
