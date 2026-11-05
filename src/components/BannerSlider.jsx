import React from "react";

export default function BannerSlider({ selectedProduct }) {
  if (!selectedProduct) return null;

  return (
    <section className="w-full relative overflow-hidden bg-[#180407] border-y border-[#d4af37]/30">
      {/* Full Screen Edge-to-Edge Banner */}
      <a
        href={selectedProduct.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full cursor-pointer group"
        title={`Buy ${selectedProduct.heading} on Nilkanth Dham Store`}
      >
        <img
          src={selectedProduct.banner || selectedProduct.baner1}
          alt={`${selectedProduct.heading} Nilkanth Dham Banner`}
          className="w-full h-auto block select-none object-cover transition-transform duration-700 group-hover:scale-[1.008]"
        />
      </a>
    </section>
  );
}
