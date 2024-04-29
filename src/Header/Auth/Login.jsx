import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess,signInFailure } from "../../redux/userSlice";


function Login({ box, setBox }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [token, setToken] = useState(localStorage.getItem("auth") || "");
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = formData;
  
      if (email.length > 0 && password.length > 0) {
        try {
          const response = await axios.post('http://localhost:6001/api/v1/login', { email, password });
          const { data } = response;
          const { msg, token } = response.data;
          console.log("Login Success:", msg);
          console.log("Received Token:", token);
          localStorage.setItem("auth", JSON.stringify(token)); // Store token as a string
          setToken(token);
          dispatch(signInSuccess(data));
       
            navigate("/")
         
        } catch (error) {
          if (error.response && error.response.data) {
            console.log("Server Error Response:", error.response.data);
          } else {
            console.log("An unexpected error occurred:", error);
          }
        }
      }
    };
  
    useEffect(() => {
      if (token !== "") {
        toast.success("You are already logged in");
        navigate("/");
      }
    }, [token, navigate]);

  return (
    <>
      <div className={`form-login ${box ? 'active' : ''}`}>
        <form onSubmit={handleLoginSubmit} className="login">
          <h2>Log in</h2>
          <p className="status" />
          <div className="content">
            <div className="username">
              <input
                type="text"
                required
                className="input-text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </div>
            <div className="password">
              <input
                className="input-text"
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="rememberme-lost">
              <div className="rememberme">
                <input
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                  defaultValue="forever"
                />
                <label
                  htmlFor="rememberme"
                  className="inline"
                >
                  Remember me
                </label>
              </div>
              <div className="lost_password">
                <Link to="/forgot">
                  Lost your password?
                </Link>
              </div>
            </div>
            <div className="button-login">
              <input
                type="submit"
                className="button"
                value="Login"
              />
            </div>
            <div className="button-next-reregister">
              <Link to="/register">Create An Account</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
