import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, ShoppingBag, ExternalLink } from "lucide-react";

const FAQSection = ({ variant, image, buyLink }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Each variant has its own FAQs + Image
  const faqData = {
    Chandan_Dhoop: {
      image: image || "/Product- Chandan_dhoop.webp",
      heading: "Chandan Dhoop Stick FAQs",
      faqs: [
        {
          q: "What makes Chandan Dhoop Stick ideal for daily pooja and meditation?",
          a: "Chandan Dhoop Stick is handcrafted with authentic Sandalwood extracts that release a rich, tranquil aroma. Sandalwood has been revered for millennia in Indian worship for calming the nervous system, centering thoughts, and creating an auspicious atmosphere for meditation, morning pooja, and evening sandhya.",
        },
        {
          q: "How does Chandan (Sandalwood) dhoop benefit the home atmosphere?",
          a: "The gentle, sweet, and woody sandalwood fragrance neutralizes stale odors and replaces them with a sacred temple freshness. Its long-lasting aroma lingers for several hours, leaving your entire home feeling peaceful and spiritually elevated.",
        },
        {
          q: "How do I light and burn Chandan Dhoop Stick?",
          a: "Light the charcoal-coated exterior of the dhoop stick carefully using a match or lighter. Once it catches fire, let it glow for a few seconds, gently extinguish the open flame, and place the stick upright on a heat-resistant dhoop or incense stand in a well-ventilated area.",
        },
        {
          q: "What is the weight and burning duration of Chandan Dhoop Stick?",
          a: "Each pack contains 100gm of premium natural dhoop sticks. Due to its thick, traditional stick composition, each dhoop burns steadily for approximately 40 to 50 minutes.",
        },
      ],
    },

    Kailash_Dhoop: {
      image: image || "/Product- Kailash_dhoop.webp",
      heading: "Kailash Dhoop Stick FAQs",
      faqs: [
        {
          q: "What is the spiritual significance of Kailash Dhoop Stick?",
          a: "Inspired by the divine majesty of Mount Kailash—the sacred abode of Lord Shiva—Kailash Dhoop Stick is crafted with sacred Himalayan herbs and resin extracts. It is formulated to elevate spiritual consciousness, encourage clarity of thought, and foster deep inner tranquility.",
        },
        {
          q: "When should I burn Kailash Dhoop Stick?",
          a: "Kailash Dhoop Stick is especially beneficial during early morning Brahmamuhurta meditation, mantra chanting, Lord Shiva abhishekams, or during stressful evenings to restore mental balance and serenity.",
        },
        {
          q: "How long does the fragrance of Kailash Dhoop last?",
          a: "A single 100gm stick burns for about 40 to 50 minutes and leaves a refreshing, uplifting aromatic sillage that remains noticeable in the room for several hours.",
        },
        {
          q: "What allergy precautions should be taken?",
          a: "For individuals with sensitivities to fragrances or smoke, we recommend testing exposure for 10-15 minutes in a well-ventilated space. Always burn on a heat-resistant stand away from pets, children, and flammable materials.",
        },
      ],
    },

    Kapoor_Dhoop: {
      image: image || "/Product- Kapur_dhoop.webp",
      heading: "Kapur (Camphor) Dhoop Stick FAQs",
      faqs: [
        {
          q: "Why is Kapur (Camphor) Dhoop Stick recommended for spiritual purification?",
          a: "Camphor holds a revered place in Vedic aarti because it burns cleanly and symbolizes the complete surrender of ego to the divine. NilkanthDham Kapur Dhoop Stick releases a crisp, purifying camphor fragrance that clears negative vibrations and cleanses the air.",
        },
        {
          q: "How does Kapur Dhoop differ from synthetic room fresheners?",
          a: "Unlike aerosol sprays that mask odors with synthetic chemicals, Kapur Dhoop uses pure camphor aroma and natural binders to purify the space, imparting an authentic temple aarti feel that naturally awakens the senses.",
        },
        {
          q: "Can I use Kapur Dhoop Stick for daily morning and evening aarti?",
          a: "Yes! Kapur Dhoop Stick is specifically crafted for everyday pooja, aarti, and devotional routines. It creates a refreshing and devotional aura in home mandirs and meditation areas.",
        },
        {
          q: "What is the proper way to burn Kapur Dhoop Stick?",
          a: "Light the outer end with a lighter or match until it catches flame. Extinguish the flame to leave a smoldering tip, and position it firmly in a safe dhoop holder on a heat-resistant surface.",
        },
      ],
    },

    Ponds_Dhoop: {
      image: image || "/Product- Ponds_dhoop.webp",
      heading: "Ponds Dhoop Stick FAQs",
      faqs: [
        {
          q: "What makes Ponds Dhoop Stick unique for yoga and relaxation?",
          a: "Ponds Dhoop Stick features a gentle, cooling floral fragrance inspired by tranquil water lilies and pristine nature. Its subtle botanical aroma relaxes tense nerves without overpowering, making it a favorite for yoga practitioners, mindfulness, and breathing exercises.",
        },
        {
          q: "Can Ponds Dhoop Stick be used outside the pooja room?",
          a: "Absolutely! Many devotees and homemakers burn Ponds Dhoop Stick in living spaces, reading corners, and study desks to create a soothing, fresh, and welcoming atmosphere throughout the day.",
        },
        {
          q: "Does Ponds Dhoop Stick contain harmful chemicals?",
          a: "No. Nilkanth Dham Ponds Dhoop Sticks are crafted with premium botanical ingredients, natural binders, and quality essences. The smoke is smooth and gentle when used in ventilated environments.",
        },
        {
          q: "What is the pack size and burning time?",
          a: "Each box contains 100gm of dhoop sticks with an average burn time of 40 to 50 minutes per stick.",
        },
      ],
    },

    Gugal_Dhoop: {
      image: image || "/Product- Gugal_dhoop.webp",
      heading: "Guggal Dhoop Stick FAQs",
      faqs: [
        {
          q: "Why are Guggal and Loban sacred in traditional Indian rituals?",
          a: "Guggal (Commiphora mukul) and Loban (Benzoin) resins are ancient sacred fumigants used in Vedic havan and temple sanctification. When burned, they release a deep, warm, earthy smoke that repels negativity, cleanses environmental impurities, and invites auspicious energies.",
        },
        {
          q: "Does Guggal Dhoop Stick recreate the essence of a havan ceremony?",
          a: "Yes! Guggal Dhoop Stick is formulated with natural Guggal and Loban resins to provide the warm, sacred havan atmosphere in convenient stick form without needing an open fire pit.",
        },
        {
          q: "When is the best time to burn Guggal Dhoop Stick?",
          a: "Guggal Dhoop is traditionally burned during evening twilight (Sandhya Kaal), on Thursdays, Tuesdays, Amavasya, Purnima, and during sacred family ceremonies to dispel heavy or stagnant energies from the house.",
        },
        {
          q: "What safety tips should I follow when burning Guggal Dhoop?",
          a: "Always burn on a stable, heat-resistant metal or stone stand. Ensure windows or ventilation are open for smoke circulation, and keep away from paper, fabrics, pets, and children.",
        },
      ],
    },
  };

  const currentFaq = faqData[variant] || faqData.Chandan_Dhoop;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefcf8] border-b border-[#d4af37]/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a0b14] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#785324]">
            Everything you need to know about burning, storing, and enjoying Nilkanth Dham natural Dhoop Sticks.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-cinzel text-xl font-bold text-[#4a0b14] flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#c5922c]" />
              <span>{currentFaq.heading}</span>
            </h3>

            {currentFaq.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-[#3b191d] hover:text-[#7d1524] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c5922c] shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#7d1524]" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-[#5c4044] leading-relaxed border-t border-[#f7eedd] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Product Image & Store CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border-2 border-[#d4af37]/35 text-center space-y-4">
              <div className="relative aspect-square w-full rounded-2xl border border-[#edd7bc]/40 flex items-center justify-center overflow-hidden">
                <img
                  src={currentFaq.image}
                  alt={currentFaq.heading}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-cinzel font-bold text-lg text-[#4a0b14]">
                  Ready to experience sacred tranquility?
                </h4>
                <p className="text-xs sm:text-sm text-[#785324]">
                  Order 100% natural Nilkanth Dham Dhoop Sticks directly from the official store.
                </p>
              </div>

              {buyLink && (
                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7d1524] via-[#8c1b2c] to-[#5c0f1c] hover:from-[#5c0f1c] hover:to-[#3e0710] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#7d1524]/30 border border-[#d4af37]/40 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now on Nilkanth Dham</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
