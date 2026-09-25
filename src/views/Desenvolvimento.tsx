import { Photo } from "@/components/Photo";
import { COLORS, FONT_BODY, FONT_DISPLAY, NOISE_BG } from "@/lib/tokens";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, Heading } from "@/components/ui";
import { OrbitMark } from "@/components/OrbitMark";

const heroTrust = ["Do papel à produção", "Sem queimar meses nem capital", "Go Live em semanas, não meses"];

// Frente 1 — Go Live (benefit language, not technical).
const goLiveBenefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "search",
    title: "Discovery acelerada",
    text: "Em poucos dias entendemos a ideia e definimos o essencial para validar — sem semanas de reunião antes de qualquer linha de código.",
  },
  {
    icon: "layers",
    title: "Protótipo navegável",
    text: "Você vê e usa o produto cedo, ajusta a rota antes de investir pesado e chega ao usuário com o que importa.",
  },
  {
    icon: "rocket",
    title: "No ar, de verdade",
    text: "A base que construímos já vai para produção — nada de protótipo que precisa ser refeito do zero para escalar.",
  },
];

// Frente 2 — demandas pontuais nascidas do diagnóstico.
const consultoriaFrente: { icon: IconName; tag: string; problem: string; deliver: string; result: string }[] = [
  {
    icon: "bot",
    tag: "Automação de rotinas",
    problem: "Sua equipe gasta horas todo dia em tarefas repetitivas e manuais.",
    deliver: "Automatizamos a rotina ponta a ponta — inclusive com IA para interpretar dados específicos do seu negócio.",
    result: "Trabalho manual eliminado e pessoas livres para o que realmente exige decisão.",
  },
  {
    icon: "code",
    tag: "Pequenos sistemas sob medida",
    problem: "Uma demanda concreta que nenhuma ferramenta de prateleira resolve direito.",
    deliver: "Construímos um sistema enxuto, feito para o seu processo — sem pagar por funções que você nunca vai usar.",
    result: "A operação roda no sistema certo, dimensionado para o seu tamanho.",
  },
  {
    icon: "zap",
    tag: "Projeto tirado do papel",
    problem: "Uma boa ideia parada por causa de custo ou complexidade.",
    deliver: "Colocamos o projeto em produção com baixo custo, no escopo que faz sentido começar.",
    result: "A ideia sai do papel e passa a gerar valor, em vez de continuar na gaveta.",
  },
];

const comoTrabalhamos: { n: string; icon: IconName; title: string; text: string }[] = [
  { n: "1", icon: "search", title: "Entender", text: "Mergulhamos no problema e no objetivo de negócio antes de propor qualquer solução." },
  { n: "2", icon: "layers", title: "Prototipar", text: "Colocamos uma versão navegável na sua mão cedo, para validar a direção sem desperdício." },
  { n: "3", icon: "wrench", title: "Construir", text: "Desenvolvemos sobre uma base que já vai para produção, em entregas curtas e visíveis." },
  { n: "4", icon: "line-chart", title: "Entregar e acompanhar", text: "Colocamos no ar e ficamos perto para ajustar conforme o uso real mostra o caminho." },
];

const capacidades: { icon: IconName; label: string }[] = [
  { icon: "code", label: "Web moderna" },
  { icon: "cloud", label: "Nuvem" },
  { icon: "shield-check", label: "Autenticação segura" },
  { icon: "git-branch", label: "Integrações" },
  { icon: "sparkles", label: "IA aplicada" },
];

const provas: { tag: string; icon: IconName; text: string }[] = [
  {
    tag: "Automação com IA",
    icon: "bot",
    text: "Uma rotina diária de leitura e classificação de documentos foi automatizada com IA interpretando os dados do próprio cliente — eliminando trabalho manual recorrente da equipe.",
  },
  {
    tag: "Projeto tirado do papel",
    icon: "rocket",
    text: "Uma ideia que estava parada chegou ao ar em poucas semanas, com baixo custo e pronta para validar com usuários reais.",
  },
];

