// Design tokens — "Premium Graphite" identity.
// Gold is reserved for delicate accents only: lines, connectors, dots, identifiers.
// NEVER as a button/area fill.

export const COLORS = {
  bg: "#F4F5F7", // off-white acinzentado
  surface: "#FFFFFF",
  ink: "#2B2F36", // títulos / texto principal
  inkSoft: "#6B7280", // secundário (AA em fundo claro)
  muted: "#9AA1AC",
  dark: "#1A1D21", // grafite frio
  darker: "#141619",
  darkPanel: "#1F2226",
  gold: "#C9A24B", // dourado vivo (valor/luxo) — só detalhes
  goldSoft: "rgba(201,162,75,0.5)",
  onDark: "#F4F5F7",
  textOnDark: "#B7BCC4",
  mutedOnDark: "#868D97",
  softOnDark: "#D7DAE0",
} as const;

// Metallic gold for delicate lines/connectors/dividers.
export const GOLD_LINE = "linear-gradient(135deg,#E4C26B 0%,#C9A24B 50%,#B0832E 100%)";

export const FONT_DISPLAY = "var(--font-marcellus), Georgia, serif";
export const FONT_BODY = "var(--font-inter), system-ui, sans-serif";

// Marcellus has a single weight; presets carry only feature settings.
export const DISPLAY_HI = {
  fontFeatureSettings: '"liga", "kern"',
} as const;
export const DISPLAY_SM = {
  fontFeatureSettings: '"liga", "kern"',
} as const;

// Centralized type scale (fluid).
export const TYPE = {
  display: "clamp(40px,5.6vw,66px)",
  h2: "clamp(28px,4vw,46px)",
  statement: "clamp(22px,3.2vw,34px)",
  lead: "clamp(17px,1.9vw,20px)",
  body: "16px",
  small: "14px",
} as const;

export const MEASURE = {
  body: "62ch",
  lead: "58ch",
} as const;

// Subtle film grain used on dark surfaces.
export const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
