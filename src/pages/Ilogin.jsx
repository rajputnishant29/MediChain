import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

function Ilogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrCompanyID: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Insurance Login Data:", formData);
    // TODO: API call for insurance login
  };

  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Tricolor Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-orange-500/20 pointer-events-none"></div>

      <div className="relative z-10 bg-[#121a2b] p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 border border-gray-700">
        {/* Heading with Icon */}
        <div className="flex flex-col items-center space-y-3">
          <Shield className="w-12 h-12 text-green-400" />
          <h1 className="text-3xl font-bold">Insurance Login</h1>
          <p className="text-gray-400 text-sm text-center">
            Secure access to MediChain insurance dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email / Company ID */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-200">
              Email or Company ID
            </label>
            <input
              type="text"
              name="emailOrCompanyID"
              value={formData.emailOrCompanyID}
              onChange={handleChange}
              placeholder="Enter email or company ID"
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-600 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 accent-green-500"
            />
            <label htmlFor="remember" className="text-gray-300 text-sm">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={() => {
              navigate("/insurence");
            }}
            type="submit"
            className="w-full mt-4 px-4 py-3 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <a
            href="/isignup"
            className="text-green-400 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Ilogin;
