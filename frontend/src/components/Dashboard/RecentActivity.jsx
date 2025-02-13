import React from "react";

const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-600">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
