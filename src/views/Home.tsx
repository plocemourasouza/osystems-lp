import { Photo } from "@/components/Photo";
import { COLORS, FONT_BODY, FONT_DISPLAY, NOISE_BG, TYPE, DISPLAY_HI, DISPLAY_SM } from "@/lib/tokens";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, Heading, GoldLink } from "@/components/ui";
import { OrbitMark } from "@/components/OrbitMark";

const heroTrust = [
  "Diagnóstico → execução",
  "Parceiro, não fornecedor",
  "Retorno antes de custo",
];

const dores: { icon: IconName; title: string; text: string }[] = [
  { icon: "eye-off", title: "Decisão no escuro", text: "Investir sem saber se é o que o negócio realmente precisa." },
  { icon: "cloud-off", title: "Migração sem retorno", text: "Migrar para a nuvem sem organização e sem economia real." },
  { icon: "shuffle", title: "Operação desorganizada", text: "Processos manuais e sistemas que não conversam." },
  { icon: "circle-pause", title: "Projeto parado", text: "Uma boa ideia que nunca sai do papel por custo ou complexidade." },
];

const hubNodes: { label: string; note: string; icon: IconName; x: string; y: string }[] = [
  { label: "Nuvem", note: "migração e economia", icon: "cloud", x: "19%", y: "19%" },
  { label: "Operação", note: "processos que conversam", icon: "workflow", x: "81%", y: "19%" },
  { label: "Equipamentos", note: "sob encomenda", icon: "package", x: "19%", y: "81%" },
  { label: "Desenvolvimento", note: "software sob medida", icon: "code", x: "81%", y: "81%" },
];

const frentes: { title: string; text: string; cta: string; href: string; icon: IconName; tag: string; img: string; alt: string }[] = [
  { title: "Consultoria executiva", text: "O ponto de partida. Diagnóstico do seu cenário, plano de aplicação de tecnologia, migração para a nuvem e organização da operação.", cta: "Conhecer a consultoria", href: "/consultoria", icon: "compass", tag: "Porta de entrada", img: "/uploads/08-consultoria-v2.webp", alt: "Consultor da oSystems em reunião executiva, analisando o cenário de tecnologia do cliente" },
  { title: "Equipamentos sob encomenda", text: "Quando o diagnóstico aponta a necessidade, especificamos e fornecemos o equipamento certo — de escritório ou área de serviço — sob demanda.", cta: "Ver equipamentos", href: "/equipamentos", icon: "package", tag: "Sob encomenda", img: "/uploads/09-equipamentos-v3.webp", alt: "Equipamentos especificados sob encomenda — storage, notebook e acessórios prontos para entrega, ao lado do pedido" },
  { title: "Desenvolvimento sob medida", text: "Automação com IA, pequenos sistemas e projetos tirados do papel com baixo custo. Especialidade em levar startups ao Go Live rápido.", cta: "Ver desenvolvimento", href: "/desenvolvimento", icon: "code", tag: "Sob medida", img: "/uploads/10-desenvolvimento-v3.webp", alt: "Dashboard de um sistema sob medida desenvolvido pela oSystems, em tema escuro com gráficos e indicadores" },
];

const diferenciais: { icon: IconName; title: string; text: string }[] = [
  { icon: "check-check", title: "Executamos o que recomendamos.", text: "O diagnóstico não termina em relatório — termina em resultado." },
  { icon: "trending-up", title: "Foco no investimento que se paga.", text: "Cada recomendação mira retorno, não custo." },
  { icon: "ruler", title: "Sob medida — de verdade.", text: "Equipamento e software dimensionados para a sua operação, não para a média do mercado." },
  { icon: "rocket", title: "Do papel ao ar, rápido.", text: "Método próprio para colocar ideias em produção com baixo custo." },
];

const provas: { tag: string; icon: IconName; text: string }[] = [
  { tag: "Indústria leve (PME)", icon: "factory", text: "Reorganização da operação e migração para a nuvem reduziram o tempo de fechamento mensal de dias para horas." },
  { tag: "Comércio de serviços", icon: "store", text: "Automação de uma rotina repetitiva com apoio de IA na leitura de documentos eliminou trabalho manual diário da equipe." },
  { tag: "Startup", icon: "rocket", text: "Uma ideia saiu do papel e chegou ao ar em poucas semanas, com baixo custo, pronta para validar com usuários reais." },
];

const metodo: { n: string; icon: IconName; title: string; text: string }[] = [
  { n: "1", icon: "search", title: "Diagnóstico", text: "Entendemos seu cenário, operação e objetivos." },
  { n: "2", icon: "clipboard-list", title: "Recomendação", text: "Um plano claro, priorizado por impacto e retorno." },
  { n: "3", icon: "wrench", title: "Execução", text: "Implementamos: nuvem, operação, equipamentos ou software." },
  { n: "4", icon: "line-chart", title: "Acompanhamento", text: "Ficamos perto para garantir que o investimento valeu." },
];

