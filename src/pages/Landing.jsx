import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Database, Hospital, Building2 } from "lucide-react";
import bg from "../assets/Blockchain-1.jpg";
import doctorImg from "../assets/doctor-avatar.png";
import hospitalImg from "../assets/lab-avatar.png";
import insuranceImg from "../assets/insurence-avatar.jpg";
import patientImg from "../assets/patient-avatar.png";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="p-8 space-y-20 min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Gradient Tricolor Heading */}
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent drop-shadow-lg">
              MediChain
            </h1>

            <p className="text-lg text-gray-200 font-semibold max-w-2xl mx-auto mt-4">
              A secure, decentralized healthcare record system where <br />
              patients truly own and control their medical data.
            </p>
          </motion.div>

          {/* Login Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Doctor */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl text-center border border-white/10 hover:border-orange-500 transition"
              onClick={() => navigate("/dlogin")}
            >
              <img src={doctorImg} alt="Doctor" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-orange-400">Doctor</h3>
              <p className="text-gray-400 text-sm mt-2">Access patient records with permission.</p>
              <button className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 
  bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 
  text-white font-semibold rounded-xl shadow-lg 
  hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 
  hover:shadow-orange-500/40 hover:scale-105 
  transition-all duration-300">
                <span>Login</span>
              </button>
            </motion.div>

            {/* Patient */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl text-center border border-white/10 hover:border-green-500 transition"
              onClick={() => navigate("/plogin")}
            >
              <img src={patientImg} alt="Patient" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-400">Patient</h3>
              <p className="text-gray-400 text-sm mt-2">Own and manage your health records securely.</p>
              <button className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 
  bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 
  text-white font-semibold rounded-xl shadow-lg 
  hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 
  hover:shadow-green-500/40 hover:scale-105 
  transition-all duration-300">
                <span>Login</span>
              </button>

            </motion.div>

            {/* Hospital/Lab */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl text-center border border-white/10 hover:border-blue-500 transition"
              onClick={() => navigate("/hlogin")}
            >
              <img src={hospitalImg} alt="Hospital" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-400">Hospital / Lab</h3>
              <p className="text-gray-400 text-sm mt-2">Upload and verify test results on-chain.</p>
              <button className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 
  bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 
  text-white font-semibold rounded-xl shadow-lg 
  hover:from-blue-600 hover:via-cyan-600 hover:to-sky-600 
  hover:shadow-blue-500/40 hover:scale-105 
  transition-all duration-300">
                <span>Login</span>
              </button>
            </motion.div>

            {/* Insurance */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#121a2b]/90 p-6 rounded-2xl shadow-xl text-center border border-white/10 hover:border-purple-500 transition"
              onClick={() => navigate("/ilogin")}
            >
              <img src={insuranceImg} alt="Insurance" className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-bold text-purple-400">Insurance</h3>
              <p className="text-gray-400 text-sm mt-2">Seamlessly verify claims with secure data.</p>
              <button className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 
  bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 
  text-white font-semibold rounded-xl shadow-lg 
  hover:from-purple-600 hover:via-violet-600 hover:to-fuchsia-600 
  hover:shadow-purple-500/40 hover:scale-105 
  transition-all duration-300">
                <span>Login</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* What is MediChain */}
        <section className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700 mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent"
          >
            What is MediChain?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-200 mt-6 leading-relaxed text-lg"
          >
            MediChain is a{" "}
            <span className="text-green-400 font-semibold">
              blockchain-based healthcare data platform
            </span>{" "}
            that puts patients at the center of their health journey. Instead of
            hospitals and labs owning the records, patients hold the keys to
            their own information. This ensures{" "}
            <span className="text-orange-400">privacy</span>,{" "}
            <span className="text-white">transparency</span>, and{" "}
            <span className="text-green-400">seamless access</span> to medical
            records anytime, anywhere.
          </motion.p>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mt-20">
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-gradient-to-b from-orange-500/20 to-transparent p-8 rounded-2xl shadow-xl border border-orange-400/40 text-center"
          >
            <Database className="w-14 h-14 text-orange-400 mx-auto" />
            <h3 className="text-xl font-semibold text-white mt-4">Decentralized</h3>
            <p className="text-gray-300 mt-3">
              Records stored securely on blockchain — no central authority, no
              single point of failure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-gradient-to-b from-white/20 to-transparent p-8 rounded-2xl shadow-xl border border-white/40 text-center"
          >
            <ShieldCheck className="w-14 h-14 text-white mx-auto" />
            <h3 className="text-xl font-semibold text-white mt-4">Secure</h3>
            <p className="text-gray-300 mt-3">
              End-to-end encryption ensures your health data is protected
              against unauthorized access.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-gradient-to-b from-green-500/20 to-transparent p-8 rounded-2xl shadow-xl border border-green-400/40 text-center"
          >
            <Stethoscope className="w-14 h-14 text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold text-white mt-4">
              Patient-Centric
            </h3>
            <p className="text-gray-300 mt-3">
              You control who accesses your records, giving you full ownership
              of your medical history.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
