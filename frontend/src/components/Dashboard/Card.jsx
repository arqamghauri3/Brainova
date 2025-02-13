import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default Card;
