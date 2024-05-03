import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function OTP() {
  const otpRefs = useRef([]);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6001/api/v1/reset-password",
        { otp, newPassword }
      );

      if (response.status === 200) {
        navigate("/");
      } else {
        // Handle other status codes if needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-2xl mb-6">OTP Verification</h2>
     
      <form onSubmit={handleSubmit} id="otp-form" className="mx-auto max-w-xs ">
        <div className="form-group ">
          <div className="inputfield ">
            <div className="flex ">
              {/* OTP input fields */}
              {[...Array(6)].map((_, index) => (
        <React.Fragment key={index}>
          <input
            type="number"
            maxLength="1"
            value={otp[index] || ''}
            onChange={(e) => {
              const newOtp = [...otp];
              newOtp[index] = e.target.value;
              setOtp(newOtp.join(''));
              if (e.target.value !== '' && index < 5) {
                otpRefs.current[index + 1].focus();
              }
            }}
            style={{ width: '50px', height: '50px', textAlign: 'center' }}
            ref={(el) => (otpRefs.current[index] = el)}
          />
          <div className="mx-1"></div>
        </React.Fragment>
      ))}
            </div>
          </div>
        </div>
        <div className="form-group">
          <h2 className="font-bold">New Password</h2>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="block mx-auto w-full rounded-md px-3 py-2 mt-2 border"
          />
        </div>
        <div className="form-group">
          <h2 className="font-bold">Confirm Password</h2>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block mx-auto w-full rounded-md px-3 py-2 mt-2 border"
          />
        </div>
        <button type="submit" className="block mx-auto bg-gray-800 text-white px-4 py-2 rounded-md mt-4">Reset Password</button>
        <h6 className="text-center mt-3">Remembered your password? <Link to="/login">Login</Link></h6>
      </form>
    </div>
  );
}

export default OTP;
