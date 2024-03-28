import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">

        <Sidebar className="w-40" />
        <div className="flex-1 overflow-y-auto px-4 py-8 h-[89vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
