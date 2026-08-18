# TwoHearts — Owner Customization

Everything the owner is expected to change lives in this folder. No other part of
the app should hardcode brand text, colors, images, game content, or defaults.

| File | What you change here |
| --- | --- |
| `branding.ts` | App name, tagline, logo/photo paths, couple placeholder images |
| `theme.ts` | Color palette, radius, font families (mapped to CSS variables) |
| `content.ts` | All user-facing copy: screen titles, empty states, buttons, prompts |
| `notifications.ts` | Notification titles/bodies and default schedule times |
| `defaults.ts` | Reminder defaults, Period Tracker defaults, feature toggles |
| `games/*.ts` | Questions, answers, choices and word lists for every mini-game |

Rules:
1. Never scatter customizable content into components — import from `@/customization`.
2. Keep types intact; only edit values.
3. Images: drop files into `src/assets/` and reference them from `branding.ts`.
