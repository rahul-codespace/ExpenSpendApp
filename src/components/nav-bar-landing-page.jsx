import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing-pages.css";
import AppLogo from "../assets/app-logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

function NavLandingPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="nav-bar">
      <img src={AppLogo} className="app-logo" alt="logo" />
      <div className="nav-btns">
        <Link to={"/"} className="btn-login">
          Log in
        </Link>
        <button className="btn-sign-up" onClick={() => loginWithRedirect()}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default NavLandingPage;
