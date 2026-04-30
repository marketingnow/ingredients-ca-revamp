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
    category: "COOLING ACTIVE",
    name: "Menthol 10%",
    description:
      "A clean, cold rush within seconds. Menthol hits the same nerve receptors as ice, so sore knees and tight shoulders settle the moment it goes on.",
    badge: "Maximum Allowable Strength",
    image: mentholImage,
    link: "https://terrafreeze.ca/ingredients/menthol",
  },
  {
    category: "WARMING ACTIVE",
    name: "Methyl Salicylate 10%",
    description:
      "After the cool comes a slow, deep warmth. Paired with menthol, it works down into the muscle. Used here at full strength.",
    badge: "Deep Warming Comfort",
    image: methylImage,
    link: "https://terrafreeze.ca/ingredients/methyl-salicylate",
  },
  {
    category: "TRADITIONAL BOTANICAL",
    name: "Arnica Montana",
    description:
      "A mountain flower used for centuries on bruises and soreness. Athletes know it. Physiotherapists know it. It earns its place in the jar.",
    badge: "Centuries of Use",
    image: arnicaImage,
    link: "https://terrafreeze.ca/ingredients/arnica",
  },
  {
    category: "DELIVERY CARRIER",
    name: "Emu Oil",
    description:
      "The carrier that makes the other 17 work. Its fatty acid profile matches human skin, so it absorbs and pulls the formula through all seven layers.",
    badge: "7-Layer Skin Delivery",
    image: emuOilImage,
    link: "https://terrafreeze.ca/ingredients/emu-oil",
  },
  {
    category: "SOOTHING BASE",
    name: "Aloe Vera",
    description:
      "Keeps a strong formula gentle. Aloe calms the skin so you can apply two or three times a day without irritation, even on sensitive spots.",
    badge: "Skin-Calming Carrier",
    image: aloeVeraImage,
    link: "https://terrafreeze.ca/ingredients/aloe-vera",
  },
  {
    category: "BOTANICAL SUPPORT",
    name: "Turmeric Extract",
    description:
      "One of the most studied plant compounds in wellness. Delivered topically, it goes straight where you need it instead of through your gut.",
    badge: "Targeted Botanical",
    image: turmericImage,
    link: "https://terrafreeze.ca/ingredients/turmeric",
  },
  {
    category: "BOTANICAL SUPPORT",
    name: "Ginger Root",
    description:
      "A remedy for stiff bodies since long before pharmacies. Adds a quiet warming layer that supports joints that have seen a lot of use.",
    badge: "Heritage Botanical",
    image: gingerImage,
    link: "https://terrafreeze.ca/ingredients/ginger-root-extract",
  },
  {
    category: "SKIN CONDITIONING",
    name: "Vitamins C & E",
    description:
      "Rubbed into the same skin day after day, a formula has to be kind to it. C and E keep skin healthy over months of daily use.",
    badge: "Long-Term Skin Care",
    image: vitaminsImage,
    link: "https://terrafreeze.ca/ingredients/vitamin-c",
  },
  {
    category: "RESIN EXTRACT",
    name: "Boswellia Serrata",
    description:
      "Also called Indian frankincense. Used for joint comfort for thousands of years and now studied in the West for the same reason.",
    badge: "Joint-Focused Botanical",
    image: boswelliaImage,
    link: "https://terrafreeze.ca/ingredients/boswellia",
  },
  {
    category: "CALMING BOTANICAL",
    name: "Chamomile Extract",
    description:
      "Best known for tea, but its skin-calming side is why it belongs here. Takes the edge off the warming actives so the gel stays easy to wear.",
    badge: "Gentle on Skin",
    image: chamomileImage,
    link: "https://terrafreeze.ca/ingredients/chamomile",
  },
  {
    category: "JOINT-SUPPORT PAIR",
    name: "MSM & Glucosamine",
    description:
      "Two of the most recognized names in joint support, usually swallowed as pills. Here they go straight to the area you rub.",
    badge: "Direct Delivery",
    image: msmImage,
    link: "https://terrafreeze.ca/ingredients/msm",
  },
  {
    category: "CIRCULATION SUPPORT",
    name: "Histamine Dihydrochloride",
    description:
      "Supports blood flow at the application site. Better circulation means the warmth, the cooling, and the rest of the formula reach further.",
    badge: "Localized Circulation",
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
              The Full Formula, Nothing Hidden
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Every Ingredient Earns Its Spot
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-display text-center text-muted-foreground max-w-5xl mx-auto mb-12 text-base lg:text-lg lg:whitespace-nowrap">
            A pain cream is only as honest as its label. Here is what is in every jar of TERRAFREEZE, what each ingredient is doing, and why Dr. Spreen built the formula this way.
          </p>

          {/* Ingredient Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ingredients.map((ingredient, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl flex flex-col h-full min-h-[320px] hover:shadow-elevated transition-all duration-300 border-0 p-0"
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
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="relative flex flex-col h-full p-6 text-center items-center justify-center">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                    <a
                      href={ingredient.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 transition-all"
                    >
                      {ingredient.name}
                    </a>
                  </h3>

                  <p className="font-display text-white text-sm lg:text-base leading-snug font-medium max-w-[92%] drop-shadow-md mb-14">
                    {ingredient.description}
                  </p>

                  {/* Pill badge bottom-center */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
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
