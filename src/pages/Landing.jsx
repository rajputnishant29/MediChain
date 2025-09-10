import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Database } from "lucide-react";
import doctorImg from "../assets/doctot.png";
import bg from "../assets/Blockchain-1.jpg"; 
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="p-8 space-y-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Hero */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-blue-400">MediChain</h1>
          <p className="text-lg text-white font-bold max-w-2xl mx-auto mt-4">
            A secure, decentralized healthcare record system where <br />
            patients truly own and control their medical data.
          </p>
        </motion.div>

        {/* Buttons for Doctor & Patient Login */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button
            onClick={() => navigate("/dlogin")}
            className="px-6 py-3 bg-blue-500 border-2 border-black-400 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md"
          >
            Logged in as Doctor
          </button>
          <button
            onClick={() => navigate("/plogin")}
            className="px-6 py-3 bg-green-500 border-2 border-blacky-400 hover:bg-green-600 text-white font-bold rounded-xl shadow-md"
          >
            Logged in as Patient
          </button>
        </div>
      </section>

      {/* What is MediChain */}
      <section className="max-w-4xl mx-auto text-center bg-black/80 p-8 rounded-2xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-blue-300"
        >
          What is MediChain?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-200 mt-4 leading-relaxed"
        >
          MediChain is a <span className="text-blue-400 font-medium">blockchain-based healthcare data platform </span> 
          that puts patients at the center of their health journey. 
          Instead of hospitals and labs owning the records, patients hold 
          the keys to their own information. This ensures <span className="text-green-400">privacy</span>, 
          <span className="text-yellow-400"> transparency</span>, and <span className="text-pink-400"> seamless access</span> to medical records anytime, anywhere.
        </motion.p>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121a2b] p-6 rounded-xl shadow-md text-center"
        >
          <Database className="w-12 h-12 text-yellow-400 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-300 mt-4">Decentralized</h3>
          <p className="text-gray-300 mt-2">
            Records stored securely on blockchain — no central authority, no single point of failure.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121a2b] p-6 rounded-xl shadow-md text-center"
        >
          <ShieldCheck className="w-12 h-12 text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-300 mt-4">Secure</h3>
          <p className="text-gray-300 mt-2">
            End-to-end encryption ensures your health data is protected against unauthorized access.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121a2b] p-6 rounded-xl shadow-md text-center"
        >
          <Stethoscope className="w-12 h-12 text-pink-400 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-300 mt-4">Patient-Centric</h3>
          <p className="text-gray-300 mt-2">
            You control who accesses your records, giving you full ownership of your medical history.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default Landing;

