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
        <div className="p-8 space-y-10">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-400"
            >
                Patient Dashboard
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
                className="bg-[#121a2b] p-6 rounded-xl shadow-lg"
            >
                <div className="flex items-center space-x-4 mb-4">
                    <FileText className="w-10 h-10 text-yellow-400" />
                    <h2 className="text-2xl font-semibold">Medical Records</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Record 1 */}
                    <div className="bg-[#0b1220] p-4 rounded-lg hover:scale-[1.02] transition transform">
                        <p className="font-semibold text-blue-300">Blood Test</p>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Calendar className="w-4 h-4" /> <span>Jan 2025</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Droplet className="w-4 h-4" /> <span>Hemoglobin, Glucose</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Hospital className="w-4 h-4" /> <span>City Lab, Jhansi</span>
                        </div>
                    </div>

                    {/* Record 2 */}
                    <div className="bg-[#0b1220] p-4 rounded-lg hover:scale-[1.02] transition transform">
                        <p className="font-semibold text-blue-300">MRI Scan</p>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Calendar className="w-4 h-4" /> <span>Dec 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Shield className="w-4 h-4" /> <span>Brain, Spine Screening</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                            <Hospital className="w-4 h-4" /> <span>AIIMS Delhi</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/upload-record")}
                    className="mt-6 flex items-center px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
                >
                    <Upload className="w-5 h-5 mr-2" /> Upload New Record
                </button>
            </motion.div>

            {/* Share Access */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#121a2b] p-6 rounded-xl shadow-lg"
            >
                <div className="flex items-center space-x-4 mb-4">
                    <Share2 className="w-10 h-10 text-green-400" />
                    <h2 className="text-2xl font-semibold">Share Access</h2>
                </div>
                <p className="text-gray-300 mb-4">
                    You can securely share your records with your doctor. They’ll only access what you allow.
                </p>
                <button
                onClick={() => navigate("/share-to-doctor")}
                className="flex items-center px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg shadow-md">
                    <Share2 className="w-5 h-5 mr-2" /> Share with Doctor
                </button>

                {/* Access History */}
                <div className="mt-6 text-gray-300">
                    <h3 className="text-lg font-semibold mb-2">Access History</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center bg-[#0b1220] p-3 rounded-lg">
                            <span>Dr. Anita Sharma (Cardiologist)</span>
                            <span className="flex items-center text-sm text-gray-400"><Clock className="w-4 h-4 mr-1" /> Feb 10, 2025</span>
                        </li>
                        <li className="flex justify-between items-center bg-[#0b1220] p-3 rounded-lg">
                            <span>Dr. Raj Verma (Neurologist)</span>
                            <span className="flex items-center text-sm text-gray-400"><Clock className="w-4 h-4 mr-1" /> Dec 20, 2024</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

export default PatientDashboard;
