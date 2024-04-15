import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex justify-center bg-red-200">
        <div className="flex flex-col">
          <h1 className="">Log in</h1>
          <form className="form flex flex-col">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p>This field is required</p>}
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>This field is required</p>}
            <button className="button">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
