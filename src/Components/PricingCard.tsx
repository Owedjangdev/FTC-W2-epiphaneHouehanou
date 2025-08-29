import React from "react";

interface Feature {
  text: string;
  available: boolean;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: Feature[];
  icon: string;
  badge?: string;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  period,
  features,
  icon,
  badge,
  buttonText,
}) => {
  return (
    <div className="bg-[#F3F5F7] rounded-xl p-8 shadow-sm border border-gray-200 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
            <img src={icon} alt={`${title} icon`} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {badge && (
          <div className="bg-[#0D121F] text-white px-4 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}
      </div>

      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 ml-1">{period}</span>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                feature.available ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-xs">✓</span>
            </div>
            <span className={`text-sm ${feature.available ? "text-gray-700" : "text-gray-400"}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
