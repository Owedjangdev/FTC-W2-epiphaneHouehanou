import ButtonAction from "../Components/ui/Button";
import heroImage from '../assets/Image/Dashboard.png';
import Circle from '../assets/Image/circle.png';

const Hero = () => {
  return (
    <section className="bg-[#0D121F] text-white relative overflow-hidden min-h-screen">
  
   <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1 left-10 w-64 h-64 bg-[#ffffff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1 right-1 w-96 h-96 bg-[#ffffff] rounded-full blur-3xl"></div>
      </div>
      <img
        src={Circle}
        alt="cercle décoratif"
        className="absolute top-0 right-0 w-90 h-90 object-contain rotate-180 pointer-events-none"
      />
      
      <img
        src={Circle}
        alt="cercle décoratif"
        className="absolute bottom-0 left-0 w-90 h-90 object-contain -rotate-0 pointer-events-none"
      />

      <div className="relative z-10 md:max-w-7xl mx-auto px-6 py-20">
        <div className="md:text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            All your business<br />
            expenses in one place.
          </h1>

          <p className="text-md md:text-xl text-[#90A3BF] mb-2">
            Your one-stop finance empower platform.
          </p>
          <p className="text-md md:text-xl text-[#90A3BF] mb-12">
            Manage all your business expenses with our superfast app.
          </p>

         <ButtonAction/>
        </div>

        {/* Dashboard Preview */}
        <div className="relative bottom-0">
          <img src={heroImage} alt="Dashboard image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;