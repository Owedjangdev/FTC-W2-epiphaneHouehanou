import Arrow from "../assets/Image/Arrow.png";
import cercle from "../assets/Image/cercle.png";
import lovely from "../assets/Image/lovely.png";
import crown from "../assets/Image/crown.png";
import share from "../assets/Image/share.png";

const PricingSection = () => {
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

          <div className="absolute right-1/2 transform translate-x-24 -bottom-20">
            <img src={Arrow} alt="Arrow" className="w-24 h-auto" />
            <button className="bg-purple-100 items-center absolute    px-2 py-2 rounded-full text-sm font-medium  -bottom-1">
              Save 65%
            </button>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-20">
          {/* Free Plan */}
          <div className="bg-[#F3F5F7] rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-purple-600 text-lg">
                  <img
                    src={lovely}
                    alt="Free Icon"
                    className="w-full h-full object-contain"
                  />{" "}
                  {/* Using cercle for Free icon */}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free</h3>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Perfect plan to get started
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <p className="text-gray-600 text-sm mb-8">
              A free plan grants you access to some cool features of Spend.In.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Sync across device
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">5 workspace</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Collaborate with 5 user
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-400 text-sm">
                  Sharing permission
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-400 text-sm">Admin tools</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-400 text-sm">100+ integrations</span>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Get Your Free Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#F3F5F7]  rounded-xl p-8 shadow-sm border border-gray-200 relative">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center  
            "
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 text-lg">
                    <img
                      src={crown}
                      alt="Pro Icon"
                      className="w-full h-full object-contain"
                    />{" "}
                    {/* Using cercle for Pro icon */}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              </div>
              {/* Popular badge */}

              <div className="bg-[#0D121F] text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Perfect plan for professional
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$12</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <p className="text-gray-600 text-sm mb-8">
              For professional only. Start arranging your expenses with our best
              templates.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Everything in Free Plan
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Unlimited workspace
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Collaborative workspace
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Sharing permission
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Admin tools</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">100+ integrations</span>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-[#F3F5F7] rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <img
                  src={share}
                  alt="ultimate icon"
                  className="text-purple-600 text-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ultimate</h3>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Best value for great company!
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$33</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <p className="text-gray-600 text-sm mb-8">
              If you a finance manager at big company, this plan is a perfect
              match.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Everything in Pro Plan
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Daily performance reports
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Dedicated assistant
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Artificial Intelligence
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Marketing tools & automations
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Advanced security</span>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
