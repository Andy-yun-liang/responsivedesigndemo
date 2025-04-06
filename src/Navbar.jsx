
import {useState} from "react";

const Navbar = () => {

    const [mobileMenu,setMobileMenu] = useState(false);

  return (
    <>
    <nav className="flex justify-center items-center bg-andyblue text-white font-medium shadow-xl px-4">
      <div className="w-full max-w-[1920px] py-2 md:py-6 font-ubuntu flex justify-between items-center ">
        <h1 className="text-2xl md:text-4xl hover:text-andygold transition-colors duration-500 ease-in-out">INFORIUM</h1>

        <div className = "hidden md:flex">
          <button className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">ABOUT</button>
          <button className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">SERVICES</button>
          <button className="text-xl font-medium mx-4 hover:text-andygold transition-colors duration-500 ease-in-out">CONTACT</button>
        </div>

        <button className = "md:hidden" onClick = {()=>{
            setMobileMenu(true)
        }}>
        <i className="fa-solid fa-bars text-white text-2xl"></i>
        </button>


      </div>
    </nav>
    { mobileMenu && <div className = "z-10 flex flex-col fixed top-0 right-0 pt-10 pb-4 rounded-bl-lg bg-zinc-50 text-andygold border-andygold border-b-2 border-l-2 ">
        <button className = "flex pl-6 pr-20 py-4 text-lg">ABOUT</button>
        <button className = "flex pl-6 pr-20 py-4 text-lg">SERVICES</button>
        <button className = "flex pl-6 pr-20 py-4 text-lg">CONTACT</button>
        <button onClick = {
            ()=>{
                setMobileMenu(false)
            }
        }>

        <i className="absolute top-0 right-0 text-3xl p-2 text-andygold fa-regular fa-circle-xmark "></i>
        </button>
        
        </div>}
    </>
  );
};

export default Navbar;
