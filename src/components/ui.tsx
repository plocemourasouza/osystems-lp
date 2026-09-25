import type { CSSProperties, ReactNode } from "react";
import { Icon } from "@/components/Icon";
import {
	COLORS,
	DISPLAY_HI,
	FONT_DISPLAY,
	GOLD_LINE,
	TYPE,
} from "@/lib/tokens";

// Section eyebrow: thin rule + uppercase tracked label.
export function Eyebrow({
	children,
	tone = "light",
	style,
}: {
	children: ReactNode;
	tone?: "light" | "dark";
	style?: CSSProperties;
}) {
	const textColor = tone === "dark" ? COLORS.muted : COLORS.inkSoft;
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 11,
				marginBottom: 18,
				...style,
			}}
		>
			<span
				style={{
					width: 28,
					height: 2,
					borderRadius: 2,
					background: GOLD_LINE,
					flexShrink: 0,
				}}
			/>
			<span
				style={{
					fontSize: 13,
					fontWeight: 500,
					letterSpacing: "0.18em",
					textTransform: "uppercase",
					color: textColor,
				}}
			>
				{children}
			</span>
		</div>
	);
}

// Display section heading (Fraunces).
export function Heading({
	children,
	tone = "light",
	style,
	id,
}: {
	children: ReactNode;
	tone?: "light" | "dark";
	style?: CSSProperties;
	id?: string;
}) {
	return (
		<h2
			id={id}
			style={{
				fontFamily: FONT_DISPLAY,
				fontWeight: 400,
				fontSize: TYPE.h2,
				lineHeight: 1.14,
				letterSpacing: "-0.02em",
				color: tone === "dark" ? COLORS.onDark : COLORS.ink,
				margin: 0,
				textWrap: "balance",
				...DISPLAY_HI,
				...style,
			}}
		>
			{children}
		</h2>
	);
}

// Primary gold CTA as a link.
export function GoldLink({
	href = "/#agendar",
	children = "Agendar diagnóstico",
	style,
}: {
	href?: string;
	children?: ReactNode;
	style?: CSSProperties;
}) {
	return (
		<a
			href={href}
			className="btn-gold"
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 9,
				background: COLORS.darkPanel,
				color: COLORS.onDark,
				border: "1px solid rgba(201,162,75,0.55)",
				textDecoration: "none",
				fontSize: 16.5,
				fontWeight: 600,
				padding: "16px 28px",
				borderRadius: 14,
				boxShadow: "0 18px 40px -14px rgba(0,0,0,0.45)",
				...style,
			}}
		>
			<span>{children}</span>
			<Icon
				name="arrow-right"
				style={{ width: 19, height: 19, color: COLORS.gold }}
			/>
		</a>
	);
}