const noiseLayer = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: NOISE_BG,
  opacity: 0.05,
  mixBlendMode: "overlay" as const,
  pointerEvents: "none" as const,
};

export default function Desenvolvimento() {
  return (
    <main style={{ fontFamily: FONT_BODY, color: COLORS.ink, background: COLORS.bg }}>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.darker, color: COLORS.onDark }}>
        <Photo
          src="/uploads/10-desenvolvimento-v3.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="hero-kenburns"
          style={{ objectFit: "cover", objectPosition: "78% center" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(16,18,21,0.96) 0%, rgba(16,18,21,0.88) 28%, rgba(20,22,25,0.5) 48%, rgba(20,22,25,0.16) 64%, rgba(20,22,25,0) 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(55deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0.12) 38%, rgba(16,18,21,0) 60%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-12%", left: "-4%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.1), transparent 70%)", filter: "blur(10px)", pointerEvents: "none" }} />
        <div aria-hidden="true" className="atmosphere-dark" />
        <div aria-hidden="true" style={{ position: "absolute", left: "-15%", top: "50%", transform: "translateY(-50%)", opacity: 0.42, pointerEvents: "none" }}>
          <OrbitMark variant="arm" activeIndex={3} size={720} />
        </div>
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(84px,12vw,160px) clamp(16px,4vw,40px) clamp(76px,10vw,132px)", minHeight: "clamp(540px,78vh,740px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 660 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, fontSize: 13.5, fontWeight: 600, letterSpacing: "0.02em", color: COLORS.softOnDark, marginBottom: 30, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.gold, boxShadow: "0 0 0 4px rgba(201,162,75,0.22)" }} />
              <span>Desenvolvimento sob medida</span>
            </div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(36px,5.6vw,64px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: COLORS.onDark, margin: "0 0 26px", textWrap: "balance", textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}>
              Do papel ao ar <span style={{ color: "#FFFFFF" }}>— software sob medida, sem desperdício.</span>
            </h1>
            <p style={{ fontSize: "clamp(17px,2vw,20.5px)", lineHeight: 1.6, color: COLORS.textOnDark, margin: "0 0 40px", maxWidth: "52ch" }}>
              Automação de rotinas, sistemas sob medida e a especialidade da oSystems: levar startups ao Go Live rápido. Tiramos ideias e demandas do papel e colocamos em produção — no escopo certo, com baixo custo.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a href="/#agendar" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: COLORS.darkPanel, color: COLORS.onDark, border: "1px solid rgba(201,162,75,0.55)", textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 28px", borderRadius: 14, boxShadow: "0 18px 40px -14px rgba(0,0,0,0.45)" }}>
                <span>Agendar diagnóstico</span>
                <Icon name="arrow-right" style={{ width: 19, height: 19 }} />
              </a>
              <a href="#go-live" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,0.06)", color: COLORS.onDark, textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                <span>Go Live para startups</span>
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
        <Photo src="/uploads/07-secao-como-atuamos.webp" alt="" fill sizes="100vw" aria-hidden="true" style={{ objectFit: "cover", objectPosition: "78% center" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(95deg, rgba(16,18,21,0.95) 0%, rgba(16,18,21,0.88) 38%, rgba(20,22,25,0.6) 66%, rgba(20,22,25,0.32) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0) 52%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(96px,13vw,164px) clamp(16px,4vw,40px)", minHeight: "clamp(420px,52vh,560px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow tone="dark">Duas naturezas de demanda</Eyebrow>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(22px,3.2vw,34px)", lineHeight: 1.32, letterSpacing: "-0.015em", margin: 0, textWrap: "balance", color: COLORS.onDark }}>
              De um lado, a startup com pressa de validar a ideia. <span style={{ color: "#FFFFFF" }}>Do outro, a empresa com uma demanda que o diagnóstico revelou.</span> Os dois caminhos terminam no mesmo lugar: em produção.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ============ FRENTE 1 — GO LIVE (feature block, ênfase maior) ============ */}
      <section id="go-live" style={{ position: "relative", background: COLORS.bg, scrollMarginTop: 88, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(44px,5vw,80px)", alignItems: "center", marginBottom: "clamp(44px,5vw,64px)" }}>
            <div>
              <Eyebrow>A especialidade da oSystems</Eyebrow>
              <Heading style={{ marginBottom: 16 }}>Go Live rápido para startups.</Heading>
              {/* Âncora de escopo verificável (sem números inventados). Substituir por métricas reais quando houver — ex.: tempo médio até Go Live, taxa de conversão de discovery. */}
              <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(17px,2.1vw,21px)", lineHeight: 1.4, letterSpacing: "-0.01em", color: COLORS.ink, margin: "0 0 18px" }}>
                Do primeiro contato ao produto no ar em semanas, não meses.
              </p>
              <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.65, color: COLORS.inkSoft, margin: "0 0 18px" }}>
                Para o founder com pressa de validar a ideia com usuário real — sem queimar meses nem capital. Levamos o produto ao ar no escopo que importa, e ajustamos a partir do uso real.
              </p>
              <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.65, color: COLORS.inkSoft, margin: 0 }}>
                Sem refação: <strong style={{ color: COLORS.ink, fontWeight: 600 }}>a base que construímos para validar já é a base que escala.</strong>
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: "-8%", background: "radial-gradient(circle at 60% 40%, rgba(120,140,170,0.11), transparent 65%)", filter: "blur(14px)", pointerEvents: "none" }} />
              <div style={{ position: "relative", borderRadius: 26, overflow: "hidden", boxShadow: "0 44px 90px -44px rgba(20,22,25,0.5)", outline: "1px solid rgba(43,47,54,0.08)", outlineOffset: -1, aspectRatio: "16/11" }}>
                <Photo src="/uploads/10-desenvolvimento-v3.webp" alt="Dashboard de um sistema sob medida em produção — tema escuro com gráficos e indicadores" fill loading="lazy" sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,22,25,0) 48%, rgba(20,22,25,0.7) 100%)" }} />
                <div style={{ position: "absolute", left: 22, right: 22, bottom: 20 }}>
                  <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 16.5, color: COLORS.onDark, margin: "0 0 4px" }}>Da ideia ao usuário real.</p>
                  <p style={{ fontSize: 13.5, color: COLORS.textOnDark, margin: 0 }}>Validação rápida, com baixo custo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {goLiveBenefits.map((card) => (
              <div key={card.title} className="card-hover" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 20, padding: "28px 26px", boxShadow: "0 24px 60px -38px rgba(20,22,25,0.22)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon name={card.icon} style={{ width: 22, height: 22, color: COLORS.ink }} />
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 18, color: COLORS.ink, margin: "0 0 8px" }}>{card.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>

          {/* TODO(owner): inserir métricas reais quando houver — tempo médio até Go Live, taxa de conversão de discovery. Trocar a frase abaixo por um dado verificável. */}
          <div style={{ marginTop: 26 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 12.5, background: "rgba(43,47,54,0.04)", border: "1px solid rgba(43,47,54,0.08)", color: COLORS.inkSoft, borderRadius: 10, padding: "9px 13px" }}>
              <Icon name="info" style={{ width: 14, height: 14, color: COLORS.muted, flexShrink: 0 }} />
              O ritmo varia com o escopo de cada produto. O compromisso é o mesmo: o caminho mais curto até o ar.
            </span>
          </div>
        </Reveal>
      </section>

      {/* ============ FRENTE 2 — NASCE DA CONSULTORIA ============ */}
      <section style={{ position: "relative", background: COLORS.surface, overflow: "hidden" }}>
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 700, marginBottom: "clamp(40px,5vw,60px)" }}>
            <Eyebrow>Nasce da consultoria</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Demandas pontuais que o diagnóstico revela.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              Muitas vezes a necessidade de software aparece dentro de uma{" "}
              <a href="/consultoria" style={{ color: COLORS.ink, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(43,47,54,0.3)" }}>consultoria</a>
              . Quando aparece, a oSystems resolve — no tamanho certo do problema.
            </p>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {consultoriaFrente.map((c) => (
              <div key={c.tag} className="card-hover" style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 20, padding: "clamp(26px,3vw,32px)", boxShadow: "0 24px 60px -38px rgba(20,22,25,0.22)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} style={{ width: 21, height: 21, color: COLORS.ink }} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 17.5, color: COLORS.ink, margin: 0 }}>{c.tag}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.muted, margin: "0 0 5px" }}>Problema</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft, margin: 0 }}>{c.problem}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.muted, margin: "0 0 5px" }}>O que entregamos</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.ink, margin: 0 }}>{c.deliver}</p>
                  </div>
                  <div style={{ paddingTop: 14, borderTop: "1px solid rgba(43,47,54,0.1)" }}>
                    <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.muted, margin: "0 0 5px" }}>Resultado</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft, margin: 0 }}>{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 28px" }}>
            <a href="/consultoria" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: COLORS.ink, textDecoration: "none" }}>
              Entender a consultoria<Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} />
            </a>
            <a href="/equipamentos" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: COLORS.ink, textDecoration: "none" }}>
              Ver infraestrutura e equipamentos<Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ============ COMO TRABALHAMOS ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-6%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 640, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>Como trabalhamos</Eyebrow>
            <Heading>Entender, prototipar, construir, acompanhar.</Heading>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
            {comoTrabalhamos.map((step) => (
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

      {/* ============ CAPACIDADES TÉCNICAS (bloco discreto, secundário) ============ */}
      <section style={{ background: COLORS.surface }}>
        <Reveal style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(64px,8vw,104px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,4vw,64px)", alignItems: "center" }}>
            <div style={{ maxWidth: 420 }}>
              <Eyebrow>Base tecnológica</Eyebrow>
              <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(19px,2.4vw,24px)", lineHeight: 1.35, letterSpacing: "-0.01em", color: COLORS.ink, margin: 0, textWrap: "balance" }}>
                Tecnologia sólida por baixo. O que conta para você é o resultado.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {capacidades.map((cap) => (
                  <span key={cap.label} style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "11px 16px", background: COLORS.bg, border: "1px solid rgba(43,47,54,0.08)", borderRadius: 100, fontSize: 14.5, fontWeight: 500, color: COLORS.ink }}>
                    <Icon name={cap.icon} style={{ width: 17, height: 17, color: COLORS.inkSoft }} />
                    {cap.label}
                  </span>
                ))}
              </div>
              {/* TODO(owner): revisar/expandir a lista de capacidades conforme o portfólio evoluir — manter enxuto e honesto. */}
              <p style={{ marginTop: 18, fontSize: 12.5, color: COLORS.muted, display: "inline-block" }}>
                Escolhemos a stack pela necessidade do projeto, não pela moda.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ PROVA ============ */}
      <section style={{ position: "relative", background: COLORS.dark, color: COLORS.onDark, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ ...noiseLayer, opacity: 0.06 }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-12%", right: "4%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.11), transparent 68%)", filter: "blur(14px)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(40px,5vw,56px)" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow tone="dark">Prova</Eyebrow>
              <Heading tone="dark">O tipo de software que entregamos.</Heading>
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
          {/* TODO(owner): substituir os cenários acima por cases reais (com permissão do cliente) e adicionar depoimentos + métricas quando disponíveis. */}
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
            <p style={{ fontSize: 14, fontStyle: "italic", color: COLORS.mutedOnDark, margin: 0 }}>Cenários ilustrativos do trabalho que a oSystems entrega.</p>
          </div>
        </Reveal>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaBand
        kicker="Tire do papel"
        title="Tem uma ideia parada por custo ou complexidade?"
        text="Comece por um diagnóstico. Em uma conversa, entendemos o que faz sentido construir primeiro — e como levar ao ar com baixo custo."
        bullets={[
          "Escopo certo: começa pelo que importa validar",
          "Especialidade em Go Live rápido para startups",
          "Quem diagnostica é quem constrói",
        ]}
      />
    </main>
  );
}
