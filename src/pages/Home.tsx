import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/shared/Reveal";
import Marquee from "@/components/shared/Marquee";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import AmbientBackdrop from "@/components/shared/AmbientBackdrop";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import CadernoCafeSection from "@/components/shared/CadernoCafeSection";
import CTASection from "@/components/shared/CTASection";
import { RESPONDI_URL, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import emporioSjfPreview from "@/assets/cases/emporio-sjf.png";
import transagroPreview from "@/assets/cases/fazenda-transagro.png";
import transagroLogo from "@/assets/cases/transagro-logo.jpg";
import emporioLogo from "@/assets/cases/emporio-logo.png";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ClipboardList,
  Code2,
  ExternalLink,
  FileCheck2,
  Hammer,
  Leaf,
  LineChart,
  Lightbulb,
  MessageCircle,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Diagnóstico & Estratégia",
    description: "Mapeamos processos agro e financeiros para desenhar o sistema certo.",
  },
  {
    icon: Code2,
    title: "Software sob medida",
    description: "Aplicações web e mobile com arquitetura pronta para evoluir.",
  },
  {
    icon: Brain,
    title: "Agentes de IA",
    description: "Automatização de rotinas e apoio à decisão com dados confiáveis.",
  },
  {
    icon: RefreshCw,
    title: "Modernização de software",
    description: "Refatoração e migração com foco em continuidade e governança.",
  },
  {
    icon: Users,
    title: "Squads dedicadas",
    description: "Times dedicados com escopo fechado e gestão técnica.",
  },
];

const diferenciais = [
  { label: "Especialização Agro", veratio: true, agencia: false, freelancer: false, fabrica: false },
  { label: "Escopo fechado", veratio: true, agencia: "Parcial", freelancer: false, fabrica: true },
  { label: "Responsabilidade técnica", veratio: true, agencia: "Terceiriza", freelancer: "1 pessoa", fabrica: "Varia" },
  { label: "Comunicação direta", veratio: true, agencia: false, freelancer: true, fabrica: false },
  { label: "SaaS e produtos próprios", veratio: true, agencia: false, freelancer: false, fabrica: false },
];

type DiferencialValue = boolean | string;

const DiferencialCell = ({ value }: { value: DiferencialValue }) => {
  if (value === true) return <span className="text-veratio-blue font-semibold">✓</span>;
  if (value === false) return <span className="text-muted-foreground/40">✗</span>;
  return <span className="text-muted-foreground text-sm">{value}</span>;
};

const stats = [
  { value: 40, suffix: "+", label: "anos combinados de experiência em agro" },
  { value: 100, suffix: "%", label: "dos projetos entregues com escopo fechado" },
  { value: 2, suffix: "+", label: "cases publicados em produção" },
  { value: 24, suffix: "h", label: "resposta inicial ao diagnóstico" },
];

