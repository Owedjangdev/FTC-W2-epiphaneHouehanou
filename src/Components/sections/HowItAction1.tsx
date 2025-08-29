import step1Image from '../../assets/Image/How1.png';
import step2Image from '../../assets/Image/How2.png';
import step3Image from '../../assets/Image/How3.png';
import ButtonAction from "../ui/Button";
import StepCard from "../ui/StepCard"; 

const HowItWorks = () => {
  return (
    <div className="bg-[#0D121F] text-white font-poppins py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold tracking-widest text-[#7C5CFC] mb-2">
            HOW IT WORKS
          </span>
          <h1 className="mt-1 text-4xl sm:text-5xl font-bold leading-tight">
            Few Easy Steps and Done
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#90A3BF] max-w-lg">
            In just a few easy steps, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
          </p>

          <div className="mt-16 flex flex-col md:flex-row md:space-x-8 items-center md:items-start justify-center">
            {/* Utilisation du composant StepCard pour chaque étape */}
            <StepCard
              number="1"
              imageSrc={step1Image}
              imageAlt="Register account"
              description="Register your Spend.In  
              account now"
            />
            <StepCard
              number="2"
              imageSrc={step2Image}
              imageAlt="Fill in expenses list"
              description="Fill in the list  
              of your business expenses."
            />
            <StepCard
              number="3"
              imageSrc={step3Image}
              imageAlt="Continue work"
              description="Done, let's continue the work
              begnin
              "
            />
          </div>
          
          <ButtonAction/>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;