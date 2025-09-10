import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Stethoscope,
  FileText,
  Building2,
  Shield,
  Search,
} from "lucide-react";

function DoctorDashboard() {
  return (
    <div className="p-8 space-y-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-400"
      >
        Doctor Dashboard
      </motion.h1>

      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121a2b] p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <User className="w-10 h-10 text-blue-400" />
          <h2 className="text-2xl font-semibold">My Profile</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <p>
            <span className="font-semibold">Full Name:</span> Dr. Arjun Mehta
          </p>
          <p>
            <span className="font-semibold">Email:</span> arjun.mehta@hospital.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 9876543210
          </p>
          <p>
            <span className="font-semibold">Date of Birth:</span> 10 Mar 1980
          </p>
          <p>
            <span className="font-semibold">Gender:</span> Male
          </p>
          <p>
            <span className="font-semibold">Address:</span> 45 MG Road, Delhi, India
          </p>
          <p>
            <span className="font-semibold">Qualifications:</span> MBBS, MD (Cardiology)
          </p>
          <p>
            <span className="font-semibold">Specialization:</span> Cardiologist
          </p>
          <p>
            <span className="font-semibold">Medical License #:</span> DL-2025-4567
          </p>
          <p>
            <span className="font-semibold">Hospital/Clinic:</span> AIIMS Delhi
          </p>
          <p>
            <span className="font-semibold">Health ID:</span> DOC-2025-001
          </p>
        </div>
      </motion.div>

      {/* Search Patient */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121a2b] p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Search className="w-7 h-7 text-green-400" />
          <h2 className="text-2xl font-semibold">Search Patient</h2>
        </div>
        <input
          type="text"
          placeholder="Enter Patient ID"
          className="mt-2 w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
        />
        <button className="mt-4 px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 shadow-md">
          Request Access
        </button>
      </motion.div>

      {/* Patient Records */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121a2b] p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="w-7 h-7 text-yellow-400" />
          <h2 className="text-2xl font-semibold">Patient Records</h2>
        </div>

        <ul className="mt-4 space-y-3">
          <li className="bg-[#0b1220] p-3 rounded-lg flex justify-between items-center">
            Blood Test – Access Granted
            <span className="text-green-400 text-sm">View</span>
          </li>
          <li className="bg-[#0b1220] p-3 rounded-lg flex justify-between items-center">
            MRI Scan – Pending Access
            <span className="text-yellow-400 text-sm">Waiting</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
export default DoctorDashboard;
