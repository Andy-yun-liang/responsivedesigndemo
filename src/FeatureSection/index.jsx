import FeatureCard from "./FeatureCard";
import features from "../demoData";

const servicesOffered = features.map((feature, idx) => {
  return <FeatureCard feature={feature} key={idx} />;
});

const FeatureSection = () => {
 
  return (
    <div className="flex flex-col items-center justify-center bg-andyblue">
      <div className="text-3xl font-ubuntu text-white text-center mt-10 md:text-5xl 3xl:text-6xl">
        Services We Offer
      </div>
      <div className="w-full max-w-6xl flex flex-col m-10 justify-center items-center md:flex-row md:max-w-7xl md:flex-wrap 3xl:flex-nowrap 3xl:max-w-full" >
        {servicesOffered}
      </div>
    </div>
  );
};

export default FeatureSection;
