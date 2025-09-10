import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, Calendar, Hospital, ClipboardList } from "lucide-react";

function UploadNewRecord() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-400"
      >
        Upload New Medical Record
      </motion.h1>

      {/* Upload Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-6"
      >
        {/* Record Title */}
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-yellow-400" />
            Record Title
          </label>
          <input
            type="text"
            placeholder="e.g. Blood Test, MRI Scan"
            className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            Date of Record
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
            required
          />
        </div>

        {/* Hospital/Clinic */}
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <Hospital className="w-5 h-5 text-green-400" />
            Hospital / Lab Name
          </label>
          <input
            type="text"
            placeholder="e.g. AIIMS Delhi, City Lab Jhansi"
            className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-pink-400" />
            Description
          </label>
          <textarea
            placeholder="Enter details (e.g. Hemoglobin, Glucose test)"
            rows="3"
            className="w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
            required
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-500" />
            Upload File
          </label>
          <input
            type="file"
            className="w-full text-gray-300 bg-[#0b1220] p-3 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            required
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          <Upload className="w-5 h-5" />
          Upload Record
        </motion.button>
      </motion.form>
    </div>
  );
}

export default UploadNewRecord;