const noiseLayer = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: NOISE_BG,
  opacity: 0.05,
  mixBlendMode: "overlay" as const,
  pointerEvents: "none" as const,
};

export default function Home() {
  return (
    <main style={{ fontFamily: FONT_BODY, color: COLORS.ink, background: COLORS.bg }}>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.darker, color: COLORS.onDark }}>
        <Photo
          src="/uploads/06-hero-pref.webp"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          aria-hidden="true"
          className="hero-kenburns"
          style={{ objectFit: "cover", objectPosition: "72% center" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(16,18,21,0.96) 0%, rgba(16,18,21,0.88) 28%, rgba(20,22,25,0.5) 48%, rgba(20,22,25,0.16) 64%, rgba(20,22,25,0) 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(55deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0.12) 38%, rgba(16,18,21,0) 60%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-12%", left: "-4%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.1), transparent 70%)", filter: "blur(10px)", pointerEvents: "none" }} />
        <div aria-hidden="true" className="hero-mobile-veil" />
        <div aria-hidden="true" className="atmosphere-dark" />
        <div aria-hidden="true" style={{ position: "absolute", left: "-15%", top: "50%", transform: "translateY(-50%)", opacity: 0.42, pointerEvents: "none" }}>
          <OrbitMark variant="watermark" size={760} />
        </div>
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(96px,10vw,130px) clamp(16px,4vw,40px) clamp(64px,8vw,110px)", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 660 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, fontSize: 13.5, fontWeight: 600, letterSpacing: "0.02em", color: COLORS.softOnDark, marginBottom: 30, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.gold, boxShadow: "0 0 0 4px rgba(201,162,75,0.22)" }} />
              <span>Consultoria executiva de tecnologia</span>
            </div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: TYPE.display, lineHeight: 1.08, letterSpacing: "-0.025em", color: COLORS.onDark, margin: "0 0 26px", textWrap: "balance", textShadow: "0 2px 30px rgba(0,0,0,0.35)", ...DISPLAY_HI }}>
              Tecnologia que vira resultado <span style={{ color: "#FFFFFF" }}>— do diagnóstico à execução.</span>
            </h1>
            <p style={{ fontSize: "clamp(17px,2vw,20.5px)", lineHeight: 1.6, color: COLORS.textOnDark, margin: "0 0 40px", maxWidth: "52ch" }}>
              A oSystems orienta micro, pequenas e médias empresas a investir em tecnologia com clareza — e executa o que recomenda. Nuvem, operação, equipamento certo, software sob medida.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a href="/#agendar" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: COLORS.darkPanel, color: COLORS.onDark, border: "1px solid rgba(201,162,75,0.55)", textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 28px", borderRadius: 14, boxShadow: "0 18px 40px -14px rgba(0,0,0,0.45)" }}>
                <span>Agendar diagnóstico</span>
                <Icon name="arrow-right" style={{ width: 19, height: 19 }} />
              </a>
              <a href="#modelo" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: COLORS.softOnDark, textDecoration: "none", fontSize: 15.5, fontWeight: 600, padding: "15px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.16)" }}>
                <span>Como trabalhamos</span>
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 30px", marginTop: 42, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {heroTrust.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, color: COLORS.muted }}>
                  <span aria-hidden="true" style={{ width: 7, height: 7, transform: "rotate(45deg)", background: COLORS.muted, flexShrink: 0 }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ POSICIONAMENTO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.dark, color: COLORS.onDark }}>
        <Photo src="/uploads/11-parceria-metodo.webp" alt="" fill sizes="100vw" aria-hidden="true" style={{ objectFit: "cover", objectPosition: "72% 28%" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(95deg, rgba(16,18,21,0.95) 0%, rgba(16,18,21,0.88) 38%, rgba(20,22,25,0.6) 66%, rgba(20,22,25,0.32) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0) 52%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(16px,4vw,40px)", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 880 }}>
            <Eyebrow tone="dark">Parceiro, não fornecedor</Eyebrow>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(28px,4.4vw,52px)", lineHeight: 1.18, letterSpacing: "-0.02em", margin: 0, textWrap: "balance", color: COLORS.onDark, ...DISPLAY_HI }}>
              Diagnosticamos o que sua empresa precisa em tecnologia <span style={{ color: "#FFFFFF" }}>— e assumimos a execução até o resultado aparecer.</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ============ FAIXA CINÉTICA ============ */}
      <Marquee />

      {/* ============ PROBLEMA ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>O mundo do gestor</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Investir em tecnologia sem clareza custa caro.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              Decisões tomadas no escuro viram retrabalho, desperdício e operação travada. A maioria das empresas não precisa de mais tecnologia — precisa da tecnologia certa, bem aplicada.
            </p>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {dores.map((card) => (
              <div key={card.title} className="card-hover" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 20, padding: "28px 26px", boxShadow: "0 24px 60px -38px rgba(20,22,25,0.22)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon name={card.icon} style={{ width: 22, height: 22, color: COLORS.ink }} />
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 18, color: COLORS.ink, margin: "0 0 8px" }}>{card.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ MODELO / HUB ============ */}
      <section id="modelo" style={{ position: "relative", background: COLORS.surface, scrollMarginTop: 88, overflow: "hidden" }}>
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(52px,6vw,88px)", alignItems: "center" }}>
          <div>
            <Eyebrow>Como atuamos</Eyebrow>
            <Heading style={{ marginBottom: 22 }}>Diagnóstico, recomendação e execução.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.65, color: COLORS.inkSoft, margin: "0 0 18px" }}>
              Tudo começa pela consultoria. Entendemos seu cenário, apontamos o caminho com clareza e — diferente de quem só entrega um relatório — colocamos em prática o que recomendamos.
            </p>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.65, color: COLORS.inkSoft, margin: 0 }}>
              Quando o diagnóstico aponta um equipamento ou um sistema, a oSystems provê. <strong style={{ color: COLORS.ink, fontWeight: 600 }}>Você não fica sozinho com uma lista de boas intenções.</strong>
            </p>
          </div>

          <div style={{ position: "relative", width: "min(540px,96%)", aspectRatio: "1/1", margin: "0 auto" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "70%", height: "70%", background: "radial-gradient(circle, rgba(120,140,170,0.13), transparent 68%)", filter: "blur(12px)", pointerEvents: "none" }} />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
              <line x1="50" y1="50" x2="19" y2="19" stroke="rgba(201,162,75,0.5)" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="81" y2="19" stroke="rgba(201,162,75,0.5)" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="19" y2="81" stroke="rgba(201,162,75,0.5)" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="81" y2="81" stroke="rgba(201,162,75,0.5)" strokeWidth="0.5" />
            </svg>
            {hubNodes.map((node) => (
              <div key={node.label} style={{ position: "absolute", left: node.x, top: node.y, transform: "translate(-50%,-50%)", width: "min(40%,180px)", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 18, padding: "15px 14px", boxShadow: "0 16px 40px -22px rgba(20,22,25,0.3)", textAlign: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 9px" }}>
                  <Icon name={node.icon} style={{ width: 19, height: 19, color: COLORS.ink }} />
                </div>
                <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 14.5, color: COLORS.ink, margin: "0 0 2px" }}>{node.label}</p>
                <p style={{ fontSize: 12, color: COLORS.inkSoft, margin: 0 }}>{node.note}</p>
              </div>
            ))}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "min(38%,168px)", aspectRatio: "1/1", background: COLORS.dark, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 56px -20px rgba(20,22,25,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Icon name="compass" style={{ width: 26, height: 26, color: COLORS.muted, marginBottom: 7 }} />
              <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(14px,1.7vw,17px)", color: COLORS.onDark, margin: 0 }}>Consultoria</p>
              <p style={{ fontSize: 11, color: COLORS.mutedOnDark, margin: "3px 0 0", letterSpacing: "0.04em" }}>o centro de tudo</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ AS TRÊS FRENTES ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "-8%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.07), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 640, marginBottom: "clamp(40px,5vw,60px)" }}>
            <Eyebrow>As três frentes</Eyebrow>
            <Heading>Uma porta de entrada. Dois braços de execução.</Heading>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {frentes.map((f) => (
              <a key={f.title} href={f.href} className="lift" style={{ display: "flex", flexDirection: "column", textDecoration: "none", borderRadius: 24, overflow: "hidden", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: f.tag === "Porta de entrada" ? "1px solid rgba(201,162,75,0.55)" : "1px solid rgba(43,47,54,0.06)", boxShadow: f.tag === "Porta de entrada" ? "0 26px 64px -36px rgba(201,162,75,0.4)" : "0 26px 64px -36px rgba(20,22,25,0.28)" }}>
                <div className="media-zoom" style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: COLORS.dark }}>
                  <Photo src={f.img} alt={f.alt} fill loading="lazy" sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,22,25,0.04) 0%, rgba(20,22,25,0.12) 52%, rgba(20,22,25,0.68) 100%)" }} />
                  <span style={{ position: "absolute", left: 16, bottom: 14, display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 13px", background: "rgba(20,22,25,0.4)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: "0.03em", color: COLORS.onDark, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                    <Icon name={f.icon} style={{ width: 14, height: 14, color: COLORS.muted }} />{f.tag}
                  </span>
                </div>
                <div style={{ padding: "clamp(24px,3vw,32px)", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 21, color: COLORS.ink, margin: "0 0 12px", ...DISPLAY_SM }}>{f.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, margin: "0 0 24px", flexGrow: 1 }}>{f.text}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: COLORS.ink }}>{f.cta}<Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} /></span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ POR QUE OSYSTEMS ============ */}
      <section style={{ background: COLORS.surface }}>
        <Reveal style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(44px,5vw,80px)", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "-8%", background: "radial-gradient(circle at 60% 40%, rgba(120,140,170,0.11), transparent 65%)", filter: "blur(14px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", borderRadius: 26, overflow: "hidden", boxShadow: "0 44px 90px -44px rgba(20,22,25,0.5)", outline: "1px solid rgba(43,47,54,0.08)", outlineOffset: -1, maxWidth: 480, margin: "0 auto", aspectRatio: "4/5" }}>
              <Photo src="/uploads/Paulo.jpeg" alt="Liderança da oSystems — consultoria executiva de tecnologia" fill loading="lazy" sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: "cover" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,22,25,0) 44%, rgba(20,22,25,0.72) 100%)" }} />
              <div style={{ position: "absolute", left: 24, right: 24, bottom: 22 }}>
                <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 16.5, color: COLORS.onDark, margin: "0 0 4px" }}>Quem recomenda, executa.</p>
                <p style={{ fontSize: 13.5, color: COLORS.textOnDark, margin: 0 }}>Consultoria executiva, do diagnóstico à entrega.</p>
              </div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "calc(50% - 240px)", top: -12, width: 62, height: 62, borderTop: "2px solid rgba(43,47,54,0.22)", borderLeft: "2px solid rgba(43,47,54,0.22)", borderRadius: "8px 0 0 0" }} />
          </div>
          <div>
            <Eyebrow>Por que a oSystems</Eyebrow>
            <Heading style={{ marginBottom: "clamp(28px,3.5vw,40px)" }}>O que muda quando quem recomenda também executa.</Heading>
            <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(24px,2.5vw,34px)" }}>
              {diferenciais.map((d) => (
                <div key={d.title} className="card-hover" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(43,47,54,0.12)" }}>
                  <Icon name={d.icon} style={{ width: 24, height: 24, color: COLORS.ink }} />
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 18, color: COLORS.ink, margin: 0 }}>{d.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ PROVA SOCIAL ============ */}
      <section style={{ position: "relative", background: COLORS.dark, color: COLORS.onDark, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ ...noiseLayer, opacity: 0.06 }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-12%", right: "4%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.11), transparent 68%)", filter: "blur(14px)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(40px,5vw,56px)" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow tone="dark">Prova</Eyebrow>
              <Heading tone="dark">O tipo de problema que resolvemos.</Heading>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 600, color: COLORS.textOnDark, border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "7px 14px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}>
              <Icon name="info" style={{ width: 14, height: 14 }} />
              <span>Cenários típicos</span>
            </span>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {provas.map((p) => (
              <div key={p.tag} className="card-hover" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "clamp(28px,3vw,34px)", display: "flex", flexDirection: "column", boxShadow: "0 30px 70px -44px rgba(0,0,0,0.7)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={p.icon} style={{ width: 21, height: 21, color: COLORS.muted }} />
                  </div>
                  <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 14.5, color: COLORS.onDark }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: COLORS.textOnDark, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
            <p style={{ fontSize: 14, fontStyle: "italic", color: COLORS.mutedOnDark, margin: 0 }}>Cenários ilustrativos do tipo de trabalho que a oSystems entrega.</p>
          </div>
        </Reveal>
      </section>

      {/* ============ MÉTODO ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-6%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 640, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>O método</Eyebrow>
            <Heading>Como começa uma parceria com a oSystems.</Heading>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
            {metodo.map((step) => (
              <div key={step.n} className="card-hover" style={{ position: "relative", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 20, padding: "30px 26px", boxShadow: "0 24px 60px -38px rgba(20,22,25,0.22)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(44px,4.6vw,64px)", lineHeight: 0.85, color: COLORS.muted, fontVariantNumeric: "tabular-nums" }}>{`0${step.n}`}</span>
                  <Icon name={step.icon} style={{ width: 20, height: 20, color: COLORS.gold, marginTop: 8 }} />
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 20, color: COLORS.ink, margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft, margin: 0 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ CTA INLINE (meio de funil) ============ */}
      <section style={{ background: COLORS.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,40px) clamp(72px,9vw,120px)", display: "flex", justifyContent: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center", maxWidth: 600 }}>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: TYPE.statement, lineHeight: 1.2, color: COLORS.ink, margin: 0, ...DISPLAY_HI }}>Pronto para enxergar onde a tecnologia destrava resultado?</p>
            <GoldLink href="/#agendar">Comece pelo diagnóstico</GoldLink>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaBand />
    </main>
  );
}
