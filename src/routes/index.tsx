import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoProof } from "@/components/VideoProof";
import { PainSection } from "@/components/PainSection";
import { Procedures } from "@/components/Procedures";
import { Structure } from "@/components/Structure";
import { Results } from "@/components/Results";
import { LeadForm } from "@/components/LeadForm";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full Plástica — Cirurgia Plástica Premium com Naturalidade" },
      { name: "description", content: "Clínica Full Plástica: rinoplastia, blefaroplastia e harmonização facial com planejamento individualizado e resultado natural." },
      { property: "og:title", content: "Full Plástica — Cirurgia Plástica Premium" },
      { property: "og:description", content: "Realce sua beleza com naturalidade, segurança e planejamento personalizado." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoProof />
      <PainSection />
      <Procedures />
      <Results />
      <Structure />
      <LeadForm />
      <Timeline />
      <About />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
