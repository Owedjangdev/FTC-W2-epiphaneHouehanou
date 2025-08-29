import React from 'react';

// Définition de l'interface des props pour une meilleure sécurité des types
interface StepCardProps {
  number: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, imageSrc, imageAlt, description }) => {
  return (
   <div className="relative flex flex-col items-center text-center max-w-[300px] mx-auto md:mx-0  p-4 rounded-lg">
  {/* Numéro en haut à gauche */}
  <div className="absolute top-2 left-2 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold text-white">
    {number}
  </div>

  {/* Image */}
  <img
    src={imageSrc}
    alt={imageAlt}
    className="max-w-[200px] h-auto mt-6 rounded-lg"
  />

  {/* Description */}
  <p className="mt-4 text-lg font-medium text-gray-100">
    {description}
  </p>
</div>

  );
};

export default StepCard;