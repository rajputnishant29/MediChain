function DoctorDashboard() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-400">Doctor Dashboard</h1>

      {/* Search Patient */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Search Patient</h2>
        <input
          type="text"
          placeholder="Enter Patient ID"
          className="mt-2 w-full p-3 rounded-lg bg-[#0b1220] text-white"
        />
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Request Access
        </button>
      </div>

      {/* Records */}
      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Patient Records</h2>
        <ul className="mt-4 space-y-2">
          <li className="bg-[#0b1220] p-3 rounded-lg">Blood Test - Access Granted</li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorDashboard;
