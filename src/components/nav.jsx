import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent background scrolling on small screens when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Function to handle navigation and scroll
  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // Already on home → scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 800,
        offset: -80, // adjusted for sticky header
      });
    } else {
      // Redirect to home and pass scroll target
      navigate("/", { state: { scrollTo: section } });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#faf6ef]/95 backdrop-blur-md shadow-sm border-b border-[#d4af37]/35 transition-all duration-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* LEFT SIDE — LOGO & BRAND */}
          <div className="flex items-center">
            <RouterLink to="/" title="Nilkanth Dham - Sacred Dhoop Sticks" className="flex items-center group py-1">
              <img
                src="/logo.png"
                alt="Dhoop - Nilkanth Dham"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </RouterLink>
          </div>

          {/* RIGHT SIDE — NAV LINKS (Desktop) */}
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => handleNavigation("product-section")}
              className="text-[#3b191d] hover:text-[#7d1524] font-semibold transition-colors cursor-pointer text-sm md:text-base relative group"
            >
              <span>Dhoop Collection</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => handleNavigation("FAQ-section")}
              className="text-[#3b191d] hover:text-[#7d1524] font-semibold transition-colors cursor-pointer text-sm md:text-base relative group"
            >
              <span>Dhoop FAQ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className="text-[#3b191d] hover:text-[#7d1524] font-semibold transition-colors cursor-pointer text-sm md:text-base relative group"
            >
              <span>About Dhoop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => handleNavigation("Blog-section")}
              className="text-[#3b191d] hover:text-[#7d1524] font-semibold transition-colors cursor-pointer text-sm md:text-base relative group"
            >
              <span>Sacred Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => handleNavigation("contactForm")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7d1524] via-[#8c1b2c] to-[#5c0f1c] hover:from-[#5c0f1c] hover:to-[#3e0710] text-white font-semibold shadow-md hover:shadow-lg hover:shadow-[#7d1524]/30 border border-[#d4af37]/40 transition-all cursor-pointer text-sm"
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="sm:hidden p-2 rounded-lg text-[#3b191d] hover:bg-[#fbf0f2] transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-7 h-7 text-[#7d1524]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Backdrop + Dropdown Panel) */}
      {menuOpen && (
        <>
          <div
            className="sm:hidden fixed inset-0 top-[62px] bg-black/50 backdrop-blur-sm -z-10"
            onClick={() => setMenuOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          <div className="sm:hidden w-full bg-[#faf6ef] border-t border-[#d4af37]/40 shadow-2xl max-h-[calc(100dvh-62px)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col items-center gap-2 py-5 px-6">
              {[
                { id: "product-section", label: "Dhoop Sticks Collection" },
                { id: "FAQ-section", label: "Dhoop Sticks FAQ" },
                { id: "about", label: "About Our Dhoop Sticks" },
                { id: "Blog-section", label: "Sacred Blog" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-full text-center py-2.5 text-[#3b191d] hover:text-[#7d1524] hover:bg-[#fbf0f2] rounded-xl font-semibold text-base transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavigation("contactForm")}
                className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-[#7d1524] via-[#8c1b2c] to-[#5c0f1c] text-white font-semibold shadow-md hover:shadow-lg border border-[#d4af37]/40 transition-all cursor-pointer text-center"
              >
                Contact Us / Special Offer
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
