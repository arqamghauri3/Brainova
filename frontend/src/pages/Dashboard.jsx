import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import Card from "../components/Dashboard/Card";
import EEGRecordsTable from "../components/Dashboard/EEGRecordsTable";
import RecentActivity from "../components/Dashboard/RecentActivity";

const Dashboard = () => {
  const eegRecords = [
    { patient: "John Doe", date: "2025-02-10", result: "Normal" },
    { patient: "Jane Smith", date: "2025-02-11", result: "Abnormal" },
  ];

  const activities = ["User logged in", "EEG report uploaded", "New patient added"];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Navbar />
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card title="Total EEG Records" value="120" />
          <Card title="Patients Diagnosed" value="85" />
          <Card title="Pending Reports" value="10" />
        </div>
        <EEGRecordsTable records={eegRecords} />
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
};

export default Dashboard;
