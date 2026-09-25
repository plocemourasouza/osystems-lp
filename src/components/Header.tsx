import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { COLORS, FONT_BODY } from "@/lib/tokens";

const NAV = [
	{ key: "inicio", label: "Início", href: "/" },
	{ key: "consultoria", label: "Consultoria", href: "/consultoria" },
	{ key: "equipamentos", label: "Equipamentos", href: "/equipamentos" },
	{
		key: "desenvolvimento",
		label: "Desenvolvimento",
		href: "/desenvolvimento",
	},
	{ key: "contato", label: "Contato", href: "/#agendar" },
];

function activeKey(pathname: string): string {
	if (pathname.startsWith("/consultoria")) return "consultoria";
	if (pathname.startsWith("/equipamentos")) return "equipamentos";
	if (pathname.startsWith("/desenvolvimento")) return "desenvolvimento";
	return "inicio";
}

// Decide if a computed background color reads as dark.
function isDarkBg(bg: string): boolean {
	const m = bg.match(/rgba?\(([^)]+)\)/);
	if (!m) return true;
	const parts = m[1].split(",").map((v) => parseFloat(v));
	const [r, g, b] = parts;
	const a = parts[3] ?? 1;
	if (a === 0) return true; // transparent → assume over dark
	const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return lum < 0.5;
}

export function Header({ pathname = "/" }: { pathname?: string }) {
	const active = activeKey(pathname);
	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [tone, setTone] = useState<"dark" | "light">("dark");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onResize = () => {
			const m = window.innerWidth < 900;
			setIsMobile(m);
			if (!m) setMenuOpen(false);
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	// Scroll-spy: read the tone of the section currently under the navbar.
	useEffect(() => {
		let raf = 0;
		const sample = () => {
			raf = 0;
			setScrolled(window.scrollY > 8);
			const el = document.elementFromPoint(
				Math.floor(window.innerWidth / 2),
				74,
			) as HTMLElement | null;
			const sec = el?.closest("section, footer");
			if (sec)
				setTone(
					isDarkBg(getComputedStyle(sec).backgroundColor) ? "dark" : "light",
				);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(sample);
		};
		sample();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);

	const dark = tone === "dark";
	const textColor = dark ? COLORS.onDark : COLORS.ink;
	const headerBg = dark
		? "linear-gradient(180deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0) 100%)"
		: scrolled
			? "rgba(244,245,247,0.85)"
			: "transparent";

	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				background: headerBg,
				backdropFilter: dark
					? "none"
					: scrolled
						? "saturate(140%) blur(10px)"
						: "none",
				WebkitBackdropFilter: dark
					? "none"
					: scrolled
						? "saturate(140%) blur(10px)"
						: "none",
				borderBottom: dark
					? "1px solid rgba(255,255,255,0)"
					: scrolled
						? "1px solid rgba(43,47,54,0.08)"
						: "1px solid rgba(43,47,54,0)",
				fontFamily: FONT_BODY,
				transition:
					"background .35s ease, border-color .35s ease, backdrop-filter .35s ease",
			}}
		>
			<div
				style={{
					maxWidth: 1200,
					margin: "0 auto",
					padding: "0 clamp(16px,4vw,40px)",
					height: 72,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 24,
				}}
			>
				<a
					href="/"
					aria-label="oSystems — início"
					style={{ textDecoration: "none", flexShrink: 0 }}
				>
					<Logo tone={dark ? "light" : "dark"} />
				</a>

				{!isMobile && (
					<>
						<nav
							aria-label="Navegação principal"
							style={{ display: "flex", alignItems: "center", gap: 4 }}
						>
							{NAV.map((item) => (
								<a
									key={item.key}
									href={item.href}
									className={dark ? "navlink navlink-dark" : "navlink"}
									style={{
										position: "relative",
										textDecoration: "none",
										color: textColor,
										fontSize: 15,
										fontWeight: 500,
										padding: "9px 14px",
										borderRadius: 10,
										whiteSpace: "nowrap",
										transition: "color .35s ease",
									}}
								>
									<span>{item.label}</span>
									{item.key === active && (
										<span
											aria-hidden="true"
											style={{
												position: "absolute",
												left: 14,
												right: 14,
												bottom: 2,
												height: 2,
												borderRadius: 2,
												background: COLORS.gold,
											}}
										/>
									)}
								</a>
							))}
						</nav>
						<a
							href="/#agendar"
							className="btn-primary"
							style={{
								flexShrink: 0,
								whiteSpace: "nowrap",
								display: "inline-flex",
								alignItems: "center",
								gap: 8,
								background: COLORS.darkPanel,
								color: COLORS.onDark,
								border: "1px solid rgba(201,162,75,0.55)",
								textDecoration: "none",
								fontSize: 15,
								fontWeight: 600,
								padding: "10px 19px",
								borderRadius: 12,
								boxShadow: "0 10px 24px -14px rgba(0,0,0,0.5)",
							}}
						>
							<span>Agendar diagnóstico</span>
							<Icon
								name="arrow-right"
								style={{ width: 17, height: 17, color: COLORS.gold }}
							/>
						</a>
					</>
				)}

				{isMobile && (
					<button
						type="button"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
						aria-expanded={menuOpen}
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							width: 44,
							height: 44,
							border: dark
								? "1px solid rgba(255,255,255,0.2)"
								: "1px solid rgba(43,47,54,0.12)",
							background: dark
								? "rgba(255,255,255,0.06)"
								: "rgba(255,255,255,0.6)",
							backdropFilter: "blur(12px)",
							borderRadius: 12,
							color: textColor,
							cursor: "pointer",
						}}
					>
						<Icon
							name={menuOpen ? "x" : "menu"}
							style={{ width: 22, height: 22 }}
						/>
					</button>
				)}
			</div>

			{isMobile && menuOpen && (
				<nav
					aria-label="Navegação principal"
					style={{
						borderTop: "1px solid rgba(43,47,54,0.07)",
						background: "rgba(244,245,247,0.95)",
						backdropFilter: "blur(16px)",
						WebkitBackdropFilter: "blur(16px)",
						padding: "8px clamp(16px,4vw,40px) 20px",
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
					{NAV.map((item) => (
						<a
							key={item.key}
							href={item.href}
							onClick={() => setMenuOpen(false)}
							style={{
								textDecoration: "none",
								color: COLORS.ink,
								fontSize: 17,
								fontWeight: 500,
								padding: "13px 8px",
								borderRadius: 10,
								borderBottom: "1px solid rgba(43,47,54,0.06)",
							}}
						>
							{item.label}
						</a>
					))}
					<a
						href="/#agendar"
						onClick={() => setMenuOpen(false)}
						style={{
							marginTop: 12,
							display: "inline-flex",
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
						<Icon
							name="arrow-right"
							style={{ width: 18, height: 18, color: COLORS.gold }}
						/>
					</a>
				</nav>
			)}
		</header>
	);
}
