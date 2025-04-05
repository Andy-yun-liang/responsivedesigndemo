import hero from "./assets/hero.jpeg";
//bg-gradient-to-br from-[#FFF8E1] via-[#e8e0d9] to-[#d9d6cd]
const HeroSection = () => {
  return (
    <div className="flex justify-center bg-andyblue">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-30 px-4 w-full max-w-6xl ">
        <div className="text-white text-3xl md:text-5xl font-ubuntu font-medium max-w-[480px]">
          <div>Intuitive, Scalable Technology Solutions</div>

          <button className="border-4 border-white text-xl font-medium px-10 py-3 mt-4 hover:bg-white hover:border-andygold hover:text-andygold  ">
            Learn More
          </button>
        </div>

        <img className="md:w-[450px] my-10 md:ml-6 object-cover rounded-xl" src={hero} />
      </div>
    </div>
  );
};

export default HeroSection;
