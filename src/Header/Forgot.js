import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Forgot() {
  const emailRef = useRef(null);

  return (
    <div className="container">
      <h2 style={{ fontWeight: 'bold' }}>Forgot Password</h2>
      <p>Please enter your email to receive a One Time Password (OTP) to reset your password:</p>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" ref={emailRef} />
      </div>
      <Link to="/otp">
        <button type="button" onClick={() => {
          const email = emailRef.current.value;
          if (!email.trim()) {
            alert('Please enter your email.');
          } else {
            console.log('Navigating to OTP page...');
            // Add logic to navigate to the OTP page here if needed
          }
        }}>Next</button>
      </Link>
    </div>
  );
}

export default Forgot;
