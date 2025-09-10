import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import UploadNewRecord from "./pages/UploadNewRecord";
import ShareToDoctor from "./pages/ShareToDoctor";

function App() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/upload-record" element={<UploadNewRecord/>} />
          <Route path="/share-to-doctor" element={<ShareToDoctor/>} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
