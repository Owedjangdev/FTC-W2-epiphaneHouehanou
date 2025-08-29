import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Benefits2 from "./Components/sections/Benefits2";
import Benifits1 from "./Components/sections/Benifits1";
import CallToAction from "./Components/sections/CallToAction";
import HeroSection from "./Components/sections/HeroSection";
import HowItAction1 from "./Components/sections/HowItAction1";
import HowItAction2 from "./Components/sections/HowItAction2";
import Pricing from "./Components/sections/Pricing";
import Stories1 from "./Components/sections/Stories1";
import Stories2 from "./Components/sections/Stories2";
import Testimonials from "./Components/sections/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Benifits1 />
      <Benefits2 />
      <HowItAction1 />
      <HowItAction2 />
      
      <Stories1 />
      <Stories2 />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;

