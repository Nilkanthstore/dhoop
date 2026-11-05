import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductCard = ({ image, title, price, buyLink }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-[#5B3A29] bg-white group">
      <div className="relative p-3">
        <div className="aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide mb-2">
            {title}
          </h3>
          <span className="text-amber-300 font-bold text-lg mb-4">{price}</span>
          {buyLink && (
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7d1524] to-[#5c0f1c] hover:from-[#5c0f1c] hover:to-[#3e0710] text-white text-xs font-bold border border-[#d4af37]/40 shadow-md transition-all"
            >
              Buy on Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProductSlider() {
  const products = [
    {
      id: 1,
      title: "Chandan Dhoop Stick",
      price: "₹94",
      image: "/Product- Chandan_dhoop.webp",
      buyLink: "https://store.nilkanthdham.in/products/chandan-dhoop-stik",
    },
    {
      id: 2,
      title: "Kailash Dhoop Stick",
      price: "₹47",
      image: "/Product- Kailash_dhoop.webp",
      buyLink: "https://store.nilkanthdham.in/products/kailash-dhoop-stik",
    },
    {
      id: 3,
      title: "Kapur Dhoop Stick",
      price: "₹94",
      image: "/Product- Kapur_dhoop.webp",
      buyLink: "https://store.nilkanthdham.in/products/kapoor-dhoop-stik",
    },
    {
      id: 4,
      title: "Ponds Dhoop Stick",
      price: "₹47",
      image: "/Product- Ponds_dhoop.webp",
      buyLink: "https://store.nilkanthdham.in/products/ponds-dhoop-sticks",
    },
    {
      id: 5,
      title: "Guggal Dhoop Stick",
      price: "₹94",
      image: "/Product- Gugal_dhoop.webp",
      buyLink: "https://store.nilkanthdham.in/products/gugal-dhoop-stik",
    },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.innerHTML = `
          <svg width="24" height="36" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="0" width="8" height="4" rx="1" fill="currentColor" opacity="0.8" />
            <rect x="7" y="4" width="6" height="3" fill="currentColor" opacity="0.9" />
            <path d="M4 7 L4 24 Q4 26 6 26 L14 26 Q16 26 16 24 L16 7 Z" fill="currentColor" />
          </svg>`;
      });
    }, 400);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div id="product-slider" className="bg-gradient-to-br from-gray-50 to-[#D8A47F] py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-7xl">
          <h2 className="font-1 text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-[#5B3A29] text-center">
            Our Sacred Dhoop Stick Collection
          </h2>
          <p className="font-7 text-base sm:text-lg text-gray-700 leading-relaxed text-center">
            Immerse in the divine serenity of authentic Nilkanth Dham natural dhoop sticks — handcrafted with natural Chandan, sacred Mount Kailash herbs, purifying Kapur, soothing Ponds flora, and holy Guggal-Loban resins.
          </p>
        </div>

        {/* Slider */}
        <div className="relative pb-24">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-2 mt-8" />
        </div>
      </div>
    </div>
  );
}
