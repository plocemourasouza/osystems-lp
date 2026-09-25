import { Photo } from "@/components/Photo";
import { COLORS, FONT_BODY, FONT_DISPLAY, NOISE_BG } from "@/lib/tokens";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, Heading } from "@/components/ui";
import { OrbitMark } from "@/components/OrbitMark";

const heroTrust = [
  "Diagnóstico em primeiro lugar",
  "Recomendação priorizada por retorno",
  "Quem recomenda, executa",
];

const momentos: { icon: IconName; title: string; text: string }[] = [
  { icon: "cloud", title: "Quer migrar para a nuvem", text: "Mas não sabe por onde começar, quanto vai custar ou se vai economizar de fato." },
  { icon: "workflow", title: "Precisa organizar a operação", text: "Processos manuais, planilhas soltas e sistemas que não conversam entre si." },
  { icon: "trending-up", title: "Vai decidir um investimento de TI", text: "E não quer gastar no escuro — quer saber se é o que o negócio realmente precisa." },
  { icon: "search", title: "Sente a tecnologia defasada", text: "Suspeita que dá para fazer melhor, mas falta clareza sobre o caminho." },
];

const resolve: { icon: IconName; tag: string; title: string; dor: string; fazemos: string; resultado: string }[] = [
  {
    icon: "search",
    tag: "Ponto de partida",
    title: "Diagnóstico de tecnologia",
    dor: "Você decide sobre tecnologia sem um retrato claro do que tem e do que falta.",
    fazemos: "Mapeamos cenário, operação, sistemas e objetivos do negócio em uma leitura objetiva.",
    resultado: "Um retrato honesto do seu estágio e das prioridades — antes de gastar um real.",
  },
  {
    icon: "cloud",
    tag: "Migração",
    title: "Migração para a nuvem",
    dor: "Migrar sem método vira custo recorrente sem economia e sem ganho de operação.",
    fazemos: "Planejamos a migração pelo que faz sentido para o seu porte e conduzimos a execução.",
    resultado: "Nuvem com economia real, acesso de qualquer lugar e menos dor de cabeça com infraestrutura.",
  },
  {
    icon: "workflow",
    tag: "Operação",
    title: "Organização da operação",
    dor: "Trabalho manual repetido e sistemas isolados travam o dia a dia da equipe.",
    fazemos: "Desenhamos processos mais simples e conectamos o que precisa conversar.",
    resultado: "Operação mais leve, com menos retrabalho e informação no lugar certo.",
  },
  {
    icon: "clipboard-list",
    tag: "Planejamento",
    title: "Planejamento de investimento em TI",
    dor: "Cada compra de tecnologia é uma aposta isolada, sem visão do todo.",
    fazemos: "Priorizamos o que investir, em que ordem e por quê — sempre mirando retorno.",
    resultado: "Um plano de investimento claro, faseado e dimensionado para a sua realidade.",
  },
];

const processo: { n: string; icon: IconName; title: string; text: string; detalhe: string }[] = [
  {
    n: "1",
    icon: "search",
    title: "Diagnóstico",
    text: "Entendemos seu cenário, operação e objetivos.",
    detalhe: "Conversamos com quem decide e com quem opera. Olhamos sistemas, processos e onde o esforço se perde — para enxergar o negócio antes da tecnologia.",
  },
  {
    n: "2",
    icon: "clipboard-list",
    title: "Recomendação",
    text: "Um plano claro, priorizado por impacto e retorno.",
    detalhe: "Você recebe um caminho objetivo: o que fazer primeiro, o que pode esperar e o retorno esperado de cada frente. Sem relatório de gaveta.",
  },
  {
    n: "3",
    icon: "wrench",
    title: "Execução",
    text: "Implementamos: nuvem, operação, equipamentos ou software.",
    detalhe: "Diferente de quem some depois do relatório, colocamos o plano em prática — direto ou acionando as frentes de equipamentos e desenvolvimento.",
  },
  {
    n: "4",
    icon: "line-chart",
    title: "Acompanhamento",
    text: "Ficamos perto para garantir que o investimento valeu.",
    detalhe: "Medimos o que mudou na operação e ajustamos a rota. O diagnóstico só termina quando o resultado aparece.",
  },
];

