import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess,signInFailure } from "../../redux/userSlice";


function Login() {
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
    <form class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md mt-6 mb-6" onSubmit={handleLoginSubmit}>
  <h2 class="text-center text-2xl font-semibold mb-6">Log in</h2>
  <p class="status"></p>
  <div class="space-y-4">
    <div>
    <input
  type="text"
  required=""
  className="w-full px-4 py-2 border rounded-md"
  name="email"
  id="email"
  placeholder="Your email"
  value={formData.email}
  onChange={handleChange}
/>

    </div>
    <div>
    <input
  type="password"
  required=""
  className="w-full px-4 py-2 border rounded-md"
  name="password"
  id="password"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
/>

    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600"
          id="rememberme"
          name="rememberme"
          value="forever"
        />
        <label for="rememberme" class="ml-2 text-sm text-gray-600">Remember me</label>
      </div>
      <div>
      <Link to="/forgot" className="text-sm" style={{ color: '#CB8161' }}>Lost your password?</Link>

      </div>
    </div>
    <div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        style={{ backgroundColor: '#CB8161' }}
      >Login
        </button>
    </div>
    <div class="text-center">
      <p>Don't have an account?</p>
      <Link to="/register" class="text-blue-600 font-semibold"  style={{ color: '#CB8161' }}>Create An Account</Link>
    </div>
  </div>
</form>


    </>
  );
}

export default Login;
