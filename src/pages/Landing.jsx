import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Database } from "lucide-react";
import doctorImg from "../assets/doctot.png";
import bg from "../assets/Blockchain-1.jpg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="p-8 space-y-20 min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

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

 {/* Buttons */}
<div className="flex justify-center gap-6 mt-8 flex-wrap">
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={() => navigate("/dlogin")}
    className="px-6 py-3 border-2 border-orange-500 text-orange-400 font-bold rounded-xl shadow-md hover:bg-orange-500 hover:text-white transition duration-300"
  >
    Login as Doctor
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={() => navigate("/plogin")}
    className="px-6 py-3 border-2 border-green-500 text-green-400 font-bold rounded-xl shadow-md hover:bg-green-500 hover:text-white transition duration-300"
  >
    Login as Patient
  </motion.button>
</div>

        </section>

        {/* What is MediChain */}
        <section className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700 mt-16">
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
