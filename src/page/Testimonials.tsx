import imgl4 from "../assets/image5.png"
import imgl5 from "../assets/image5.png"
import imgl6 from "../assets/image6.png"
import imgB1 from "../assets/ButtonPrev.png"
import imgB2 from "../assets/ButtonNext.png"


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
        <div className="grid md:grid-cols-3 gap-8 mb-12 ">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-[#1A202C] rounded-xl p-6">
              <h3 className="text-white font-medium text-lg mb-4">
                {t.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="border-b border-gray-600 mb-5"></div>

              {/* User info */}
              <div className="flex items-center gap-3">
                <div
                  className=" flex items-center justify-center"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-[70px] h-[70px]  top-[261px] left-[32px] opacity-100 rounded-[12px]"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-10">
          <img src={imgB1} alt="Btn prev" />
          <img src={imgB2} alt="Btn next"  className="bg-[#7C5CFC] rounded-full px-4 py-4"/>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonialsSection;
