import { SectionHeading } from "./SectionHeading";
import { Heart, Target, Leaf, Stethoscope, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Target, label: "Planejamento individual" },
  { icon: Leaf, label: "Foco em naturalidade" },
  { icon: Stethoscope, label: "Acompanhamento completo" },
  { icon: Gem, label: "Ambiente premium" },
  { icon: ShieldCheck, label: "Segurança em cada etapa" },
];

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Sobre a Full Plástica"
          title={
            <>
              A Full Plástica cuida da sua{" "}
              <span className="text-gradient-gold italic">transformação</span> em cada detalhe
            </>
          }
          subtitle="A Full Plástica nasceu para oferecer uma experiência premium, humana e responsável para quem deseja realizar procedimentos estéticos com segurança, naturalidade e planejamento individualizado. Cada paciente é atendido com atenção, escuta e orientação clara em todas as etapas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">
          {items.map((i) => (
            <div key={i.label} className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl glass-gold grid place-items-center shrink-0">
                <i.icon size={20} className="text-gold" />
              </div>
              <span className="text-foreground/90">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
