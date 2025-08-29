import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/Image/Vector.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  p-8 bg-slate-900 text-white flex items-center justify-between  border-b border-gray-700 relative">
      {/* Logo */}
      <div className="flex items-center w-[144px] h-[32px] space-x-2">
        <span className="w-[20.1px] h-[28px]">
          <img src={logo} alt="logo" className="h-full" />
        </span>
        <span className="font-space font-bold text-2xl leading-[0.8]">
          Spend.In
        </span>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="flex items-center font-medium w-[101px] h-[27px] gap-[6px] hover:text-[#8B5CF6]">
         Products <ChevronDown size={18} />
        </a>
        <a href="#" className="hover:text-[#8B5CF6] font-medium w-[67px] h-[27px]">Benefit</a>
        <a href="#" className="hover:text-[#8B5CF6]font-medium w-[108px] h-[27px]">How it Works</a>
        <a href="#" className="hover:text-[#8B5CF6] font-medium w-[58px] h-[27px]">Pricing</a>
        <a href="#" className="flex items-center font-medium w-[101px] h-[27px] gap-[6px] hover:text-[#8B5CF6]">
          Company <ChevronDown size={18} />
        </a>
      </nav>
    

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-[32px]">
        <button className="text-white w-[47px] h-[27px] font-medium hover:text-[#8B5CF6]">LogIn</button>
        <button className="w-[125px] h-[52px] rounded-full bg-[#7C5CFC] hover:opacity-90">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white hover:text-blue-500 "></span>
              <span className="block w-6 h-0.5 bg-white hover:text-blue-500  "></span>
              
            </div>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0121] flex flex-col items-center py-4 space-y-4 border-t border-gray-700 md:hidden">
          <a href="#" className="flex items-center gap-1 hover:text-[#8B5CF6]">
            Products <ChevronDown size={16} />
          </a>
          <a href="#" className="hover:text-[#8B5CF6]">Benefit</a>
          <a href="#" className="hover:text-[#8B5CF6]">How it Works</a>
          <a href="#" className="hover:text-[#8B5CF6]">Pricing</a>
          <a href="#" className="flex items-center gap-1 hover:text-[#8B5CF6]">
            Company <ChevronDown size={16} />
          </a>
          <button className="text-white hover:text-[#8B5CF6]">Log In</button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:opacity-90">
            Get Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
