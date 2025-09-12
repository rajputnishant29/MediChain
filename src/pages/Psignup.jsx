import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Psignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    emergencyContact: "",
    healthID: "",
  });

  // Generate random Health ID on load
  useEffect(() => {
    const generatedID = "HC" + Math.floor(100000 + Math.random() * 900000);
    setFormData((prev) => ({ ...prev, healthID: generatedID }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", formData);
    // TODO: Add API call to register patient
  };

  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#121a2b] p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-800">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">Patient Signup</h1>
          <p className="text-gray-400 text-sm mt-2">
            Please fill in your details to create a{" "}
            <span className="text-blue-400 font-semibold">MediChain</span>{" "}
            account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section: Personal Info */}
          <SectionTitle step="1" title="Personal Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a secure password"
            />
            <InputField
              label="Date of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={["Male", "Female", "Other"]}
            />
            <SelectField
              label="Blood Group"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              options={[
                "A+",
                "A-",
                "B+",
                "B-",
                "O+",
                "O-",
                "AB+",
                "AB-",
              ]}
            />
          </div>

          {/* Section: Address */}
          <SectionTitle step="2" title="Address Details" />
          <InputField
            label="Street Address"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street, House No."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <InputField
              label="State"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
            <InputField
              label="ZIP"
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
            />
          </div>
          <InputField
            label="Country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
          />

          {/* Section: Contact */}
          <SectionTitle step="3" title="Contact Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
            />
            <InputField
              label="Emergency Contact"
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="Emergency Contact Number"
            />
          </div>

          {/* Signup Button */}
          <button
            onClick={() => navigate("/plogin")}
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white font-semibold shadow-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

/* 🔹 Reusable Input */
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700 
        focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
      required={!props.readOnly}
    />
  </div>
);

/* 🔹 Reusable Select */
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-[#0b1220] text-white border border-gray-700 
        focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
      required
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

/* 🔹 Section Title */
const SectionTitle = ({ step, title }) => (
  <h2 className="text-xl font-semibold text-blue-400 mt-8 mb-3 flex items-center gap-2">
    <span className="bg-blue-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">
      {step}
    </span>
    {title}
  </h2>
);

export default Psignup;
