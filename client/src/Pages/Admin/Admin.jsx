import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10">
      <h1 className="text-3xl font-semibold mb-10">Admin Dashboard</h1>
      <div className="container flex items-center justify-center mb-10">
        <div className="shadow-custom w-auto p-3 rounded-md flex justify-evenly gap-2">
          <p onClick={() => navigate("")} className="w-40 h-9 text-white bg-indigo-700 rounded-md flex items-center justify-center cursor-pointer">General</p>
          <p onClick={() => navigate("users")} className="w-40 h-9 text-white bg-indigo-700 rounded-md flex items-center justify-center cursor-pointer">Users</p>
          <p onClick={() => navigate("vacancies")} className="w-40 h-9 text-white bg-indigo-700 rounded-md flex items-center justify-center cursor-pointer">Vacancies</p>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
