import ButtonAction from "../Components/Button"
import heroImage from '../assets/Image/Dashboard.png';

const Hero = () => {
  return (
    <div className="bg-[#131825] text-white font-poppins py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-4">
          All your  business  <br className="hidden sm:inline" />expenses  in one place.
        </h1>

        {/* Sous-titre */}
        <p className="mt-4 text-base sm:text-lg text-[#90A3BF] max-w-2xl mx-auto">
          Your one-stop finance empower  platform. Manage <br/> all your  business expenses with our supafast app.
        </p>

        {/* Boutons d'action */}
       <ButtonAction/>

        {/* Image de l'interface */}
        <div className="mt-20 px-4">
          {/* Remplacez `heroImage` par le chemin d'accès à votre image si vous ne l'importez pas */}
          <img 
            src={heroImage} 
            alt="Spend.In Dashboard" 
            className=" rounded-lg shadow-2xl md:w-[1200px] md:h-[852px] object-cover " 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;