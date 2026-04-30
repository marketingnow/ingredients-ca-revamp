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
      "Provides immediate cooling sensation that soothes pain on contact. Blocks pain signals to the brain so you feel the difference within seconds, not hours.",
    badge: "Instant cooling action",
    image: mentholImage,
    link: "https://terrafreeze.ca/ingredients/menthol",
  },
  {
    category: "WARMING ACTION",
    name: "Methyl Salicylate 10%",
    description:
      "Generates a warming sensation that increases blood flow and eases deep joint stiffness, especially effective for the cold-weather stiffness that sets in during Canadian winters.",
    badge: "Improves circulation",
    image: methylImage,
    link: "https://terrafreeze.ca/ingredients/methyl-salicylate",
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description:
      "Powerful natural herb that reduces inflammation and bruising at the cellular level. Less swelling, faster healing, and relief that lasts for hours.",
    badge: "Used for 500+ years",
    image: arnicaImage,
    link: "https://terrafreeze.ca/ingredients/arnica",
  },
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description:
      "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. Faster relief, reduced swelling, and pain that actually goes away.",
    badge: "Clinical-Grade Carrier",
    image: emuOilImage,
    link: "https://terrafreeze.ca/ingredients/emu-oil",
  },
  {
    category: "SKIN SOOTHING",
    name: "Aloe Vera",
    description:
      "Soothes and hydrates skin while enhancing delivery of active ingredients, without the greasy residue that makes other creams a hassle to wear all day.",
    badge: "Calms & hydrates",
    image: aloeVeraImage,
    link: "https://terrafreeze.ca/ingredients/aloe-vera",
  },
  {
    category: "ANTIOXIDANT POWER",
    name: "Turmeric Extract",
    description:
      "Natural antioxidant that fights inflammation and supports tissue healing from overuse, whether you're on your feet all day or pushing through winter stiffness.",
    badge: "Powerful curcumin",
    image: turmericImage,
    link: "https://terrafreeze.ca/ingredients/turmeric",
  },
  {
    category: "WARMING CIRCULATION",
    name: "Ginger Root",
    description:
      "Improves circulation and warms tense muscles, helping ease chronic pain and the stiffness that cold weather makes worse.",
    badge: "Natural warming agent",
    image: gingerImage,
    link: "https://terrafreeze.ca/ingredients/ginger-root-extract",
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamins C & E",
    description:
      "Powerful antioxidants that nourish and protect skin while enhancing absorption. Supports tissue repair and keeps skin healthy through every season.",
    badge: "Antioxidant protection",
    image: vitaminsImage,
    link: "https://terrafreeze.ca/ingredients/vitamin-c",
  },
  {
    category: "JOINT MOBILITY",
    name: "Boswellia Serrata",
    description:
      "Reduces swelling in joints and improves long-term mobility, especially in knees and hands, where arthritis hits hardest in cold months.",
    badge: "Ancient joint remedy",
    image: boswelliaImage,
    link: "https://terrafreeze.ca/ingredients/boswellia",
  },
  {
    category: "BOTANICAL CALM",
    name: "Chamomile Extract",
    description:
      "Anti-inflammatory and skin-soothing botanical that supports topical comfort and absorption.",
    badge: "Gentle on skin",
    image: chamomileImage,
    link: "https://terrafreeze.ca/ingredients/chamomile",
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description:
      "Supports joint health by rebuilding cartilage and reducing oxidative stress. Improved mobility, less stiffness, and long-term joint protection for the long Canadian winters ahead.",
    badge: "Supports cellular repair",
    image: msmImage,
    link: "https://terrafreeze.ca/ingredients/msm",
  },
  {
    category: "ABSORPTION BOOST",
    name: "Histamine Dihydrochloride",
    description:
      "Encourages local blood flow and helps maximize ingredient effectiveness and absorption.",
    badge: "Boosts delivery",
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
              What's Inside
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              18 Ingredients in 1 Powerful Formula.
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-display text-center text-muted-foreground max-w-5xl mx-auto mb-12 text-base lg:text-lg lg:whitespace-nowrap">
            Every ingredient in TERRAFREEZE is there for a reason, selected to deliver real, lasting relief for the pain Canadians deal with every day.
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
