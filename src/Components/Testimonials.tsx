import imgl4 from "../assets/Image/image4.png";
import imgl5 from "../assets/Image/image5.png";
import imgl6 from "../assets/Image/image6.png";
import imgB1 from "../assets/Image/ButtonPrev.png";
import imgB2 from "../assets/Image/ButtonNext.png";
import TestimonialCard from "../Components/ui/TestimonialCard";

const testimonials = [
  {
    title: "It's just Incredible!",
    text: "It's just I never expect trusting Spend.In for manage my business expenses, but the results are amazing. I can manage my company's financial much more neat than before, thanks to Spend.In",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    img: imgl4,
  },
  {
    title: "Satisfied User Here!",
    text: "The best! That's what I want to say to this platform. Glad to know that there is a platform that can help manage business expenses like that! Very recommended to you who have a big business!",
    name: "Natasha Romanoff",
    role: "Freelancer",
    img: imgl5,
  },
  {
    title: "No doubt, Spend.In is the best!",
    text: "The best! That's what I want to say to this platform. Glad to know that there is a platform that can help manage business expenses like that! Very recommended to you who have a big business!",
    name: "Monika Keanui",
    role: "Product Manager at Picko",
    img: imgl6,
  },
];

const UserTestimonialsSection = () => {
  return (
    <div className="w-full bg-[#0D121F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-4">
            WHAT THEY SAY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our User Kind Words
          </h2>
          <p className="text-[#90A3BF] text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some testimonials from our user after using Spend. <br /> In to manage their business expenses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              title={t.title}
              text={t.text}
              name={t.name}
              role={t.role}
              img={t.img}
            />
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-10">
          <img src={imgB1} alt="Btn prev" />
          <img src={imgB2} alt="Btn next" className="bg-[#7C5CFC] rounded-full px-4 py-4" />
        </div>
      </div>
    </div>
  );
};

export default UserTestimonialsSection;
