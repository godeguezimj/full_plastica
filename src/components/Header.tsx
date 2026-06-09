import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoAzul from "@/assets/logo-full-plastica-azul.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#avaliacao", label: "Avaliação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-royal/10 shadow-[0_8px_30px_-18px_oklch(0.32_0.18_265/0.35)]"
            : "bg-white/55 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "h-[68px] sm:h-20 md:h-24 lg:h-24"
              : "h-[84px] sm:h-24 md:h-28 lg:h-28"
          }`}
        >
          <a
            href="#inicio"
            className="flex items-center gap-2 transition-transform duration-500 hover:scale-[1.02]"
            aria-label="Full Plástica"
          >
            <img
              src={logoAzul}
              alt="Full Plástica"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled
                  ? "h-12 sm:h-14 md:h-16 lg:h-20"
                  : "h-14 sm:h-16 md:h-20 lg:h-24"
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-royal-deep/85 hover:text-royal transition-colors tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-royal after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#avaliacao"
            className="hidden lg:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Falar com especialista
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative h-11 w-11 rounded-full grid place-items-center text-royal-deep border border-royal/15 bg-white/70 backdrop-blur-md shadow-[0_4px_14px_-6px_oklch(0.32_0.18_265/0.25)] transition-all duration-300 hover:border-royal/35 hover:bg-white active:scale-95"
          >
            <span className="relative block h-5 w-5">
              <Menu
                size={20}
                className={`absolute inset-0 m-auto transition-all duration-400 ${
                  open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={20}
                className={`absolute inset-0 m-auto transition-all duration-400 ${
                  open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — premium fullscreen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-white/85 backdrop-blur-2xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Ambient royal glows */}
        <div
          aria-hidden
          className={`absolute -top-32 -right-20 h-[26rem] w-[26rem] rounded-full blur-3xl transition-opacity duration-700 ${
            open ? "opacity-60" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle, oklch(0.48 0.22 263 / 0.18), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className={`absolute -bottom-40 -left-16 h-[28rem] w-[28rem] rounded-full blur-3xl transition-opacity duration-700 ${
            open ? "opacity-50" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle, oklch(0.62 0.18 260 / 0.16), transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          className={`relative h-full w-full flex flex-col px-6 pt-[100px] pb-10 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[10px] tracking-[0.32em] uppercase text-royal/60 mb-6">
            Navegação
          </p>

          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                }}
                className={`group relative flex items-center justify-between py-5 border-b border-royal/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                }`}
              >
                <span className="font-display text-[1.65rem] leading-tight text-royal-deep transition-colors duration-300 group-hover:text-royal group-active:text-royal">
                  {l.label}
                </span>
                <span className="h-9 w-9 rounded-full grid place-items-center bg-royal/8 border border-royal/15 text-royal transition-all duration-400 group-hover:bg-royal group-hover:text-white group-hover:border-royal group-hover:shadow-[0_8px_22px_-8px_oklch(0.48_0.22_263/0.55)] group-active:scale-95">
                  <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </nav>

          {/* CTA + reassurance */}
          <div
            className={`mt-auto pt-10 transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: open ? `${120 + links.length * 70}ms` : "0ms" }}
          >
            <a
              href="#avaliacao"
              onClick={() => setOpen(false)}
              className="btn-gold w-full inline-flex items-center justify-center gap-2 min-h-[56px] px-7 py-4 rounded-full text-sm font-medium"
            >
              Quero entender meu caso
              <ArrowRight size={16} />
            </a>

            <p className="mt-5 text-center text-[11px] tracking-[0.22em] uppercase text-royal/55">
              Atendimento premium · Resposta rápida
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
