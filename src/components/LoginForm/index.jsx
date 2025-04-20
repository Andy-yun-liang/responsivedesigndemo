import { useState,useContext } from "react";
import { getData } from "dataService/mainDataServices";
import SessionContext from "Contexts/SessionContext";

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const sessionContext = useContext(SessionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const response = await getData("POST", "/auth/login", {
      username,
      password,
    });
    
    if(response.status === 200){
      setErrorMsg("")
      sessionContext.signIn(response.data.access_token)
      setIsLoading(false)
    }else{
        setIsLoading(false)
        setErrorMsg(response.data.detail)

    }
    
  };

  return (
    <div className="flex justify-center my-10">
      <form
        className="flex flex-col gap-4 border border-zinc-200 bg-zinc-50 p-6 rounded-xl shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <div className = "mb-2">


        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="mb-1 text-sm font-medium text-zinc-700"
          >
            Username
          </label>
          <input
            className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className = "absolute text-red-500 ml-2"> {errorMsg} </div>
        </div>
        <div className="flex flex-col mb-2">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-auto bg-andyblue text-white py-2 rounded-md
           hover:bg-andydarkblue transition-colors relative cursor-pointer"
        >
          Login 
          
          { isLoading &&
          <div className="absolute top-0 right-4 h-full flex items-center animate-spin">
            <i className="fa-solid fa-circle-notch text-sky-500 animate-spin"></i>
          </div>
        }
        </button>
      </form>
      
    </div>
  );
};

export default LoginForm;
