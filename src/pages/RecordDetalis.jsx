import React from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, Hospital, ClipboardList, User } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

function RecordDetails() {
  const { patientId } = useParams(); // get patient ID from URL
  const navigate = useNavigate();

  // Always show these hardcoded records
  const records = [
    {
      id: "101",
      title: "Blood Test",
      date: "2025-09-05",
      hospital: "AIIMS Delhi",
      description: "Complete Blood Count - Hemoglobin, WBC, Platelets",
      uploadedBy: "Patient: Rohit Sharma",
    },
    {
      id: "102",
      title: "MRI Scan",
      date: "2025-09-10",
      hospital: "City Lab Delhi",
      description: "Brain MRI",
      uploadedBy: "Patient: Rohit Sharma",
    },
    {
      id: "103",
      title: "X-Ray",
      date: "2025-08-20",
      hospital: "AIIMS Delhi",
      description: "Chest X-Ray",
      uploadedBy: "Patient: Rohit Sharma",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-400"
      >
        Records of Patient ID: {patientId}
      </motion.h1>

      {/* Render all hardcoded records */}
      {records.map((record) => (
        <motion.div
          key={record.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4"
        >
          <p className="flex items-center gap-2 text-gray-300">
            <FileText className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Title:</span> {record.title}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="font-semibold">Date:</span> {record.date}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Hospital className="w-5 h-5 text-green-400" />
            <span className="font-semibold">Hospital:</span> {record.hospital}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <ClipboardList className="w-5 h-5 text-pink-400" />
            <span className="font-semibold">Description:</span> {record.description}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <User className="w-5 h-5 text-purple-400" />
            <span className="font-semibold">Uploaded By:</span> {record.uploadedBy}
          </p>

          <button
            onClick={() => navigate("/lab-report")}
            className="block text-center bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md mt-4"
          >
            View / Download File
          </button>
        </motion.div>
      ))}

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
      >
        Back
      </button>
    </div>
  );
}

export default RecordDetails;
