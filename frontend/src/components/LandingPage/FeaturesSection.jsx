import React from "react";
import { FaBrain, FaChartLine, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  { icon: <FaBrain className="text-blue-600 text-4xl" />, title: "EEG Analysis", desc: "AI-driven analysis of EEG signals." },
  { icon: <FaChartLine className="text-blue-600 text-4xl" />, title: "Real-Time Results", desc: "Instant predictions and analytics." },
  { icon: <FaCloudUploadAlt className="text-blue-600 text-4xl" />, title: "Secure Data", desc: "HIPAA-compliant and cloud-secure storage." },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="p-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
      <div className="flex justify-center gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
