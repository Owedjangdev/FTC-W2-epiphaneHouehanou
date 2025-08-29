import invoiceIcon from '../assets/icon1.png'; 
import historyIcon from '../assets/icon2.png';
import cardsIcon from '../assets/icon3.png';
import mainImage from '../assets/mainI.png';

const Benefits = () => {
  return (
    <div className="bg-white text-gray-800 font-poppins flex flex-col items-center">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 md:py-32 w-full">
        {/* Le reste de votre code de section Hero ici, qui est déjà centré */}
        <span className="font-sembiold w-[183px] h-[30px] top-[120px] left-[120px] rotate-0 opacity-100 text-[#7C5CFC]">
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
          
          {/* Item 1 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0  rounded-lg p-3 sm:p-4">
              
              <img src={invoiceIcon} alt="Automatic Invoice" className="w-50 h-50 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Automatic Invoice Payment</h3>
              <p className="mt-1 text-[#596780]">
                Automatic payments help you to arrange payments on a certain date without doing it manually again.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0  rounded-lg p-3 sm:p-4">
               <img src={historyIcon} alt="Payment History" className="w-50 h-50" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Clear payment history</h3>
              <p className="mt-1 text-gray-600">
                Clear payment history helps you to track your business expenses on specific dates.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0  rounded-lg p-3 sm:p-4">
                  <img src={cardsIcon} alt="Multi-card payments" className="w-50 h-50 " />
            </div>
            <div>
              <h3 className="text-xl font-bold">Use of multi-card payments</h3>
              <p className="mt-1 text-gray-600">
                Have more than one debit or credit card? Don't worry, we support payments using more than one card.
              </p>
            </div>
          </div>

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