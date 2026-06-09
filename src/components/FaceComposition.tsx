import { ShieldCheck } from "lucide-react";
import specialistImg from "@/assets/specialist-implant.png";

/**
 * Premium hero composition — specialist holding a silicone implant,
 * floating freely with cinematic glow and a glass trust badge.
 * No container card — the PNG sits directly in the layout.
 */
export function FaceComposition() {
  return (
    <div className="relative w-full h-[480px] sm:h-[600px] lg:h-[680px] select-none">
      {/* Organic ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl opacity-90 animate-face-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 42%, oklch(0.48 0.22 263 / 0.38), transparent 70%), radial-gradient(ellipse 45% 40% at 70% 75%, oklch(0.62 0.18 260 / 0.25), transparent 70%)",
        }}
      />

      {/* Soft radial light behind the specialist */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, oklch(1 0 0 / 0.45), transparent 55%)",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        {[
          { left: "8%", top: "18%", d: 0 },
          { left: "88%", top: "22%", d: 1.4 },
          { left: "14%", top: "70%", d: 2.6 },
          { left: "84%", top: "62%", d: 3.2 },
          { left: "50%", top: "8%", d: 4.1 },
          { left: "6%", top: "48%", d: 6.2 },
          { left: "94%", top: "44%", d: 7.0 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full animate-face-particle"
            style={{
              left: p.left,
              top: p.top,
              background:
                "radial-gradient(circle, oklch(0.62 0.18 260 / 0.7), oklch(0.48 0.22 263 / 0) 70%)",
              boxShadow: "0 0 12px oklch(0.48 0.22 263 / 0.55)",
              animationDelay: `${p.d}s`,
            }}
          />
        ))}
      </div>

      {/* Specialist image — free, feathered, cinematic */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={specialistImg}
          alt="Especialista da Full Plástica segurando uma prótese de silicone"
          className="relative h-full w-auto max-w-none object-contain object-bottom animate-face-float"
          style={{
            filter:
              "drop-shadow(0 35px 55px oklch(0.32 0.18 265 / 0.32)) drop-shadow(0 10px 22px oklch(0.32 0.18 265 / 0.22))",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 96% at 50% 50%, #000 80%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 85% 96% at 50% 50%, #000 80%, transparent 100%)",
          }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Floating premium badge */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-6 sm:right-6 mx-auto max-w-md bg-white/70 backdrop-blur-xl border border-royal/15 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_24px_50px_-18px_oklch(0.32_0.18_265/0.45)] animate-badge-float">
        <div className="h-10 w-10 rounded-full bg-royal/10 grid place-items-center shrink-0">
          <ShieldCheck size={18} className="text-royal" />
        </div>
        <div>
          <p className="text-[10px] text-royal uppercase tracking-[0.22em] font-medium">
            Experiência premium
          </p>
          <p className="text-sm text-royal-deep">
            Naturalidade, segurança e acompanhamento próximo
          </p>
        </div>
      </div>

      <style>{`
        @keyframes face-float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-4px) }
        }
        @keyframes face-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes face-particle {
          0% { opacity: 0; transform: translateY(0) scale(0.8); }
          20% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-32px) scale(1.15); }
        }
        .animate-face-float { animation: face-float 9s ease-in-out infinite; }
        .animate-badge-float { animation: badge-float 7s ease-in-out infinite; }
        .animate-face-glow { animation: face-glow 8s ease-in-out infinite; }
        .animate-face-particle { animation: face-particle 7s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-face-float,
          .animate-badge-float,
          .animate-face-glow,
          .animate-face-particle { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
