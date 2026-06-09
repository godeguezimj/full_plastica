import { SectionHeading } from "./SectionHeading";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";

type Doctor = {
  procedure: string;
  procedureDetail?: string;
  name: string;
  initials: string;
  specialty: string;
  crm: string;
  experience: string;
};

const doctors: Doctor[] = [
  {
    procedure: "Rinoplastia",
    procedureDetail: "Especialista em rinoplastia facial",
    name: "Dr. Nome Sobrenome",
    initials: "NS",
    specialty: "Cirurgia Plástica Facial",
    crm: "CRM 00000 / UF",
    experience: "+10 anos de experiência",
  },
  {
    procedure: "Blefaroplastia",
    procedureDetail: "Especialista em plástica ocular",
    name: "Dra. Nome Sobrenome",
    initials: "NS",
    specialty: "Plástica Ocular",
    crm: "CRM 00000 / UF",
    experience: "+10 anos de experiência",
  },
  {
    procedure: "Cirurgias Corporais",
    procedureDetail: "Lipo HD e Prótese de Silicone",
    name: "Dr. Nome Sobrenome",
    initials: "NS",
    specialty: "Cirurgia Plástica Corporal",
    crm: "CRM 00000 / UF",
    experience: "+10 anos de experiência",
  },
];

const credibility = [
  { icon: UserCheck, label: "Especialistas dedicados por procedimento" },
  { icon: ShieldCheck, label: "Planejamento individualizado" },
  { icon: Users, label: "Equipe multidisciplinar" },
  { icon: HeartHandshake, label: "Acompanhamento completo" },
  { icon: Stethoscope, label: "Segurança em todas as etapas" },
];

export function PainSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-36 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60 animate-pain-float"
          style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.10), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-10 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50 animate-pain-float-2"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.10), transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[20rem] w-[40rem] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(ellipse, oklch(0.48 0.22 263 / 0.06), transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Equipe Full Plástica"
          title={
            <>
              Especialistas dedicados a cada{" "}
              <span className="text-gradient-gold italic">procedimento</span>
            </>
          }
          subtitle="Cada cirurgia é conduzida por um especialista responsável — com formação, experiência e foco no resultado natural."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          {doctors.map((d) => (
            <div
              key={d.procedure}
              className="pain-card group relative rounded-[1.5rem] sm:rounded-[1.75rem] p-7 sm:p-8 lg:p-9 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_oklch(0.32_0.18_265_/_0.35)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(ellipse at top, oklch(0.48 0.22 263 / 0.18), transparent 70%)",
                }}
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Doctor photo placeholder */}
                <div className="relative mb-6">
                  <span
                    aria-hidden
                    className="absolute -inset-3 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.48 0.22 263 / 0.45), transparent 70%)",
                    }}
                  />
                  <div
                    className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full grid place-items-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 263 / 0.18), oklch(0.48 0.22 263 / 0.06))",
                      border: "1px solid oklch(0.48 0.22 263 / 0.25)",
                      boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.4)",
                    }}
                  >
                    <span className="font-display text-2xl sm:text-3xl text-royal-deep/80 tracking-tight">
                      {d.initials}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full grid place-items-center border border-white/70 shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.66 0.16 75))",
                    }}
                  >
                    <Award size={13} className="text-white" strokeWidth={2.2} />
                  </span>
                </div>

                {/* Procedure label */}
                <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-royal/70 mb-2">
                  {d.procedure}
                </p>
                <h3 className="font-display text-lg sm:text-xl lg:text-[1.4rem] leading-tight tracking-tight text-royal-deep">
                  {d.name}
                </h3>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-royal/40 to-transparent my-4 transition-all duration-500 group-hover:w-20" />

                <p className="text-sm text-royal-deep/85 font-medium">
                  {d.specialty}
                </p>
                {d.procedureDetail && (
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {d.procedureDetail}
                  </p>
                )}

                <div className="mt-5 flex flex-col items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wide text-royal/75 px-2.5 py-1 rounded-full border border-royal/15 bg-white/60">
                    <Stethoscope size={11} strokeWidth={1.8} />
                    {d.crm}
                  </span>
                  <span className="text-[11px] tracking-wide text-muted-foreground">
                    {d.experience}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <div
            className="relative rounded-[1.75rem] sm:rounded-[2rem] p-7 sm:p-8 lg:p-10 overflow-hidden text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(1 0 0 / 0.7), oklch(0.97 0.015 255 / 0.5))",
              border: "1px solid oklch(0.48 0.22 263 / 0.14)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 20px 60px -30px oklch(0.32 0.18 265 / 0.25)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[36rem] max-w-[120%] rounded-full blur-3xl opacity-60"
              style={{
                background: "radial-gradient(ellipse, oklch(0.48 0.22 263 / 0.18), transparent 70%)",
              }}
            />

            <ul className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 mb-7">
              {credibility.map((t) => (
                <li
                  key={t.label}
                  className="inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] text-royal-deep/80 tracking-wide"
                >
                  <t.icon size={13} className="text-royal" strokeWidth={1.8} />
                  <span>{t.label}</span>
                </li>
              ))}
            </ul>

            <p className="relative text-[10px] sm:text-xs tracking-[0.28em] uppercase text-royal/70 mb-4">
              Próximo passo
            </p>
            <p className="relative font-display text-xl sm:text-2xl lg:text-3xl text-royal-deep leading-tight max-w-2xl mx-auto">
              Entenda o que faz sentido para o{" "}
              <span className="italic text-gradient-gold">seu caso</span>
            </p>

            <a
              href="#avaliacao"
              className="btn-gold relative inline-flex items-center justify-center gap-2 mt-7 w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full text-sm font-medium"
            >
              Falar com um especialista
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
