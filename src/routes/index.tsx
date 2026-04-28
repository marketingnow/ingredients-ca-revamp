import { createFileRoute } from "@tanstack/react-router";
import IngredientsSection from "@/components/IngredientsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ingredients — TERRAFREEZE™ | 18 Clinically-Proven Active Ingredients" },
      {
        name: "description",
        content:
          "Explore the 18 clinically-proven active ingredients inside TERRAFREEZE™ — Menthol, Arnica, Emu Oil, Boswellia, MSM, Turmeric and more, each chosen for real, lasting pain relief.",
      },
      { property: "og:title", content: "Ingredients — TERRAFREEZE™" },
      {
        property: "og:description",
        content:
          "18 ingredients in 1 powerful formula. Discover the science-backed actives behind TERRAFREEZE™ pain relief.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IngredientsPage,
});

function IngredientsPage() {
  return (
    <main>
      <h1 className="sr-only">TERRAFREEZE™ Ingredients</h1>
      <IngredientsSection />
    </main>
  );
}
