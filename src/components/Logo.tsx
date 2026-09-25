import { COLORS, FONT_BODY } from "@/lib/tokens";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? COLORS.ink : COLORS.onDark;
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <circle cx="16" cy="16" r="11" stroke={main} strokeWidth="2.6" />
        <circle cx="16" cy="5" r="3.1" fill={COLORS.gold} />
        <circle cx="16" cy="16" r="2.1" fill={main} />
      </svg>
      <span
        style={{
          fontFamily: FONT_BODY,
          fontWeight: 600,
          fontSize: 21,
          letterSpacing: "-0.02em",
          color: main,
        }}
      >
        oSystems
      </span>
    </span>
  );
}
