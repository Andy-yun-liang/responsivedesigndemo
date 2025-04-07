import heroImage from "../../assets/heroImage.jpg";

const HeroSection = () => {
  return (
    /* Background Image for the hero section */
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-0 h-full flex flex-col justify-center items-center text-white text-4xl md:text-6xl 3xl:text-8xl">
        <div className = "text-center mb-6 px-2">Intuitive, Scalable Tech Solutions</div>

        <button className="border-4 border-white text-sm font-medium px-12 py-3 hover:scale-125 md:text-lg md:hover:scale-150 md:my-6 3xl:text-5xl 3xl:border-8">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
