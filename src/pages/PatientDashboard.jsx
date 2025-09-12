import {
  User, FileText, Upload, Share2, Calendar, Droplet, Shield,
  Phone, Mail, Hospital, Activity, ClipboardList, Stethoscope, Clock,
  Home, Hash, HeartPulse, KeyRound, Contact
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0b1220] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-5f6e90a8d6cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220]/90 via-[#0b1220]/80 to-[#121a2b]/95 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10 space-y-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow-lg"
        >
          Patient Dashboard
        </motion.h1>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
        >
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-10 h-10 text-blue-400" />
            <h2 className="text-2xl font-semibold">My Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <p><span className="font-semibold">Full Name:</span> John Doe</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> john.doe@email.com</p>
            <p><span className="font-semibold">Date of Birth:</span> 10 Jan 1993</p>
            <p><span className="font-semibold">Gender:</span> Male</p>
            <p><span className="font-semibold">Blood Group:</span> O+</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Home className="w-4 h-4 text-green-400" /> 123 MG Road, Jhansi, UP, India</p>
            <p className="flex items-center gap-2"><Hash className="w-4 h-4 text-yellow-400" /> Health ID: MC-2025-001</p>
            <p className="flex items-center gap-2"><Contact className="w-4 h-4 text-red-400" /> Emergency: +91 99999 88888</p>
            <p className="flex items-center gap-2"><Activity className="w-4 h-4 text-red-400" /> Diabetes (Type 2)</p>
            <p className="flex items-center gap-2"><ClipboardList className="w-4 h-4 text-yellow-400" /> Allergies: Penicillin</p>
            <p className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-green-400" /> Last Visit: Feb 2025</p>
          </div>
        </motion.div>

        {/* Records */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
        >
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-yellow-400" />
            <h2 className="text-2xl font-semibold">Medical Records</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Record Card */}
            {[
              {
                title: "Blood Test",
                date: "Jan 2025",
                details: "Hemoglobin, Glucose",
                place: "City Lab, Jhansi",
                icon: <Droplet className="w-4 h-4" />,
              },
              {
                title: "MRI Scan",
                date: "Dec 2024",
                details: "Brain, Spine Screening",
                place: "AIIMS Delhi",
                icon: <Shield className="w-4 h-4" />,
              },
            ].map((rec, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-[#0b1220]/70 p-5 rounded-xl border border-white/10 shadow-md"
              >
                <p className="font-semibold text-blue-300 text-lg">{rec.title}</p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
                  <Calendar className="w-4 h-4" /> <span>{rec.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
                  {rec.icon} <span>{rec.details}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
                  <Hospital className="w-4 h-4" /> <span>{rec.place}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => navigate("/upload-record")}
            className="mt-8 flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg font-medium"
          >
            <Upload className="w-5 h-5 mr-2" /> Upload New Record
          </button>
        </motion.div>

        {/* Share Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Share2 className="w-10 h-10 text-green-400" />
            <h2 className="text-2xl font-semibold">Share Access</h2>
          </div>
          <p className="text-gray-200 mb-4">
            You can securely share your records with your doctor. They’ll only access what you allow.
          </p>
          <button
            onClick={() => navigate("/share-to-doctor")}
            className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg font-medium"
          >
            <Share2 className="w-5 h-5 mr-2" /> Share with Doctor
          </button>

          {/* Access History */}
          <div className="mt-6 text-gray-200">
            <h3 className="text-lg font-semibold mb-3">Access History</h3>
            <ul className="space-y-3">
              {[
                { name: "Dr. Anita Sharma (Cardiologist)", date: "Feb 10, 2025" },
                { name: "Dr. Raj Verma (Neurologist)", date: "Dec 20, 2024" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-[#0b1220]/70 p-4 rounded-lg border border-white/10"
                >
                  <span>{item.name}</span>
                  <span className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" /> {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PatientDashboard;
