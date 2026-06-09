import { SectionHeading } from "./SectionHeading";
import { NoseIcon } from "./NoseIcon";
import { EyeIcon } from "./EyeIcon";
import { FaceIcon } from "./FaceIcon";
import { PlanIcon } from "./PlanIcon";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Rinoplastia",
    tagline: "Harmonia e proporção facial",
    text: "Refinamento do formato do nariz, com foco em equilíbrio e naturalidade.",
    cta: "Saber mais",
    Icon: NoseIcon,
  },
  {
    title: "Blefaroplastia",
    tagline: "Olhar mais leve e descansado",
    text: "Correção de pálpebras caídas, bolsas e sinais de cansaço.",
    cta: "Saber mais",
    Icon: EyeIcon,
  },
  {
    title: "Harmonização Facial",
    tagline: "Contornos em equilíbrio",
    text: "Procedimentos que valorizam traços e preservam a naturalidade.",
    cta: "Saber mais",
    Icon: FaceIcon,
  },
  {
    title: "Planejamento Personalizado",
    tagline: "Avaliação individual",
    text: "Um plano único para o seu caso, objetivos e segurança.",
    cta: "Agendar avaliação",
    Icon: PlanIcon,
  },
];

export function Procedures() {
  return (
    <section id="procedimentos" className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Procedimentos"
          title={
            <>
              Procedimentos planejados para valorizar sua{" "}
              <span className="text-gradient-gold italic">beleza natural</span>
            </>
          }
          subtitle="Cada caso é avaliado de forma individual, respeitando sua anatomia, seus objetivos e a harmonia do seu rosto."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mt-12 sm:mt-16">
          {items.map((item, i) => {
            const { Icon } = item;
            return (
              <a
                key={item.title}
                href="#avaliacao"
                className="procedure-card group relative rounded-[1.5rem] sm:rounded-[1.75rem] p-7 sm:p-9 lg:p-10 flex flex-col cursor-pointer overflow-hidden"
              >

                {/* Glow halo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, oklch(0.48 0.22 263 / 0.18), transparent 65%)",
                  }}
                />

                <div className="relative flex items-start justify-between mb-8">
                  <span className="text-[10px] text-royal tracking-[0.3em] uppercase font-medium pt-2">
                    0{i + 1}
                  </span>
                  <span className="transition-transform duration-700 ease-out group-hover:scale-110">
                    <Icon size={58} />
                  </span>
                </div>

                <div className="relative flex-1">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <div className="h-px w-10 bg-royal/30 my-4 transition-all duration-500 group-hover:w-16 group-hover:bg-royal/60" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-royal/70 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="relative mt-8 inline-flex items-center gap-2 self-start rounded-full border border-royal/20 bg-white/60 px-4 py-2 text-xs font-medium text-royal-deep transition-all duration-500 group-hover:bg-royal group-hover:text-white group-hover:border-royal group-hover:shadow-[0_8px_24px_-8px_oklch(0.48_0.22_263/0.5)]">
                  {item.cta}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
