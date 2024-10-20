import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Add() {
  const [value, setValue] = useState({
    empName: "",
    empEmail: "",
    empCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    axios
      .post("http://localhost:8080/employee/add", value)
      .then((res) => {
        Swal.fire("Employee Added Successfully");
        setValue({ empName: "", empEmail: "", empCity: "" });
      })
      .catch((error) => {
        Swal.fire("Employee Not Added");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Employee
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Name</label>
          <input
            type="text"
            name="empName"
            placeholder="Enter employee name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value.empName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Employee Email</label>
          <input
            type="email"
            name="empEmail"
            placeholder="Enter employee email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value.empEmail}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Employee City</label>
          <input
            type="text"
            name="empCity"
            placeholder="Enter employee city"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value.empCity}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          onClick={handleRegister}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default Add;
