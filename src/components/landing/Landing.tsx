import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import creatorsLogo from "@/assets/creators-logo.png";
import {
  ArrowRight,
  ArrowUpRight,
  Layout,
  Sparkles,
  Database,
  Cloud,
  Plug,
  FolderTree,
  Check,
  Users,
  Network,
  Target,
  Menu,
  X,
} from "lucide-react";

const CHECKOUT_URL = "https://go.ironpayapp.com.br/csiv1eemwe";

// Subtle film grain (base64 SVG turbulence) — the premium texture layer.
const GRAIN =
  "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: easeOut },
};

function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "200px 200px" }}
    />
  );
}

function MeshBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#1a1a1a]">
      <div
        className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-70 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e85d3a 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[640px] w-[640px] rounded-full opacity-50 blur-[140px]"
        style={{ background: "radial-gradient(circle, #f2a58a 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-[140px]"
        style={{ background: "radial-gradient(circle, #6b3520 0%, transparent 65%)" }}
      />
    </div>
  );
}

function PrimaryCTA({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-8 py-4 text-[15px]" : "px-6 py-3 text-sm";
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#e85d3a] font-semibold text-[#1a1a1a] shadow-[0_20px_60px_-20px_rgba(232,93,58,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-15px_rgba(232,93,58,0.8),inset_0_1px_0_rgba(255,255,255,0.45)] ${pad} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-70"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.25), transparent 40%)" }}
      />
      <span className="relative">{children}</span>
      <ArrowRight
        size={16}
        className="relative transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}

function GhostCTA({
  children,
  href = "#aprende",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#aprende", label: "O que você aprende" },
    { href: "#ferramentas", label: "Ferramentas" },
    { href: "#bonus", label: "Bônus" },
    { href: "#comunidade", label: "Comunidade" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#1a1a1a]/70 backdrop-blur-2xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={creatorsLogo}
            alt="Creators"
            className="h-14 w-auto select-none md:h-16"
            draggable={false}
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <PrimaryCTA>Entrar Agora</PrimaryCTA>
        </div>
        <button
          className="text-white/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#1a1a1a]/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70"
              >
                {l.label}
              </a>
            ))}
            <PrimaryCTA className="w-full">Entrar Agora</PrimaryCTA>
          </div>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
      <span className="h-1 w-1 rounded-full bg-[#e85d3a]" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...fadeUp}>
          <Eyebrow>
            <Sparkles size={11} /> Comunidade Creators
          </Eyebrow>
          <h1 className="mt-6 font-display text-[46px] leading-[1.02] tracking-tight text-white md:text-[68px]">
            Aprenda a criar sites com{" "}
            <em className="not-italic bg-gradient-to-br from-[#e85d3a] to-[#f2a58a] bg-clip-text text-transparent">
              IA
            </em>{" "}
            e transforme essa habilidade em um{" "}
            <em className="italic text-[#e85d3a]">serviço</em>.
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/65">
            Domine o Lovable do zero ao profissional, desenvolva aplicações completas com banco de
            dados, publique seus projetos e aprenda uma metodologia prática para oferecer esse
            serviço a empresas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryCTA size="lg">Entrar para a Comunidade</PrimaryCTA>
            <GhostCTA>Ver Conteúdo</GhostCTA>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/40">
            <span>Lovable</span>
            <span className="h-px flex-1 bg-white/10" />
            <span>Supabase</span>
            <span className="h-px flex-1 bg-white/10" />
            <span>IA</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}

