import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const logo = "/logo.png";

export default function Sidebar({ isMobile, sidebarOpen, toggleSidebar }) {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const menu = [
    { icon: "🏠", label: "Dashboard", path: "/" },
    { icon: "📦", label: "Orders", path: "/orders" },
    { icon: "🛒", label: "Product", path: "/product" }, // Add this line
  ];

  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`bg-gray-900 text-white transition-all duration-300 z-50
          ${isMobile
            ? `fixed top-0 left-0 h-full ${sidebarOpen ? "w-64 p-4" : "w-0 p-0"
            } overflow-hidden`
            : hovered
              ? "w-64 p-4"
              : "w-16 p-4"}`}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <div className="flex items-center justify-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 ${!hovered && !isMobile && !sidebarOpen ? "w-8" : "w-12"
              }`}
          />
        </div>

        <div className="space-y-4">
          {menu.map(({ icon, label, path }) => (
            <Link
              to={path}
              key={label}
              className={`flex items-center gap-3 hover:bg-gray-700 p-2 rounded transition-all ${location.pathname === path ? "bg-gray-800" : ""
                }`}
              onClick={() => isMobile && toggleSidebar()}
            >
              <span className="text-lg">{icon}</span>
              <span
                className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${!hovered && !isMobile && !sidebarOpen ? "hidden" : ""
                  }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}




