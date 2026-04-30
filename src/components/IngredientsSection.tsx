import { Card } from "@/components/ui/card";
import emuOilImage from "@/assets/ingredient-emu-oil.jpg";
import arnicaImage from "@/assets/ingredient-arnica.jpg";
import mentholImage from "@/assets/ingredient-menthol.jpg";
import msmImage from "@/assets/ingredient-msm.jpg";
import methylImage from "@/assets/ingredient-methyl.jpg";
import vitaminsImage from "@/assets/ingredient-vitamins.jpg";
import aloeVeraImage from "@/assets/ingredient-aloe-vera.jpg";
import boswelliaImage from "@/assets/ingredient-boswellia.jpg";
import chamomileImage from "@/assets/ingredient-chamomile.jpg";
import gingerImage from "@/assets/ingredient-ginger.jpg";
import turmericImage from "@/assets/ingredient-turmeric.jpg";
import histamineImage from "@/assets/ingredient-histamine.jpg";

const ingredients = [
  {
    category: "COOLING RELIEF",
    name: "Menthol 10%",
    description:
      "Full-strength cooling that lands the moment you apply it. Menthol intercepts pain signals on their way to the brain, so instead of waiting for relief to arrive, you feel it within seconds.",
    badge: "Maximum OTC strength",
    image: mentholImage,
    link: "https://terrafreeze.ca/ingredients/menthol",
  },
  {
    category: "WARMING ACTION",
    name: "Methyl Salicylate 10%",
    description:
      "Where Menthol cools the surface, Methyl Salicylate drives warmth into stiff joints and tight muscles beneath it. It's what separates a formula that works from one that just tingles.",
    badge: "Deep-warming circulation",
    image: methylImage,
    link: "https://terrafreeze.ca/ingredients/methyl-salicylate",
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description:
      "A flowering herb trusted for centuries to reduce swelling at the cellular level. Less inflammation means less pain, and less of waking up stiff and slow the next morning.",
    badge: "Used for 500+ years",
    image: arnicaImage,
    link: "https://terrafreeze.ca/ingredients/arnica",
  },
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description:
      "Active ingredients sitting on the skin surface don't reach the tissue that hurts. Emu Oil drives the formula through all 7 layers of skin to the source, so the relief is real, not just topical.",
    badge: "7-layer skin penetration",
    image: emuOilImage,
    link: "https://terrafreeze.ca/ingredients/emu-oil",
  },
  {
    category: "SKIN SOOTHING",
    name: "Aloe Vera",
    description:
      "Keeps skin calm and receptive so the actives absorb faster and more evenly. No irritation, no greasy residue, no reason to skip an application.",
    badge: "Calms & hydrates",
    image: aloeVeraImage,
    link: "https://terrafreeze.ca/ingredients/aloe-vera",
  },
  {
    category: "ANTIOXIDANT POWER",
    name: "Turmeric Extract",
    description:
      "Curcumin, turmeric's active compound, targets the oxidative stress that makes overworked joints and muscles slow to recover. Less damage accumulating means the next day starts better than the last one ended.",
    badge: "Powerful curcumin",
    image: turmericImage,
    link: "https://terrafreeze.ca/ingredients/turmeric",
  },
  {
    category: "WARMING CIRCULATION",
    name: "Ginger Root",
    description:
      "Poor circulation keeps pain in place. Ginger Root pushes warmth into areas where blood flow has stalled, knees, hands, lower back, and helps the rest of the formula reach further.",
    badge: "Natural warming agent",
    image: gingerImage,
    link: "https://terrafreeze.ca/ingredients/ginger-root-extract",
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamins C & E",
    description:
      "Two antioxidants working as a team. Vitamin C supports tissue repair from the inside. Vitamin E protects the skin barrier so it keeps absorbing effectively, application after application.",
    badge: "Antioxidant protection",
    image: vitaminsImage,
    link: "https://terrafreeze.ca/ingredients/vitamin-c",
  },
  {
    category: "JOINT MOBILITY",
    name: "Boswellia Serrata",
    description:
      "Used in Ayurvedic medicine for centuries and backed by clinical research on joint inflammation. Reduces swelling in knees and hands and supports the long-term mobility that lets you keep doing what you do.",
    badge: "Ancient joint remedy",
    image: boswelliaImage,
    link: "https://terrafreeze.ca/ingredients/boswellia",
  },
  {
    category: "BOTANICAL CALM",
    name: "Chamomile Extract",
    description:
      "Reduces surface inflammation and soothes irritated skin so stronger actives can penetrate without the redness or sensitivity that high-potency formulas can cause.",
    badge: "Gentle on skin",
    image: chamomileImage,
    link: "https://terrafreeze.ca/ingredients/chamomile",
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description:
      "MSM reduces the oxidative stress that breaks cartilage down over time. Glucosamine supports the rebuild. Together they address the structural side of joint pain, not just the feeling of it.",
    badge: "Supports cellular repair",
    image: msmImage,
    link: "https://terrafreeze.ca/ingredients/msm",
  },
  {
    category: "ABSORPTION BOOST",
    name: "Histamine Dihydrochloride",
    description:
      "Dilates local blood vessels so every other ingredient absorbs faster and reaches a wider area. The reason TERRAFREEZE works more thoroughly than any single-ingredient cream can.",
    badge: "Supercharges delivery",
    image: histamineImage,
    link: "https://terrafreeze.ca/ingredients/histamine",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="section-supporting bg-secondary/30">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Badge */}
          <div className="flex justify-center mb-6">
            <span className="font-display inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
              The Formula
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Every Ingredient Earns Its Place.
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-display text-center text-muted-foreground max-w-5xl mx-auto mb-12 text-base lg:text-lg lg:whitespace-nowrap">
            No fillers. No fluff. Eighteen actives, each targeting a different reason your pain keeps coming back.
          </p>

          {/* Ingredient Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ingredients.map((ingredient, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl flex flex-col h-full min-h-[280px] hover:shadow-elevated transition-all duration-300 border-0 p-0"
              >
                {/* Background image */}
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle darkening for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

                {/* Content */}
                <div className="relative flex flex-col h-full p-7">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white mb-3 leading-tight sm:whitespace-nowrap">
                    <a
                      href={ingredient.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 transition-all"
                    >
                      {ingredient.name}
                    </a>
                  </h3>

                  <p className="font-display text-white text-base lg:text-lg leading-snug font-semibold max-w-[75%] drop-shadow-md">
                    {ingredient.description}
                  </p>

                  {/* Pill badge bottom-right */}
                  <div className="absolute bottom-5 right-5">
                    <span className="font-display inline-block px-4 py-1.5 bg-white text-foreground text-xs font-semibold rounded-full shadow-md">
                      {ingredient.badge}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
