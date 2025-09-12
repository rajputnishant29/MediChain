import {
  User, FileText, Upload, Share2, Calendar, Droplet, Shield,
  Phone, Mail, Hospital, Activity, ClipboardList, Stethoscope, Clock,
  Home, Contact, HeartPulse, XCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/Blockchain-1.jpg";
import patientImg from "../assets/patient-avatar.png"; // avatar image

function PatientDashboard() {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);
  // Example Patient Data
  const patient = {
    fullname: "Rohit Sharma",
    email: "rohitbral5212@email.com",
    phone: "+91 98765 43210",
    DOB: "10 Jan 2005",
    gender: "Male",
    bloodGroup: "0+",
    address: "Shivaji Nagar, Jhansi, UP",
    healthId: "ABC-987-673",
    emergency: "+91 9984559821",
    condition: "Diabetes (Type 2)",
    allergies: "Penicillin",
    lastVisit: "Feb 2025",
  };

  // Example Records
  const records = [
    {
      title: "Blood Test",
      date: "Jan 2025",
      details: "Hemoglobin, Glucose",
      place: "City Lab, Jhansi",
      icon: <Droplet className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "MRI Scan",
      date: "Dec 2024",
      details: "Brain, Spine Screening",
      place: "AIIMS Delhi",
      icon: <Shield className="w-4 h-4 text-green-400" />,
    },
  ];

  // Example Access History
  const history = [
    { name: "Dr. Anita Sharma (Cardiologist)", date: "Feb 10, 2025" },
    { name: "Dr. Raj Verma (Neurologist)", date: "Dec 20, 2024" },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto space-y-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          Patient Dashboard
        </motion.h1>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col items-center"
          >
            <img
              src={patientImg}
              alt="Patient"
              className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold">{patient.fullname}</h2>
            <p className="text-blue-400">Patient</p>
            <p className="text-gray-400">{patient.healthId}</p>

            <div className="mt-6 space-y-2 text-sm text-gray-300 w-full">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> {patient.email}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-green-400" /> {patient.phone}</p>
              <p><span className="font-semibold">DOB:</span> {patient.DOB}</p>
              <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
              <p><span className="font-semibold">Blood Group:</span> {patient.bloodGroup}</p>
              <p className="flex items-center gap-2"><Home className="w-4 h-4 text-yellow-400" /> {patient.address}</p>
              <p className="flex items-center gap-2"><Contact className="w-4 h-4 text-red-400" /> Emergency: {patient.emergency}</p>
              <p className="flex items-center gap-2"><Activity className="w-4 h-4 text-red-400" /> {patient.condition}</p>
              <p className="flex items-center gap-2"><ClipboardList className="w-4 h-4 text-yellow-400" /> Allergies: {patient.allergies}</p>
              <p className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-green-400" /> Last Visit: {patient.lastVisit}</p>
            </div>

            {/* AI Assistant Button */}
            <button
              onClick={() => setShowAI(true)}
              className="mt-6 flex items-center px-5 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-lg shadow-lg font-medium transition"
            >
              <HeartPulse className="w-5 h-5 mr-2" /> AI Health Assistant
            </button>
          </motion.div>

          {/* Records + Sharing */}
          <div className="col-span-2 space-y-8">
            {/* Medical Records */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-semibold">Medical Records</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {records.map((rec, i) => (
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
                className="mt-8 flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg font-medium transition"
              >
                <Upload className="w-5 h-5 mr-2" /> Upload New Record
              </button>
            </motion.div>

            {/* Share Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Share2 className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-semibold">Share Access</h2>
              </div>
              <p className="text-gray-200 mb-4">
                Securely share your records with your doctor. They’ll only access what you allow.
              </p>
              <button
                onClick={() => navigate("/share-to-doctor")}
                className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg font-medium transition"
              >
                <Share2 className="w-5 h-5 mr-2" /> Share with Doctor
              </button>

              {/* Access History */}
              <div className="mt-6 text-gray-200">
                <h3 className="text-lg font-semibold mb-3">Access History</h3>
                <ul className="space-y-3">
                  {history.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center bg-[#0b1220]/70 p-4 rounded-lg border border-white/10 hover:shadow-lg"
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
      </div>

      {/* AI Health Assistant Popup */}
      <AnimatePresence>
        {showAI && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <div className="bg-[#121a2b] max-w-lg w-full rounded-2xl shadow-2xl p-6 relative border border-white/10">
              <button
                onClick={() => setShowAI(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
              >
                <XCircle className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="w-7 h-7 text-pink-500" />
                <h2 className="text-2xl font-bold text-white">AI Health Assistant</h2>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Based on your profile and recent medical history, here are some AI-driven insights:
              </p>

              <ul className="space-y-3 text-gray-200">
                <li>💡 Maintain a balanced diet to manage <b>{patient.condition}</b>.</li>
                <li>💡 Regular exercise (30 min walk) can help improve glucose control.</li>
                <li>💡 Since your last visit was <b>{patient.lastVisit}</b>, schedule a new check-up soon.</li>
                <li>💡 Avoid <b>{patient.allergies}</b> in any prescriptions.</li>
              </ul>

              <button
                onClick={() => alert("📊 AI Assistant generating a detailed health report...")}
                className="mt-6 w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 shadow-lg"
              >
                Generate AI Health Report
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PatientDashboard;
