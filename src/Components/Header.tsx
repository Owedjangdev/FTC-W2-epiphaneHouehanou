import { useState } from "react";
import { ChevronDown } from "react-feather";
import logo from "../assets/Image/Vector.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Products", hasChevron: true },
    { label: "Benefit" },
    { label: "How it Works" },
    { label: "Pricing" },
    { label: "Company", hasChevron: true },
  ];

  return (
    <header className="w-full p-6   text-white sm:px-6 lg:px-12 border-b border-gray-600  flex items-center justify-between bg-[#131825] relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Spend.In logo" className="h-7 w-auto" />
        <span className="font-space font-bold text-2xl leading-none">Spend.In</span>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-1.5 font-medium hover:text-[#8B5CF6]"
          >
            {item.label} {item.hasChevron && <ChevronDown size={18} />}
          </a>
        ))}
      </nav>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-white px-3 py-1 font-medium hover:text-[#8B5CF6]">
          Log In
        </button>
        <button className="px-5 py-2 rounded-full bg-[#7C5CF6] hover:opacity-90">
          Get Demo
        </button>
      </div>

      {/* Toggle Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0121] flex flex-col items-center py-4 space-y-4 border-t border-gray-700 md:hidden transition-all duration-300">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-1.5 font-medium hover:text-[#8B5CF6]"
            >
              {item.label} {item.hasChevron && <ChevronDown size={16} />}
            </a>
          ))}
          <button className="text-white px-3 py-1 font-medium hover:text-[#8B5CF6]">
            Log In
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:opacity-90">
            Get Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
