import invoiceIcon from "../../assets/Image/icon1.png"; 
import historyIcon from "../../assets/Image/icon2.png";
import cardsIcon from "../../assets/Image/icon3.png";
import mainImage from "../../assets/Image/mainI.png";
import Benefits2 from "../ui/Benefits2card";

const Benefits = () => {
  const data = [
    {
      icon: invoiceIcon,
      title: "Automatic Invoice Payment",
      description:
        "Automatic payments help you to arrange payments on a certain date without doing it manually again.",
    },
    {
      icon: historyIcon,
      title: "Clear payment history",
      description:
        "Clear payment history helps you to track your business expenses on specific dates.",
    },
    {
      icon: cardsIcon,
      title: "Use of multi-card payments",
      description:
        "Have more than one debit or credit card? Don't worry, we support payments using more than one card.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-poppins flex flex-col items-center">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 md:py-32 w-full">
        <span className="font-sembiold w-[183px] h-[30px] text-[#7C5CFC]">
          WHY USE SPEND.IN
        </span>
        <h1 className="mt-1 text-5xl font-bold leading-tight">
          Easy, Simple, Affordable
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
        </p>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-20 md:pb-32 w-full max-w-6xl px-4 md:px-6 lg:px-8 mx-auto">

        {/* Colonne de texte et d'icônes */}
        <div className="flex flex-col space-y-8">
          {data.map((feature, index) => (
            <Benefits2
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Colonne de l'image principale */}
        <div className="lg:order-last order-first bg-gray-50 rounded-2xl p-4 lg:p-8 shadow-xl flex items-center justify-center">
          <img src={mainImage} alt="Transaction History" className="w-full h-auto rounded-xl" />
        </div>

      </section>

    </div>
  );
};

export default Benefits;
