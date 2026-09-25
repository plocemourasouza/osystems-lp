import { Photo } from "@/components/Photo";
import { COLORS, FONT_BODY, FONT_DISPLAY, NOISE_BG } from "@/lib/tokens";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, Heading } from "@/components/ui";
import { OrbitMark } from "@/components/OrbitMark";

const heroTrust = [
  "Especificado a partir do diagnóstico",
  "Sob encomenda",
  "Sem capacidade ociosa",
];

const quandoEntra: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "settings",
    title: "Parque defasado",
    text: "Modernizar máquinas e infraestrutura que já não acompanham a operação.",
  },
  {
    icon: "trending-up",
    title: "Demanda nova",
    text: "Atender um aumento de volume ou uma frente de negócio que acabou de surgir.",
  },
  {
    icon: "cloud",
    title: "Migração para a nuvem",
    text: "Viabilizar a mudança para a nuvem com o equipamento que ela exige.",
  },
];

const processo: { n: string; icon: IconName; title: string; text: string }[] = [
  {
    n: "1",
    icon: "ruler",
    title: "Especificação",
    text: "Partimos do diagnóstico e dimensionamos exatamente o que a sua operação precisa.",
  },
  {
    n: "2",
    icon: "clipboard-check",
    title: "Cotação",
    text: "Buscamos a melhor relação entre custo e adequação — pelo que a operação exige, não pelo preço de etiqueta.",
  },
  {
    n: "3",
    icon: "package",
    title: "Fornecimento",
    text: "Encomendamos o equipamento certo, na configuração que foi definida para você.",
  },
  {
    n: "4",
    icon: "truck",
    title: "Entrega e instalação",
    text: "Entregamos e deixamos pronto para uso, conforme o escopo combinado e alinhado ao plano de tecnologia.",
  },
];

const tipos: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "building-2",
    title: "Escritório",
    text: "Estações de trabalho, equipamentos de rede e periféricos dimensionados para a rotina administrativa — especificados conforme a sua operação, sob encomenda.",
  },
  {
    icon: "server",
    title: "Áreas de serviço",
    text: "Infraestrutura e equipamentos para a operação de campo e produção, especificados conforme a demanda real do seu negócio — sob encomenda, não estoque.",
  },
];

const porque: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Especificação correta.",
    text: "Quem já conhece a sua operação dimensiona o equipamento certo — nem mais, nem menos.",
  },
  {
    icon: "trending-up",
    title: "Sem desperdício.",
    text: "Você não paga por capacidade que não vai usar — nem fica curto seis meses depois.",
  },
  {
    icon: "compass",
    title: "Alinhado ao plano.",
    text: "Cada aquisição faz parte do mesmo plano de tecnologia que o diagnóstico desenhou.",
  },
];

