import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  Leaf,
  Flame,
  Clock,
  ShoppingBag,
  Sparkles,
  ExternalLink
} from "lucide-react";
import Form from "./Form";
import FAQSection from "./FAQSection";
import AboutUs from "./AboutUs";
import Blogs from "./Blog";
import BannerSlider from "../components/BannerSlider";
import DivineCollectionBanner from "../components/DivineCollectionBanner";
import { dhoopProducts } from "../data/dhoopProducts";

const Home = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(dhoopProducts[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto scroll to section if state passed from navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 300);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // When selected product changes, reset active image index
  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcf8] via-[#faf5ec] to-[#f5ebdb] text-[#3b191d]">
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO SECTION                                               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="product-section" className="pt-8 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fffefd] via-[#faf6ef] to-[#f6eedd] border-b border-[#d4af37]/30">
        <div className="container mx-auto max-w-7xl">


          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Product Info & Selectors (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product Title & Subheading */}
              <div className="space-y-2">

                <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4a0b14] leading-tight tracking-tight">
                  {selectedProduct.heading}
                </h1>
                <p className="font-2 text-lg sm:text-xl md:text-2xl text-[#9e7422] font-semibold tracking-wide">
                  {selectedProduct.subheading}
                </p>
              </div>

              {/* Description */}
              <p className="font-7 text-base sm:text-lg text-[#4a3538] leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* 5 Product Variants Selector */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#7d1524]">
                    Select Dhoop Stick Fragrance:
                  </span>
                  <span className="text-xs font-semibold text-[#7d1524] bg-[#fbf0f2] border border-[#f4d3d8] px-2.5 py-0.5 rounded-full">
                    {selectedProduct.heading} (5 Varieties Available)
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {dhoopProducts.map((item) => {
                    const isSelected = selectedProduct.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectProduct(item)}
                        className={`group relative flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none ${isSelected
                          ? "bg-white ring-2 ring-[#7d1524] shadow-lg shadow-[#7d1524]/20 -translate-y-1 border border-[#d4af37]/50"
                          : "bg-white/80 hover:bg-white border border-[#eadbca] hover:border-[#7d1524]/50 hover:-translate-y-0.5"
                          }`}
                      >
                        <div className="relative w-full aspect-square bg-[#fbf6ee] rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.heading}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold text-[#3b191d] mt-2 line-clamp-1 group-hover:text-[#7d1524]">
                          {item.heading.replace(" Dhoop Stick", "")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <a
                  href={selectedProduct.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-buy-now-btn"
                  className="group flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#7d1524] via-[#8c1b2c] to-[#5c0f1c] hover:from-[#5c0f1c] hover:to-[#3e0710] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#7d1524]/30 border border-[#d4af37]/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Buy {selectedProduct.heading} </span>
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

              </div>

            </div>

            {/* Right Column: Interactive Gallery & Product View (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[460px] bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-2 border-[#d4af37]/40">
                {/* Main Large Image */}
                <a
                  href={selectedProduct.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square w-full rounded-2xl border border-[#edd7bc]/40 overflow-hidden flex items-center justify-center group cursor-pointer block"
                  title={`Buy ${selectedProduct.heading} on Nilkanth Dham Store`}
                >
                  <img
                    src={selectedProduct.gallery[activeImageIndex] || selectedProduct.mainImage}
                    alt={`${selectedProduct.heading} - Official Product`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SACRED DHOOP STICKS BANNER SHOWCASE                        */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <BannerSlider selectedProduct={selectedProduct} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE NILKANTH DHAM DHOOP STICKS                     */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#faf6ef] border-y border-[#d4af37]/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0b14]">
              The Purity of Nilkanth Dham Dhoop Sticks
            </h2>
            <p className="text-sm sm:text-base text-[#785324] mt-2">
              Every stick is prepared with sacred intention, respecting ancient Ayurvedic traditions of temple dhupa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#fbf0f2] border border-[#f4d3d8] flex items-center justify-center text-[#7d1524]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#4a0b14]">Charcoal-Coated Ease</h3>
              <p className="text-xs sm:text-sm text-[#5c4044] leading-relaxed">
                Effortless lighting that catches quickly, followed by smooth white aromatic smoke with no persistent black soot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#fbf0f2] border border-[#f4d3d8] flex items-center justify-center text-[#9e7422]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#4a0b14]">Pure Natural Ingredients</h3>
              <p className="text-xs sm:text-sm text-[#5c4044] leading-relaxed">
                Handcrafted with authentic Sandalwood, Himalayan herbs, Camphor crystals, and Guggal-Loban tree resins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#fbf0f2] border border-[#f4d3d8] flex items-center justify-center text-[#c5922c]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#4a0b14]">40-50 Min Slow Burn</h3>
              <p className="text-xs sm:text-sm text-[#5c4044] leading-relaxed">
                Thick dhoop stick formulation guarantees an enduring burn that permeates throughout pooja and meditation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eadbca] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#fbf0f2] border border-[#f4d3d8] flex items-center justify-center text-[#7d1524]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#4a0b14]">Spiritual Atmosphere</h3>
              <p className="text-xs sm:text-sm text-[#5c4044] leading-relaxed">
                Clears negative energies, calms mental stress, and infuses holy temple energy into homes and mandirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* DIVINE FRAGRANCE DHOOP COLLECTION BANNER WITH IMAGE MAP   */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <DivineCollectionBanner
        selectedProduct={selectedProduct}
        onSelectProduct={handleSelectProduct}
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTIONS: FAQ, ABOUT, BLOG, FORM                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <FAQSection
        variant={selectedProduct.name}
        image={selectedProduct.mainImage}
        buyLink={selectedProduct.buyLink}
      />

      <section id="about">
        <AboutUs variant={selectedProduct.name} />
      </section>

      <Blogs />
      <Form />
    </div>
  );
};

export default Home;
