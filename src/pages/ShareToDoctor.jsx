import React, { useState } from "react";
import { UserSearch, FileText, Clock, Shield, XCircle } from "lucide-react";

function ShareToDoctor() {
  const [doctorId, setDoctorId] = useState("");
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [duration, setDuration] = useState("24 Hours");
  const [history, setHistory] = useState([
    { doctor: "Dr. Anil Sharma", status: "Active (till 15 Sept)", active: true },
    { doctor: "Dr. Meera Kapoor", status: "Expired", active: false },
  ]);

  const availableRecords = [
    "Blood Test - Jan 2025",
    "MRI Scan - Feb 2025",
    "X-Ray - Mar 2025",
  ];

  const toggleRecord = (record) => {
    setSelectedRecords((prev) =>
      prev.includes(record)
        ? prev.filter((r) => r !== record)
        : [...prev, record]
    );
  };

  const handleShare = () => {
    if (!doctorId || selectedRecords.length === 0) {
      alert("⚠️ Please enter Doctor ID and select at least one record.");
      return;
    }

    // Simulate share action
    const newEntry = {
      doctor: doctorId,
      status: `Active (${duration})`,
      active: true,
    };
    setHistory([newEntry, ...history]);

    alert(
      `✅ Records [${selectedRecords.join(", ")}] shared with ${doctorId} for ${duration}`
    );

    // Reset fields
    setDoctorId("");
    setSelectedRecords([]);
    setDuration("24 Hours");
  };

  const revokeAccess = (index) => {
    const updated = [...history];
    updated[index].status = "Revoked";
    updated[index].active = false;
    setHistory(updated);
    alert(`❌ Access revoked for ${updated[index].doctor}`);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400">
        Share Records with Doctor
      </h1>
      <p className="text-gray-400">
        Select a doctor and choose which records you want to share securely.
      </p>

      {/* Search Doctor */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <label className="flex items-center gap-2 text-gray-300">
          <UserSearch className="w-5 h-5 text-blue-400" />
          Doctor Name / ID
        </label>
        <input
          type="text"
          placeholder="Enter Doctor Name or ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
        />
      </div>

      {/* Records Selection */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
          <FileText className="w-5 h-5 text-yellow-400" />
          Select Records
        </h2>
        <div className="space-y-2">
          {availableRecords.map((record) => (
            <label key={record} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedRecords.includes(record)}
                onChange={() => toggleRecord(record)}
                className="w-5 h-5"
              />
              {record}
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
          <Clock className="w-5 h-5 text-green-400" />
          Access Duration
        </h2>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
        >
          <option>24 Hours</option>
          <option>7 Days</option>
          <option>30 Days</option>
          <option>Custom</option>
        </select>
      </div>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-md"
      >
        Share Records Securely
      </button>

      {/* History */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-200">Share History</h2>
        <ul className="space-y-2 text-gray-300">
          {history.map((entry, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-[#0b1220] p-3 rounded-lg"
            >
              <span>{entry.doctor}</span>
              <span
                className={
                  entry.active ? "text-green-400 text-sm" : "text-red-400 text-sm"
                }
              >
                {entry.status}
              </span>
              {entry.active && (
                <button
                  onClick={() => revokeAccess(idx)}
                  className="ml-3 flex items-center gap-1 text-red-400 hover:text-red-500 text-sm"
                >
                  <XCircle className="w-4 h-4" /> Revoke
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Security Note */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Shield className="w-4 h-4 text-blue-400" />
        You can revoke access anytime. Your data is encrypted.
      </div>
    </div>
  );
}

export default ShareToDoctor;
