const qa = [
  {
    q: "What are the active ingredients in TERRAFREEZE?",
    a: "TERRAFREEZE contains two primary OTC actives, Menthol (10%) and Methyl Salicylate (10%), alongside 16 supportive natural ingredients including Arnica Montana, MSM, Emu Oil, Boswellia Serrata, Turmeric Extract, Aloe Vera, Ginger Root, Chamomile Extract, Histamine Dihydrochloride, and Vitamins C & E.",
  },
  {
    q: "How does TERRAFREEZE compare to Biofreeze or Voltaren?",
    a: "Biofreeze uses menthol alone. Voltaren uses a single NSAID (diclofenac). TERRAFREEZE combines a maximum-strength menthol base with 16 additional actives targeting inflammation, penetration, and joint support, covering more pain pathways in a single application.",
  },
  {
    q: "Is TERRAFREEZE safe to use every day?",
    a: "Yes. TERRAFREEZE is formulated for daily use and can be applied up to 3–4 times per day. It contains no parabens, no synthetic fillers, and no steroids.",
  },
  {
    q: "How quickly does TERRAFREEZE work?",
    a: "Most users feel the initial cooling sensation within 60 seconds of application. Deeper anti-inflammatory benefits from ingredients like Arnica and Boswellia build over consistent use.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Every order is backed by our 180-day money-back guarantee. If you don't feel a difference, contact us for a full refund. No questions asked.",
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
              Common Questions
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-12">
            Straight Answers About the Formula
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
