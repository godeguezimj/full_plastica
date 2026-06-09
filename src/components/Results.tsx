import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Move, X } from "lucide-react";
import rinoAntes from "@/assets/rino-antes.jpg";
import rinoDepois from "@/assets/rino-depois.jpg";
import blefaroAntes from "@/assets/blefaro-antes.jpg";
import blefaroDepois from "@/assets/blefaro-depois.jpg";
import proteseAntes from "@/assets/protese-antes.jpg";
import proteseDepois from "@/assets/protese-depois.jpg";
import lipoAntes from "@/assets/lipo-antes.jpg";
import lipoDepois from "@/assets/lipo-depois.jpg";

interface Result {
  id: string;
  label: string;
  before: string;
  after: string;
}

const results: Result[] = [
  { id: "rino", label: "Rinoplastia", before: rinoAntes, after: rinoDepois },
  { id: "blefaro", label: "Blefaroplastia", before: blefaroAntes, after: blefaroDepois },
  { id: "protese", label: "Prótese de Silicone", before: proteseAntes, after: proteseDepois },
  { id: "lipo", label: "Lipo HD", before: lipoAntes, after: lipoDepois },
];

const AUTOPLAY_MS = 6000;

function BeforeAfter({
  before,
  after,
  alt,
  rounded = "rounded-[1.5rem]",
  initial = 50,
}: {
  before: string;
  after: string;
  alt: string;
  rounded?: string;
  initial?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(initial);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const cx = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(cx);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group/ba relative w-full aspect-[4/5] ${rounded} overflow-hidden select-none cursor-ew-resize bg-white ring-1 ring-black/5 transition-all duration-500`}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={`${alt} — depois`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — antes`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] tracking-[0.26em] uppercase font-medium bg-white/15 text-white backdrop-blur-md border border-white/25">
        Antes
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] tracking-[0.26em] uppercase font-medium bg-royal/80 text-white backdrop-blur-md border border-white/20">
        Depois
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 pointer-events-none transition-all duration-300 group-hover/ba:w-[2px]"
        style={{
          left: `${pos}%`,
          boxShadow:
            "0 0 18px oklch(0.48 0.22 263 / 0.55), 0 0 40px oklch(0.48 0.22 263 / 0.25)",
        }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white grid place-items-center transition-transform duration-300 group-hover/ba:scale-110"
        style={{
          left: `${pos}%`,
          boxShadow:
            "0 12px 30px -8px oklch(0.32 0.18 265 / 0.45), 0 0 0 6px oklch(1 0 0 / 0.4), 0 0 30px oklch(0.48 0.22 263 / 0.35)",
        }}
      >
        <Move size={16} className="text-royal" strokeWidth={2.4} />
      </div>
    </div>
  );
}

export function Results() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const total = results.length;

  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // infinite loop: cycle through all slides
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, total]);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) {
      setIndex((i) => (dx < 0 ? (i + 1) % total : (i - 1 + total) % total));
    }
    touchStart.current = null;
    setTimeout(() => setPaused(false), 800);
  };

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const openItem = openId ? results.find((r) => r.id === openId) : null;

  return (
    <section id="resultados" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
            <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold-soft font-medium">
              Prova social
            </span>
          </div>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-[3rem] leading-[1.12] sm:leading-[1.08]">
            Resultados <span className="text-gradient-gold italic">reais</span> de pacientes reais
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Veja alguns resultados alcançados pela equipe Full Plástica.
          </p>
        </div>

        <div
          className="mt-14 sm:mt-16 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="overflow-hidden -mx-3 sm:-mx-4 px-1 py-6"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * (100 / perView)}%)`,
                transition: "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              {results.map((r) => (
                <div
                  key={r.id}
                  className="shrink-0 px-3 sm:px-4"
                  style={{ width: `${100 / perView}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(r.id)}
                    aria-label={`Ver ${r.label} em tela cheia`}
                    className="block w-full text-left rounded-[1.5rem] transition-transform duration-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/60 focus-visible:ring-offset-2"
                    style={{
                      filter:
                        "drop-shadow(0 30px 50px oklch(0.18 0.12 265 / 0.18)) drop-shadow(0 12px 24px oklch(0.18 0.12 265 / 0.12))",
                    }}
                  >
                    <BeforeAfter before={r.before} after={r.after} alt={r.label} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              aria-label="Anterior"
              onClick={prev}
              className="h-10 w-10 rounded-full bg-white/70 backdrop-blur border border-royal/15 grid place-items-center text-royal-deep hover:bg-white transition-colors shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {results.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-gradient-to-r from-royal to-royal-deep shadow-[0_0_22px_oklch(0.48_0.22_263/0.6)]"
                      : "w-2 bg-royal/25 hover:bg-royal/45"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo"
              onClick={next}
              className="h-10 w-10 rounded-full bg-white/70 backdrop-blur border border-royal/15 grid place-items-center text-royal-deep hover:bg-white transition-colors shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto">
          <p className="font-display text-xl sm:text-2xl lg:text-[1.75rem] leading-tight text-royal-deep">
            Seu resultado começa com uma{" "}
            <span className="italic text-gradient-gold">avaliação individual</span>.
          </p>
          <a
            href="#avaliacao"
            className="btn-gold group/cta mt-7 inline-flex items-center justify-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full text-sm font-medium"
          >
            Quero entender meu caso
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-1.5"
            />
          </a>
        </div>
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative w-full max-w-[560px] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Fechar"
              onClick={() => setOpenId(null)}
              className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white grid place-items-center transition-colors"
            >
              <X size={18} />
            </button>
            <BeforeAfter
              before={openItem.before}
              after={openItem.after}
              alt={openItem.label}
              rounded="rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
