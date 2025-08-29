import imgl1 from "../../assets/Image/Invoice1.png";
import imgl2 from "../../assets/Image/Invoice2.png";
import imgl3 from "../../assets/Image/Invoice3.png";
import badgeImg from "../../assets/Image/Verif.png"; 
import FeatureCard from "../ui/Benefits1card";

const Benefits = () => {
  const data = [
    {
      image: imgl1,
      badge: badgeImg,
      title: "Automatic Invoice Payment",
      description:
        "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!",
    },
    {
      image: imgl2,
      title: "Clear Payment History",
      description:
        "Struggling with manual expenses? Our platform breaks down every expense you log down to the millisecond!",
    },
    {
      image: imgl3,
      title: "Use of Multi-Card Payments",
      description:
        "Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex flex-col max-w-lg">
            <span className="font-semibold text-[#7C5CFC] text-sm sm:text-base uppercase tracking-widest">
              WHY USE SPEND.IN
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              Easy, Simple <br /> Affordable
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed md:max-w-md">
            Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((feature, idx) => (
            <FeatureCard
              key={idx}
              image={feature.image}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
