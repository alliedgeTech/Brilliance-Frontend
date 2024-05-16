import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/userSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiList from "../../API/AllApiList";
import CallFor from "../../API/CallFor";
import ReactTooltip from 'react-tooltip';

const schema = yup
  .object({
    email: yup
      .string()
      .required("Please enter Email Address")
      .max(30, "Email length must be less than or equal to 30 characters")
      .matches(
        /^[a-z0-9._]+@[a-z]+(\.[a-z]{2,3}){1,2}$/,
        "Please enter valid email address"
      ),

    password: yup
      .string()
      .required("Please enter Password")
      .max(30, "Password length must be less than or equal to 30 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Please enter valid Password"
      ),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { loginApi } = ApiList;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    void handleLogin();
  };
  const handleLogin = async () => {
    const requestBody = {
      emailId: formData.email,
      password: formData.password,
    };

    try {
      const response = await CallFor(
        loginApi,
        "POST",
        JSON.stringify(requestBody),
        "withoutAuth"
      );

      if (response.ok) {
        const responseData = await response.json();
        // Handle successful login
      } else {
        const errorData = await response.json();
        if (response.status === 400 || response.status === 500) {
          setError(errorData.msg);
        } else if (response.status === 404) {
          setError("Resource not found");
        } else {
          setError("Unexpected error");
        }
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An unexpected error occurred");
    }
  };


  // const dispatch = useDispatch()
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [token, setToken] = useState(localStorage.getItem("auth") || "");

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = formData;

  //   if (email.length > 0 && password.length > 0) {
  //     try {
  //       const response = await axios.post('http://localhost:6001/api/v1/login', { email, password });
  //       const { data } = response;
  //       const { msg, token } = response.data;
  //       console.log("Login Success:", msg);
  //       console.log("Received Token:", token);
  //       localStorage.setItem("auth", JSON.stringify(token)); // Store token as a string
  //       setToken(token);
  //       dispatch(signInSuccess(data));

  //         navigate("/")

  //     } catch (error) {
  //       if (error.response && error.response.data) {
  //         console.log("Server Error Response:", error.response.data);
  //       } else {
  //         console.log("An unexpected error occurred:", error);
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (token !== "") {
  //     toast.success("You are already logged in");
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  return (
    <>
      <form class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md mt-6 mb-6" onSubmit={onSubmit}>
        <h2 class="text-center text-2xl font-semibold mb-6">Log in</h2>
        <p class="status"></p>
        <div class="space-y-4">
          <div>
            <input
              {...register("email")}
              type="text"
              className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : ''
                }`}
              name="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              required
              onChange={handleChange}
            />
            <div>
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}

            />
            <div>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
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
            <Link to="/register" class="text-blue-600 font-semibold" style={{ color: '#CB8161' }}>Create An Account</Link>
          </div>
        </div>
      </form>


    </>
  );
}

export default Login;
