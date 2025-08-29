import Arrow from "../assets/Image/Arrow.png";
import cercle from "../assets/Image/cercle.png";
import lovely from "../assets/Image/lovely.png";
import crown from "../assets/Image/crown.png";
import share from "../assets/Image/share.png";
import PricingCard from "../Components/ui/PricingCard";

const PricingSection = () => {
  const plans = [
    {
      title: "Free",
      subtitle: "Perfect plan to get started",
      price: "$0",
      period: "/month",
      icon: lovely,
      features: [
        { text: "Sync across device", available: true },
        { text: "5 workspace", available: true },
        { text: "Collaborate with 5 user", available: true },
        { text: "Sharing permission", available: false },
        { text: "Admin tools", available: false },
        { text: "100+ integrations", available: false },
      ],
      buttonText: "Get Your Free Plan",
    },
    {
      title: "Pro",
      subtitle: "Perfect plan for professional",
      price: "$12",
      period: "/month",
      icon: crown,
      badge: "Popular",
      features: [
        { text: "Everything in Free Plan", available: true },
        { text: "Unlimited workspace", available: true },
        { text: "Collaborative workspace", available: true },
        { text: "Sharing permission", available: true },
        { text: "Admin tools", available: true },
        { text: "100+ integrations", available: true },
      ],
      buttonText: "Get Started",
    },
    {
      title: "Ultimate",
      subtitle: "Best value for great company!",
      price: "$33",
      period: "/month",
      icon: share,
      features: [
        { text: "Everything in Pro Plan", available: true },
        { text: "Daily performance reports", available: true },
        { text: "Dedicated assistant", available: true },
        { text: "Artificial Intelligence", available: true },
        { text: "Marketing tools & automations", available: true },
        { text: "Advanced security", available: true },
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg">
            Choose a plan that suits your business needs.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-12 relative">
          <div className="flex items-center">
            <span className="text-gray-600 font-bold mr-3">Monthly</span>
            <div className="relative">
              <img src={cercle} alt="" className="sr-only" />
              <div className="w-12 h-6 bg-blue-500 rounded-full flex items-center">
                <div className="w-5 h-5 bg-white rounded-full ml-auto mr-0.5 shadow"></div>
              </div>
            </div>
            <span className="text-gray-600 font-bold ml-3">Yearly</span>
          </div>
          <div className="flex items-center gap-3">
          <span className="ml-2 text-xs bg-purple-100  px-3 py-2 rounded-full">
            Save 65%
          </span>
          <div className="flex-shrink-0">
            <img src={Arrow} width={80} height={40} alt="arrow" />
          </div>
        </div>
      </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-20">
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              period={plan.period}
              icon={plan.icon}
              badge={plan.badge}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
   
  
  );
};

export default PricingSection;