const Home = () => {
  return (
    <Layout>
      {/* ============================================================
         HERO
      ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <AmbientBackdrop variant="light" />

        <div className="container relative mx-auto z-10">
          <div className="max-w-5xl">
            <Reveal delay={0}>
              <SectionLabel>Agro · Financeiro · IA</SectionLabel>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <h1 className="text-display-xl text-veratio-navy dark:text-foreground">
                Software que faz <br className="hidden md:block" />
                o agro{" "}
                <span className="text-gradient-blue italic">crescer</span> <br className="hidden md:block" />
                sem perder o controle.
              </h1>
            </Reveal>

            <Reveal delay={180} className="mt-10 max-w-2xl">
              <p className="text-lg md:text-xl text-veratio-gray dark:text-muted-foreground leading-snug">
                Sistemas sob medida, SaaS e automações inteligentes para gestores que precisam de
                dados confiáveis, processos integrados e entregas sem surpresa.
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MagneticButton strength={0.25}>
                <Button
                  asChild
                  className="group h-14 rounded-pill bg-veratio-navy px-8 text-[15px] font-medium text-white shadow-veratio-md hover:bg-veratio-blue hover:shadow-veratio-glow transition-all duration-300 dark:bg-veratio-blue dark:hover:bg-veratio-light-blue"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar com especialista
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Button>
              </MagneticButton>

              <Button
                asChild
                variant="ghost"
                className="group h-14 rounded-pill px-6 text-[15px] font-medium text-veratio-navy hover:bg-muted dark:text-foreground"
              >
                <a href="#cases">
                  Ver cases
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </Reveal>

            <Reveal delay={380} className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
              {["Escopo fechado", "Time interno", "Diagnóstico gratuito"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-veratio-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
         MARQUEE — keywords / identidade
      ============================================================ */}
      <section className="relative border-y border-border py-10 overflow-hidden bg-veratio-bg-gray/50 dark:bg-muted/30">
        <Marquee speed="normal" fade>
          {[
            "Agro",
            "Financeiro",
            "Software sob medida",
            "Agentes de IA",
            "Squads dedicadas",
            "Modernização",
            "Dados confiáveis",
            "Escopo fechado",
          ].map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-display-sm text-veratio-navy/40 dark:text-foreground/30 font-medium whitespace-nowrap">
                {word}
              </span>
              <Sparkles className="h-5 w-5 text-veratio-blue" strokeWidth={1.5} />
            </div>
          ))}
        </Marquee>
      </section>

      {/* ============================================================
         CLIENTS
      ============================================================ */}
      <section className="py-12 lg:py-18 bg-background">
        <div className="container mx-auto">
          <Reveal>
            <p className="text-eyebrow text-veratio-gray text-center mb-14">
              Empresas que confiam na Veratio Tech
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32">
            {[
              { logo: transagroLogo, name: "Fazenda Transagro S.A.", caption: "Cafeicultura de precisão · Rio Paranaíba, MG" },
              { logo: emporioLogo, name: "Empório SJF", caption: "E-commerce de cafés especiais" },
            ].map((client, i) => (
              <Reveal key={client.name} delay={i * 100} variant="scale">
                <div className="group flex flex-col items-center gap-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 lg:h-28 w-auto object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <p className="text-sm text-veratio-gray">{client.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         VALUE PROPOSITION
      ============================================================ */}
      <section className="relative py-14 lg:py-24 bg-veratio-bg-gray/60 dark:bg-muted/20 overflow-hidden">
        <div className="container mx-auto">
          <Reveal className="max-w-3xl mb-20">
            <SectionLabel>Por que existimos</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              O agro tem complexidade real.<br />
              O software precisa <span className="text-gradient-blue italic">acompanhar.</span>
            </h2>
            <p className="mt-8 text-xl text-veratio-gray dark:text-muted-foreground max-w-2xl leading-relaxed">
              Campo, escritório e financeiro conectados — sem planilha, sem retrabalho, sem dado perdido.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Processos integrados",
                text: "Campo, escritório e financeiro conectados em um único fluxo de dados. Sem planilha paralela, sem retrabalho.",
                icon: ClipboardList,
              },
              {
                title: "Governança e segurança",
                text: "Arquitetura preparada para auditoria, controle e compliance desde o primeiro dia.",
                icon: ShieldCheck,
              },
              {
                title: "Decisão orientada a dados",
                text: "Dashboards operacionais e indicadores que mostram o que está acontecendo — não o que você acha que está.",
                icon: LineChart,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="group relative h-full p-8 rounded-3xl bg-white dark:bg-card border border-border overflow-hidden transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-veratio-xl hover:border-veratio-blue/40">
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-veratio-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-veratio-blue/10 text-veratio-blue mb-5 transition-all duration-500 group-hover:bg-veratio-blue group-hover:text-white group-hover:scale-110">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl text-veratio-navy dark:text-foreground mb-2">{item.title}</h3>
                    <p className="text-[14px] text-veratio-gray dark:text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         STATS
      ============================================================ */}
      <section className="relative py-12 lg:py-18 bg-veratio-navy text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-[0.4]" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-veratio-blue/20 blur-[120px] animate-blob" aria-hidden="true" />

        <div className="container relative mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="text-display-lg text-white font-display font-medium">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-sm text-white/60 max-w-[200px] leading-relaxed">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         SERVICES
      ============================================================ */}
      <section id="solucoes" className="scroll-mt-28 py-14 lg:py-24 bg-background">
        <div className="container mx-auto">
          <Reveal className="max-w-3xl mb-20">
            <SectionLabel>O que entregamos</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              Soluções técnicas <span className="text-gradient-blue italic">para operar</span>,
              integrar e evoluir.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 100}
                className={cn(
                  "lg:col-span-2",
                  i === 3 && "lg:col-start-2",
                )}
              >
                <div
                  className={cn(
                    "group relative block h-full overflow-hidden rounded-3xl border border-border bg-white dark:bg-card p-8 transition-all duration-500 ease-out-expo",
                    "hover:-translate-y-1 hover:border-veratio-navy/30 hover:shadow-veratio-xl",
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-veratio-blue/0 via-veratio-blue/0 to-veratio-blue/0 group-hover:from-veratio-blue/5 group-hover:to-veratio-blue/0 transition-all duration-700"
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-veratio-blue/10 text-veratio-blue transition-all duration-500 group-hover:bg-veratio-blue group-hover:text-white group-hover:scale-110">
                      <service.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-xl text-veratio-navy dark:text-foreground">{service.title}</h3>
                    <p className="mt-2 text-[14px] text-veratio-gray dark:text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center" delay={200}>
            <a
              href={RESPONDI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-pill border border-border px-7 py-3 text-[15px] font-medium text-veratio-navy transition-all duration-300 hover:bg-veratio-navy hover:text-white hover:border-veratio-navy dark:text-foreground"
            >
              Quero discutir minha operação
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
         PROCESS
      ============================================================ */}
      <section id="processo" className="scroll-mt-28 relative py-14 lg:py-24 bg-veratio-bg-gray/60 dark:bg-muted/20 overflow-hidden">
        <div className="container mx-auto">
          <Reveal className="max-w-3xl mb-20">
            <SectionLabel>Como trabalhamos</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              Sem mistério, <br />
              <span className="text-gradient-blue italic">sem surpresa.</span>
            </h2>
            <p className="mt-8 text-xl text-veratio-gray dark:text-muted-foreground leading-relaxed">
              Escopo claro, marcos acordados, comunicação semanal. Do diagnóstico ao deploy.
            </p>
          </Reveal>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="pointer-events-none hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-veratio-blue/40 to-transparent"
              aria-hidden="true"
            />

            {[
              { step: "01", icon: Search, title: "Diagnóstico", text: "Mapeamos processos, dados e metas do agro/financeiro." },
              { step: "02", icon: FileCheck2, title: "Escopo fechado", text: "Definimos o que será entregue, quando e por quanto." },
              { step: "03", icon: Hammer, title: "Construção", text: "Sprints com qualidade técnica e alinhamento semanal." },
              { step: "04", icon: Rocket, title: "Evolução", text: "Melhorias contínuas e suporte pós-entrega." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="group relative p-8 rounded-3xl bg-white dark:bg-card border border-border transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-veratio-lg">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-veratio-blue/10 text-veratio-blue transition-all duration-500 group-hover:bg-veratio-blue group-hover:text-white group-hover:scale-110">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display font-medium text-sm text-veratio-blue/70">{item.step}</span>
                  </div>
                  <h3 className="mt-5 text-xl text-veratio-navy dark:text-foreground">{item.title}</h3>
                  <p className="mt-2 text-[14px] text-veratio-gray dark:text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         DIFERENCIAIS (table)
      ============================================================ */}
      <section className="py-14 lg:py-24 bg-background">
        <div className="container mx-auto">
          <Reveal className="max-w-3xl mb-16 text-center mx-auto">
            <SectionLabel className="mx-auto">Por que Veratio Tech</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              Não somos agência. <br />
              Não somos freelancer. <br />
              Não somos fábrica.
            </h2>
          </Reveal>

          <Reveal className="max-w-5xl mx-auto" variant="scale">
            <div className="overflow-x-auto rounded-3xl border border-border bg-white dark:bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-6 px-6 text-veratio-gray font-medium min-w-[200px]"></th>
                    <th className="text-center py-6 px-6 text-veratio-blue font-bold min-w-[120px] bg-veratio-blue/5">Veratio Tech</th>
                    <th className="text-center py-6 px-6 text-veratio-gray font-medium min-w-[100px]">Agência</th>
                    <th className="text-center py-6 px-6 text-veratio-gray font-medium min-w-[120px]">Freelancer</th>
                    <th className="text-center py-6 px-6 text-veratio-gray font-medium min-w-[120px]">Fábrica</th>
                  </tr>
                </thead>
                <tbody>
                  {diferenciais.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors duration-200">
                      <td className="py-5 px-6 text-veratio-navy dark:text-foreground font-medium">{row.label}</td>
                      <td className="py-5 px-6 text-center bg-veratio-blue/5"><DiferencialCell value={row.veratio} /></td>
                      <td className="py-5 px-6 text-center"><DiferencialCell value={row.agencia} /></td>
                      <td className="py-5 px-6 text-center"><DiferencialCell value={row.freelancer} /></td>
                      <td className="py-5 px-6 text-center"><DiferencialCell value={row.fabrica} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
         CASES — header
      ============================================================ */}
      <section id="cases" className="scroll-mt-28 py-14 lg:py-20 bg-veratio-bg-gray/60 dark:bg-muted/20">
        <div className="container mx-auto">
          <Reveal className="max-w-4xl">
            <SectionLabel>Cases de sucesso</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              Projetos reais que <br className="hidden md:block" />
              <span className="text-gradient-blue italic">validam</span> nossa entrega.
            </h2>
            <p className="mt-8 text-xl text-veratio-gray dark:text-muted-foreground max-w-2xl leading-relaxed">
              Entregas que validam nossa forma de trabalhar no Agro e em Operações Comerciais — do
              diagnóstico ao deploy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
         CASE 1 — Fazenda Transagro
      ============================================================ */}
      <section className="pb-16 lg:pb-24 bg-veratio-bg-gray/60 dark:bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-white dark:bg-card">
                {/* Header */}
                <div className="relative bg-veratio-navy text-white p-10 lg:p-16 overflow-hidden">
                  <div className="absolute inset-0 dot-grid-white opacity-[0.35]" aria-hidden="true" />
                  <div
                    className="absolute -top-20 -right-20 h-[340px] w-[340px] rounded-full bg-veratio-blue/30 blur-[120px] animate-blob"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 rounded-pill border border-white/20 bg-white/5 px-3 py-1 text-eyebrow text-white/80">
                        <Leaf className="h-3 w-3" /> Agro
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-pill border border-white/20 bg-white/5 px-3 py-1 text-eyebrow text-white/80">
                        <Sparkles className="h-3 w-3" /> Presença Digital
                      </span>
                    </div>

                    <h2 className="text-display-md text-white">Fazenda Transagro S.A.</h2>
                    <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
                      Site institucional para cafeicultura de precisão com 40 anos de tradição.
                    </p>
                    <a
                      href="https://fazendatransagro-sa.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 rounded-pill bg-white/10 border border-white/20 px-5 py-2 text-sm text-white/80 hover:bg-white hover:text-veratio-navy transition-all duration-300"
                    >
                      fazendatransagro-sa.com.br
                      <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 lg:p-16">
                  <Reveal>
                    <a
                      href="https://fazendatransagro-sa.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-16 overflow-hidden rounded-2xl border border-border"
                    >
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={transagroPreview}
                          alt="Prévia do site da Fazenda Transagro S.A."
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </a>
                  </Reveal>

                  <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <Reveal>
                      <p className="text-eyebrow text-veratio-blue mb-4">Contexto</p>
                      <p className="text-lg text-veratio-gray dark:text-muted-foreground leading-relaxed">
                        A Fazenda Transagro S.A. é uma das fazendas de café de alta performance do
                        Brasil, fundada em 1984. Opera com agricultura de precisão — monitoramento
                        por satélite, irrigação inteligente e rastreabilidade total. Com décadas de
                        credibilidade no mercado cafeeiro, a empresa não tinha uma presença digital
                        que refletisse esse nível de operação.
                      </p>
                    </Reveal>
                    <Reveal delay={120}>
                      <p className="text-eyebrow text-veratio-blue mb-4">Problema</p>
                      <ul className="space-y-3">
                        {[
                          "Site desatualizado sem responsividade adequada",
                          "Narrativa que não comunicava a sofisticação técnica da operação",
                          "Nenhuma estrutura para captação de parceiros comerciais",
                          "Diferenciais ambientais e tecnológicos invisíveis para o mercado",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] text-veratio-gray dark:text-muted-foreground">
                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs flex-shrink-0">
                              ×
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>

                  <Reveal className="mb-16">
                    <p className="text-eyebrow text-veratio-blue mb-6">Solução aplicada</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Narrativa estratégica que comunica 40+ anos de tradição com autoridade",
                        "Arquitetura de conteúdo em 4 etapas operacionais (Planejamento → Cultivo → Colheita → Distribuição)",
                        "Seção de parcerias para captação de compradores, fornecedores e talentos",
                        "Design responsivo mobile-first alinhado à identidade visual da fazenda",
                        "Performance otimizada para carregamento rápido mesmo em conexões rurais",
                        "SEO on-page estruturado com foco em cafeicultura de precisão",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 p-5 rounded-2xl bg-veratio-bg-gray/60 dark:bg-muted/30 border border-border"
                        >
                          <CheckCircle2 className="h-5 w-5 text-veratio-blue mt-0.5 flex-shrink-0" />
                          <span className="text-[14px] text-veratio-gray dark:text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <Reveal>
                      <p className="text-eyebrow text-veratio-blue mb-4">Tecnologias</p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Vite", "Tailwind CSS", "Vercel", "SEO Estruturado"].map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-pill bg-veratio-navy/5 border border-veratio-navy/10 px-3 py-1 text-xs font-medium text-veratio-navy dark:bg-muted dark:text-foreground dark:border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                    <Reveal delay={100}>
                      <p className="text-eyebrow text-veratio-blue mb-4">Resultados</p>
                      <ul className="space-y-2">
                        {[
                          "Carregamento < 2s — Core Web Vitals aprovados",
                          "100% responsivo em mobile e tablet",
                          "3 CTAs de conversão para parceiros e contato",
                          "Presença digital alinhada ao padrão corporativo",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[15px] text-veratio-gray dark:text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-veratio-blue mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>

                  <Reveal>
                    <div className="p-8 lg:p-10 rounded-2xl bg-veratio-navy text-white relative overflow-hidden">
                      <div className="absolute inset-0 dot-grid-white opacity-[0.35]" aria-hidden="true" />
                      <div className="relative">
                        <p className="text-5xl font-display font-medium text-veratio-light-blue leading-none">"</p>
                        <p className="mt-2 text-lg md:text-xl text-white/85 leading-relaxed italic">
                          O site agora representa quem a Fazenda Transagro realmente é — uma operação
                          de excelência com tecnologia e tradição.
                        </p>
                        <p className="mt-6 text-sm text-white/70">
                          Fazenda Transagro S.A. · Rio Paranaíba, MG
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
         CASE 2 — Empório SJF
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-white dark:bg-card">
                {/* Header */}
                <div className="p-10 lg:p-16 border-b border-border">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-pill bg-muted px-3 py-1 text-eyebrow text-muted-foreground">
                      <ShoppingCart className="h-3 w-3" /> Comercial
                    </span>
                    <span className="inline-flex items-center rounded-pill bg-muted px-3 py-1 text-eyebrow text-muted-foreground">
                      E-commerce
                    </span>
                  </div>
                  <h2 className="text-display-md text-veratio-navy dark:text-foreground">Empório SJF</h2>
                  <p className="mt-4 text-lg md:text-xl text-veratio-gray dark:text-muted-foreground max-w-2xl leading-relaxed">
                    E-commerce para cafés especiais e itens artesanais, com operação simples.
                  </p>
                </div>

                {/* Body */}
                <div className="p-8 lg:p-16">
                  <Reveal>
                    <a
                      href="https://emporiosjf.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-16 overflow-hidden rounded-2xl border border-border"
                    >
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={emporioSjfPreview}
                          alt="Prévia do site do Empório SJF"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </a>
                  </Reveal>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <Reveal>
                      <p className="text-eyebrow text-veratio-blue mb-4">Objetivo</p>
                      <p className="text-lg text-veratio-gray dark:text-muted-foreground leading-relaxed">
                        Criar um e-commerce com navegação objetiva, foco em conversão e comunicação
                        clara de oferta. O projeto valida nossa capacidade de entrega end-to-end em
                        operações comerciais.
                      </p>
                    </Reveal>
                    <Reveal delay={120}>
                      <p className="text-eyebrow text-veratio-blue mb-4">Entregues</p>
                      <ul className="space-y-2">
                        {[
                          "Catálogo de produtos com filtros e busca",
                          "Checkout otimizado para mobile",
                          "Identidade visual integrada à marca",
                          "Performance e SEO on-page",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[15px] text-veratio-gray dark:text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-veratio-blue mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>

                  <Reveal>
                    <a
                      href="https://emporiosjf.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl bg-veratio-bg-gray/60 dark:bg-muted/30 border border-border transition-all duration-500 hover:border-veratio-blue/40"
                    >
                      <div>
                        <p className="text-sm text-veratio-gray dark:text-muted-foreground mb-1">
                          Acesse o projeto
                        </p>
                        <span className="text-2xl md:text-3xl text-veratio-navy dark:text-foreground group-hover:text-veratio-blue transition-colors duration-300">
                          emporiosjf.com.br
                        </span>
                      </div>
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-pill border border-border text-veratio-navy transition-all duration-500 group-hover:bg-veratio-blue group-hover:text-white group-hover:border-veratio-blue group-hover:rotate-45 dark:text-foreground">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </a>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
         PROXIMO CASE
      ============================================================ */}
      <section className="pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto">
          <Reveal className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-border p-10 lg:p-16 text-center">
              <SectionLabel className="mx-auto">Próximo case</SectionLabel>
              <h3 className="mt-6 text-display-sm text-veratio-navy dark:text-foreground">
                Quer ver sua operação aqui?
              </h3>
              <p className="mt-4 text-lg text-veratio-gray dark:text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Vamos construir uma prova técnica relevante do seu lado.
              </p>
              <Button
                asChild
                className="mt-8 h-14 rounded-pill bg-veratio-navy px-8 text-[15px] font-medium text-white shadow-veratio-md hover:bg-veratio-blue hover:shadow-veratio-glow transition-all duration-300 dark:bg-veratio-blue dark:hover:bg-veratio-light-blue"
              >
                <a href={RESPONDI_URL} target="_blank" rel="noopener noreferrer">
                  Seja nosso próximo case
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
         CADERNO DO CAFÉ — produto próprio
      ============================================================ */}
      <CadernoCafeSection />

      {/* ============================================================
         TESTIMONIALS
      ============================================================ */}
      <section className="relative py-14 lg:py-24 bg-veratio-navy text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-[0.35]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-veratio-blue/15 blur-[140px] animate-blob" aria-hidden="true" />

        <div className="container relative mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <SectionLabel variant="light">Depoimentos</SectionLabel>
            <h2 className="text-display-lg text-white mt-6">
              Resultados reais,<br />
              <span className="text-gradient-blue italic">palavras reais.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                quote: "O site agora representa quem a Fazenda Transagro realmente é — uma operação de excelência com tecnologia e tradição.",
                name: "Fazenda Transagro S.A.",
                role: "Cafeicultura de precisão · Rio Paranaíba, MG",
              },
              {
                quote: "A Veratio entendeu nosso negócio antes de escrever a primeira linha de código. Resultado: uma plataforma que nossos clientes realmente usam.",
                name: "Empório SJF",
                role: "E-commerce de cafés especiais",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <div className="group h-full p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out-expo hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                  <div className="text-veratio-light-blue text-5xl font-display font-medium leading-none">"</div>
                  <p className="mt-2 text-xl text-white/85 leading-relaxed">{t.quote}</p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-white/50 text-sm mt-1">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         ABOUT (snapshot)
      ============================================================ */}
      <section id="sobre" className="scroll-mt-28 py-14 lg:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <Reveal className="lg:col-span-5">
              <SectionLabel>Quem somos</SectionLabel>
              <h2 className="text-display-md text-veratio-navy dark:text-foreground mt-6">
                Software house especializada no <span className="text-gradient-blue italic">Agro</span>.
              </h2>
            </Reveal>

            <Reveal className="lg:col-span-7 space-y-6 text-xl text-veratio-gray dark:text-muted-foreground leading-relaxed" delay={120}>
              <p>
                Com atuação em Financeiro e PMEs, construímos sistemas sob medida, produtos SaaS e
                automações inteligentes — sempre com foco em resolver problemas reais de negócio, não
                em entregar código por entrega.
              </p>
              <p>
                Nosso time une engenharia, produto e estratégia para transformar dados e processos
                complexos em soluções simples, eficientes e seguras.{" "}
                <strong className="text-veratio-navy dark:text-foreground font-medium">
                  Tecnologia só faz sentido quando gera clareza, controle e resultado.
                </strong>
              </p>
              <a
                href={RESPONDI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 pt-4 text-[15px] font-medium text-veratio-blue"
              >
                Quero falar com a Veratio Tech
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
         FAQ
      ============================================================ */}
      <section id="faq" className="scroll-mt-28 py-14 lg:py-24 bg-veratio-bg-gray/60 dark:bg-muted/20">
        <div className="container mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
              Respostas diretas, <br />
              <span className="text-gradient-blue italic">sem enrolação.</span>
            </h2>
          </Reveal>

          <Reveal className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: "Quanto custa um projeto?",
                  answer: "Depende do escopo. Projetos fechados com squad completo geralmente partem de um diagnóstico inicial sem custo. Depois disso, apresentamos uma proposta com valor, prazo e marcos. Fale com a gente para um número real.",
                },
                {
                  question: "Vocês atendem apenas Agro?",
                  answer: "O foco principal é Agro, com atuação secundária em Financeiro. Também atendemos PMEs com desafios similares de dados e operação.",
                },
                {
                  question: "Como garantem que o prazo vai ser cumprido?",
                  answer: "Trabalhamos com escopo fechado, marcos por sprint e relatório semanal. Se algo mudar, você sabe antes de nós — não depois.",
                },
                {
                  question: "Posso começar por um módulo só?",
                  answer: "Sim. Começamos pelo gargalo maior e evoluímos de forma incremental. Não é necessário contratar o sistema completo de uma vez.",
                },
                {
                  question: "Quem vai trabalhar no meu projeto?",
                  answer: "Time interno da Veratio Tech. Sem subcontratação terceirizada ou repasse para fornecedores externos.",
                },
                {
                  question: "Trabalham com projeto fechado?",
                  answer: "Sim. Em squads e projetos fechados, o valor depende do escopo, prazo e perfil do time necessário. Tudo acordado antes de começar.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-white dark:bg-card px-8 transition-all duration-300 hover:border-veratio-blue/40 data-[state=open]:border-veratio-blue/60 data-[state=open]:shadow-veratio-md"
                >
                  <AccordionTrigger className="text-left text-lg text-veratio-navy dark:text-foreground font-medium hover:no-underline py-6 group-data-[state=open]:text-veratio-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-veratio-gray dark:text-muted-foreground leading-relaxed text-[15px] pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
         FINAL CTA
      ============================================================ */}
      <CTASection />
    </Layout>
  );
};

export default Home;