function HeroCanvas() {
  return (
    <div className="relative mx-auto aspect-[5/5] w-full max-w-lg">
      <div
        className="absolute inset-6 rounded-[32px] border border-white/10"
        style={{
          background:
            "linear-gradient(160deg, rgba(45,45,45,0.9) 0%, rgba(26,26,26,0.9) 100%)",
          boxShadow:
            "0 60px 120px -40px rgba(232,93,58,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-6 rounded-[32px] opacity-40"
        style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "180px 180px" }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-3 top-10 w-[72%] rounded-2xl border border-white/10 bg-[#0f0f0f]/80 p-4 backdrop-blur-xl"
        style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e85d3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="mt-4 space-y-1.5 font-mono text-[11px] leading-relaxed">
          <div className="text-white/40">// creators.tsx</div>
          <div className="text-[#f2a58a]">
            const <span className="text-white">site</span> = createWith(
            <span className="text-[#e85d3a]">"AI"</span>);
          </div>
          <div className="text-white/40">// deploy em minutos</div>
          <div className="text-[#f2a58a]">
            await <span className="text-white">site.publish()</span>;
          </div>
          <div className="h-1.5 w-2/3 rounded bg-white/5" />
          <div className="h-1.5 w-1/2 rounded bg-white/5" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-32 w-[58%] rounded-2xl border border-white/10 bg-[#0f0f0f]/80 p-4 backdrop-blur-xl"
        style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/90">Projetos</span>
          <span className="rounded-full border border-[#e85d3a]/40 bg-[#e85d3a]/10 px-2 py-0.5 text-[10px] font-medium text-[#f2a58a]">
            Live
          </span>
        </div>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 92, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: "linear-gradient(180deg, #e85d3a, #6b3520)",
                opacity: 0.7 + i * 0.04,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0f0f0f]/85 px-4 py-3 backdrop-blur-xl"
        style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#e85d3a] to-[#6b3520] text-white ring-1 ring-white/10">
          <Sparkles size={16} />
        </div>
        <div>
          <div className="text-xs font-medium text-white">Componente gerado</div>
          <div className="text-[10px] text-white/50">via IA · pronto para publicar</div>
        </div>
      </motion.div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-white/60">{description}</p>
        )}
      </motion.div>
      <div className="mt-16">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section
      eyebrow="Sobre"
      title={
        <>
          O que é a <em className="italic text-[#e85d3a]">Creators</em>
        </>
      }
      description="Uma comunidade voltada para quem deseja aprender a criar sites e aplicações modernas utilizando inteligência artificial, com foco em projetos reais e desenvolvimento de habilidades práticas."
    >
      <motion.p {...fadeUp} className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/55">
        O objetivo é reunir pessoas interessadas em evoluir, compartilhar conhecimento e construir
        soluções profissionais.
      </motion.p>
    </Section>
  );
}

