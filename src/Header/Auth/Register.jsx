import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Add state for OTP sent status

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:6001/api/v1/register', { email, password });

      if (response.data.otpSent) {
        setOtpSent(true); // Update OTP sent status
        setError('');
      } else {
        setError('Email already exists');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:6001/api/v1/verifyOTP', { email, otp });

      if (response.data.success) {
        setError('');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"20px",marginBottom:"20px" }} classnName="mb-12"  >
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" style={{ backgroundColor: '#CB8161', color: '#fff', border: 'none', padding: '4px 16px', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px', marginBottom: '10px'  }}>{error}</div>}
        {otpSent && (
  <div>
    <div style={{ marginTop: '20px' }} > {/* Add margin to OTP input */}
      <label>
        OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </label>
    </div>
    <div style={{ marginTop: '10px' }}> {/* Add margin to error message */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
    <button onClick={handleVerifyOtp} style={{ backgroundColor: '#CB8161', color: '#fff', border: 'none', padding: '8px 8px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}>Verify OTP</button>
  </div>
)}

      </div>
    </div>
  );
};

export default RegisterForm;
