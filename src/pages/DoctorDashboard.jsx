import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, FileText, Search } from "lucide-react";

function DoctorDashboard() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");

  // Stateful patients with their status
  const [patients, setPatients] = useState([
    { id: "P001", status: "granted" },
    { id: "P002", status: "granted" },
  ]);

  const handleRequestAccess = () => {
    if (!patientId) return; // prevent empty input
    // Check if patient already exists
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

      {/* Doctor Details */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121a2b] p-6 rounded-xl shadow-lg space-y-4"
      >
        <div className="flex items-center space-x-3 mb-4">
          <User className="w-10 h-10 text-blue-400" />
          <h2 className="text-2xl font-semibold">{doctor.fullname}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <p>
            <span className="font-semibold">Email:</span> {doctor.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {doctor.phone}
          </p>
          <p>
            <span className="font-semibold">Date of Birth:</span> {doctor.DOB}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {doctor.gender}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {doctor.address}
          </p>
          <p>
            <span className="font-semibold">Qualification:</span> {doctor.qualification}
          </p>
          <p>
            <span className="font-semibold">Specialization:</span> {doctor.specialization}
          </p>
          <p>
            <span className="font-semibold">Doctor ID:</span> {doctor.DoctorID}
          </p>
          <p>
            <span className="font-semibold">Hospital/Clinic:</span> {doctor.hospital}
          </p>
          <p>
            <span className="font-semibold">License #:</span> {doctor.license}
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
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          placeholder="Enter Patient ID"
          className="mt-2 w-full p-3 rounded-lg bg-[#0b1220] text-white outline-none"
        />
        <button
          onClick={handleRequestAccess}
          className="mt-4 px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 shadow-md"
        >
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
          {patients.map((p) => (
            <li
              key={p.id}
              className="bg-[#0b1220] p-3 rounded-lg flex justify-between items-center"
            >
              {p.id}
              {p.status === "granted" ? (
                <button
                  onClick={() => navigate(`/record/${p.id}`)}
                  className="text-green-400 text-sm hover:underline"
                >
                  View
                </button>
              ) : (
                <span className="text-yellow-400 text-sm">Pending</span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default DoctorDashboard;