const learnCards = [
  {
    icon: Layout,
    title: "Sites profissionais",
    items: ["Landing Pages", "Sites Institucionais", "Portfólios", "Páginas de vendas"],
  },
  {
    icon: Sparkles,
    title: "Lovable do Zero",
    items: ["Estrutura", "Prompt Engineering", "Boas práticas", "Fluxos de desenvolvimento"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    items: ["Supabase", "Autenticação", "CRUD", "Relacionamentos", "Boas práticas"],
  },
  {
    icon: Cloud,
    title: "Hospedagem",
    items: ["Deploy", "Domínio", "SSL", "Publicação", "Versionamento"],
  },
  {
    icon: Plug,
    title: "Integrações",
    items: ["WhatsApp", "Formulários", "APIs", "Automações"],
  },
  {
    icon: FolderTree,
    title: "Organização de Projetos",
    items: ["Estrutura profissional", "Componentização", "Escalabilidade"],
  },
];

function LearnCard({
  icon: Icon,
  title,
  items,
  index,
}: {
  icon: typeof Layout;
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: easeOut }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 backdrop-blur-xl"
      style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "180px 180px" }}
      />
      <div className="relative">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e85d3a]/30 bg-gradient-to-br from-[#e85d3a]/20 to-transparent text-[#e85d3a] transition-all group-hover:scale-105">
          <Icon size={20} />
        </div>
        <h3 className="font-display text-2xl leading-snug text-white">{title}</h3>
        <ul className="mt-4 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2.5 text-sm text-white/60">
              <span className="h-1 w-1 rounded-full bg-[#e85d3a]" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Learn() {
  return (
    <Section id="aprende" eyebrow="Conteúdo" title="O que você vai aprender">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {learnCards.map((c, i) => (
          <LearnCard key={c.title} {...c} index={i} />
        ))}
      </div>
    </Section>
  );
}

const steps = [
  "Entender o Lovable",
  "Criar interfaces profissionais",
  "Adicionar funcionalidades",
  "Conectar banco de dados",
  "Publicar o projeto",
  "Aprender como oferecer esse serviço para clientes",
];

function Method() {
  return (
    <Section eyebrow="Método" title="Do zero ao projeto entregue">
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-white/10 pl-8">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-[#e85d3a]/40 bg-[#1a1a1a] font-display text-sm text-[#e85d3a] ring-4 ring-[#1a1a1a]">
                {i + 1}
              </span>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 backdrop-blur-xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e85d3a]/80">
                  Passo {i + 1}
                </div>
                <div className="mt-1 font-display text-xl leading-snug text-white">{s}</div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Bonus() {
  return (
    <section id="bonus" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-[28px] border border-white/10 p-10 md:p-16"
        style={{
          background:
            "linear-gradient(135deg, #2d1810 0%, #1a1a1a 55%, #3b1d10 100%)",
          boxShadow:
            "0 60px 120px -40px rgba(232,93,58,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "200px 200px" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, #e85d3a 0%, transparent 60%)" }}
        />
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e85d3a]/40 bg-[#e85d3a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f2a58a]">
              <Sparkles size={12} /> Bônus Exclusivo
            </span>
            <h3 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
              Tudo <em className="italic text-[#e85d3a]">incluído</em> na comunidade
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Ao entrar na Creators, você recebe acesso gratuito ao{" "}
              <span className="text-white">LeadHunter</span> (prospectador de leads) e à{" "}
              <span className="text-white">Extensão Lovable Ilimitado</span> — sem custo
              adicional, apenas por ser membro da comunidade.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Acesso completo ao LeadHunter",
                "Extensão Lovable Ilimitado sem consumo de créditos",
                "Atualizações e novas ferramentas incluídas",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-white/75">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-[#e85d3a]/40 bg-[#e85d3a]/15 text-[#e85d3a]">
                    <Check size={12} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <PrimaryCTA size="lg">Quero os bônus</PrimaryCTA>
        </div>
      </motion.div>
    </section>
  );
}

function Community() {
  const cards = [
    {
      icon: Users,
      title: "Grupo de Suporte",
      text: "Espaço dedicado para dúvidas técnicas, troca de conhecimento e auxílio durante o desenvolvimento dos projetos.",
    },
    {
      icon: Network,
      title: "Networking VIP",
      text: "Ambiente reservado para conectar desenvolvedores, compartilhar oportunidades, discutir projetos e criar parcerias profissionais.",
    },
  ];
  return (
    <Section id="comunidade" eyebrow="Comunidade" title="Um ambiente para evoluir">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl"
            style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "180px 180px" }}
            />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#e85d3a]/30 bg-gradient-to-br from-[#e85d3a]/20 to-transparent text-[#e85d3a]">
                <c.icon size={22} />
              </div>
              <h3 className="font-display text-2xl text-white">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">{c.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ForWho() {
  return _ForWho();
}

function Tools() {
  const tools = [
    {
      icon: Target,
      name: "LeadHunter",
      description:
        "Prospectador inteligente para encontrar leads qualificados e acelerar sua captação de clientes.",
      href: "#",
      cta: "Acessar LeadHunter",
      badge: "Acesso avulso",
    },
    {
      icon: Sparkles,
      name: "Extensão Lovable Ilimitado",
      description:
        "Extensão que libera o uso ilimitado do Lovable, sem consumir créditos.",
      href: "https://ilimitadolovable.lovable.app",
      cta: "Acessar Ferramenta",
      badge: "Acesso avulso",
    },
  ];
  return (
    <Section
      id="ferramentas"
      eyebrow="Ferramentas"
      title="Ferramentas avulsas"
      description="Não quer entrar na comunidade? Você também pode adquirir o acesso individual a cada uma das ferramentas."
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-1">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
            className="relative overflow-hidden rounded-2xl border border-white/10 p-8 backdrop-blur-xl md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,24,16,0.9) 0%, rgba(26,26,26,0.9) 60%, rgba(59,29,16,0.9) 100%)",
              boxShadow:
                "0 40px 90px -30px rgba(232,93,58,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "200px 200px" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, #e85d3a 0%, transparent 60%)" }}
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#e85d3a]/30 bg-gradient-to-br from-[#e85d3a]/25 to-transparent text-[#e85d3a]">
                  <t.icon size={26} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl leading-snug text-white md:text-3xl">
                      {t.name}
                    </h3>
                    <span className="rounded-full border border-[#e85d3a]/40 bg-[#e85d3a]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f2a58a]">
                      {t.badge}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/65">
                    {t.description}
                  </p>
                </div>
              </div>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e85d3a] px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] shadow-[0_20px_60px_-20px_rgba(232,93,58,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-15px_rgba(232,93,58,0.8),inset_0_1px_0_rgba(255,255,255,0.45)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-70"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.25), transparent 40%)" }}
                />
                <span className="relative">{t.cta}</span>
                <ArrowUpRight size={16} className="relative transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function _ForWho() {
  const items = [
    "Quem quer aprender uma habilidade digital prática",
    "Iniciantes interessados em IA e desenvolvimento",
    "Freelancers",
    "Designers",
    "Empreendedores",
    "Pessoas que desejam criar sites modernos",
    "Quem busca estruturar projetos completos",
  ];
  return (
    <Section eyebrow="Público" title="Para quem é a Creators">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 backdrop-blur-xl"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full border border-[#e85d3a]/40 bg-[#e85d3a]/15 text-[#e85d3a]">
              <Check size={13} />
            </span>
            <span className="text-sm text-white/85">{it}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Differentials() {
  const items = [
    "Aprendizado baseado em projetos reais",
    "Conteúdo atualizado",
    "Comunidade ativa",
    "Foco em desenvolvimento prático",
    "Orientação sobre estrutura completa dos projetos",
    "Material organizado por etapas",
    "Bônus exclusivo incluído",
  ];
  return (
    <Section eyebrow="Diferenciais" title="O que diferencia a Creators">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-xl"
          >
            <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-[#e85d3a]" />
            <span className="text-sm text-white/85">{t}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Preciso saber programar?",
      a: "O Lovable faz grande parte do trabalho, e a comunidade ensina como estruturar os projetos utilizando a ferramenta.",
    },
    {
      q: "Como acesso o bônus?",
      a: "Após entrar na comunidade, as instruções de acesso estarão disponíveis na área de membros.",
    },
    {
      q: "O conteúdo é atualizado?",
      a: "Sim, novos conteúdos podem ser adicionados conforme a evolução das ferramentas e das práticas ensinadas.",
    },
    {
      q: "Como funciona a comunidade?",
      a: "Os membros têm acesso ao conteúdo, ao grupo de suporte para dúvidas e ao espaço de networking.",
    },
  ];
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas frequentes">
      <div className="mx-auto max-w-2xl space-y-3">
        {items.map((it, i) => (
          <motion.details
            key={it.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl open:border-[#e85d3a]/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-white">
              {it.q}
              <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/60 transition-transform group-open:rotate-45 group-open:border-[#e85d3a] group-open:text-[#e85d3a]">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{it.a}</p>
          </motion.details>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-[32px] border border-white/10 p-12 text-center md:p-20"
        style={{
          background:
            "radial-gradient(80% 100% at 50% 0%, rgba(232,93,58,0.18) 0%, transparent 55%), linear-gradient(180deg, #1f1310 0%, #1a1a1a 100%)",
          boxShadow: "0 80px 140px -40px rgba(232,93,58,0.3)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "220px 220px" }}
        />
        <div className="relative">
          <Eyebrow>Comece agora</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Comece hoje a desenvolver projetos profissionais utilizando{" "}
            <em className="italic text-[#e85d3a]">IA</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
            Tenha acesso ao conteúdo da comunidade, aos materiais organizados, ao suporte e ao
            bônus exclusivo da extensão Lovable Unlimited.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA size="lg">Entrar para a Comunidade</PrimaryCTA>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <img
          src={creatorsLogo}
          alt="Creators"
          className="h-12 w-auto select-none"
          draggable={false}
        />
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Contato</a>
        </nav>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Creators
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a1a1a] font-sans text-white antialiased">
      <MeshBackdrop />
      <GrainOverlay />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Learn />
          <Method />
          <Tools />
          <Bonus />
          <Community />
          <ForWho />
          <Differentials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}