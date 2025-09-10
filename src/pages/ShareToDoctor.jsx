import React from "react";
import { UserSearch, FileText, Clock, Shield } from "lucide-react";

function ShareToDoctor() {
  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400">Share Records with Doctor</h1>
      <p className="text-gray-400">
        Select a doctor and choose which records you want to share securely.
      </p>

      {/* Search Doctor */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <label className="flex items-center gap-2 text-gray-300">
          <UserSearch className="w-5 h-5 text-blue-400" />
          Search Doctor
        </label>
        <input
          type="text"
          placeholder="Enter Doctor Name or ID"
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
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" /> Blood Test - Jan 2025
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" /> MRI Scan - Feb 2025
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" /> X-Ray - Mar 2025
          </label>
        </div>
      </div>

      {/* Duration */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
          <Clock className="w-5 h-5 text-green-400" />
          Access Duration
        </h2>
        <select className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none">
          <option>24 Hours</option>
          <option>7 Days</option>
          <option>30 Days</option>
          <option>Custom</option>
        </select>
      </div>

      {/* Share Button */}
      <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-md">
        Share Records Securely
      </button>

      {/* History */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-200">Share History</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex justify-between">
            Dr. Anil Sharma <span className="text-green-400">Active (till 15 Sept)</span>
          </li>
          <li className="flex justify-between">
            Dr. Meera Kapoor <span className="text-red-400">Expired</span>
          </li>
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
