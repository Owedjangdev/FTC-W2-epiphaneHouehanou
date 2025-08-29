import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Benefits2 from "./page/Benefits2";
import Benifits1 from "./page/Benifits1";
import CallToAction from "./page/CallToAction";
import HeroSection from "./page/HeroSection";
import HowItAction1 from "./page/HowItAction1";
import HowItAction2 from "./page/HowItAction2";
import Pricing from "./page/Pricing";
import Stories1 from "./page/Stories1";
import Stories2 from "./page/Stories2";
import Testimonials from "./page/Testimonials";

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

