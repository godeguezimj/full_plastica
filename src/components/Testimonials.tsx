import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

const items = [
  { text: "Desde a primeira avaliação me senti acolhida. Tudo foi explicado com clareza e segurança.", name: "Paciente Full Plástica" },
  { text: "Eu tinha medo de mudar demais, mas o planejamento foi pensado para manter minha naturalidade.", name: "Paciente Full Plástica" },
  { text: "O acompanhamento fez toda diferença. Me senti segura em todas as etapas.", name: "Paciente Full Plástica" },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Histórias de <span className="text-gradient-gold italic">autoestima</span> e confiança
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
          {items.map((t, i) => (
            <div key={i} className="glass rounded-2xl sm:rounded-3xl p-7 sm:p-8 relative">

              <Quote size={32} className="text-gold/40 mb-5" />
              <p className="text-foreground/90 leading-relaxed italic">"{t.text}"</p>
              <div className="divider-gold my-6 w-16" />
              <p className="text-sm text-gold-soft">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
