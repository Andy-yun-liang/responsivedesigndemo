import {Link} from 'react-router-dom';
import { useState } from "react";


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="flex justify-center items-center bg-andyblue text-white font-medium shadow-xl px-4">
        <div className="w-full max-w-[1920px] py-2 md:py-6 font-ubuntu flex justify-between items-center ">
          <Link to ="/" className="text-2xl md:text-4xl hover:text-andygold transition-colors duration-500 ease-in-out">
            INFORIUM
          </Link>

          <div className="hidden md:flex">
            <Link to ="/about" className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">
              ABOUT
            </Link>
            <Link to = "/services" className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">
              SERVICES
            </Link>
            <Link to = "/contact" className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">
              CONTACT
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => {
              setMobileMenu(true);
            }}
          >
            <i className="fa-solid fa-bars text-white text-2xl"></i>
          </button>
        </div>
      </nav>
      {mobileMenu && (
        <div className="z-10 flex flex-col fixed top-0 right-0 pt-10 pb-4 rounded-bl-lg bg-zinc-50 text-andygold border-andygold border-b-2 border-l-2 ">
          <Link to = "/about" className="flex pl-6 pr-20 py-4 text-lg">ABOUT</Link>
          <Link to = "/services" className="flex pl-6 pr-20 py-4 text-lg">SERVICES</Link>
          <Link to = "/contact" className="flex pl-6 pr-20 py-4 text-lg">CONTACT</Link>
          <button
            onClick={() => {
              setMobileMenu(false);
            }}
          >
            <i className="absolute top-0 right-0 text-3xl p-2 text-andygold fa-regular fa-circle-xmark "></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
