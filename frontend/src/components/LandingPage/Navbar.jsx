import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Brainova</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#features" className="hover:text-blue-500">Features</a>
        <a href="#team" className="hover:text-blue-500">Team</a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
