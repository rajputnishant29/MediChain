import React, { useState } from "react";
import { FlaskConical, Upload, Lock, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LabDashboard() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Rohit Sharma", lastReport: "Blood Test - Jan 2025" },
    { id: 2, name: "Satyam Singh", lastReport: "No Report Uploaded" },
    { id: 3, name: "Divyanshi Singh", lastReport: "X-Ray - Feb 2025" },
  ]);
    const navigate = useNavigate();

  const uploadReport = (id) => {
    // In real app: trigger file upload API
    setPatients((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, lastReport: "New Report Uploaded" } : p
      )
    );
    alert("Report securely uploaded to MediChain Blockchain");
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">Lab Dashboard</h1>
        <p className="text-gray-400">
          Labs can securely upload medical reports for patients on{" "}
          <span className="text-blue-400 font-semibold">MediChain</span>
        </p>
      </div>

      {/* Patients List */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Patients</h2>
        <table className="w-full text-left">
          <thead className="text-gray-400">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Last Report</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t border-gray-700">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.lastReport}</td>
                <td className="p-2">
                  <button
                    onClick={() => navigate("/upload-record")}
                    className="px-4 py-2 flex items-center bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition"
                  >
                    <Upload className="w-4 h-4 mr-2" /> Upload Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Blockchain Security Highlight */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg flex items-center space-x-4">
        <Lock className="w-10 h-10 text-blue-400" />
        <p className="text-gray-300">
          Reports are securely stored on{" "}
          <span className="text-blue-400 font-semibold">MediChain Blockchain</span>, 
          ensuring authenticity and tamper-proof data for patients.
        </p>
      </div>
    </div>
  );
}

export default LabDashboard;
