import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";
import {
  Sparkles,
  Eye,
  Wand2,
  HelpCircle,
  Heart,
  Smile,
  Moon,
  Search,
  Zap,
  CalendarClock,
  CalendarRange,
  User,
  Phone,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  MessageCircle,
  Droplet,
  Sun,
  Waves,
  Activity,
  Scan,
  Wind,
  Mountain,
  Maximize2,
  Layers,
  Ruler,
  Feather,
} from "lucide-react";

type Option = { value: string; label: string; icon: React.ComponentType<{ className?: string }> };

type ProcedureKey = "Blefaroplastia" | "Lipo HD" | "Prótese de Silicone" | "Rinoplastia";
type LeadFormState = {
  nome: string;
  whatsapp: string;
  procedimento: string;
  incomodo: string;
  prazo: string;
};

const procedimentos: Option[] = [
  { value: "Blefaroplastia", label: "Blefaroplastia", icon: Eye },
  { value: "Lipo HD", label: "Lipo HD", icon: Activity },
  { value: "Prótese de Silicone", label: "Prótese de Silicone", icon: Droplet },
  { value: "Rinoplastia", label: "Rinoplastia", icon: Sparkles },
];

const incomodosPorProcedimento: Record<ProcedureKey, { title: string; hint: string; options: Option[] }> = {
  Blefaroplastia: {
    title: "O que mais te incomoda hoje?",
    hint: "Queremos entender o que faz sentido para você.",
    options: [
      { value: "Pálpebras caídas", label: "Pálpebras caídas", icon: Moon },
      { value: "Bolsas abaixo dos olhos", label: "Bolsas abaixo dos olhos", icon: Eye },
      { value: "Aparência de cansaço", label: "Aparência de cansaço", icon: Smile },
      { value: "Olhar pesado", label: "Olhar pesado", icon: Sun },
      { value: "Quero entender meu caso", label: "Quero entender meu caso", icon: Search },
    ],
  },
  "Lipo HD": {
    title: "O que você deseja melhorar?",
    hint: "Cada corpo possui necessidades diferentes.",
    options: [
      { value: "Gordura localizada", label: "Gordura localizada", icon: Waves },
      { value: "Definição abdominal", label: "Definição abdominal", icon: Activity },
      { value: "Contorno corporal", label: "Contorno corporal", icon: Scan },
      { value: "Flacidez", label: "Flacidez", icon: Layers },
      { value: "Quero entender meu caso", label: "Quero entender meu caso", icon: Search },
    ],
  },
  "Prótese de Silicone": {
    title: "O que você busca com o procedimento?",
    hint: "Seu planejamento deve respeitar sua anatomia e seus objetivos.",
    options: [
      { value: "Mais volume", label: "Mais volume", icon: Maximize2 },
      { value: "Mais harmonia corporal", label: "Mais harmonia corporal", icon: Wand2 },
      { value: "Recuperar autoestima", label: "Recuperar autoestima", icon: Heart },
      { value: "Melhorar proporção", label: "Melhorar proporção", icon: Ruler },
      { value: "Quero entender meu caso", label: "Quero entender meu caso", icon: Search },
    ],
  },
  Rinoplastia: {
    title: "O que mais te incomoda no nariz?",
    hint: "Vamos entender qual abordagem faz mais sentido para você.",
    options: [
      { value: "Nariz torto", label: "Nariz torto", icon: Wand2 },
      { value: "Giba óssea", label: "Giba óssea", icon: Mountain },
      { value: "Ponta caída", label: "Ponta caída", icon: Feather },
      { value: "Nariz largo", label: "Nariz largo", icon: Maximize2 },
      { value: "Respiração", label: "Respiração", icon: Wind },
      { value: "Quero entender meu caso", label: "Quero entender meu caso", icon: Search },
    ],
  },
};

const prazos: Option[] = [
  { value: "O mais rápido possível", label: "O mais rápido possível", icon: Zap },
  { value: "Nos próximos meses", label: "Nos próximos meses", icon: CalendarClock },
  { value: "Apenas pesquisando", label: "Apenas pesquisando", icon: CalendarRange },
];

