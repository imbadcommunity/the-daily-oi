import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layout,
  Sparkles,
  Database,
  Cloud,
  Plug,
  FolderTree,
  Check,
  Users,
  Network,
  Zap,
  Menu,
  X,
} from "lucide-react";

const CHECKOUT_URL = "https://go.ironpayapp.com.br/csiv1eemwe";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(124,58,237,0.7)] hover:-translate-y-0.5"
      : "border border-[#111111]/10 bg-white text-[#111111] hover:border-[#111111]/25";
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
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
    { href: "#bonus", label: "Bônus" },
    { href: "#comunidade", label: "Comunidade" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#111111]/5 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]" />
          <span className="text-lg font-extrabold tracking-tight text-[#111111]">Creators</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#666666] transition-colors hover:text-[#111111]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton>Entrar Agora</CTAButton>
        </div>
        <button
          className="md:hidden text-[#111111]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#111111]/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#666666]"
              >
                {l.label}
              </a>
            ))}
            <CTAButton className="w-full">Entrar Agora</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(124,58,237,0.10), transparent 60%), radial-gradient(50% 40% at 10% 10%, rgba(79,70,229,0.10), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white px-3 py-1 text-xs font-medium text-[#666666]">
            <Sparkles size={14} className="text-[#7C3AED]" />
            Comunidade Creators
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111111] md:text-6xl">
            Aprenda a criar sites com IA e transforme essa habilidade em um{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              serviço
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#666666]">
            Domine o Lovable do zero ao profissional, desenvolva aplicações completas com banco de
            dados, publique seus projetos e aprenda uma metodologia prática para oferecer esse
            serviço a empresas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton>
              Entrar para a Comunidade <ArrowRight size={16} />
            </CTAButton>
            <a
              href="#aprende"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111111]/10 bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-all hover:border-[#111111]/25"
            >
              Ver Conteúdo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-lg">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F46E5]/10 to-[#7C3AED]/10 blur-2xl" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-6 w-[70%] rounded-2xl border border-[#111111]/5 bg-white p-4 shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)]"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
        </div>
        <div className="mt-4 space-y-2 font-mono text-[11px] leading-relaxed">
          <div className="text-[#7C3AED]">
            const <span className="text-[#4F46E5]">site</span> = createWith(
            <span className="text-[#111111]">"AI"</span>);
          </div>
          <div className="text-[#666666]">// deploy em minutos</div>
          <div className="text-[#4F46E5]">
            await <span className="text-[#111111]">site.publish()</span>;
          </div>
          <div className="h-2 w-2/3 rounded bg-[#111111]/5" />
          <div className="h-2 w-1/2 rounded bg-[#111111]/5" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 top-24 w-[55%] rounded-2xl border border-[#111111]/5 bg-white p-4 shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#111111]">Dashboard</span>
          <span className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-2 py-0.5 text-[10px] font-medium text-white">
            Live
          </span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1">
          {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#4F46E5] to-[#7C3AED]"
              style={{ height: `${h}%`, opacity: 0.7 + i * 0.04 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-8 flex items-center gap-3 rounded-2xl border border-[#111111]/5 bg-white px-4 py-3 shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)]"
      >
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
          <Sparkles size={16} />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#111111]">Componente gerado</div>
          <div className="text-[10px] text-[#666666]">via IA · pronto para publicar</div>
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
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111111] md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-[#666666]">{description}</p>
        )}
      </motion.div>
      <div className="mt-14">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section
      eyebrow="Sobre"
      title="O que é a Creators"
      description="Uma comunidade voltada para quem deseja aprender a criar sites e aplicações modernas utilizando inteligência artificial, com foco em projetos reais e desenvolvimento de habilidades práticas."
    >
      <motion.p {...fadeUp} className="mx-auto max-w-3xl text-center text-base text-[#666666]">
        O objetivo é reunir pessoas interessadas em evoluir, compartilhar conhecimento e construir
        soluções profissionais.
      </motion.p>
    </Section>
  );
}

const learnCards = [
  {
    icon: Layout,
    title: "Criando sites profissionais",
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

function Learn() {
  return (
    <Section id="aprende" eyebrow="Conteúdo" title="O que você vai aprender">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {learnCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-[#111111]/8 bg-white p-6 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(17,17,17,0.15)]"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5]/10 to-[#7C3AED]/10 text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#7C3AED] group-hover:text-white">
              <c.icon size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">{c.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-[#666666]">
                  <span className="h-1 w-1 rounded-full bg-[#7C3AED]" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
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
    <Section eyebrow="Método" title="Passo a passo até o projeto entregue">
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-[#111111]/10 pl-8">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-xs font-bold text-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.6)]">
                {i + 1}
              </span>
              <div className="rounded-xl border border-[#111111]/8 bg-white px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                  Passo {i + 1}
                </div>
                <div className="mt-1 text-base font-semibold text-[#111111]">{s}</div>
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
    <section id="bonus" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-3xl border border-[#111111]/8 p-8 md:p-14"
        style={{
          background:
            "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <Sparkles size={12} /> Bônus Exclusivo
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Extensão Lovable Unlimited
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
              Os membros da comunidade recebem acesso à extensão que permite utilizar o Lovable de
              forma ilimitada, sem consumir créditos da plataforma.
            </p>
          </div>
          <div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4F46E5] transition-transform hover:-translate-y-0.5"
            >
              Quero o bônus <ArrowRight size={16} />
            </a>
          </div>
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
    <Section id="comunidade" eyebrow="Comunidade" title="Um ambiente construído para evoluir">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-[#111111]/8 bg-white p-8 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(17,17,17,0.15)]"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
              <c.icon size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#666666]">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ForWho() {
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
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-center gap-3 rounded-xl border border-[#111111]/8 bg-white px-4 py-3"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
              <Check size={14} />
            </span>
            <span className="text-sm text-[#111111]">{it}</span>
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
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="flex items-start gap-3 rounded-2xl border border-[#111111]/8 bg-white p-5"
          >
            <Zap size={18} className="mt-0.5 shrink-0 text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#111111]">{t}</span>
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
            className="group rounded-2xl border border-[#111111]/10 bg-white p-5 open:shadow-[0_10px_30px_-15px_rgba(17,17,17,0.15)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#111111]">
              {it.q}
              <span className="grid h-7 w-7 place-items-center rounded-full border border-[#111111]/10 text-[#666666] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#666666]">{it.a}</p>
          </motion.details>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-3xl border border-[#111111]/8 bg-white p-10 text-center md:p-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(124,58,237,0.10), transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
            Comece hoje a desenvolver projetos profissionais utilizando{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              IA
            </span>
            .
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#666666]">
            Tenha acesso ao conteúdo da comunidade, aos materiais organizados, ao suporte e ao
            bônus exclusivo da extensão Lovable Unlimited.
          </p>
          <div className="mt-8">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_40px_-15px_rgba(124,58,237,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Entrar para a Comunidade <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#111111]/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]" />
          <span className="text-base font-extrabold text-[#111111]">Creators</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#666666]">
          <a href="#" className="hover:text-[#111111]">Política de Privacidade</a>
          <a href="#" className="hover:text-[#111111]">Termos de Uso</a>
          <a href="#" className="hover:text-[#111111]">Contato</a>
        </nav>
        <div className="text-xs text-[#666666]">
          © {new Date().getFullYear()} Creators. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learn />
        <Method />
        <Bonus />
        <Community />
        <ForWho />
        <Differentials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}