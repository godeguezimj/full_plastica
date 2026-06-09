import { useState } from "react";
import {
  Check,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  ArrowRight,
  X,
  Play,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import structureVideo from "@/assets/structure-video.mp4.asset.json";

const points = [
  "Centro cirúrgico hospitalar",
  "Equipe multidisciplinar especializada",
  "Tecnologia e monitoramento",
  "Acompanhamento pré e pós-operatório",
  "Atendimento humanizado",
];

const trustBadges = [
  { icon: Building2, label: "Ambiente Hospitalar" },
  { icon: Stethoscope, label: "Equipe Especializada" },
  { icon: ShieldCheck, label: "Segurança em Todas as Etapas" },
];

export function Structure() {
  const [open, setOpen] = useState(false);
  const videoUrl = structureVideo.url;

  return (
    <section className="section-royal on-royal relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Ambient cinematic background */}
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Trust badges */}
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {trustBadges.map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-[11.5px] sm:text-[12.5px] tracking-wide text-white/90"
            >
              <b.icon size={13} className="text-white/80" strokeWidth={1.8} />
              <span>{b.label}</span>
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Video side — vertical 9:16 premium */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative animate-spotlight-float w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-10 sm:-inset-14 rounded-[3rem] blur-3xl opacity-70 animate-spotlight-glow"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.72 0.18 260 / 0.5), transparent 65%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-8 -bottom-8 h-16 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse, oklch(0.85 0.08 260 / 0.45), transparent 70%)",
                }}
              />

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Abrir vídeo institucional"
                className="group relative block w-full aspect-[9/16] rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden border border-white/15 shadow-[0_40px_80px_-30px_oklch(0.18_0.12_265_/_0.7)] transition-transform duration-500 hover:scale-[1.02]"
              >
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cinematic gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, oklch(0.18 0.12 265 / 0.45) 100%)",
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

                {/* Premium centered Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20"
                  />
                  <div className="relative flex flex-col items-center gap-3 z-10 transition-transform duration-500 group-hover:scale-110">
                    <div className="relative grid place-items-center h-16 w-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_-8px_oklch(0.72_0.18_260_/_0.6)] transition-all duration-500 group-hover:shadow-[0_0_60px_-4px_oklch(0.72_0.18_260_/_0.85)] group-hover:bg-white/20 group-hover:border-white/60">
                      <Play
                        size={28}
                        className="text-white ml-1 drop-shadow-lg"
                        strokeWidth={2}
                        fill="currentColor"
                      />
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-medium tracking-wide text-white/95 drop-shadow-md">
                      Assistir estrutura completa
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-5">
              <HeartPulse size={12} className="text-white/80" />
              <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-white/90">
                Estrutura &amp; Segurança
              </p>
            </div>

            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-tight">
              Uma estrutura preparada para cuidar de você em{" "}
              <span className="text-gradient-gold italic">cada etapa</span>
            </h2>
            <div className="divider-gold mt-7 w-24" />

            <p className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.7] max-w-xl text-white/85">
              Os procedimentos são realizados em ambiente hospitalar, com equipe
              especializada, acompanhamento completo e estrutura preparada para
              oferecer mais segurança e tranquilidade.
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
                  <span className="text-[14.5px] sm:text-[15px] font-light tracking-wide text-white/90">
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
                <span className="relative z-10">Conhecer a estrutura</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <Building2 size={13} className="opacity-80" />
                  <span>Centro cirúrgico próprio</span>
                </li>
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <ShieldCheck size={13} className="opacity-80" />
                  <span>Protocolos de segurança</span>
                </li>
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <HeartPulse size={13} className="opacity-80" />
                  <span>Cuidado humanizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[480px] border-white/10 bg-black/95 p-0 backdrop-blur-2xl overflow-hidden rounded-2xl [&>button]:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="overflow-hidden rounded-2xl bg-black">
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="aspect-[9/16] w-full bg-black"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
