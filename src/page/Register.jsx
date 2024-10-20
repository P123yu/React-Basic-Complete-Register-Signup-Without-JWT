import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [register, setRegister] = useState("");

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  console.log(value, "value");

  const handleRegister = () => {
    axios
      .post("http://localhost:8080/register", value)
      .then((res) => {
        navigate("/");
        Swal.fire("registered");
      })
      .catch((error) => {
        Swal.fire("not registered");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
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
          Register
        </button>

        <div className="text-center mt-4 text-gray-500">
          <p>
            Already have an account ?
            <Link to="/" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
