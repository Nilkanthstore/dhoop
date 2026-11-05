import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
   <>
      <a
        href="https://wa.me/918850011652"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 glow-effect flex items-center justify-center cursor-pointer"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Inline style tag for glow animation */}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 0px rgba(37, 211, 102, 0.4);
            }
            50% {
              box-shadow: 0 0 20px 6px rgba(37, 211, 102, 0.6);
            }
            100% {
              box-shadow: 0 0 0px rgba(37, 211, 102, 0.4);
            }
          }

          .glow-effect {
            animation: glow 2s infinite ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;