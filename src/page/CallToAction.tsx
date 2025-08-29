import logo from "../assets/Content.png";

const BusinessExpensesSection = () => {
  return (
    <div className="w-full bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-10">
            <div className="text-[#7C5CFC] text-sm font-semibold tracking-wide">
              DOWNLOAD NOW!
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Start Track Your Business Expenses Today
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              Are you ready to make your business more organised? Download Spend.In now!
            </p>
            
            <button className="bg-[#7C5CFC] hover:bg-blue-700 text-white px-5 py-3 rounded-full font-semibold transition-colors duration-200">
              Get a Free Demo
            </button>
          </div>

          {/* Right side - Dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={logo} 
              alt="logo" 
              className="w-full max-w-[966px] h-auto md:h-[450px] object-cover md:rounded-[13.31px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessExpensesSection;
