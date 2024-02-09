import React from "react";
import Sidebar from "../../components/ui/Sidebar";
import { Outlet } from "react-router";
import { useLogin } from "../../utils/useLogin";

const DashboardMonev = () => {
  useLogin();
  return (
    <div className="flex h-screen overflow-hidden [@media(max-width:1000px)]:gap-4">
      <Sidebar />
      <div className="flex w-full overflow-auto">
        <div className="md:p-8 overflow-auto flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMonev;
