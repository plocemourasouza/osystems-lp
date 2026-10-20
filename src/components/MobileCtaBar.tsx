import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { COLORS } from "@/lib/tokens";

// Persistent "Agendar diagnóstico" bar on mobile while scrolling.
// Hides on desktop and when the #agendar form is already in view.
export function MobileCtaBar() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(max-width: 899px)");
		let atForm = false;
		const update = () => setShow(mq.matches && !atForm);
		update();
		mq.addEventListener("change", update);

		let io: IntersectionObserver | undefined;
		const el = document.getElementById("agendar");
		if (el) {
			io = new IntersectionObserver(
				(entries) => {
					atForm = entries.some((e) => e.isIntersecting);
					update();
				},
				{ threshold: 0.01 },
			);
			io.observe(el);
		}

		return () => {
			mq.removeEventListener("change", update);
			io?.disconnect();
		};
	}, []);

	if (!show) return null;

	return (
		<div
			style={{
				position: "fixed",
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 60,
				padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
				background: "rgba(20,22,25,0.82)",
				backdropFilter: "blur(14px)",
				WebkitBackdropFilter: "blur(14px)",
				borderTop: "1px solid rgba(255,255,255,0.1)",
			}}
		>
			<a
				href="/#agendar"
				className="btn-gold"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 8,
					background: COLORS.darkPanel,
					color: COLORS.onDark,
					border: "1px solid rgba(201,162,75,0.55)",
					textDecoration: "none",
					fontSize: 16,
					fontWeight: 600,
					padding: "14px 20px",
					borderRadius: 12,
				}}
			>
				<span>Agendar diagnóstico</span>
				<Icon name="arrow-right" style={{ width: 18, height: 18 }} />
			</a>
		</div>
	);
}
