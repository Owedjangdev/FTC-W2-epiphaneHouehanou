import howItWorksImage from "../../assets/Image/Conte.png";

const HowItWorks = () => {
  return (
    <div className="bg-slate-900 text-white font-poppins py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <section className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Colonne de l'image */}
          <div className="lg:w-1/2 w-full lg:order-first order-last">
            <img
              src={howItWorksImage}
              alt="How It Works Screen"
              className="w-[588px] h-[538px] rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* Colonne du texte et des étapes */}
          <div className="lg:w-1/2 w-full">
            <span className="text-sm font-medium uppercase tracking-widest text-[#7C5CFC] ">
              HOW IT WORKS
            </span>
            <h1 className="mt-1 text-4xl sm:text-5xl font-semibold leading-tight my-10">
              Few Easy Steps and Done
            </h1>
            <p className="mt-4 text-base text-gray-400 max-w-lg mb-20">
              In just a few easy steps, you are all set to manage your business
              finances. Manage all expenses with Spend.In all in one place.
            </p>
            <div className="bg-[#1A202C] px-4 py-6 h-auto min-h-[288px] flex items-center justify-center">
              <ul className="mt-8 relative before:absolute before:left-6 before:top-6 before:h-[calc(100%-48px)] before:w-0.5 before:bg-blue-500 after:absolute border:left-6 border:top-[6.3rem] border:h-[6.3rem]  after:border-l-2 before:border-dashed begore:border-blue-500">
                {/* Étape 1 */}
                <li className="flex items-center mb-6">
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold text-gray-100">
                    1
                  </div>
                  <p className="ml-5 text-lg font-medium text-gray-100">
                    Register your Spend.In account.
                  </p>
                </li>

                {/* Étape 2 */}
                <li className="flex items-center mb-6">
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold text-gray-100">
                    2
                  </div>
                  <p className="ml-5 text-lg font-medium text-gray-100">
                    Fill in the list of your business expenses.
                  </p>
                </li>

                {/* Étape 3 */}

                <li className="flex items-start space-x-3 relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black text-sm font-bold z-10">
                      3
                    </div>
                  </div>
                  <span className="text-white text-sm md:text-base">
                    Done, let’s continue the work.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
