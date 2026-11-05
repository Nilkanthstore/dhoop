import React from "react";
import {
  Flame,
  Sprout,
  Flower2,
  Heart,
  Crown,
  Leaf,
  Sun,
  Shield,
  Sparkles,
  Clock,
  CheckCircle2,
  Mountain,
  Wind
} from "lucide-react";

const aboutData = {
  Chandan_Dhoop: {
    heading: "About Chandan Dhoop Stick",
    subheading: "Sacred Sandalwood • Natural Dhoop for Daily Pooja & Dhyana",
    description:
      "Chandan Dhoop Stick brings the centuries-old traditional fragrance of pure sandalwood into your pooja room and home. Handcrafted with authentic Chandan aroma and natural botanical binders, it creates a peaceful, auspicious atmosphere that elevates daily prayer, reduces mental agitation, and centers your soul.",
    steps: [
      {
        icon: Crown,
        title: "Pure Mysore Sandalwood Essence",
        text: "Infused with rich, creamy sandalwood notes that inspire divine reverence and spiritual tranquility during aarti and pooja.",
      },
      {
        icon: Sprout,
        title: "100% Natural Quality Ingredients",
        text: "Formulated with pure botanical powders and traditional fragrances, free from harmful chemical dipping and synthetic harshness.",
      },
      {
        icon: Clock,
        title: "Long-Lasting 40-50 Min Burn",
        text: "Thick traditional dhoop stick shape provides a slow, steady burn that diffuses warm fragrant smoke through every room.",
      },
      {
        icon: Sparkles,
        title: "Ideal for Daily Pooja & Mandir",
        text: "Charcoal-coated exterior ensures easy one-touch lighting, releasing smooth white smoke that leaves home mandirs holy and serene.",
      },
    ],
    image: "/Product- Chandan_dhoop.webp",
  },

  Kailash_Dhoop: {
    heading: "About Kailash Dhoop Stick",
    subheading: "Essence of Mount Kailash • Elevate Spiritual Consciousness",
    description:
      "Inspired by the serene snow-capped peaks and mystical silence of holy Mount Kailash, this natural dhoop stick releases a pure, uplifting fragrance that helps dissolve mental clutter, elevate your spiritual aura, and deepen communion with the divine.",
    steps: [
      {
        icon: Mountain,
        title: "Sacred Mountain Flora",
        text: "Blended with rare Himalayan herbs and sacred forest botanicals that inspire clarity, devotion, and inner peace.",
      },
      {
        icon: Wind,
        title: "Deepens Meditation & Yoga",
        text: "Releases a calming, high-vibrational aroma that fosters stillness, making it ideal for japa, pranayama, and dhyana.",
      },
      {
        icon: Leaf,
        title: "Handcrafted Natural Purity",
        text: "Prepared with traditional aromatic resins and herbs to ensure clean, non-irritating, spiritually charged smoke.",
      },
      {
        icon: Heart,
        title: "Tranquil Home Sanctuary",
        text: "Transforms ordinary living areas into calm sacred spaces filled with uplifting freshness and peaceful thoughts.",
      },
    ],
    image: "/Product- Kailash_dhoop.webp",
  },

  Kapoor_Dhoop: {
    heading: "About Kapur (Camphor) Dhoop Stick",
    subheading: "Purifying Camphor Aroma • Dispel Negativity & Awaken Devotion",
    description:
      "Experience the fresh, crisp, and spiritually cleansing fragrance of NilkanthDham Kapur Dhoop Stick. Crafted with pure Kapur (Camphor), these premium dhoop sticks clear stagnant indoor energies, sharpen mental focus, and replicate the sacred freshness of temple mangal aarti.",
    steps: [
      {
        icon: Sparkles,
        title: "Authentic Camphor Freshness",
        text: "Distinctive crisp aroma of pure Bhimseni camphor that immediately revitalizes tired minds and purifies the atmosphere.",
      },
      {
        icon: Shield,
        title: "Wards Off Stagnant Vibrations",
        text: "Camphor has been trusted in Vedic traditions to repel negativity and create a spiritually protected space in the home.",
      },
      {
        icon: Sun,
        title: "Perfect for Morning & Evening Aarti",
        text: "Releases an auspicious aroma that harmonizes prayer routines and fills your home with uplifting temple vibrations.",
      },
      {
        icon: Leaf,
        title: "Clean Burning Formula",
        text: "Thick dhoop stick formulation that burns smoothly on safe stands without acrid smoke or heavy soot.",
      },
    ],
    image: "/Product- Kapur_dhoop.webp",
  },

  Ponds_Dhoop: {
    heading: "About Ponds Dhoop Stick",
    subheading: "Botanical Breeze • Calming Fragrance Inspired by Nature",
    description:
      "Ponds Dhoop Stick by Nilkanth Dham captures the refreshing tranquility of pristine temple lotus ponds and dewy morning flora. Crafted for everyday peace, it creates a serene, stress-free haven that soothes emotional fatigue and brings natural freshness to your sacred rituals.",
    steps: [
      {
        icon: Flower2,
        title: "Soothing Water Lily & Lotus Notes",
        text: "Gentle aquatic florals that invoke calmness, cooling the senses and brightening indoor spaces naturally.",
      },
      {
        icon: Sun,
        title: "Stress Relief & Relaxation",
        text: "Ideal for evening unwind time, quiet reading, mindfulness sessions, and restorative yoga practice.",
      },
      {
        icon: Sprout,
        title: "Crafted with Premium Botanicals",
        text: "Carefully selected plant gums and natural essences that produce gentle, welcoming, and subtle aromatic smoke.",
      },
      {
        icon: Heart,
        title: "Long-Lasting Sweet Ambience",
        text: "Lingers gracefully in the room for hours, creating an inviting aura for family members and arriving guests.",
      },
    ],
    image: "/Product- Ponds_dhoop.webp",
  },

  Gugal_Dhoop: {
    heading: "About Guggal Dhoop Stick",
    subheading: "Traditional Guggal & Loban • Authentic Vedic Havan Purification",
    description:
      "NilkanthDham Guggal Dhoop Stick brings the sacred smoke of ancient Vedic yajnas directly to your altar. Handcrafted with genuine Guggal resin and fragrant Loban (Benzoin), it releases a deep, earthy, warm aroma that sanctifies the home, repels negative forces, and invites divine blessings.",
    steps: [
      {
        icon: Flame,
        title: "Sacred Guggal & Loban Resins",
        text: "Authentic tree gum extracts that smolder slowly to replicate the sacred purification of traditional Indian havans.",
      },
      {
        icon: Shield,
        title: "Powerful Environmental Cleansing",
        text: "Disinfects indoor air and cleanses negative emotional residue, leaving your surroundings spiritually fortified.",
      },
      {
        icon: Crown,
        title: "Rich Traditional Aroma",
        text: "Deep, balsamic, and earthy fragrance that anchors devotion during evening twilight sandhya aarti and meditation.",
      },
      {
        icon: Leaf,
        title: "Pure & Handcrafted Formulation",
        text: "Made with genuine resinous gums and natural charcoal coating for effortless lighting and long-lasting persistence.",
      },
    ],
    image: "/Product- Gugal_dhoop.webp",
  },
};

export default function AboutUs({ variant }) {
  const data = aboutData[variant] || aboutData.Chandan_Dhoop;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf5ec] to-[#f4eada] border-b border-[#d4af37]/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/35 bg-white p-4 sm:p-5">
              <div className="aspect-square w-full rounded-2xl border border-[#edd7bc]/40 flex items-center justify-center overflow-hidden">
                <img
                  src={data.image}
                  alt={data.heading}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[#fdf9f2] border border-[#d4af37]/40 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9e7422] block">
                  Nilkanth Dham Quality Standard
                </span>
                <span className="text-sm font-semibold text-[#4a0b14]">
                  100% Traditional Handcrafted Formulation • 100gm Value Pack
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
            
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a0b14] leading-tight">
                {data.heading}
              </h2>
              <p className="font-2 text-lg sm:text-xl text-[#9e7422] font-semibold tracking-wide">
                {data.subheading}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#4a3538] leading-relaxed">
              {data.description}
            </p>

            {/* 4 Feature Steps */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {data.steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/95 border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fbf0f2] border border-[#f4d3d8] flex items-center justify-center text-[#7d1524]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[#4a0b14]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c4044] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
