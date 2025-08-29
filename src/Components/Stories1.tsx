import checkIcon from "../assets/Image/check.png"
import statsImage from "../assets/Image/SuccessStories.png"

const Stories = () => {
  return (
    <div className="font-poppins bg-white text-gray-800">
      {/* Section Increase Productivity */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Colonne de texte et de boutons */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <span className="text-sm font-medium tracking-widest text-[#7C5CFC]">
              INCREASE PRODUCTIVITY
            </span>
            <h1 className="mt-1 text-4xl sm:text-5xl font-semibold leading-tight">
              Reduce Time in Doing Manual Work <br/> Managing Expenses
            </h1>
            
           <div className="mt-6 flex justify-center lg:justify-start">
  <button className="relative z-10 bg-[#7C5CFC] hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
    With Spend.In
  </button>
  <button className="relative -ml-5 z-0 border  bg-[#F3F5F7]   text-center border-600 text-purple-600 py-3 px-6 rounded-full transition duration-300">
    Without Spend.In
  </button>
</div>
            
            <div className="mt-8 flex flex-col space-y-4 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <img src={checkIcon} alt="Checkmark" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Analyze your business cost easily with group transaction thorough tagging feature.
                </p>
              </div>
              
              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <img src={checkIcon} alt="Checkmark" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3">
                <img src={checkIcon} alt="Checkmark" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Arrange your business expenses by date, name, etc., with just one click.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne de l'image de statistiques */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Balance Statistics</h4>
                <div className="text-gray-400">···</div>
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-bold">$85,211.00</h2>
                <div className="flex items-center text-green-500 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  65.1%
                </div>
              </div>
              <img src={statsImage} alt="Balance Statistics Chart" className="mt-4 w-[488px] h-[438px] object-cover" />
            </div>
          </div>
        </div>
      </section>
     

    </div>
  );
};

export default Stories;