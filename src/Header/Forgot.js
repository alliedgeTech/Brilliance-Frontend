import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

function Forgot() {
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleNextClick = async () => {
    const email = emailRef.current.value;
    if (!email.trim()) {
      alert('Please enter your email.');
    } else {
      try {
        // Make an HTTP POST request to your backend endpoint
        const response = await axios.post('http://localhost:6001/api/v1/forgot-password', { email });
        
      
        if (response.status === 200) {
          navigate('/otp');
        } else {
          // Handle other possible response statuses or error cases
          console.error('Unexpected response:', response);
          alert('Failed to send OTP. Please try again later.');
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error sending request:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2 style={{ fontWeight: 'bold' }}>Forgot Password</h2>
      <p>Please enter your email to receive a One Time Password (OTP) to reset your password:</p>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" ref={emailRef} />
      </div>
      <button type="button"  style={{ backgroundColor: '#CB8161' }} onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Forgot;
