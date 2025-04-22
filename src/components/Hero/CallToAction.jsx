import ServiceQuizModal from "components/ServiceQuizModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook to check for mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const CallToAction = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="rounded-lg bg-andyblue py-7 px-5 my-3 hover:bg-andydarkblue"
        onClick={() => {
          if (isMobile) {
            navigate("/about");
          } else {
            setOpenModal(true);
          }
        }}
      >
        <p className="text-base text-white">
          I Want to See If Your Services Fit — Take the Quiz
        </p>
      </button>
      {!isMobile && openModal && (
        <ServiceQuizModal onClose={() => setOpenModal(false)} />
      )}
    </>
  );
};

export default CallToAction;
