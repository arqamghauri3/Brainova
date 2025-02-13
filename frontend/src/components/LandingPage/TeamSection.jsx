import React from "react";

const teamMembers = [
  { name: "Arqam Ghauri", role: "Full-Stack Developer" },
  { name: "John Doe", role: "AI Specialist" },
  { name: "Jane Smith", role: "Research Scientist" },
];

const TeamSection = () => {
  return (
    <div id="team" className="p-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
      <div className="flex justify-center gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600 mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
