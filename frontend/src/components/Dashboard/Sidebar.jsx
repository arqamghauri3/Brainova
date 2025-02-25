import React, { useContext, useEffect, useRef } from "react";
import { DashboardContext } from "@/contexts/DashboardContext";
import clsx from "clsx";
import {
  Brain,
  User,
  FileText,
  Upload,
  Calendar,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext);
  const sidebarRef = useRef(null);
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
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const sidebarLinks = [
    { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { title: "Profile", href: "/dashboard/profile", icon: User },
    { title: "Upload EEG", href: "/dashboard/upload", icon: Upload },
    { title: "Reports", href: "/dashboard/reports", icon: FileText },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <nav
      ref={sidebarRef}
      className={clsx(
        "border-r border-slate-200 dark:border-slate-800 w-64 min-h-screen bg-white transition-transform duration-300 dark:bg-black dark:text-foreground",
        "fixed md:relative md:translate-x-0 z-50 shadow-lg md:shadow-none",
        {
          "translate-x-0": isSidebarOpen,
          "-translate-x-full md:translate-x-0": !isSidebarOpen,
        }
      )}
    >
      <div className="space-y-4 py-4 px-3">
        <div className="flex h-16 items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Brainova</span>
        </div>
        <div className="space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center space-x-3 p-3 rounded-md hover:bg-white hover:text-black"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="pt-4">
          <Link
            to="/login"
            className="flex items-center space-x-3 p-3 rounded-md hover:bg-white hover:text-black"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Log out</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
