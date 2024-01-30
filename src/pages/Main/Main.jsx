import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Main = () => {
  const [titleMain, setTitleMain] = useState("Dashboard");
  const navigate = useNavigate()

  useEffect(() => {
    navigate("dashboard")
  }, [])
  return (
    <div className="flex gap-x-8">
        <Sidebar changeTitle={setTitleMain} />
      <div className="w-full">
        <div>
          <div>{titleMain}</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
