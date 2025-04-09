import hero from "../../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[75vh] w-full ">
      
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        
        <div className="absolute inset-0 bg-black/10" />
      </div>

      
      <div className="relative z-10 hero bg-base-200/80 min-h-[75vh] ">
        <div className="sm:hero-content flex-col lg:flex-row ">
          <div className="mx-10 px-10 text-black">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold mb-4">
              Your Tech Partner for Smarter, Simpler Growth
            </h1>
            <p className="text-md sm:text-lg md:text-xl mb-6 max-w-2xl">
              <em>
                Websites, Dashboards, Automations & Apps — without the headache
              </em>
            </p>

            <p>
              Focus on growing your business. We'll take care of the tech, so you don’t have to.
            </p>

            <div className="flex flex-col items-end pr-10 pt-4">
              <button className="rounded-lg bg-andyblue py-7 px-5 my-3 hover:bg-andydarkblue">
                <p className="text-md text-white">I Want to See If Your Services Fit — Take the Quiz</p>
              </button>
              <p className="text-sm font-bold px-2">
                We respect your privacy and won't share your data
              </p>
            </div>
          </div>

         
          <img
            className="hidden lg:block w-[460px] rounded-xl shadow-xl"
            src={hero}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

