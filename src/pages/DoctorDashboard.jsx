import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, FileText, Search } from "lucide-react";
import bg from "../assets/Blockchain-1.jpg";
import doctorImg from "../assets/doctor-avatar.png";

function DoctorDashboard() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");

  // Stateful patients with their status
  const [patients, setPatients] = useState([
    { id: "ABC-987-673", status: "granted" },
    { id: "NHP-565-903", status: "granted" },
  ]);

  const handleRequestAccess = () => {
    if (!patientId) return; // prevent empty input
    const exists = patients.find((p) => p.id === patientId);
    if (!exists) {
      setPatients([...patients, { id: patientId, status: "pending" }]);
    }
    setPatientId(""); // clear input
  };

  // Doctor details
  const doctor = {
    fullname: "Dr. Arjun Mehta",
    email: "arjun.mehta@hospital.com",
    phone: "+91 9876543210",
    DOB: "10-03-1980",
    gender: "Male",
    address: "45 MG Road Delhi India",
    qualification: "MBBS, MD",
    specialization: "Cardiologist",
    DoctorID: "ABCD-4673-4675",
    hospital: "AIIMS Delhi",
    license: "DL-2025-4567",
  };

  return (
    <div
      className="min-h-screen p-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center"
        >
          Doctor Dashboard
        </motion.h1>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-gray-700 col-span-1 flex flex-col items-center"
          >
            <img
              src={doctorImg}
              alt="Doctor"
              className="w-32 h-32 rounded-full border-4 border-green-400 shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold text-white">
              {doctor.fullname}
            </h2>
            <p className="text-green-400 font-semibold">
              {doctor.specialization}
            </p>
            <p className="text-gray-400">{doctor.hospital}</p>

            <div className="mt-6 space-y-2 text-sm text-gray-300 w-full">
              <p>
                <span className="font-semibold">Email:</span> {doctor.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {doctor.phone}
              </p>
              <p>
                <span className="font-semibold">DOB:</span> {doctor.DOB}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {doctor.gender}
              </p>
              <p>
                <span className="font-semibold">License:</span> {doctor.license}
              </p>
              <p>
                <span className="font-semibold">Doctor ID:</span>{" "}
                {doctor.DoctorID}
              </p>
            </div>
          </motion.div>

          {/* Search + Patients */}
          <div className="col-span-2 space-y-8">
            {/* Search Patient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Search className="w-7 h-7 text-green-400" />
                <h2 className="text-2xl font-semibold text-white">
                  Search Patient
                </h2>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  placeholder="Enter Patient ID"
                  className="flex-1 p-3 rounded-lg bg-[#0b1220] text-white border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
                />
                <button
                  onClick={handleRequestAccess}
                  className="px-6 py-2 bg-white text-black rounded-xl font-bold"
                >
                  Request
                </button>
              </div>
            </motion.div>

            {/* Patient Records */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-7 h-7 text-yellow-400" />
                <h2 className="text-2xl font-semibold text-white">
                  Patient Records
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-gray-300 text-sm">
                  <thead>
                    <tr className="text-left border-b border-gray-600">
                      <th className="py-2">Patient ID</th>
                      <th className="py-2">Status</th>
                      <th className="py-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((p) => (
                      <tr key={p.id} className="border-b border-gray-700">
                        <td className="py-3">{p.id}</td>
                        <td className="py-3">
                          {p.status === "granted" ? (
                            <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Granted
                            </span>
                          ) : (
                            <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-right">
                          {p.status === "granted" ? (
                            <button
                              onClick={() => navigate(`/record/${p.id}`)}
                              className="text-green-400 hover:underline"
                            >
                              View
                            </button>
                          ) : (
                            <span className="text-gray-400">Waiting</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
