
import FeatureCard from "./FeatureCard";


const FeatureSection = (props) => {

  const {feature} = props;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex flex-col mt-20 ">
        <div className="text-3xl font-ubuntu text-andygold text-center">
          
          <div>
            <FeatureCard feature = {feature}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
