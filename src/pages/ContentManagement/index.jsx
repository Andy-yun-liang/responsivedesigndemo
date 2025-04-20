import RedirectToLoginIfSignedOut from "sharedComponents/RedirectToLoginIfSignedOut";

const ContentManagement = () => {
  return (
    <RedirectToLoginIfSignedOut>
      <div className = "text-7xl font-ubuntu flex justify-center items-center h-screen"> I AM CONTENT MANAGEMENT PAGE, WORK IN PROGRESS </div>
    </RedirectToLoginIfSignedOut>
  );
};

export default ContentManagement;
