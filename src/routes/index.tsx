import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/sections/HeroSection";
import FormulaPhilosophySection from "@/components/sections/FormulaPhilosophySection";
import IngredientsSection from "@/components/IngredientsSection";
import MidCTASection from "@/components/sections/MidCTASection";
import QASection from "@/components/sections/QASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ingredients: Why TERRAFREEZE Works | 18 Clinically-Backed Actives",
      },
      {
        name: "description",
        content:
          "TERRAFREEZE combines 18 clinically-backed ingredients including Menthol 10%, Methyl Salicylate, Arnica, Boswellia, MSM, and Emu Oil to target pain, inflammation, and mobility loss simultaneously. FDA Registered. 180-day guarantee.",
      },
      {
        property: "og:title",
        content: "Why TERRAFREEZE Works When Other Creams Don't",
      },
      {
        property: "og:description",
        content:
          "18 clinically-backed actives. Three pain pathways. One formula. Backed by a 180-day money-back guarantee.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IngredientsPage,
});

function IngredientsPage() {
  return (
    <main>
      <HeroSection />
      <IngredientsSection />
      <FormulaPhilosophySection />
      <MidCTASection />
      <QASection />
      <TestimonialsSection />
      <ClosingCTASection />
    </main>
  );
}
