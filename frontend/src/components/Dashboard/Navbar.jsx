import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Brainova Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
