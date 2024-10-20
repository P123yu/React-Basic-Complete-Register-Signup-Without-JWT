import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "./Zustand";

function Dashboard() {
  const navigate = useNavigate();
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);

  const handleNavigateAdd = () => {
    navigate("/add");
  };

  const handleNavigateGetAll = () => {
    navigate("/get-all");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <p className="text-2xl text-center">Dashboard</p>
      <div className="button p-10">
        <div className="flex justify-between items-center">
          <div className=" flex items-center space-x-[70px] ">
            <div
              className="name p-2 bg-blue-900 text-white ml-20 rounded-md cursor-pointer"
              onClick={handleNavigateAdd}
            >
              Add Employee
            </div>

            <div
              className="name p-2 bg-blue-900 text-white rounded-md cursor-pointer"
              onClick={handleNavigateGetAll}
            >
              Get All
            </div>
          </div>
          <div
            className="name p-2 bg-red-600 text-white rounded-md cursor-pointer w-1/12"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
