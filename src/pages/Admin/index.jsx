import { useState } from "react";
import { getData } from "dataService/mainDataServices";
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formBody = new URLSearchParams();
    formBody.append("username", username);
    formBody.append("password", password);

    // You can now make the API request here with your helper function
    const response = await getData("POST", "/auth/login", formBody);

    // Reset form fields after submit
    setUsername("");
    setPassword("");

    // Handle response (e.g., store token, display error, etc.)
    if (response && response.access_token) {
      localStorage.setItem("access_token", response.access_token);
      console.log("Login successful!");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <form
        className="flex flex-col gap-4 border border-zinc-200 bg-zinc-50 p-6 rounded-xl shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-start mb-2">Admin Login</h2>

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

        <div className="flex flex-col">
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
          className="mt-auto bg-andyblue text-white py-2 rounded-md hover:bg-andydarkblue transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
