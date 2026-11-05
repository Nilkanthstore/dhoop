import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

function Footer() {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    policies: false,
    contact: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Smooth scroll helper
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Quick Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Dhoop Collection", id: "product-section", path: "/" },
    { name: "About Us", id: "about", path: "/" },
    { name: "FAQs", id: "FAQ-section", path: "/" },
    { name: "Contact Us", id: "contactForm", path: "/" },
  ];

  const policiesLinks = [
    { name: "Terms & Conditions", path: "/terms-condition" },
    { name: "Shipping Policy", path: "/shiping-policy" },
    { name: "Return Policy", path: "/return-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // Handle Quick Links Click
  const handleQuickLinkClick = (link) => {
    if (link.name === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      handleScrollTo(link.id);
    } else {
      navigate(`/#${link.id}`);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => handleScrollTo(sectionId), 400);
    }
  }, [location]);

  return (
    <footer className="bg-[#faf6ef] text-[#3b191d] border-t border-[#d4af37]/35">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Brand Intro */}
        <div>
          <a
            href="/"
            title="Nilkanth Dham"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
          >
            <img
              src="/logo.png"
              alt="Nilkanth Dham - Dhoop"
              className="h-14 sm:h-16 w-auto mb-3 object-contain"
            />
          </a>
          <p className="text-[#5c4044] text-xs sm:text-sm leading-relaxed">
            Authentic natural Dhoop Sticks handcrafted for daily pooja, meditation, and a peaceful sacred home.
          </p>
        </div>

        {/* Quick Links */}
        <div className="border-b border-[#eadbca]/70 pb-3 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("quickLinks")}
            aria-expanded={openSections.quickLinks}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#4a0b14] md:mb-3">
              Quick Links
            </h3>
            <ChevronDown
              className={`w-4 h-4 text-[#7d1524] transition-transform duration-300 md:hidden ${
                openSections.quickLinks ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-1.5 pt-2 md:pt-0 ${
              openSections.quickLinks ? "block" : "hidden md:block"
            }`}
          >
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleQuickLinkClick(link)}
                  className="text-xs sm:text-sm text-[#5c4044] hover:text-[#7d1524] transition text-left cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="border-b border-[#eadbca]/70 pb-3 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("policies")}
            aria-expanded={openSections.policies}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#4a0b14] md:mb-3">
              Policies
            </h3>
            <ChevronDown
              className={`w-4 h-4 text-[#7d1524] transition-transform duration-300 md:hidden ${
                openSections.policies ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-1.5 pt-2 md:pt-0 ${
              openSections.policies ? "block" : "hidden md:block"
            }`}
          >
            {policiesLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-xs sm:text-sm text-[#5c4044] hover:text-[#7d1524] transition block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="border-b border-[#eadbca]/70 pb-3 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("contact")}
            aria-expanded={openSections.contact}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#4a0b14] md:mb-3">
              Contact
            </h3>
            <ChevronDown
              className={`w-4 h-4 text-[#7d1524] transition-transform duration-300 md:hidden ${
                openSections.contact ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-2 pt-2 md:pt-0 text-xs sm:text-sm ${
              openSections.contact ? "block" : "hidden md:block"
            }`}
          >
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#7d1524] shrink-0" />
              <span className="text-[#5c4044]">+91-8850011652</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#7d1524] shrink-0" />
              <span className="text-[#5c4044]">support@nilkanthdham.in</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7d1524] shrink-0" />
              <span className="text-[#5c4044]">Surat, Gujarat - 394107</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Dhoop Smoke & Sacred Burner Banner */}
      <div className="w-full relative overflow-hidden">
        <img
          src="/Footer_Baner.png"
          alt="Shri Nilkanth Dham Dhoop Sticks - Sacred Rituals"
          className="w-full h-auto block select-none pointer-events-none"
        />
      </div>

      {/* Copyright */}
      <div className="border-t border-[#d4af37]/30 py-4 text-center text-[#785324] text-xs px-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#7d1524]">Nilkanth Dham</span> — All Rights Reserved. |{" "}
        <a
          href="https://www.megascale.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#7d1524] hover:underline transition-colors"
        >
          Powered by Megascale
        </a>
      </div>
    </footer>
  );
}

export default Footer;
