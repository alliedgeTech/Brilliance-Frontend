import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otpVerify");
    axios
      .post("http://localhost:6001/api/v1/register", formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        toast.success("Registration successful");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        if (error.response && error.response.status === 409) {
          toast.error("Email already exists");
        } else {
          toast.error("Registration failed");
        }
      });
  };

  return (
    <div className="flex justify-center items-center mt-6 mb-6">
      <form
        onSubmit={handleSubmit}
        className="w-[336px] p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">REGISTER</h2>
        <div className="space-y-4">
          <div className="email">
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
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
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="button-register">
            <input
              type="submit"
              className="w-full bg-cb8161 hover:bg-cb7161 text-white font-semibold py-2 px-4 rounded-md"
              value="Register"
            />
          </div> */}
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-[18px] text-white font-semibold py-2 px-4 rounded-md"
            style={{ backgroundColor: "#CB8161" }}
          >
            Register
          </button>
          <div className="button-next-login text-center text-lg">
            <Link to="/Login">Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
