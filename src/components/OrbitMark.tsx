import type { CSSProperties } from "react";

// The oSystems hub-orbit — the brand's signature graphic. A center (consultoria)
// with four orbiting arms. Used full (center lit), arm-lit (one arm highlighted),
// or as a faint watermark behind dark surfaces.

const GOLD = "#C9A24B";

// Four arms on a circle (NW, NE, SW, SE), matching the home hub composition.
const R = 60;
const C = 100;
const NODES = [45, 135, 225, 315].map((deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: +(C + R * Math.cos(a)).toFixed(2), y: +(C - R * Math.sin(a)).toFixed(2) };
});

export function OrbitMark({
  size = 520,
  variant = "watermark",
  activeIndex,
  stroke = GOLD,
  style,
}: {
  size?: number;
  variant?: "watermark" | "full" | "arm";
  activeIndex?: number;
  stroke?: string;
  style?: CSSProperties;
}) {
  const watermark = variant === "watermark";
  const baseStroke = watermark ? `${stroke}` : stroke;
  const dim = "rgba(255,255,255,0.16)";
  const lineW = watermark ? 0.6 : 0.9;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block", overflow: "visible", ...style }}
    >
      {/* outer orbit ring */}
      <circle cx={C} cy={C} r={92} fill="none" stroke={watermark ? baseStroke : dim} strokeWidth={lineW} opacity={watermark ? 0.5 : 1} />
      {/* connectors */}
      {NODES.map((n, i) => {
        const lit = variant === "arm" && i === activeIndex;
        return (
          <line
            key={`l${i}`}
            x1={C}
            y1={C}
            x2={n.x}
            y2={n.y}
            stroke={lit ? stroke : watermark ? baseStroke : dim}
            strokeWidth={lit ? 1.2 : lineW}
            opacity={watermark ? 0.5 : lit ? 1 : 0.6}
          />
        );
      })}
      {/* arm nodes */}
      {NODES.map((n, i) => {
        const lit = variant === "arm" && i === activeIndex;
        return (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={lit ? 8 : 6.5}
            fill="none"
            stroke={lit ? stroke : watermark ? baseStroke : dim}
            strokeWidth={lit ? 1.4 : lineW}
            opacity={watermark ? 0.5 : lit ? 1 : 0.65}
          />
        );
      })}
      {/* center (consultoria) */}
      <circle
        cx={C}
        cy={C}
        r={16}
        fill="none"
        stroke={variant === "arm" ? dim : stroke}
        strokeWidth={variant === "full" ? 1.6 : lineW}
        opacity={watermark ? 0.55 : variant === "arm" ? 0.5 : 1}
      />
      {variant === "full" && <circle cx={C} cy={C} r={3} fill={stroke} />}
    </svg>
  );
}
