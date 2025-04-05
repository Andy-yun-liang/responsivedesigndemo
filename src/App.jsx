
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import features from "./demoData";

const servicesOffered = features.map((feature,idx)=>{
  return <FeatureSection feature={feature} key = {idx}/>
})


const App = () => {
  return <div className = "font-roboto">
    <HeroSection/>
    {servicesOffered}
  </div>
};

export default App;
