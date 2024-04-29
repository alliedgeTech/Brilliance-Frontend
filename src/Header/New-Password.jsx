import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPassword() {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!password.trim() || !confirmPassword.trim()) {
      setError('Please enter both password fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Make an HTTP POST request to your backend endpoint to update the password
      const response = await axios.post('yhttp://localhost:6001/api/v1/reset-password', {
        password,
        confirmPassword,
      });

      // Assuming the backend returns a success message or status code
      if (response.status === 200) {
        // Redirect to login page or any other page
        navigate('/login');
      } else {
        // Handle other possible response statuses or error cases
        console.error('Unexpected response:', response);
        setError('Failed to reset password. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error sending request:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ fontWeight: 'bold' }}>New Password</h2>
      <div className="form-group">
        <label htmlFor="password">New Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmPasswordRef} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button type="button" onClick={handleResetPassword}>Reset Password</button>
      <p>Remembered your password? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default NewPassword;