function formatWhatsapp(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const STEPS = [
  { key: "procedimento", label: "Procedimento" },
  { key: "incomodo", label: "Incômodo" },
  { key: "prazo", label: "Prazo" },
  { key: "contato", label: "Contato" },
] as const;

const initialForm: LeadFormState = {
  nome: "",
  whatsapp: "",
  procedimento: "",
  incomodo: "",
  prazo: "",
};

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [form, setForm] = useState<LeadFormState>(initialForm);

  const total = STEPS.length;
  const progress = ((step + 1) / total) * 100;

  const goNext = () => {
    const currentForm = form;
    if (step === 0 && !currentForm.procedimento) return toast.error("Escolha um procedimento para continuar.");
    if (step === 1 && !currentForm.incomodo) return toast.error("Selecione o que mais te incomoda hoje.");
    if (step === 2 && !currentForm.prazo) return toast.error("Indique quando pretende realizar.");
    setDirection(1);
    setStep((s) => Math.min(s + 1, total - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      toast.error("Preencha nome e WhatsApp para continuar.");
      return;
    }
    toast.success("Recebemos seus dados. A equipe Full Plástica entrará em contato em breve.");
    setForm(initialForm);
    setStep(0);
  };

  return (
    <section id="avaliacao" className="py-20 sm:py-24 lg:py-32 relative section-tint overflow-hidden">
      {/* soft glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, oklch(0.62 0.18 260 / 0.18), transparent)" }} />
        <div className="absolute -bottom-40 right-1/4 h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, oklch(0.48 0.22 263 / 0.14), transparent)" }} />
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="Pré-avaliação"
          title={
            <>
              Uma <span className="text-gradient-gold italic">conversa</span> antes do procedimento
            </>
          }
          subtitle="Responda quatro perguntas rápidas. A equipe Full Plástica entra em contato com uma orientação personalizada para o seu caso."
        />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-foreground/70">
          {[
            { icon: ShieldCheck, text: "Atendimento individual" },
            { icon: Sparkles, text: "Avaliação personalizada" },
            { icon: MessageCircle, text: "Resposta rápida no WhatsApp" },
          ].map((m) => (
            <li key={m.text} className="inline-flex items-center gap-2">
              <m.icon className="h-4 w-4 text-royal" />
              <span>{m.text}</span>
            </li>
          ))}
        </ul>

        {/* Card */}
        <div className="mt-10 sm:mt-12 relative">
          <div aria-hidden className="absolute -inset-px rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-royal/15 via-transparent to-royal/10 blur-[1px]" />
          <div className="relative bg-white rounded-[1.4rem] sm:rounded-[1.85rem] border border-royal/10 shadow-[0_30px_80px_-30px_oklch(0.32_0.18_265/0.30)] p-5 sm:p-10 lg:p-12">

            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs uppercase tracking-[0.22em] text-royal/80">
                Etapa {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">{STEPS[step].label}</div>
            </div>

            <div className="relative h-[3px] w-full rounded-full bg-royal/10 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-royal to-royal-soft transition-[width] duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Steps indicators */}
            <ol className="mt-5 grid grid-cols-4 gap-2">
              {STEPS.map((s, i) => {
                const done = i < step;
                const active = i === step;
                return (
                  <li key={s.key} className="flex items-center gap-2 min-w-0">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium transition-all duration-500 ${
                        done
                          ? "bg-royal text-white"
                          : active
                          ? "bg-royal text-white shadow-[0_0_0_6px_oklch(0.48_0.22_263/0.12)]"
                          : "bg-royal/10 text-royal/60"
                      }`}
                    >
                      {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span
                      className={`text-[11px] sm:text-xs truncate transition-colors ${
                        active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* Step content */}
            <form onSubmit={submit} className="mt-9">
              <div key={step} className={direction === 1 ? "animate-step-in" : "animate-step-in-back"}>
                {step === 0 && (
                  <StepQuestion title="Qual procedimento deseja entender melhor?" hint="Você pode mudar essa escolha depois.">
                    <ChoicesGrid options={procedimentos} value={form.procedimento}
                      onChange={(v) => setForm((current) => ({ ...current, procedimento: v, incomodo: "" }))} />
                  </StepQuestion>
                )}

                {step === 1 && (() => {
                  const cfg = incomodosPorProcedimento[form.procedimento as ProcedureKey];
                  if (!cfg) return null;
                  return (
                    <StepQuestion title={cfg.title} hint={cfg.hint}>
                      <ChoicesGrid options={cfg.options} value={form.incomodo}
                        onChange={(v) => setForm((current) => ({ ...current, incomodo: v }))} />
                    </StepQuestion>
                  );
                })()}

                {step === 2 && (
                  <StepQuestion title="Quando pretende realizar?" hint="Sem compromisso — apenas para entendermos o seu momento.">
                    <ChoicesGrid options={prazos} value={form.prazo} columns={1}
                      onChange={(v) => setForm((current) => ({ ...current, prazo: v }))} />
                  </StepQuestion>
                )}

                {step === 3 && (
                  <StepQuestion title="Para onde enviamos sua orientação?" hint="Resposta direta no WhatsApp, sem ligações inesperadas.">
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                      <InputField
                        icon={User}
                        label="Nome"
                        value={form.nome}
                        onChange={(v) => setForm({ ...form, nome: v })}
                        placeholder="Seu nome completo"
                        autoComplete="name"
                      />
                      <InputField
                        icon={Phone}
                        label="WhatsApp"
                        type="tel"
                        value={form.whatsapp}
                        onChange={(v) => setForm({ ...form, whatsapp: formatWhatsapp(v) })}
                        placeholder="(00) 00000-0000"
                        autoComplete="tel"
                      />
                    </div>
                  </StepQuestion>
                )}
              </div>

              {/* Nav */}
              <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-between gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70 hover:text-royal disabled:opacity-0 transition-all min-h-[44px]"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>

                {step < total - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-7 py-3.5 rounded-full text-sm font-medium"
                  >
                    Continuar <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-7 py-3.5 rounded-full text-sm font-medium"
                  >
                    Receber avaliação personalizada <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>


              {step === total - 1 && (
                <p className="text-xs text-muted-foreground mt-5 text-center sm:text-left">
                  Ao enviar, você concorda em receber contato da equipe Full Plástica pelo WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input-elegant {
          width: 100%;
          background: oklch(0.985 0.008 250);
          border: 1px solid oklch(0.48 0.22 263 / 0.16);
          color: var(--color-foreground);
          padding: 1.05rem 1.1rem 1.05rem 2.85rem;
          border-radius: 1rem;
          font-size: 16px;
          transition: all 0.35s cubic-bezier(.2,.7,.2,1);
        }
        .input-elegant:focus {
          outline: none;
          border-color: var(--royal);
          background: #fff;
          box-shadow: 0 0 0 6px oklch(0.48 0.22 263 / 0.10);
        }
        .input-elegant::placeholder { color: oklch(0.62 0.03 255); }


        @keyframes step-in {
          from { opacity: 0; transform: translateX(14px); filter: blur(2px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes step-in-back {
          from { opacity: 0; transform: translateX(-14px); filter: blur(2px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-step-in { animation: step-in .55s cubic-bezier(.2,.7,.2,1) both; }
        .animate-step-in-back { animation: step-in-back .55s cubic-bezier(.2,.7,.2,1) both; }

        @keyframes soft-pulse {
          0%, 100% { box-shadow: 0 10px 30px -12px oklch(0.48 0.22 263 / 0.45), 0 0 0 0 oklch(0.48 0.22 263 / 0.25); }
          50% { box-shadow: 0 14px 36px -10px oklch(0.48 0.22 263 / 0.55), 0 0 0 8px oklch(0.48 0.22 263 / 0); }
        }
        .choice-active { animation: soft-pulse 2.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function StepQuestion({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-display leading-snug text-foreground">{title}</h3>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function ChoicesGrid({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${columns === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      {options.map((o) => {
        const Icon = o.icon;
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`group relative flex items-center gap-3.5 text-left px-5 py-4 sm:py-[1.1rem] rounded-2xl border transition-all duration-300 ease-out ${
              active
                ? "bg-royal text-white border-royal choice-active"
                : "bg-white border-royal/15 text-foreground/85 hover:border-royal/50 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-18px_oklch(0.48_0.22_263/0.45)]"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                active ? "bg-white/15 text-white" : "bg-royal/8 text-royal group-hover:bg-royal/12"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="text-[15px] font-medium leading-snug">{o.label}</span>
            {active && (
              <span className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Check className="h-3.5 w-3.5 text-white" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-foreground/80 mb-2 font-medium">{label}</span>
      <span className="relative block">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-royal/70" />
        <input
          required
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className="input-elegant"
          placeholder={placeholder}
        />
      </span>
    </label>
  );
}
