import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import UploadNewRecord from "./pages/UploadNewRecord";
import ShareToDoctor from "./pages/ShareToDoctor";
import Psignup from "./pages/Psignup";
import Dsignup from "./pages/Dsignup";
import Plogin from "./pages/Plogin";
import Dlogin from "./pages/Dlogin";
import RecordDetails from "./pages/RecordDetalis";
import LabReportView from "./pages/Labreportview";
import InsuranceDashboard from "./pages/InsurenceDashboard";
import LabDashboard from "./pages/LabDashboard";
import Hlogin from "./pages/Hlogin";
import Ilogin from "./pages/Ilogin";
function App() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
            <Route path="/psignup" element={<Psignup />} />
              <Route path="/dsignup" element={<Dsignup />} />
          <Route path="/plogin" element={<Plogin />} />
          <Route path="/hlogin" element={<Hlogin />} />
            <Route path="/ilogin" element={<Ilogin />} />
            <Route path="/dlogin" element={<Dlogin />} />
          <Route path="/" element={<Landing />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/upload-record" element={<UploadNewRecord/>} />
          <Route path="/share-to-doctor" element={<ShareToDoctor/>} />
           <Route path="/record/:id" element={<RecordDetails />} />
            <Route path="/lab-report" element={<LabReportView />} />
            <Route path="/insurence" element={<InsuranceDashboard />} />
            <Route path="/lab" element={<LabDashboard/>} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
