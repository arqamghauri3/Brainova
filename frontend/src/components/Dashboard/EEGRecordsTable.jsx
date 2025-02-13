import React from "react";

const EEGRecordsTable = ({ records }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent EEG Records</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Patient</th>
            <th className="p-2">Date</th>
            <th className="p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{record.patient}</td>
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EEGRecordsTable;
