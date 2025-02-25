import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { DashboardProvider } from "@/contexts/DashboardContext";
import { Button } from "../ui/button";

function DashboardLayout({ children }) {
    const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <DashboardProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen dark:bg-black dark:text-foreground ">
          <Navbar />
          <div className="p-10 ">
            
            <div className="container ">
              {children}</div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}

export default DashboardLayout;
