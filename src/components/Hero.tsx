import { ArrowRight, Stethoscope, Hospital, ClipboardList, HeartHandshake } from "lucide-react";
import teamAsset from "@/assets/team-couple.png.asset.json";

const benefits = [
  { icon: Stethoscope, label: "Equipe especializada" },
  { icon: Hospital, label: "Ambiente hospitalar" },
  { icon: ClipboardList, label: "Planejamento individual" },
  { icon: HeartHandshake, label: "Acompanhamento completo" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Organic background glows */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
      <div
        aria-hidden
        className="absolute -z-10 top-[-8rem] right-[-6rem] w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] rounded-full blur-3xl opacity-50 animate-hero-float"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-6rem] left-[-4rem] w-[20rem] sm:w-[26rem] h-[20rem] sm:h-[26rem] rounded-full blur-3xl opacity-50 animate-hero-float-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.14), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.5rem] leading-[1.08] sm:leading-[1.04] tracking-tight max-w-xl">
              Recupere sua confiança{" "}
              <span className="text-gradient-gold italic">sem perder</span> sua naturalidade
            </h1>

            <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Procedimentos planejados de forma individual para valorizar seus
              traços, respeitar sua essência e proporcionar resultados naturais.
            </p>

            <div className="mt-7 sm:mt-9 w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#avaliacao"
                className="btn-gold group w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2"
              >
                Quero entender meu caso
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#procedimentos"
                className="btn-outline-gold w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center"
              >
                Conhecer possibilidades
              </a>
            </div>

            {/* Benefits */}
            <ul className="mt-9 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
              {benefits.map((b) => (
                <li
                  key={b.label}
                  className="trust-badge group rounded-2xl p-3.5 sm:p-4 flex items-center gap-3"
                >
                  <span className="h-9 w-9 shrink-0 rounded-xl grid place-items-center bg-royal/10 border border-royal/15 transition-all duration-500 group-hover:bg-royal/15 group-hover:scale-110">
                    <b.icon size={17} className="text-royal" strokeWidth={1.8} />
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] text-foreground/85 leading-snug font-medium text-left">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image column — bare PNG, integrated */}
          <div className="relative order-1 lg:order-2 animate-fade-up">
            <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none lg:-mr-6 xl:-mr-12">
              <img
                src={teamAsset.url}
                alt="Equipe médica especializada da Full Plástica"
                className="relative block w-full h-auto object-contain animate-hero-float select-none pointer-events-none"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
