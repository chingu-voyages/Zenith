import LandingNav from "../../components/LandingNav/LandingNav";
import React, { useState } from "react";

function LogIN() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <LandingNav currentPage="login"></LandingNav>
      <div
        className="bg-gray-100 flex justify-center items-center"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:bg-rose-600"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIN;
