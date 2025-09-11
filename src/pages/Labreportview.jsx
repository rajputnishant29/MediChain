import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 import reportimage from "../assets/Report.png"
function LabReportView() {
  const navigate = useNavigate();

  // Hardcoded sample lab report image (you can replace with your own image in /public folder)
  const reportUrl = reportimage;
  return (
    <div className="p-8 space-y-6 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-400 mb-4"
      >
        Lab Report
      </motion.h1>

      {/* Lab Report Image */}
      <motion.img
        src={reportUrl}
        alt="Lab Report"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full rounded-lg shadow-lg border border-gray-600"
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-white"
      >
        Back
      </button>
    </div>
  );
}

export default LabReportView;
