import { Check, MessageCircle, Sparkles, UserRound } from "lucide-react";

interface Props {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  points: string[];
  cta: string;
  reverse?: boolean;
  dark?: boolean;
  microcopy?: string[];
}

export function ProcedureSpotlight({
  image,
  eyebrow,
  title,
  text,
  points,
  cta,
  reverse,
  dark,
  microcopy,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-28 lg:py-36 ${dark ? "section-royal on-royal" : ""}`}
    >
      {/* Ambient cinematic background */}
      {dark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 animate-spotlight-breathe"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.18 260 / 0.45) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-50 animate-spotlight-breathe-2"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.22 268 / 0.5) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        {/* Image side */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative animate-spotlight-float">
            {/* Layered radial glow */}
            <div
              aria-hidden
              className="absolute -inset-10 sm:-inset-14 rounded-[3rem] blur-3xl opacity-70 animate-spotlight-glow"
              style={{
                background: dark
                  ? "radial-gradient(circle at 50% 50%, oklch(0.72 0.18 260 / 0.5), transparent 65%)"
                  : "radial-gradient(circle at 50% 50%, oklch(0.48 0.22 263 / 0.28), transparent 65%)",
              }}
            />
            {/* Subtle reflection halo */}
            <div
              aria-hidden
              className="absolute inset-x-8 -bottom-8 h-16 rounded-full blur-2xl opacity-40"
              style={{
                background: dark
                  ? "radial-gradient(ellipse, oklch(0.85 0.08 260 / 0.45), transparent 70%)"
                  : "radial-gradient(ellipse, oklch(0.48 0.22 263 / 0.35), transparent 70%)",
              }}
            />

            <div className="relative rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden border border-white/15 shadow-[0_40px_80px_-30px_oklch(0.18_0.12_265_/_0.7)]">
              <img
                src={image}
                alt={typeof title === "string" ? title : eyebrow}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-[520px] object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              />
              {/* Cinematic gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, oklch(0.18 0.12 265 / 0.35) 100%)",
                }}
              />
              {/* Top sheen */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1/3 pointer-events-none opacity-60"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(1 0 0 / 0.18), transparent)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-5">
            <Sparkles size={12} className={dark ? "text-white/80" : "text-gold"} />
            <p
              className={`text-[10px] sm:text-[11px] tracking-[0.32em] uppercase ${dark ? "text-white/90" : "text-gold"}`}
            >
              {eyebrow}
            </p>
          </div>

          <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-tight">
            {title}
          </h2>
          <div className="divider-gold mt-7 w-24" />

          <p
            className={`mt-7 text-[15.5px] sm:text-[17px] leading-[1.7] max-w-xl ${dark ? "text-white/85" : "text-muted-foreground"}`}
          >
            {text}
          </p>

          <ul className="mt-9 grid gap-3 sm:gap-3.5">
            {points.map((p, i) => (
              <li
                key={p}
                className="group flex items-center gap-3.5 rounded-2xl px-4 py-3 border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_oklch(0.18_0.12_265_/_0.6)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="relative grid place-items-center h-7 w-7 rounded-full bg-gradient-to-br from-white/25 to-white/5 border border-white/30 shrink-0">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.85 0.1 260 / 0.55), transparent 70%)",
                    }}
                  />
                  <Check size={13} className="relative text-white" strokeWidth={2.5} />
                </span>
                <span className={`text-[14.5px] sm:text-[15px] font-light tracking-wide ${dark ? "text-white/90" : ""}`}>
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="#avaliacao"
              className="group relative btn-gold w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-[14.5px] font-medium tracking-wide overflow-hidden"
            >
              <span className="relative z-10">{cta}</span>
              <span
                aria-hidden
                className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            {microcopy && microcopy.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                {microcopy.map((m, i) => (
                  <li
                    key={m}
                    className={`flex items-center gap-2 text-[12.5px] tracking-wide ${dark ? "text-white/75" : "text-muted-foreground"}`}
                  >
                    {i === 0 && <UserRound size={13} className="opacity-80" />}
                    {i === 1 && <Sparkles size={13} className="opacity-80" />}
                    {i === 2 && <MessageCircle size={13} className="opacity-80" />}
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
