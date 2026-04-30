const qa = [
  {
    q: "What's actually in TERRAFREEZE?",
    a: "Two primary actives drive the formula: Menthol (10%) and Methyl Salicylate (10%), both at full over-the-counter strength. Behind them are 16 natural supporting ingredients, Arnica Montana, Emu Oil, MSM, Glucosamine, Boswellia Serrata, Turmeric Extract, Aloe Vera, Ginger Root, Chamomile Extract, Histamine Dihydrochloride, and Vitamins C & E. The complete formula is Health Canada Licensed.",
  },
  {
    q: "How is this different from Biofreeze or Voltaren?",
    a: "Biofreeze is menthol and nothing else. Voltaren is a single NSAID in gel form, the same class of drug as ibuprofen, applied topically. TERRAFREEZE combines maximum-strength cooling and warming actives with 16 additional ingredients targeting inflammation, penetration, and joint repair. It also ships from Canada with no tariff markups and is backed by a 180-day guarantee, something neither competitor offers.",
  },
  {
    q: "Can I use it every day?",
    a: "Yes. TERRAFREEZE is formulated for daily use, up to 3 to 4 times per day. No parabens, no synthetic fillers, no steroids. It's used regularly by nurses, tradespeople, and active adults who need something they can count on through a full day of work or training.",
  },
  {
    q: "How fast does it work?",
    a: "The cooling and warming response hits within 60 seconds, that's Menthol and Methyl Salicylate doing their job immediately. The deeper anti-inflammatory work from Arnica, Boswellia, and MSM builds with consistent use. Most people notice a meaningful difference within the first two weeks.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "You have 180 days to decide, six months. If TERRAFREEZE doesn't make a noticeable difference to your pain, contact us for a full refund. No forms, no conditions, no runaround. We back it that way because the formula is worth backing. Over 15,000 Canadians have already made that call.",
  },
];

const QASection = () => {
  // JSON-LD for AEO / featured snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-display font-semibold rounded-full uppercase tracking-wider">
              Your Questions
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-12">
            No Runaround. Just Answers.
          </h2>

          <div className="space-y-8">
            {qa.map((item, i) => (
              <article
                key={item.q}
                className="border-l-2 border-accent pl-6 py-1"
              >
                <p className="font-display text-xs font-bold text-accent uppercase tracking-widest mb-2">
                  Question {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {item.q}
                </h3>
                <p className="font-display text-base sm:text-lg text-foreground/75 leading-relaxed">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
};

export default QASection;
