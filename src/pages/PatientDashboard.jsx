function PatientDashboard() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-400">Patient Dashboard</h1>

      {/* Profile */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">My Profile</h2>
        <p className="text-gray-300">Name: John Doe</p>
        <p className="text-gray-300">Age: 32</p>
      </div>

      {/* Records */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Medical Records</h2>
        <ul className="mt-4 space-y-2">
          <li className="bg-[#0b1220] p-3 rounded-lg">Blood Test - Jan 2025</li>
          <li className="bg-[#0b1220] p-3 rounded-lg">MRI Scan - Dec 2024</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Upload New Record
        </button>
      </div>

      {/* Share Access */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Share Access</h2>
        <button className="mt-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
          Share with Doctor
        </button>
      </div>
    </div>
  );
}

export default PatientDashboard;
