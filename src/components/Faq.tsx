import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Como sei qual procedimento é ideal para mim?", a: "A indicação correta depende de uma avaliação individual, considerando suas queixas, anatomia, objetivos e segurança." },
  { q: "A rinoplastia muda muito o rosto?", a: "O objetivo é buscar harmonia e naturalidade, respeitando os traços individuais de cada paciente." },
  { q: "A blefaroplastia deixa cicatriz visível?", a: "As incisões costumam ser planejadas em regiões discretas, mas a avaliação individual é essencial para orientar cada caso." },
  { q: "Posso fazer rinoplastia e blefaroplastia juntas?", a: "Em alguns casos, procedimentos podem ser combinados, mas isso depende da avaliação médica e das condições de segurança." },
  { q: "Quanto tempo demora a recuperação?", a: "O tempo de recuperação varia de acordo com o procedimento e com cada paciente. As orientações são passadas durante a avaliação." },
  { q: "A avaliação é obrigatória?", a: "Sim. A avaliação é essencial para entender seu caso, alinhar expectativas e indicar a melhor conduta." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Dúvidas <span className="text-gradient-gold italic">frequentes</span>
            </>
          }
        />

        <div className="mt-10 sm:mt-14 space-y-3 sm:space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-gold/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left p-5 sm:p-6 min-h-[64px]"
                >
                  <span className="text-[15px] sm:text-lg font-medium text-foreground leading-snug">{f.q}</span>
                  <span className="h-9 w-9 rounded-full glass-gold grid place-items-center shrink-0 text-gold">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed text-sm">
                    {f.a}
                  </div>
                )}
              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
}
