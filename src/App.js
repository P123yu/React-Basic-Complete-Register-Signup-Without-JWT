import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Add from "./page/Add";
import Dashboard from "./page/Dashboard";
import GetAll from "./page/GetAll";
import Login from "./page/Login";
import PrivateRoute from "./page/PrivateRoute";
import Register from "./page/Register";
import useStore from "./page/Zustand";

function App() {
  const { isAuthenticatedData } = useStore();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticatedData ? <Navigate to="/dashboard" /> : <Login />
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticatedData ? <Navigate to="/dashboard" /> : <Register />
            }
          />
          <Route
            element={<PrivateRoute isAuthenticated={isAuthenticatedData} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<Add />} />
            <Route path="/get-all" element={<GetAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
