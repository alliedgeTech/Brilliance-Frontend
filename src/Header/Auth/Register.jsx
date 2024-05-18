import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CallFor from "../../API/CallFor"; 
import ApiList from "../../API/AllApiList"; 

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const { registerApi, verifyOTPApi } = ApiList;
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const onSubmit = async (data) => {
    const { email, password, otp } = data;
    const requestBody = { email, password };

    try {
      const response = await CallFor(registerApi, 'POST', JSON.stringify(requestBody), 'withoutAuth');

      if (response.data.otpSent) {
        setOtpSent(true);
        setError('');
      } else {
        setError('Email already exists');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleVerifyOtp = async (data) => {
    const { email, otp } = data;
    const requestBody = { email, otp };

    try {
      const response = await CallFor(verifyOTPApi, 'POST', JSON.stringify(requestBody), 'withoutAuth');

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "20px", marginBottom: "20px" }} className="mb-12">
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email:
            <input type="email" {...register('email')} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" {...register('password')} />
          </label>
          <br />
          <button type="submit" style={{ backgroundColor: '#CB8161', color: '#fff', border: 'none', padding: '4px 16px', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{error}</div>}
        {otpSent && (
          <form onSubmit={handleSubmit(handleVerifyOtp)}>
            <div style={{ marginTop: '20px' }}>
              <label>
                OTP:
                <input type="text" {...register('otp')} />
              </label>
            </div>
            <button type="submit" style={{ backgroundColor: '#CB8161', color: '#fff', border: 'none', padding: '8px 8px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}>Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
