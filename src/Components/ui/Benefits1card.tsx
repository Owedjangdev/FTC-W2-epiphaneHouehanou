import React from "react";

interface Benefits1CardProps {
  image: string;
  badge?: string;
  title: string;
  description: string;
}

const Benefits1Card: React.FC<Benefits1CardProps> = ({ image, badge, title, description }) => {
  return (
    <div className="rounded-lg bg-gray-50 p-6 shadow-md flex flex-col">
      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-white">
        <img src={image} alt={title} className="h-full w-full object-contain" />
        {badge && (
          <img
            src={badge}
            alt="badge"
            className="absolute top-0 right-0 -translate-y-5 translate-x-8 rounded-full"
          />
        )}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default Benefits1Card;
