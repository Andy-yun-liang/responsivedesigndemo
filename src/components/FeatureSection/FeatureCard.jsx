const FeatureCard = (props) => {
  const { feature } = props;

  return (
    <div className="flex flex-col items-center m-6 p-6 text-andygold border-andygold bg-white border-2 rounded-xl shadow-xl md:w-[370px] md:h-[480px] 3xl:w-[450px] 3xl:h-[550px]">
        <img className = "w-[200px]" src = {feature.image}/>
        <div className = "my-4 text-2xl text-ubuntu">{feature.title}</div>
        <div className = "text-sm text-start 3xl:text-lg overflow-y-auto">{feature.description}</div>
    </div>
  );
};

export default FeatureCard;
