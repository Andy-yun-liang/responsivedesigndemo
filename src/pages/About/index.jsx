import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    admin: "false",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      admin: formData.admin === "true", // convert string to boolean
    };

    console.log("Submitting:", payload);

    try {
      const response = await fetch("http://localhost:8000/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData({
        username: "",
        password: "",
        email: "",
        admin: "false",
      });
  };

  return (
    <div className="flex justify-center my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-zinc-200 bg-zinc-50 p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-semibold text-center mb-2">User Info</h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="admin" className="mb-1 text-sm font-medium text-zinc-700">
            Admin Status?
          </label>
          <select
            id="admin"
            value={formData.admin}
            onChange={handleChange}
            className="border border-zinc-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
