
import step1Image from '../assets/Image/How1.png'; 
import step2Image from '../assets/Image/How2.png';
import step3Image from '../assets/Image/How3.png';
import ButtonAction from "../Components/Button"

const HowItWorks = () => {
  return (
    <div className="bg-[#0D121F] text-white font-poppins py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold  tracking-widest text-[#7C5CFC] mb-2">
            HOW IT WORKS
          </span>
          <h1 className="mt-1 text-4xl sm:text-5xl font-bold leading-tight">
            Few Easy Steps and Done
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#90A3BF] max-w-lg">
            In just a few easy steps, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
          </p>

          <div className="mt-16 flex flex-col md:flex-row ">
            {/* Étape 1 */}
            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute top-0  left-0 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold">1</div>
                <img src={step1Image} alt="Register account" className="w-full h-auto mt-12 rounded-lg" />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-100 pt-9">Register your Spend.In account.</p>
            </div>
            {/* Étape 2 */}
            <div className="flex flex-col items-center text-center max-w-[300px] ">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute top-0  left-0 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold">2</div>
                <img src={step2Image} alt="Fill in expenses list" className="w-full h-auto mt-12 rounded-lg " />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-100 pt-9">Fill in the list of your business expenses.</p>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute top-0  left-0 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-lg font-bold">3</div>
                <img src={step3Image} alt="Continue work" className="w-full h-auto mt-12 rounded-lg" />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-100 pt-9">Done, let's continue the work.</p>
            </div>
          </div>
 <ButtonAction/>
          
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;