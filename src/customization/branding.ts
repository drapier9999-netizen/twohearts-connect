/** Brand identity. Swap logos/photos by dropping files in src/assets and editing paths. */
export const branding = {
  appName: "TwoHearts",
  tagline: "Your story, kept close.",
  /** Shown on the splash / welcome screen. */
  splashSubtitle: "A private space for the two of you.",
  /** Optional image paths (relative to /public or imported assets). Leave null for the built-in mark. */
  logoUrl: null as string | null,
  splashImageUrl: null as string | null,
  couplePlaceholderUrl: null as string | null,
  version: "1.0.0",
  aboutText:
    "TwoHearts is an offline-first keepsake app. Everything you add stays on this device.",
} as const;
