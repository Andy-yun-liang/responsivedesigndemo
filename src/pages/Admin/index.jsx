import { useNavigate } from "react-router-dom";
import LoginForm from "components/LoginForm/Index";
import RedirectToContentIfSignedIn from "sharedComponents/RedirectToContentIfSignedIn";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <RedirectToContentIfSignedIn>
      <div className="bg-slate-50 min-h-screen p-1">
        <div className="flex justify-center items-center my-30 bg-slate-200 p-10 rounded">
          <div className="hidden md:block md:text-7xl mb-20 mr-60 w-72 font-ubuntu animate-fade-in-left">
            <button className="cursor-pointer" onClick={() => navigate("/")}>
              INFORIUM
              <div className="text-sm flex">@2025</div>
            </button>
          </div>

          <LoginForm />
        </div>
      </div>
    </RedirectToContentIfSignedIn>
  );
};

export default Admin;
