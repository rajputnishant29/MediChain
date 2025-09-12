import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Hospital,
  ClipboardList,
  User,
  ArrowLeft,
  Download,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import bg from "../assets/Blockchain-1.jpg";

function RecordDetails() {
  const { patientId } = useParams();
  const navigate = useNavigate();

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
    <div
      className="min-h-screen p-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center"
        >
          Records of Patient ID: ABC-987-673
        </motion.h1>

        {/* Record Cards */}
        <div className="grid gap-8">
          {records.map((record, i) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-4 hover:shadow-green-500/10 transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-6 h-6 text-yellow-400" />
                  {record.title}
                </h2>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 font-semibold flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {record.date}
                </span>
              </div>

              <p className="flex items-center gap-2 text-gray-300">
                <Hospital className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Hospital:</span> {record.hospital}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <ClipboardList className="w-5 h-5 text-pink-400" />
                <span className="font-semibold">Description:</span>{" "}
                {record.description}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <User className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">Uploaded By:</span>{" "}
                {record.uploadedBy}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => navigate("/lab-report")}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg text-black font-semibold shadow-md hover:opacity-90 bg-white"
                >
                  <Download className="w-5 h-5" /> View / Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetails;
