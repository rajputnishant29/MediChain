import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dsignup() {
      const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    qualifications: "",
    specialization: "",
    licenseNumber: "",
    hospitalName: "",
    healthID: "",
  });

  // Generate random Health ID on load
  useEffect(() => {
    const generatedID = "DR" + Math.floor(100000 + Math.random() * 900000);
    setFormData((prev) => ({ ...prev, healthID: generatedID }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", formData);
    // TODO: Add API call to register doctor
  };

  return (
    <div className="p-8 space-y-8 bg-[#0b1220] min-h-screen text-white">
      <h1 className="text-3xl font-bold text-blue-400">Doctor Signup</h1>

      <div className="bg-[#121a2b] p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          {/* Password & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          {/* Gender & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-1">Street Address</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street, House No."
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">ZIP</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="ZIP Code"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
              required
            />
          </div>

          {/* Qualifications & Specialization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Qualifications</label>
              <input
                type="text"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                placeholder="e.g. MBBS, MD"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g. Cardiology"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          {/* License & Hospital */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Medical License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="Enter License Number"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Hospital/Clinic Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                placeholder="Hospital or Clinic Name"
                className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
                required
              />
            </div>
          </div>

          {/* Health ID */}
          <div>
            <label className="block text-sm font-semibold mb-1">Health ID</label>
            <input
              type="text"
              name="healthID"
              value={formData.healthID}
              readOnly
              className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700"
            />
          </div>
          <button 
          onClick={()=>{
              navigate("/dlogin");
          }}
            type="submit"
            className="w-full mt-4 px-4 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dsignup;

