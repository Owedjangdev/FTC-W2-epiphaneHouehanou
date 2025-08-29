import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Benefits2 from "./Components/Benefits2";
import Benifits1 from "./Components/Benifits1";
import CallToAction from "./Components/CallToAction";
import HeroSection from "./Components/HeroSection";
import HowItAction1 from "./Components/HowItAction1";
import HowItAction2 from "./Components/HowItAction2";
import Pricing from "./Components/Pricing";
import Stories1 from "./Components/Stories1";
import Stories2 from "./Components/Stories2";
import Testimonials from "./Components/Testimonials";

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

