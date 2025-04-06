
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";
import FrameworkChart from "./FrameworkChart";

const App = () => {
  return <div className = "font-roboto">
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <FrameworkChart/>
  </div>
};

export default App;
