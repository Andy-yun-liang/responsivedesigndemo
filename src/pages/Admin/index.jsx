import LoginForm from "components/LoginForm/Index";

const Admin = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-1">
      <div className="flex justify-center items-center my-30 bg-slate-200 p-10 rounded">
        <div className="hidden md:block md:text-7xl mb-20 mr-60 w-72 font-ubuntu hover:text-andygold transition-colors duration-500 ease-in-out">
          INFORIUM
          <div className = "text-sm">@2025</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Admin;
