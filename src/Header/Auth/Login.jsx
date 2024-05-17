import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/userSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiList from "../../API/AllApiList";
import CallFor from "../../API/CallFor";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Please enter Email Address")
      .max(30, "Email length must be less than or equal to 30 characters")
      .matches(
        /^[a-z0-9._]+@[a-z]+(\.[a-z]{2,3}){1,2}$/,
        "Please enter a valid email address"
      ),
    password: yup
      .string()
      .required("Please enter Password")
      .max(30, "Password length must be less than or equal to 30 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Please enter a valid Password"
      ),
  })
  .required();

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { loginApi } = ApiList;
  const [error, setError] = useState("");

  const onSubmit = async (formData) => {
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
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const responseData = await response.json();
          // Handle successful login
          dispatch(signInSuccess(responseData.data));
          toast.success("Login successful");
        } else {
          // Handle non-JSON response
          console.error("Response is not in JSON format:", response);
          setError("Unexpected response format");
        }
      } else {
        // Handle non-200 response status
        const errorText = await response.text();
        setError(errorText || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An unexpected error occurred");
    }
  };
  

  return (
    <>
      <form className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md mt-6 mb-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center text-2xl font-semibold mb-6">Log in</h2>
        <p className="status"></p>
        <div className="space-y-4">
          <div>
            <input
              {...register("email")}
              type="text"
              className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
              name="email"
              id="email"
              placeholder="Your email"
            />
            <div>
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              className={`w-full px-4 py-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
              name="password"
              id="password"
              placeholder="Password"
            />
            <div>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
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
              <label htmlFor="rememberme" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <Link to="/forgot" className="text-sm" style={{ color: '#CB8161' }}>Lost your password?</Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              style={{ backgroundColor: '#CB8161' }}
            >Login</button>
          </div>
          <div className="text-center">
            <p>Don't have an account?</p>
            <Link to="/register" className="text-blue-600 font-semibold" style={{ color: '#CB8161' }}>Create An Account</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
