import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { COLORS, FONT_BODY, FONT_DISPLAY, NOISE_BG } from "@/lib/tokens";

const NAV = [
	{ label: "Início", href: "/" },
	{ label: "Consultoria", href: "/consultoria" },
	{ label: "Equipamentos", href: "/equipamentos" },
	{ label: "Desenvolvimento", href: "/desenvolvimento" },
];

// TODO(owner): preencher canais reais (e-mail, telefone/WhatsApp, cidade/UF, redes)
// e então restaurar a lista de contato com ícones.

const colHeading = {
	fontFamily: FONT_BODY,
	fontSize: 12,
	fontWeight: 600,
	letterSpacing: "0.14em",
	textTransform: "uppercase" as const,
	color: COLORS.inkSoft,
	margin: "0 0 16px",
};

export function Footer() {
	return (
		<footer
			role="contentinfo"
			style={{
				position: "relative",
				background: COLORS.dark,
				color: COLORS.textOnDark,
				fontFamily: FONT_BODY,
				overflow: "hidden",
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
				aria-hidden="true"
				style={{
					position: "absolute",
					top: -160,
					left: "50%",
					transform: "translateX(-50%)",
					width: 680,
					height: 340,
					background:
						"radial-gradient(ellipse at center, rgba(120,140,170,0.10), transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<div
				style={{
					position: "relative",
					maxWidth: 1200,
					margin: "0 auto",
					padding: "clamp(56px,8vw,96px) clamp(16px,4vw,40px) 0",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
					gap: "clamp(32px,5vw,64px)",
				}}
			>
				<div style={{ maxWidth: 340 }}>
					<div style={{ marginBottom: 18 }}>
						<Logo tone="light" />
					</div>
					<p
						style={{
							fontFamily: FONT_DISPLAY,
							fontSize: 18,
							fontWeight: 400,
							lineHeight: 1.4,
							color: COLORS.onDark,
							margin: "0 0 16px",
						}}
					>
						Tecnologia que vira resultado.
					</p>
					<p
						style={{
							fontSize: 14.5,
							lineHeight: 1.6,
							color: COLORS.mutedOnDark,
							margin: 0,
						}}
					>
						Consultoria executiva de tecnologia para micro, pequenas e médias
						empresas — do diagnóstico à execução.
					</p>
				</div>

				<div>
					<h3 style={colHeading}>Navegação</h3>
					<ul
						style={{
							listStyle: "none",
							margin: 0,
							padding: 0,
							display: "flex",
							flexDirection: "column",
							gap: 11,
						}}
					>
						{NAV.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									className="footer-link"
									style={{
										textDecoration: "none",
										color: COLORS.textOnDark,
										fontSize: 15,
									}}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 style={colHeading}>Contato</h3>
					<p
						style={{
							fontSize: 14.5,
							lineHeight: 1.6,
							color: COLORS.mutedOnDark,
							margin: 0,
						}}
					>
						Fale conosco pela agenda de diagnóstico — respondemos rápido.
					</p>
				</div>

				<div>
					<h3 style={colHeading}>Comece por aqui</h3>
					<p
						style={{
							fontSize: 14.5,
							lineHeight: 1.6,
							color: COLORS.mutedOnDark,
							margin: "0 0 18px",
						}}
					>
						Uma conversa inicial para entender seu cenário.
					</p>
					<a
						href="/#agendar"
						className="btn-gold"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							background: COLORS.darkPanel,
							color: COLORS.onDark,
							border: "1px solid rgba(201,162,75,0.55)",
							textDecoration: "none",
							fontSize: 15,
							fontWeight: 600,
							padding: "12px 20px",
							borderRadius: 12,
							boxShadow: "0 12px 28px -14px rgba(0,0,0,0.45)",
						}}
					>
						<span>Agendar diagnóstico</span>
						<Icon name="arrow-right" style={{ width: 17, height: 17 }} />
					</a>
				</div>
			</div>

			<div
				style={{
					position: "relative",
					maxWidth: 1200,
					margin: "clamp(40px,6vw,64px) auto 0",
					padding: "24px clamp(16px,4vw,40px)",
					borderTop: "1px solid rgba(255,255,255,0.08)",
					display: "flex",
					flexWrap: "wrap",
					gap: "12px 24px",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				{/* TODO(owner): adicionar CNPJ/razão social quando disponível */}
				<p style={{ fontSize: 13.5, color: COLORS.inkSoft, margin: 0 }}>
					© oSystems
				</p>
				<p style={{ fontSize: 13.5, color: COLORS.inkSoft, margin: 0 }}>
					Consultoria executiva de tecnologia.
				</p>
			</div>
		</footer>
	);
}
