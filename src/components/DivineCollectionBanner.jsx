import React from "react";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import { dhoopProducts } from "../data/dhoopProducts";

// Pixel coords based on the original 1944 x 809 image
// Percentage bounds calculated for 100% responsive display across all devices
const productHotspots = [
  {
    id: "ponds-dhoop-sticks",
    name: "Ponds Dhoop Stick",
    coords: "50,260,440,790",
    pct: { left: "2.57%", width: "20.06%", top: "32%", height: "66%" },
    fragranceHighlight: "Soothing Floral Aroma",
  },
  {
    id: "kapoor-dhoop-stik",
    name: "Kapur Dhoop Stick",
    coords: "440,260,775,790",
    pct: { left: "22.63%", width: "17.23%", top: "32%", height: "66%" },
    fragranceHighlight: "Pure & Fresh Bhimseni Camphor",
  },
  {
    id: "kailash-dhoop-stik",
    name: "Kailash Dhoop Stick",
    coords: "775,260,1160,790",
    pct: { left: "39.87%", width: "19.80%", top: "32%", height: "66%" },
    fragranceHighlight: "Sacred Himalayan Devotional Aroma",
  },
  {
    id: "gugal-dhoop-stik",
    name: "Guggal Dhoop Stick",
    coords: "1160,260,1515,790",
    pct: { left: "59.67%", width: "18.26%", top: "32%", height: "66%" },
    fragranceHighlight: "Rich Guggal & Loban Resin",
  },
  {
    id: "chandan-dhoop-stik",
    name: "Chandan Dhoop Stick",
    coords: "1515,260,1895,790",
    pct: { left: "77.93%", width: "19.55%", top: "32%", height: "66%" },
    fragranceHighlight: "Pure Mysore Sandalwood Aroma",
  },
];

export default function DivineCollectionBanner({ selectedProduct, onSelectProduct }) {

  // Map hotspots with full product information
  const mappedProducts = productHotspots.map((hotspot) => {
    const prod = dhoopProducts.find((p) => p.id === hotspot.id) || {};
    return {
      ...hotspot,
      product: prod,
      price: prod.price || "₹94",
      originalPrice: prod.originalPrice || "₹123",
      buyLink: prod.buyLink || "https://store.nilkanthdham.in/",
      heading: prod.heading || hotspot.name,
    };
  });



  return (
    <section className="w-full relative bg-[#180407] border-y border-[#d4af37]/35 overflow-hidden">


      {/* Main Image Container with Responsive Image Map Overlay */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Base Banner Image */}
        <img
          src="/Divine Fragrance Dhoop Collection.png"
          alt="Nilkanth Dham Divine Fragrance Dhoop Collection - 5 Sacred Varieties"
          useMap="#divine-collection-map"
          className="w-full h-auto block select-none object-cover"
          loading="lazy"
        />

        {/* Traditional HTML Image Map for standard crawlers and SEO */}
        <map name="divine-collection-map" id="divine-collection-map">
          {mappedProducts.map((item) => (
            <area
              key={item.id}
              shape="rect"
              coords={item.coords}
              href={item.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              alt={item.heading}
              title={`Buy ${item.heading} (${item.price})`}
            />
          ))}
        </map>

        {/* Responsive Overlay Hotspots (works on all screen sizes, tablets & mobile) */}
        {mappedProducts.map((item) => (
          <div
            key={`hotspot-${item.id}`}
            style={{
              left: item.pct.left,
              width: item.pct.width,
              top: item.pct.top,
              height: item.pct.height,
            }}
            className="absolute z-10"
          >
            {/* Direct Product Link */}
            <a
              href={item.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (onSelectProduct && item.product) {
                  onSelectProduct(item.product);
                }
              }}
              className="group w-full h-full cursor-pointer focus:outline-none flex flex-col items-center justify-start relative select-none"
              title={`Buy ${item.heading} (${item.price})`}
              aria-label={`Buy ${item.heading}`}
            >
              {/* Badge Shown On Hover */}
              <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0 pointer-events-none z-20">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#7d1524]/95 text-[#fdf8f0] border border-[#d4af37] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1 rounded-full shadow-2xl backdrop-blur-sm whitespace-nowrap">
                  <ShoppingBag className="w-3 h-3 text-[#d4af37]" />
                  <span>Buy Now • {item.price}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" />
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
