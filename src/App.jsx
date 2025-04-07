
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";
import FrameworkChart from "./FrameworkChart";
import Footer from "./Footer";


const App = () => {
  return <div className = "font-roboto">
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <FrameworkChart/>
    <Footer/>
  </div>
};

export default App;
