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
        toast.success("Login SuccessFull"); 
        navigate("/");
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error("Login Failed");
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
        className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md mt-6 mb-6"
        onSubmit={handleLoginSubmit}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Log in</h2>
        <p className="status"></p>
        <div className="space-y-4">
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
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                id="rememberme"
                name="rememberme"
                value="forever"
              />
              <div className="pt-[5px]">
                <label for="rememberme" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex items-center ml-auto">
              <Link
                to="/forgot"
                className="text-sm text-gray-600"
                style={{ color: "#CB8161" }}
              >
                Lost your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-[20px] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              style={{ backgroundColor: "#CB8161" }}
            >
              Login
            </button>
          </div>
          <div className="text-center ">
            <p className="font-normal text-lg">Don't have an account?</p>
            <Link
              to="/register"
              className="text-blue-600 font-normal text-xl"
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
