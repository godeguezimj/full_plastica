import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Sparkles,
  ClipboardList,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: HeartHandshake,
    title: "Conversa acolhedora",
    text: "Um encontro próximo para entender você, seus desejos e o que faz sentido para o seu rosto.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Planejamento exclusivo",
    text: "Um plano desenhado individualmente para realçar sua beleza com naturalidade.",
  },
  {
    n: "03",
    icon: ClipboardList,
    title: "Orientações personalizadas",
    text: "Cada detalhe explicado com clareza, no seu tempo, para você se sentir segura.",
  },
  {
    n: "04",
    icon: Stethoscope,
    title: "Procedimento com cuidado",
    text: "Acompanhamento próximo e atenção a cada detalhe em um ambiente premium.",
  },
  {
    n: "05",
    icon: ShieldCheck,
    title: "Pós-operatório próximo",
    text: "Estamos com você em cada etapa da recuperação até o resultado final.",
  },
];

const microcopy = [
  "Atendimento individual",
  "Planejamento personalizado",
  "Acompanhamento completo",
];

const AUTOPLAY_MS = 5500;

export function Timeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Mobile autoplay
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % steps.length),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(t);
  }, [active, paused]);

  // Mobile: scroll active card into view
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
    }
  }, [active]);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Organic background glows */}
      <div
        aria-hidden
        className="absolute -z-10 top-[-6rem] right-[-8rem] w-[32rem] h-[32rem] rounded-full blur-3xl opacity-45 animate-pain-float"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.14), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-8rem] left-[-6rem] w-[34rem] h-[34rem] rounded-full blur-3xl opacity-40 animate-pain-float-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.12), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Experiência Full Plástica"
          title={
            <>
              Uma jornada pensada para sua{" "}
              <span className="text-gradient-gold italic">segurança</span>,
              acolhimento e resultado
            </>
          }
        />

        {/* Desktop — connected timeline */}
        <div className="hidden lg:block mt-20 relative">
          {/* Progress line */}
          <div className="absolute top-[3.25rem] left-[8%] right-[8%] h-px bg-royal/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-royal/60 via-royal to-royal-soft transition-all duration-[1200ms] ease-out"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  className="text-left group relative"
                >
                  {/* Node on the line */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`relative h-7 w-7 rounded-full grid place-items-center transition-all duration-500 ${
                        isActive
                          ? "bg-royal scale-110 shadow-[0_0_0_6px_oklch(0.48_0.22_263/0.15),0_0_28px_oklch(0.48_0.22_263/0.55)]"
                          : "bg-white border border-royal/30 group-hover:border-royal"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive ? "bg-white" : "bg-royal/60"
                        }`}
                      />
                    </div>
                  </div>

                  <article
                    className={`procedure-card relative rounded-[1.5rem] p-7 overflow-hidden transition-all duration-700 ${
                      isActive
                        ? "-translate-y-2 shadow-[0_30px_70px_-25px_oklch(0.32_0.18_265/0.32),0_0_50px_-10px_oklch(0.48_0.22_263/0.25)]"
                        : ""
                    }`}
                  >
                    {/* Giant ghost number */}
                    <span
                      aria-hidden
                      className="absolute -top-3 -right-1 text-[5.5rem] font-display leading-none select-none pointer-events-none transition-all duration-700"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: isActive
                          ? "1px oklch(0.48 0.22 263 / 0.25)"
                          : "1px oklch(0.48 0.22 263 / 0.10)",
                      }}
                    >
                      {s.n}
                    </span>

                    <div
                      className={`relative h-11 w-11 rounded-2xl grid place-items-center mb-5 transition-all duration-500 ${
                        isActive
                          ? "bg-royal/12 border border-royal/30"
                          : "bg-royal/8 border border-royal/15 group-hover:bg-royal/12"
                      }`}
                    >
                      <Icon size={20} className="text-royal" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-[1.05rem] leading-snug mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {s.text}
                    </p>
                  </article>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile — carousel */}
        <div
          className="lg:hidden mt-12"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 1500)}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 scrollbar-none -mx-5 px-5 py-3"
            onScroll={(e) => {
              const el = e.currentTarget;
              const w = el.children[0] as HTMLElement | undefined;
              if (!w) return;
              const idx = Math.round(el.scrollLeft / (w.offsetWidth + 16));
              if (idx !== active && idx >= 0 && idx < steps.length) {
                setActive(idx);
              }
            }}
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <article
                  key={s.n}
                  className={`procedure-card relative shrink-0 snap-center w-[78vw] max-w-sm rounded-[1.5rem] p-6 overflow-hidden transition-all duration-700 ${
                    isActive ? "scale-[1.01]" : "opacity-75 scale-[0.98]"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute -top-2 -right-1 text-[4.5rem] font-display leading-none pointer-events-none"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px oklch(0.48 0.22 263 / 0.18)",
                    }}
                  >
                    {s.n}
                  </span>
                  <div className="relative h-11 w-11 rounded-2xl grid place-items-center mb-5 bg-royal/10 border border-royal/20">
                    <Icon size={20} className="text-royal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.05rem] leading-snug mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Mobile dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {steps.map((s, i) => (
              <button
                key={s.n}
                aria-label={`Etapa ${s.n}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-7 bg-royal shadow-[0_0_14px_oklch(0.48_0.22_263/0.5)]"
                    : "w-1.5 bg-royal/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <a
            href="#avaliacao"
            className="btn-gold group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium"
          >
            Quero entender meu caso
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <ul className="mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-2 gap-x-6">
            {microcopy.map((item) => (
              <li
                key={item}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] text-foreground/75"
              >
                <Check size={14} className="text-royal shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
