import React from "react";

interface TestimonialCardProps {
  title: string;
  text: string;
  name: string;
  role: string;
  img: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, text, name, role, img }) => {
  return (
    <div className="bg-[#1A202C] rounded-xl p-6">
      <h3 className="text-white font-medium text-lg mb-4">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-6">{text}</p>
      <div className="border-b border-gray-600 mb-5"></div>

      {/* User info */}
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="w-[70px] h-[70px] rounded-[12px]"
        />
        <div>
          <div className="text-white font-bold text-lg">{name}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
