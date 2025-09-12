import React, { useState } from "react";
import { Shield, Users, Lock, Send } from "lucide-react";

function InsuranceDashboard() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Rohit Sharma", policy: "Health Insurance", access: "Pending" },
    { id: 2, name: "Riya Arrora", policy: "Life Insurance", access: "Not Requested" },
    { id: 3, name: "Divyanshi Singh", policy: "Accident Coverage", access: "Approved" },
  ]);

  const requestAccess = (id) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, access: "Pending" } : p
      )
    );
    alert("Access request has been sent to the patient via MediChain Blockchain ✅");
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">Insurance Dashboard</h1>
        <p className="text-gray-400">
          Request secure access to patient health records using{" "}
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
              <th className="p-2">Policy</th>
              <th className="p-2">Access Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t border-gray-700">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.policy}</td>
                <td
                  className={`p-2 ${
                    p.access === "Approved"
                      ? "text-green-400"
                      : p.access === "Pending"
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                >
                  {p.access}
                </td>
                <td className="p-2">
                  {p.access === "Not Requested" ? (
                    <button
                      onClick={() => requestAccess(p.id)}
                      className="px-4 py-2 flex items-center bg-green-600 hover:bg-green-600 rounded-lg font-semibold transition"
                    >
                      <Send className="w-4 h-4 mr-2" /> Request Access
                    </button>
                  ) : (
                    <span className="italic text-gray-500">Request Sent</span>
                  )}
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
          All access requests are logged on{" "}
          <span className="text-blue-400 font-semibold">MediChain Blockchain</span>, 
          ensuring patients remain the true owners of their health data.
        </p>
      </div>
    </div>
  );
}

export default InsuranceDashboard;
