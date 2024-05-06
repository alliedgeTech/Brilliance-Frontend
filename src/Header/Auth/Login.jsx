import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/userSlice";

function Login() {
  const dispatch = useDispatch();
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
        const response = await axios.post(
          "http://localhost:6001/api/v1/login",
          { email, password }
        );
        const { data } = response;
        const { msg, token } = response.data;
        console.log("Login Success:", msg);
        console.log("Received Token:", token);
        localStorage.setItem("auth", JSON.stringify(token)); // Store token as a string
        setToken(token);
        dispatch(signInSuccess(data));

        navigate("/");
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
      <form
        className="mx-auto w-1/4 p-6 bg-white rounded-lg shadow-md sm:my-4 my-6 min-w-[300px]"
        onSubmit={handleLoginSubmit}
      >
        <h2 className="text-center text-4xl font-semibold mb-6">Log in</h2>
        <div>
          <div className="mb-3">
            <label className="text-xl">
              Email:
              <input
                type="text"
                required=""
                className="w-full mt-1 px-2 py-2 border rounded-md text-lg"
                name="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="text-xl">
              Password:
              <input
                type="password"
                required=""
                className="w-full mt-1 px-2 py-2 border rounded-md text-lg"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
                id="rememberme"
                name="rememberme"
                value="forever"
              />
              <label
                for="rememberme"
                className="ml-2 pt-[5px] text-[14px] text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div className="flex items-center">
              <Link
                to="/forgot"
                className="text-[14px]"
                style={{ color: "#CB8161" }}
              >
                Lost your password?
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl font-semibold py-2 px-4 rounded-md"
              style={{ backgroundColor: "#CB8161" }}
            >
              Login
            </button>
          </div>
          <div className="text-center text-xl mt-2">
            <p className="font-normal">Don't have an account?</p>
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
              style={{ color: "#CB8161" }}
            >
              Create An Account
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
