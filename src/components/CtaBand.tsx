import { Icon } from "@/components/Icon";
import {
	COLORS,
	DISPLAY_HI,
	FONT_BODY,
	FONT_DISPLAY,
	NOISE_BG,
	TYPE,
} from "@/lib/tokens";

const DEFAULTS = {
	kicker: "Próximo passo",
	title: "Vamos olhar a sua tecnologia com clareza?",
	text: "Comece por um diagnóstico. Uma conversa para mapear onde a tecnologia pode destravar resultado no seu negócio.",
	bullets: [
		"Conversa inicial para entender seu cenário",
		"Recomendação clara, priorizada por retorno",
		"Quem diagnostica é quem executa",
	],
};

const inputStyle = {
	fontFamily: "inherit",
	fontSize: 15,
	fontWeight: 400,
	color: COLORS.ink,
	padding: "11px 12px",
	border: "1px solid rgba(43,47,54,0.12)",
	borderRadius: 12,
	outline: "none",
	background: "#FFFFFF",
} as const;

const labelStyle = {
	display: "flex",
	flexDirection: "column" as const,
	gap: 6,
	fontSize: 13,
	fontWeight: 600,
	color: COLORS.ink,
};

export function CtaBand({
	kicker = DEFAULTS.kicker,
	title = DEFAULTS.title,
	text = DEFAULTS.text,
	bullets = DEFAULTS.bullets,
}: {
	kicker?: string;
	title?: string;
	text?: string;
	bullets?: string[];
}) {
	return (
		<section
			id="agendar"
			aria-labelledby="agendar-title"
			style={{
				position: "relative",
				background:
					"linear-gradient(160deg,#1F2226 0%,#1A1D21 45%,#141619 100%)",
				backgroundColor: "#141619",
				color: COLORS.onDark,
				fontFamily: FONT_BODY,
				overflow: "hidden",
				scrollMarginTop: 88,
			}}
		>
			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					inset: 0,
					backgroundImage: NOISE_BG,
					opacity: 0.06,
					mixBlendMode: "overlay",
					pointerEvents: "none",
				}}
			/>
			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					top: "-10%",
					right: "8%",
					width: 540,
					height: 540,
					background:
						"radial-gradient(circle, rgba(120,140,170,0.14), transparent 68%)",
					filter: "blur(20px)",
					pointerEvents: "none",
				}}
			/>
			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					bottom: "-20%",
					left: "-6%",
					width: 480,
					height: 480,
					background:
						"radial-gradient(circle, rgba(120,140,170,0.10), transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<div
				style={{
					position: "relative",
					maxWidth: 1080,
					margin: "0 auto",
					padding: "clamp(72px,10vw,128px) clamp(16px,4vw,40px)",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
					gap: "clamp(40px,5vw,80px)",
					alignItems: "center",
				}}
			>
				<div>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 9,
							padding: "7px 15px",
							background: "rgba(255,255,255,0.05)",
							backdropFilter: "blur(12px)",
							border: "1px solid rgba(255,255,255,0.12)",
							borderRadius: 100,
							fontSize: 13,
							fontWeight: 600,
							letterSpacing: "0.03em",
							color: COLORS.textOnDark,
							marginBottom: 24,
						}}
					>
						<span
							style={{
								width: 7,
								height: 7,
								borderRadius: "50%",
								background: COLORS.gold,
								boxShadow: "0 0 0 4px rgba(201,162,75,0.2)",
							}}
						/>
						<span>{kicker}</span>
					</div>
					<h2
						id="agendar-title"
						style={{
							fontFamily: FONT_DISPLAY,
							fontWeight: 400,
							fontSize: TYPE.h2,
							lineHeight: 1.14,
							letterSpacing: "-0.02em",
							margin: "0 0 20px",
							color: COLORS.onDark,
							textWrap: "balance",
							...DISPLAY_HI,
						}}
					>
						{title}
					</h2>
					<p
						style={{
							fontSize: "clamp(16px,1.8vw,18.5px)",
							lineHeight: 1.6,
							color: COLORS.textOnDark,
							margin: "0 0 30px",
							maxWidth: "46ch",
						}}
					>
						{text}
					</p>
					<ul
						style={{
							listStyle: "none",
							margin: 0,
							padding: 0,
							display: "flex",
							flexDirection: "column",
							gap: 14,
						}}
					>
						{bullets.map((b, i) => (
							<li
								key={i}
								style={{
									display: "flex",
									alignItems: "center",
									gap: 12,
									fontSize: 15.5,
									color: COLORS.softOnDark,
								}}
							>
								<Icon
									name="check"
									style={{
										width: 16,
										height: 16,
										color: COLORS.muted,
										flexShrink: 0,
									}}
								/>
								<span>{b}</span>
							</li>
						))}
					</ul>
				</div>

				<div style={{ position: "relative" }}>
					<div
						aria-hidden="true"
						style={{
							position: "absolute",
							inset: -30,
							background:
								"radial-gradient(circle at 50% 35%, rgba(201,162,75,0.16), transparent 68%)",
							filter: "blur(16px)",
							pointerEvents: "none",
						}}
					/>
					<div
						style={{
							position: "relative",
							background: "rgba(255,255,255,0.9)",
							backdropFilter: "blur(10px) saturate(130%)",
							WebkitBackdropFilter: "blur(10px) saturate(130%)",
							border: "1px solid rgba(255,255,255,0.6)",
							borderRadius: 24,
							padding: "clamp(26px,3vw,36px)",
							boxShadow:
								"0 40px 90px -40px rgba(0,0,0,0.6),0 2px 10px -4px rgba(0,0,0,0.2)",
							color: COLORS.ink,
						}}
					>
						<div
							data-cta-thanks
							hidden
							style={{ textAlign: "center", padding: "20px 8px" }}
						>
							<div
								style={{
									width: 56,
									height: 56,
									borderRadius: "50%",
									background: "rgba(43,47,54,0.06)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "0 auto 18px",
								}}
							>
								<Icon
									name="check"
									style={{ width: 28, height: 28, color: COLORS.inkSoft }}
								/>
							</div>
							<h3
								style={{
									fontFamily: FONT_DISPLAY,
									fontSize: 21,
									fontWeight: 400,
									margin: "0 0 10px",
									color: COLORS.ink,
								}}
							>
								Recebemos seu contato
							</h3>
							<p
								style={{
									fontSize: 15,
									lineHeight: 1.6,
									color: COLORS.inkSoft,
									margin: 0,
								}}
							>
								Entraremos em contato para marcar seu diagnóstico.
							</p>
						</div>
						<form
							data-cta-form
							noValidate
							style={{ display: "flex", flexDirection: "column", gap: 14 }}
						>
							<div>
								<h3
									style={{
										fontFamily: FONT_DISPLAY,
										fontSize: 20,
										fontWeight: 400,
										margin: "0 0 4px",
										color: COLORS.ink,
									}}
								>
									Agendar diagnóstico
								</h3>
								<p style={{ fontSize: 13.5, color: COLORS.inkSoft, margin: 0 }}>
									Conte seu cenário. Respondemos rápido.
								</p>
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
									gap: 12,
								}}
							>
								<label style={labelStyle}>
									Nome
									<input
										required
										type="text"
										autoComplete="name"
										className="field"
										style={inputStyle}
									/>
								</label>
								<label style={labelStyle}>
									Empresa
									<input
										required
										type="text"
										autoComplete="organization"
										className="field"
										style={inputStyle}
									/>
								</label>
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
									gap: 12,
								}}
							>
								<label style={labelStyle}>
									E-mail
									<input
										required
										type="email"
										autoComplete="email"
										className="field"
										style={inputStyle}
									/>
								</label>
								<label style={labelStyle}>
									Telefone / WhatsApp
									<input
										type="tel"
										autoComplete="tel"
										className="field"
										style={inputStyle}
									/>
								</label>
							</div>
							<label style={labelStyle}>
								O que você precisa resolver?
								<textarea
									rows={4}
									className="field"
									style={{ ...inputStyle, resize: "vertical" }}
								/>
							</label>
							<button
								type="submit"
								className="btn-gold"
								style={{
									marginTop: 4,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 8,
									background: COLORS.darkPanel,
									color: COLORS.onDark,
									border: "1px solid rgba(201,162,75,0.55)",
									fontFamily: "inherit",
									fontSize: 16,
									fontWeight: 600,
									padding: "14px 20px",
									borderRadius: 14,
									cursor: "pointer",
									boxShadow: "0 16px 36px -16px rgba(0,0,0,0.5)",
								}}
							>
								<span>Agendar diagnóstico</span>
								<Icon name="arrow-right" style={{ width: 18, height: 18 }} />
							</button>
							<p
								style={{
									fontSize: 12,
									color: COLORS.muted,
									textAlign: "center",
									margin: 0,
								}}
							>
								Conversa inicial, sem compromisso.
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
