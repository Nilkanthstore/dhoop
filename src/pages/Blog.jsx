import React, { useEffect } from "react";
import { FiUser, FiCalendar, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { blogsData } from "../data/blogsData";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = blogsData;

  return (
    <section id="Blog-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf6ef] border-b border-[#d4af37]/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
           
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a0b14] mt-2">
              Sacred Dhoop & Pooja Insights
            </h2>
            <p className="text-base text-[#785324] mt-1">
              Discover the spiritual science, Vedic benefits, and ritual secrets of natural dhoop sticks.
            </p>
          </div>

          {/* Navigation Buttons for Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="prev-blog-btn"
              className="p-3 rounded-full bg-white border border-[#d4af37]/40 text-[#4a0b14] hover:bg-[#7d1524] hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous Blog"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="next-blog-btn"
              className="p-3 rounded-full bg-white border border-[#d4af37]/40 text-[#4a0b14] hover:bg-[#7d1524] hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Next Blog"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: "#prev-blog-btn",
            nextEl: "#next-blog-btn",
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="pb-12"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-2xl border border-[#eadbca] hover:border-[#d4af37]/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[#fcf9f2] to-[#f6eedd] border-b border-[#eadbca]/50 overflow-hidden flex items-center justify-center">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#4a0b14] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-[#d4af37]/40">
                    {blog.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#9e7422] font-semibold">
                      <FiUser className="w-3.5 h-3.5 text-[#7d1524]" />
                      <span>{blog.author}</span>
                    </div>

                    <h3 className="font-bold text-lg text-[#4a0b14] line-clamp-2 group-hover:text-[#7d1524] transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5c4044] line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    state={{ blog }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#7d1524] hover:text-[#4a0b14] transition-colors cursor-pointer pt-2 border-t border-[#f7eedd]"
                  >
                    <span>Read Full Guide</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
