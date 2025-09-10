import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Plogin() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrHealthID: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Login Data:", formData);
    // TODO: API call for login
  };

  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#121a2b] p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-blue-400 text-center">Patient Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email / Health ID */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email or Health ID</label>
            <input
              type="text"
              name="emailOrHealthID"
              value={formData.emailOrHealthID}
              onChange={handleChange}
              placeholder="Enter email or Health ID"
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 accent-blue-500"
            />
            <label htmlFor="remember" className="text-white text-sm">Remember Me</label>
          </div>

          {/* Login Button */}
          <button
          onClick={()=>{
              navigate("/patient");
          }}
            type="submit"
            className="w-full mt-4 px-4 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-white font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Don't have an account? <a href="/psignup" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
export default Plogin;

