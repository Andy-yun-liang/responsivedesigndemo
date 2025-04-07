const Footer = () => {
  return (
    <div className="flex justify-center bg-andyblue text-white">
      <div className="flex flex-wrap pt-12 pb-16 mx-4 justify-between w-full max-w-6xl">
        <div className="m-4 text-sm">
          <h1 className="text-2xl md:text-2xl hover:text-andygold transition-colors duration-500 ease-in-out">
            INFORIUM
          </h1>
          <div className="mt-3">© 2025 Inforium™. All rights reserved</div>
          <div>by Andy Liang</div>
          <div className="mt-6">
            <a href = "/sitemap.xml">Sitemap</a>
            <span className="mx-2">|</span>
            <a>Terms of Service</a>
          </div>
        </div>

        <div className="m-4 text-sm">
          <h1 className="text-2xl md:text-2xl hover:text-andygold transition-colors duration-500 ease-in-out">
            ABOUT
          </h1>
          <div className="mt-3">Our Team</div>
          <div className="mt-3">Career Opportunities</div>
         
        </div>

        <div className="m-4 text-sm">
          <h1 className="text-2xl md:text-2xl hover:text-andygold transition-colors duration-500 ease-in-out">
            SERVICES
          </h1>
          <div className="mt-3">Word Press Development</div>
          <div className="mt-3">Word Press Development</div>
          <div className="mt-3">Word Press Development</div>
          <div className="mt-3">Word Press Development</div>
        </div>

        <div className="m-4 text-sm">
          <h1 className="text-2xl md:text-2xl hover:text-andygold transition-colors duration-500 ease-in-out">
            CONTACT
          </h1>
          <div className="mt-3">Questions or feedback?</div>
          <span className = "text-sky-300" >Andyliang137@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
