

const ServiceQuizModal = (props) => {

  const {onClose} = props;
  return (
    <div className="bg-neutral-700/85 w-full h-full fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-white h-225 w-225 relative flex justify-center items-center">
        I AM STILL FIguREEE OUUT WHAaT I"M TRYING TO SELL AS A SERVICE -__-
        <button onClick = {onClose} className = "cursor-pointer">
        <i className="fa-regular text-3xl text-black fa-circle-xmark absolute top-0 right-0 p-4"></i>

        </button>
      </div>
    </div>
  );
};

export default ServiceQuizModal;
