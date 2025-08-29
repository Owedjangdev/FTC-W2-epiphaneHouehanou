import React from "react";

interface Benefits2cardProps {
  icon: string;
  title: string;
  description: string;
}

const Benefits2card: React.FC<Benefits2cardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 rounded-lg p-3 sm:p-4">
        <img src={icon} alt={title} className="w-50 h-50" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Benefits2card;
