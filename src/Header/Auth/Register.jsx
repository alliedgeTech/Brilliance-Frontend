import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false); // Add state for OTP sent status

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:6001/api/v1/register",
        { email, password }
      );

      if (response.data.otpSent) {
        setOtpSent(true); // Update OTP sent status
        setError("");
      } else {
        setError("Email already exists");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:6001/api/v1/verifyOTP",
        { email, otp }
      );

      if (response.data.success) {
        setError("");
      } else {
        setError("Invalid OTP");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-1/4 p-6 bg-white rounded-lg shadow-md sm:my-4 my-6 min-w-[300px]"
      >
        <h2 className="text-center text-4xl font-semibold mb-6">Register</h2>
        <div className="mb-3">
          <label className="text-xl">
            Email:
            <input
              className="w-full mt-1 px-2 py-2 border rounded-md text-lg"
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="text-xl">
            Password:
            <input
              className="w-full mt-1 px-2 py-2 border rounded-md text-lg"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-3">
          <button
            type="submit"
            className="w-full bg-[#CB8161] text-white text-2xl font-semibold py-2 rounded-md"
          >
            Submit
          </button>
        </div>

        {/* added route to login-jaymin */}
        <div className="text-center text-lg">
          <p className="font-normal">Already Registred?</p>
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
            style={{ color: "#CB8161" }}
          >
            Login to your account
          </Link>
        </div>
      </form>
      {error && (
        <div style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}>
          {error}
        </div>
      )}
      {otpSent && (
        <div>
          <div style={{ marginTop: "20px" }}>
            {" "}
            {/* Add margin to OTP input */}
            <label>
              OTP:
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            {/* Add margin to error message */}
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
          <button
            onClick={handleVerifyOtp}
            style={{
              backgroundColor: "#CB8161",
              color: "#fff",
              border: "none",
              padding: "8px 8px",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
