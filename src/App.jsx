import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import Psignup from "./pages/Psignup";
import Dsignup from "./pages/Dsignup";
import Plogin from "./pages/Plogin";
import Dlogin from "./pages/Dlogin";
function App() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
            <Route path="/psignup" element={<Psignup />} />
              <Route path="/dsignup" element={<Dsignup />} />
          <Route path="/plogin" element={<Plogin />} />
            <Route path="/dlogin" element={<Dlogin />} />
          <Route path="/" element={<Landing />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