const prova: { icon: IconName; label: string; text: string }[] = [
  {
    icon: "settings",
    label: "Indústria leve (PME)",
    text: "Um parque defasado foi substituído por equipamentos dimensionados no diagnóstico — só o necessário — destravando a migração para a nuvem sem capacidade ociosa.",
  },
  {
    icon: "boxes",
    label: "Comércio de serviços",
    text: "Uma demanda nova exigiu equipamento específico de área de serviço. A especificação correta evitou comprar a mais — e o que chegou era exatamente o que a operação pedia.",
  },
  {
    icon: "trending-up",
    label: "Operação em expansão",
    text: "Com o volume crescendo, a infraestrutura foi reforçada na medida certa: capacidade alinhada ao plano de tecnologia, sem antecipar custo que ainda não se justificava.",
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

export default function Equipamentos() {
  return (
    <main style={{ fontFamily: FONT_BODY, color: COLORS.ink, background: COLORS.bg }}>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.darker, color: COLORS.onDark }}>
        <Photo
          src="/uploads/09-equipamentos-v3.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="hero-kenburns"
          style={{ objectFit: "cover", objectPosition: "72% center" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(16,18,21,0.96) 0%, rgba(16,18,21,0.88) 28%, rgba(20,22,25,0.5) 48%, rgba(20,22,25,0.16) 64%, rgba(20,22,25,0) 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(55deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0.12) 38%, rgba(16,18,21,0) 60%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-12%", left: "-4%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.1), transparent 70%)", filter: "blur(10px)", pointerEvents: "none" }} />
        <div aria-hidden="true" className="atmosphere-dark" />
        <div aria-hidden="true" style={{ position: "absolute", left: "-15%", top: "50%", transform: "translateY(-50%)", opacity: 0.42, pointerEvents: "none" }}>
          <OrbitMark variant="arm" activeIndex={2} size={720} />
        </div>
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(84px,12vw,160px) clamp(16px,4vw,40px) clamp(76px,10vw,132px)", minHeight: "clamp(540px,78vh,740px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 660 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, fontSize: 13.5, fontWeight: 600, letterSpacing: "0.02em", color: COLORS.softOnDark, marginBottom: 30, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.gold, boxShadow: "0 0 0 4px rgba(201,162,75,0.22)" }} />
              <span>Sob encomenda</span>
            </div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(36px,5.6vw,64px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: COLORS.onDark, margin: "0 0 26px", textWrap: "balance", textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}>
              O equipamento certo <span style={{ color: "#FFFFFF" }}>— especificado, não vendido.</span>
            </h1>
            <p style={{ fontSize: "clamp(17px,2vw,20.5px)", lineHeight: 1.6, color: COLORS.textOnDark, margin: "0 0 40px", maxWidth: "52ch" }}>
              Fornecemos sob encomenda o equipamento que o diagnóstico aponta — de escritório ou de área de serviço, dimensionado para o seu negócio e sem desperdício. Não é catálogo; é especificação.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a href="/#agendar" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: COLORS.darkPanel, color: COLORS.onDark, border: "1px solid rgba(201,162,75,0.55)", textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 28px", borderRadius: 14, boxShadow: "0 18px 40px -14px rgba(0,0,0,0.45)" }}>
                <span>Agendar diagnóstico</span>
                <Icon name="arrow-right" style={{ width: 19, height: 19 }} />
              </a>
              <a href="#como-funciona" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,0.06)", color: COLORS.onDark, textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                <span>Como funciona</span>
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

      {/* ============ QUANDO ENTRA ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>Quando entra</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>A necessidade de equipamento nasce do diagnóstico.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: "0 0 20px" }}>
              Equipamento não é o ponto de partida — é uma conclusão. Quando a consultoria mapeia o seu cenário, às vezes o caminho passa por trocar ou adquirir algo. Aí, em vez de deixar você com uma lista para resolver sozinho, a oSystems provê.
            </p>
            <a href="/consultoria" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15.5, fontWeight: 600, color: COLORS.ink, textDecoration: "none" }}>
              <span>Tudo começa pela consultoria</span>
              <Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} />
            </a>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {quandoEntra.map((card) => (
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

      {/* ============ COMO FUNCIONA O SOB ENCOMENDA ============ */}
      <section id="como-funciona" style={{ position: "relative", background: COLORS.surface, scrollMarginTop: 88, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", left: "-6%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.07), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>Como funciona o sob encomenda</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Especificação, cotação, fornecimento e entrega.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: "0 0 20px" }}>
              Você recebe exatamente o que foi dimensionado para a sua operação — não um SKU genérico tirado de prateleira. Cada etapa parte do que o diagnóstico apontou.
            </p>
            <a href="/desenvolvimento" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15.5, fontWeight: 600, color: COLORS.ink, textDecoration: "none" }}>
              <span>Quando o diagnóstico pede software, desenvolvemos</span>
              <Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} />
            </a>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
            {processo.map((step) => (
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

      {/* ============ TIPOS DE EQUIPAMENTO ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "-8%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.07), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(40px,5vw,60px)" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>O que atendemos</Eyebrow>
              <Heading>Escritório e áreas de serviço — sob demanda.</Heading>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft, border: "1px solid rgba(43,47,54,0.14)", borderRadius: 100, padding: "7px 14px", background: "rgba(255,255,255,0.6)" }}>
              <Icon name="info" style={{ width: 14, height: 14, color: COLORS.muted }} />
              <span>Especificado por operação</span>
            </span>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {tipos.map((t) => (
              <div key={t.title} className="card-hover" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 22, padding: "clamp(28px,3vw,36px)", boxShadow: "0 26px 64px -36px rgba(20,22,25,0.28)" }}>
                <div style={{ width: 50, height: 50, borderRadius: 15, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon name={t.icon} style={{ width: 24, height: 24, color: COLORS.ink }} />
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 21, color: COLORS.ink, margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
          {/* TODO (owner): substituir por lista concreta de categorias de equipamento atendidas, quando definida com a operação. */}
          <p style={{ fontSize: 13.5, color: COLORS.muted, margin: "24px 0 0", maxWidth: "60ch" }}>
            Equipamentos de escritório e para áreas de serviço, especificados conforme a sua operação — sob encomenda, não estoque.
          </p>
        </Reveal>
      </section>

      {/* ============ POR QUE PELA OSYSTEMS ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.dark, color: COLORS.onDark }}>
        <Photo src="/uploads/11-parceria-metodo.webp" alt="" fill loading="lazy" sizes="100vw" aria-hidden="true" style={{ objectFit: "cover", objectPosition: "78% center" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(95deg, rgba(16,18,21,0.95) 0%, rgba(16,18,21,0.88) 38%, rgba(20,22,25,0.6) 66%, rgba(20,22,25,0.32) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0) 52%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 640, marginBottom: "clamp(40px,5vw,60px)" }}>
            <Eyebrow tone="dark">Por que pela oSystems</Eyebrow>
            <Heading tone="dark">Comprar de quem já entende a sua operação.</Heading>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "clamp(24px,2.5vw,34px)" }}>
            {porque.map((d) => (
              <div key={d.title} className="card-hover" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.14)" }}>
                <Icon name={d.icon} style={{ width: 24, height: 24, color: COLORS.muted }} />
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 18, color: COLORS.onDark, margin: 0 }}>{d.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: COLORS.textOnDark, margin: 0 }}>{d.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ PROVA ============ */}
      <section style={{ position: "relative", background: COLORS.surface, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-6%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(40px,5vw,56px)" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>Prova</Eyebrow>
              <Heading>O tipo de modernização que viabilizamos.</Heading>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft, border: "1px solid rgba(43,47,54,0.14)", borderRadius: 100, padding: "7px 14px", background: "rgba(255,255,255,0.6)" }}>
              <Icon name="info" style={{ width: 14, height: 14, color: COLORS.muted }} />
              <span>Cenários típicos</span>
            </span>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {prova.map((c) => (
              <div key={c.label} className="card-hover" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 20, padding: "clamp(28px,3vw,34px)", display: "flex", flexDirection: "column", boxShadow: "0 24px 60px -38px rgba(20,22,25,0.22)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={c.icon} style={{ width: 21, height: 21, color: COLORS.ink }} />
                  </div>
                  <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 14.5, color: COLORS.ink }}>{c.label}</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
          {/* TODO (owner): substituir os cenários típicos por cases e depoimentos reais quando disponíveis. */}
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
            <p style={{ fontSize: 14, fontStyle: "italic", color: COLORS.muted, margin: 0 }}>Cenários ilustrativos do tipo de fornecimento que a oSystems realiza.</p>
          </div>
        </Reveal>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaBand
        kicker="A porta continua sendo a consultoria"
        title="Precisa do equipamento certo para a sua operação?"
        text="Comece por um diagnóstico. Especificamos sob encomenda o que o seu negócio realmente precisa — sem desperdício e alinhado ao plano de tecnologia."
        bullets={[
          "Especificação a partir do seu diagnóstico",
          "Sob encomenda, dimensionado para você",
          "Quem recomenda é quem fornece",
        ]}
      />
    </main>
  );
}