const pontes: { icon: IconName; tag: string; title: string; text: string; cta: string; href: string }[] = [
  {
    icon: "package",
    tag: "Sob encomenda",
    title: "Equipamentos",
    text: "Quando o diagnóstico aponta a necessidade de equipamento, especificamos e fornecemos exatamente o que a sua operação precisa — não um item de catálogo.",
    cta: "Ver equipamentos",
    href: "/equipamentos",
  },
  {
    icon: "code",
    tag: "Sob medida",
    title: "Desenvolvimento",
    text: "Quando o caminho é automação ou software, desenvolvemos sob medida com baixo custo — incluindo Go Live rápido para startups.",
    cta: "Ver desenvolvimento",
    href: "/desenvolvimento",
  },
];

const provas: { tag: string; icon: IconName; text: string }[] = [
  { tag: "Indústria leve (PME)", icon: "factory", text: "O diagnóstico apontou reorganização da operação e migração para a nuvem — e o tempo de fechamento mensal caiu de dias para horas." },
  { tag: "Comércio de serviços", icon: "store", text: "A consultoria mapeou uma rotina manual diária; a recomendação de automação com apoio de IA na leitura de documentos eliminou o trabalho repetitivo." },
  { tag: "Serviços profissionais", icon: "workflow", text: "Sistemas que não conversavam viraram uma operação integrada na nuvem, com a equipe acessando a mesma informação de qualquer lugar." },
];

// TODO(owner): se quiser, complementar respostas com prazos, regiões e políticas reais
const faq: { q: string; a: string }[] = [
  { q: "Quanto tempo dura um diagnóstico?", a: "Depende do cenário. O diagnóstico inicial é uma conversa estruturada para entender o seu negócio; o aprofundamento varia conforme o tamanho da operação e a complexidade do que precisa ser analisado." },
  { q: "A consultoria é remota ou presencial?", a: "Conforme o caso. Boa parte do trabalho pode ser conduzida de forma remota, e momentos presenciais entram quando fazem diferença para entender a operação de perto." },
  { q: "Que portes de empresa vocês atendem?", a: "Micro, pequenas e médias empresas. O método se adapta à sua realidade — a recomendação é sempre dimensionada para o seu porte, não para o de uma grande corporação." },
  { q: "Preciso já saber o que quero resolver?", a: "Não. O diagnóstico existe justamente para isso: a partir do seu cenário, ajudamos a clarear o problema e a definir as prioridades antes de qualquer investimento." },
];

const noiseLayer = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: NOISE_BG,
  opacity: 0.05,
  mixBlendMode: "overlay" as const,
  pointerEvents: "none" as const,
};

