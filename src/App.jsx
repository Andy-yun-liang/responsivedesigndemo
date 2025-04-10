import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className="font-roboto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
