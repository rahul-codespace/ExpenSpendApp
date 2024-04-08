import React from "react";
import AppLogo from "../assets/app-logo.svg";
import { Link } from "react-router-dom";
import "../styles/landing-pages.css";

function LandingPages() {
  return (
    <div className="nav-bar">
      <img src={AppLogo} className="app-logo" alt="logo" />
      <div className="nav-btns">
        <Link to="/login" className="btn-login">
          Log in
        </Link>
        <button className="btn-sign-up">Sign Up</button>
      </div>
    </div>
  );
}

export default LandingPages;
