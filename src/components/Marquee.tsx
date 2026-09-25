import { COLORS, FONT_DISPLAY, NOISE_BG } from "@/lib/tokens";

const DEFAULT_PHRASES = [
  "Diagnóstico → execução",
  "Parceiro, não fornecedor",
  "Nuvem · Operação · Equipamentos · Software",
  "Investimento que se paga",
  "Do papel ao ar",
];

function Track({ phrases, ariaHidden }: { phrases: string[]; ariaHidden?: boolean }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {phrases.map((p, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontStyle: "italic",
              fontSize: "clamp(17px,2.1vw,25px)",
              color: COLORS.textOnDark,
              padding: "20px 34px",
            }}
          >
            {p}
          </span>
          <span
            aria-hidden="true"
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: COLORS.gold,
              flexShrink: 0,
            }}
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee({ phrases = DEFAULT_PHRASES }: { phrases?: string[] }) {
  return (
    <section
      style={{
        background: COLORS.darker,
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        position: "relative",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_BG,
          opacity: 0.05,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      <div
        className="marquee-track marquee-mask"
        style={{
          display: "flex",
          width: "max-content",
          whiteSpace: "nowrap",
          animation: "marquee 44s linear infinite",
          willChange: "transform",
          position: "relative",
        }}
      >
        <Track phrases={phrases} />
        <Track phrases={phrases} ariaHidden />
      </div>
    </section>
  );
}
