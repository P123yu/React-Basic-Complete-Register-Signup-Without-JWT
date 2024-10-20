import axios from "axios";
import React, { useEffect, useState } from "react";

function GetAllEmployees() {
  const [empData, setEmpData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employee/get-all");
        setEmpData(res.data);
      } catch (err) {
        setError("Failed to fetch employee data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Employee List</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {empData.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          {empData.map((i) => (
            <li key={i.id} className="py-4 border-b last:border-b-0">
              <div className="font-semibold text-gray-800">{i.empName}</div>
              <div className="text-gray-600">Email: {i.empEmail}</div>
              <div className="text-gray-600">City: {i.empCity}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No employees found</p>
      )}
    </div>
  );
}

export default GetAllEmployees;
