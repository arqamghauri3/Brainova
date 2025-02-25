import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { DashboardProvider } from "@/contexts/DashboardContext";

function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen  bg-black">
          <Navbar />
          <div className="p-10">
            <div className="container ">{children}</div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}

export default DashboardLayout;
