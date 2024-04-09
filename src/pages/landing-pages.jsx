import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing-pages.css";
import { useForm } from "react-hook-form";
import NavLandingPage from "../components/nav-bar-landing-page.jsx";
import { Form } from "react-router-dom";

function LandingPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <NavLandingPage />
      <div className="container">
        <div className="login-window">
          <h1>Log in</h1>
          <div className="login-form">
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
            <input
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />

            <div className="forgot-password">
              <Link className="forgot-password-link" to="/forgot-password">
                Forgot your password?
              </Link>
            </div>
            <Link>
              <button
                className="btn-login-form"
                onClick={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
