import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import useStore from "./Zustand";

function Login() {
  const { setIsAuthenticated } = useStore();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    console.log(value, "value");
    axios
      .post("http://localhost:8080/login", value)
      .then((res) => {
        setIsAuthenticated(true);
        navigate("/dashboard");
        swal.fire("login successfully");
      })
      .catch((error) => {
        swal.fire("not Login");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            name="userPassword"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          onClick={handleRegister}
        >
          Login
        </button>

        <div className="text-center mt-4 text-gray-500">
          <p>
            don't have an account?
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
