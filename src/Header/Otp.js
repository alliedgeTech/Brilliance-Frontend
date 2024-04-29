import React, { useRef } from 'react';

function OTP() {
  const otpRefs = useRef([]);

  const focusNextInput = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < otpRefs.current.length) {
      otpRefs.current[nextIndex].focus();
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value && index < otpRefs.current.length - 1) {
      focusNextInput(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle OTP verification
    console.log('Verifying OTP...');
  };

  return (
    <div className="container">
      <h2 className="title">OTP Verification</h2>
      <p className="instruction">Please check your email for the One Time Password (OTP) and enter it below:</p>
      <form onSubmit={handleSubmit} id="otp-form">
        <div className="otp-inputs">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              id={`otp${index + 1}`}
              className="otp-input"
              ref={(input) => (otpRefs.current[index] = input)}
              onInput={(e) => handleInput(e, index)}
            />
          ))}
        </div>
        <button type="submit" className="verify-btn">Verify</button>
      </form>
    </div>
  );
}

export default OTP;
