import React from "react";
import { FaHome, FaFileMedical, FaChartLine } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center space-x-2 cursor-pointer">
          <FaHome /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer">
          <FaFileMedical /> <span>EEG Records</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer">
          <FaChartLine /> <span>Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
