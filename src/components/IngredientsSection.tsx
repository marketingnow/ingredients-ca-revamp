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
      "That clean, cold rush you feel within seconds of rubbing it in. Menthol works on the same nerve receptors that respond to ice, which is why a sore knee or tight shoulder starts to settle the moment the gel goes on. At 10%, this is the upper end of what a topical can carry.",
    badge: "Maximum Allowable Strength",
    image: mentholImage,
    link: "https://terrafreeze.ca/ingredients/menthol",
  },
  {
    category: "WARMING ACTIVE",
    name: "Methyl Salicylate 10%",
    description:
      "After the cool comes a slow, deep warmth. Methyl salicylate is the warming counterpart to menthol, and the two together create the sensation that tells you the formula is working into the muscle. Common in topical analgesics for over a century, used here at full strength.",
    badge: "Deep Warming Comfort",
    image: methylImage,
    link: "https://terrafreeze.ca/ingredients/methyl-salicylate",
  },
  {
    category: "TRADITIONAL BOTANICAL",
    name: "Arnica Montana",
    description:
      "A mountain flower used by European herbalists for centuries on bruises, bumps, and the kind of soreness that shows up after a long day on your feet. Athletes know it. Physiotherapists know it. It is in TERRAFREEZE for a reason.",
    badge: "Centuries of Use",
    image: arnicaImage,
    link: "https://terrafreeze.ca/ingredients/arnica",
  },
  {
    category: "DELIVERY CARRIER",
    name: "Emu Oil",
    description:
      "This is the ingredient that makes the other 17 actually do their job. Emu oil shares a fatty acid profile with human skin, which means it absorbs instead of beading on the surface. It carries the rest of the formula down through all seven layers of skin to the inflamed tissue underneath. No carrier, no delivery, no relief.",
    badge: "7-Layer Skin Delivery",
    image: emuOilImage,
    link: "https://terrafreeze.ca/ingredients/emu-oil",
  },
  {
    category: "SOOTHING BASE",
    name: "Aloe Vera",
    description:
      "The ingredient that keeps a strong formula gentle. Aloe calms the skin so you can apply TERRAFREEZE two or three times a day without irritation, even on sensitive areas like the inside of the elbow or the back of the knee.",
    badge: "Skin-Calming Carrier",
    image: aloeVeraImage,
    link: "https://terrafreeze.ca/ingredients/aloe-vera",
  },
  {
    category: "BOTANICAL SUPPORT",
    name: "Turmeric Extract",
    description:
      "Turmeric is one of the most studied plant compounds in modern wellness, and for good reason. Including it in a topical formula means it is going where you need it, instead of running through your whole digestive system on the way.",
    badge: "Targeted Botanical",
    image: turmericImage,
    link: "https://terrafreeze.ca/ingredients/turmeric",
  },
  {
    category: "BOTANICAL SUPPORT",
    name: "Ginger Root",
    description:
      "Ginger has been a remedy for stiff, sore bodies since long before pharmacies existed. In a topical, it adds a quiet warming layer that complements the methyl salicylate and supports the comfort of joints that have seen a lot of use.",
    badge: "Heritage Botanical",
    image: gingerImage,
    link: "https://terrafreeze.ca/ingredients/ginger-root-extract",
  },
  {
    category: "SKIN CONDITIONING",
    name: "Vitamins C & E",
    description:
      "A pain cream gets rubbed into the same patches of skin day after day. Vitamins C and E keep that skin in good shape over months of regular use, so daily application stays comfortable instead of becoming a problem of its own.",
    badge: "Long-Term Skin Care",
    image: vitaminsImage,
    link: "https://terrafreeze.ca/ingredients/vitamin-c",
  },
  {
    category: "RESIN EXTRACT",
    name: "Boswellia Serrata",
    description:
      "Also called Indian frankincense. Used in traditional medicine for joint comfort for thousands of years, and increasingly studied in the West for the same reason. It is in TERRAFREEZE because the formula is meant to support joints that are working hard, not just mask what they feel.",
    badge: "Joint-Focused Botanical",
    image: boswelliaImage,
    link: "https://terrafreeze.ca/ingredients/boswellia",
  },
  {
    category: "CALMING BOTANICAL",
    name: "Chamomile Extract",
    description:
      "Best known for tea, but its skin-calming properties are why it shows up in topicals. Chamomile takes the edge off the warming actives and helps the gel stay easy to wear, even on areas you apply often.",
    badge: "Gentle on Skin",
    image: chamomileImage,
    link: "https://terrafreeze.ca/ingredients/chamomile",
  },
  {
    category: "JOINT-SUPPORT PAIR",
    name: "MSM & Glucosamine",
    description:
      "MSM and glucosamine are two of the most recognized names in joint support, usually taken as pills or capsules. In TERRAFREEZE, they are delivered straight to the area you are rubbing them into, with no detour through your stomach.",
    badge: "Familiar Names, Direct Delivery",
    image: msmImage,
    link: "https://terrafreeze.ca/ingredients/msm",
  },
  {
    category: "CIRCULATION SUPPORT",
    name: "Histamine Dihydrochloride",
    description:
      "A topical ingredient that supports blood flow at the application site. Better circulation in a sore area means the warmth, the cooling, and the rest of the formula reach further and stay longer.",
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
