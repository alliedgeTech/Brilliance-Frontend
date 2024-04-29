import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:6001/api/v1/register', formData)
      .then(response => {
        console.log('Registration successful:', response.data);
        toast.success('Registration successful');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        if (error.response && error.response.status === 409) {
          toast.error('Email already exists');
        } else {
          toast.error('Registration failed');
        }
      });
  };

  return (
    <div className="form-register">
      <form onSubmit={handleSubmit} className="register">
        <h2>REGISTER</h2>
        <div className="content">
          <div className="email">
            <input
              type="email"
              className="input-text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              className="input-text"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-register">
            <input
              type="submit"
              className="button"
              value="Register"
            />
          </div>
          <div className="button-next-login">
            Already have an account?
          </div>
        </div>
      </form>
   

<ToastContainer />
    </div>
  );
}

export default Register;