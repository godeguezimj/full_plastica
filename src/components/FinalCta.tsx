import { MessageCircle, CalendarCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div className="section-royal on-royal relative rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-center overflow-hidden">
          <div className="relative">
            <p className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/80 mb-4 sm:mb-5">Comece agora</p>
            <h2 className="text-[1.85rem] sm:text-4xl lg:text-5xl leading-[1.12] sm:leading-[1.1] max-w-3xl mx-auto">
              Dê o primeiro passo para uma{" "}
              <span className="text-gradient-gold italic">transformação</span> segura e natural
            </h2>
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
              Fale com a equipe Full Plástica e descubra qual procedimento combina com seu momento,
              seus objetivos e sua autoestima.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4">
              <a href="#avaliacao" className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-full text-sm font-medium">
                <CalendarCheck size={16} /> Quero agendar minha avaliação
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="btn-outline-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-full text-sm font-medium">
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