export default function ConsultoriaPage() {
  return (
    <main style={{ fontFamily: FONT_BODY, color: COLORS.ink, background: COLORS.bg }}>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.darker, color: COLORS.onDark }}>
        <Photo
          src="/uploads/07-secao-como-atuamos.webp"
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
          <OrbitMark variant="full" size={720} />
        </div>
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(84px,12vw,160px) clamp(16px,4vw,40px) clamp(76px,10vw,132px)", minHeight: "clamp(540px,78vh,740px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, fontSize: 13.5, fontWeight: 600, letterSpacing: "0.02em", color: COLORS.softOnDark, marginBottom: 30, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.gold, boxShadow: "0 0 0 4px rgba(201,162,75,0.22)" }} />
              <span>Consultoria executiva</span>
            </div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(36px,5.6vw,64px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: COLORS.onDark, margin: "0 0 26px", textWrap: "balance", textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}>
              A decisão certa em tecnologia <span style={{ color: "#FFFFFF" }}>começa por um diagnóstico.</span>
            </h1>
            <p style={{ fontSize: "clamp(17px,2vw,20.5px)", lineHeight: 1.6, color: COLORS.textOnDark, margin: "0 0 40px", maxWidth: "52ch" }}>
              Orientamos micro, pequenas e médias empresas a aplicar tecnologia com clareza e retorno. Entendemos o seu cenário, apontamos o caminho — e executamos o que recomendamos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a href="/#agendar" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: COLORS.darkPanel, color: COLORS.onDark, border: "1px solid rgba(201,162,75,0.55)", textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 28px", borderRadius: 14, boxShadow: "0 18px 40px -14px rgba(0,0,0,0.45)" }}>
                <span>Agendar diagnóstico</span>
                <Icon name="arrow-right" style={{ width: 19, height: 19 }} />
              </a>
              <a href="#processo" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,0.06)", color: COLORS.onDark, textDecoration: "none", fontSize: 16.5, fontWeight: 600, padding: "16px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
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

      {/* ============ POSICIONAMENTO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: COLORS.dark, color: COLORS.onDark }}>
        <Photo src="/uploads/08-consultoria-v2.webp" alt="" fill sizes="100vw" aria-hidden="true" style={{ objectFit: "cover", objectPosition: "80% center" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(95deg, rgba(16,18,21,0.95) 0%, rgba(16,18,21,0.88) 38%, rgba(20,22,25,0.6) 66%, rgba(20,22,25,0.32) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(16,18,21,0.55) 0%, rgba(16,18,21,0) 52%)" }} />
        <div aria-hidden="true" style={noiseLayer} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(96px,13vw,164px) clamp(16px,4vw,40px)", minHeight: "clamp(420px,52vh,560px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow tone="dark">A porta de entrada</Eyebrow>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(22px,3.2vw,34px)", lineHeight: 1.32, letterSpacing: "-0.015em", margin: 0, textWrap: "balance", color: COLORS.onDark }}>
              A consultoria é o centro de tudo. Dela sai o plano <span style={{ color: "#FFFFFF" }}>— e é ela que aciona equipamentos e desenvolvimento quando o diagnóstico pede.</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ============ PARA QUEM É ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>Para quem é</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Para o gestor de PME que precisa decidir com clareza.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              Se você é dono ou gestor de micro, pequena ou média empresa e a tecnologia já pesa nas suas decisões, a consultoria é para você. Ela costuma entrar em quatro momentos.
            </p>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {momentos.map((card) => (
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

      {/* ============ O QUE A CONSULTORIA RESOLVE ============ */}
      <section style={{ background: COLORS.surface }}>
        <Reveal style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 660, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>O que a consultoria resolve</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Quatro frentes — da dor ao resultado.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              Cada frente parte de um problema concreto do seu negócio, define o que fazemos e termina em um resultado que você consegue enxergar.
            </p>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {resolve.map((b) => (
              <div key={b.title} className="card-hover" style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 22, padding: "clamp(28px,3vw,34px)", boxShadow: "0 26px 64px -38px rgba(20,22,25,0.24)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={b.icon} style={{ width: 22, height: 22, color: COLORS.ink }} />
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.03em", color: COLORS.inkSoft, border: "1px solid rgba(43,47,54,0.1)", borderRadius: 100, padding: "6px 12px" }}>{b.tag}</span>
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 21, color: COLORS.ink, margin: "0 0 18px" }}>{b.title}</h3>
                <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.muted, marginBottom: 4 }}>Dor</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft }}>{b.dor}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.muted, marginBottom: 4 }}>O que fazemos</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: COLORS.inkSoft }}>{b.fazemos}</dd>
                  </div>
                  <div style={{ paddingTop: 14, borderTop: "1px solid rgba(43,47,54,0.08)" }}>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.muted, marginBottom: 4, display: "flex", alignItems: "center", gap: 7 }}>
                      <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.gold }} />
                      Resultado esperado
                    </dt>
                    <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: COLORS.ink, fontWeight: 500 }}>{b.resultado}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ COMO FUNCIONA (PROCESSO) ============ */}
      <section id="processo" style={{ position: "relative", background: COLORS.bg, scrollMarginTop: 88, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", left: "-6%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 660, marginBottom: "clamp(44px,5vw,64px)" }}>
            <Eyebrow>Como funciona</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Do diagnóstico ao acompanhamento, em quatro passos.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              Um processo simples e transparente. Você sabe o que esperar em cada etapa — e por que ela importa.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {processo.map((step) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 20, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 22, padding: "clamp(26px,3vw,34px)", boxShadow: "0 24px 60px -40px rgba(20,22,25,0.2)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "clamp(18px,3vw,32px)", alignItems: "start" }}>
                  <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(44px,4.6vw,64px)", lineHeight: 0.85, color: COLORS.muted, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>{`0${step.n}`}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <Icon name={step.icon} style={{ width: 20, height: 20, color: COLORS.gold }} />
                      <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 20, color: COLORS.ink, margin: 0 }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, lineHeight: 1.5, color: COLORS.ink, fontWeight: 500, margin: "0 0 8px" }}>{step.text}</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0, maxWidth: "70ch" }}>{step.detalhe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ A PONTE PARA EXECUÇÃO ============ */}
      <section style={{ position: "relative", background: COLORS.surface, overflow: "hidden" }}>
        <Reveal style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(40px,5vw,60px)" }}>
            <Eyebrow>A ponte para a execução</Eyebrow>
            <Heading style={{ marginBottom: 20 }}>Quando o diagnóstico aponta, a oSystems executa.</Heading>
            <p style={{ fontSize: "clamp(16px,1.9vw,19px)", lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
              A consultoria não termina em uma lista de boas intenções. Se o caminho exige equipamento ou software, ela aciona as frentes de execução — e você segue com o mesmo parceiro.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {pontes.map((p) => (
              <a key={p.title} href={p.href} className="lift" style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 24, padding: "clamp(28px,3vw,36px)", boxShadow: "0 26px 64px -36px rgba(20,22,25,0.28)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 15, background: "rgba(43,47,54,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={p.icon} style={{ width: 24, height: 24, color: COLORS.ink }} />
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.03em", color: COLORS.inkSoft, border: "1px solid rgba(43,47,54,0.1)", borderRadius: 100, padding: "6px 12px" }}>{p.tag}</span>
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 22, color: COLORS.ink, margin: "0 0 12px" }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, margin: "0 0 24px", flexGrow: 1 }}>{p.text}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: COLORS.ink }}>{p.cta}<Icon name="arrow-right" style={{ width: 17, height: 17, color: COLORS.inkSoft }} /></span>
              </a>
            ))}
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
              <Heading tone="dark">O que um diagnóstico destrava.</Heading>
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
          {/* TODO(owner): substituir por cases reais — depoimentos e logos de clientes */}
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
            <p style={{ fontSize: 14, fontStyle: "italic", color: COLORS.mutedOnDark, margin: 0 }}>Cenários ilustrativos do tipo de trabalho que a oSystems entrega.</p>
          </div>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ position: "relative", background: COLORS.bg, overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-10%", right: "-5%", width: 520, height: 520, background: "radial-gradient(circle, rgba(120,140,170,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", maxWidth: 920, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(16px,4vw,40px)" }}>
          <div style={{ maxWidth: 640, marginBottom: "clamp(40px,5vw,56px)" }}>
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <Heading>O que perguntam antes de agendar.</Heading>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faq.map((item) => (
              <div key={item.q} style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px) saturate(115%)", WebkitBackdropFilter: "blur(8px) saturate(115%)", border: "1px solid rgba(43,47,54,0.06)", borderRadius: 18, padding: "clamp(22px,2.6vw,28px)", boxShadow: "0 22px 56px -40px rgba(20,22,25,0.2)" }}>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 18, color: COLORS.ink, margin: "0 0 8px" }}>{item.q}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaBand
        kicker="Comece pelo diagnóstico"
        title="Vamos olhar a sua tecnologia com clareza?"
        text="Uma conversa inicial para entender o seu cenário e apontar onde a tecnologia pode destravar resultado no seu negócio."
        bullets={[
          "Mapeamos o seu cenário antes de recomendar",
          "Plano priorizado por retorno, não por custo",
          "Quem diagnostica é quem executa",
        ]}
      />
    </main>
  );
}
