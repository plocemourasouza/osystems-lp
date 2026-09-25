import type { CSSProperties, ReactNode } from "react";

// Soft scroll-reveal marker. The layout script adds .rv-in when the block
// enters the viewport. A <noscript> rule keeps content visible without JS.
export function Reveal({
	children,
	style,
	className,
	delay = 0,
}: {
	children: ReactNode;
	style?: CSSProperties;
	className?: string;
	delay?: number;
}) {
	return (
		<div
			data-rv=""
			data-delay={delay || undefined}
			className={className}
			style={style}
		>
			{children}
		</div>
	);
}
