import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../assets/app-logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

function NavLandingPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="m-4 grid gap-0 sm:grid-cols-2">
      <div className="">
        <img src={AppLogo} alt="App logo" />
      </div>
      <div className="flex gap-3 justify-start align-middle sm:justify-end">
        <div className="flex flex-col justify-center">
          <Link to="">Log in</Link>
        </div>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-[#1cc29f] rounded-xl text-white px-4 py-2 font-semibold"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default NavLandingPage;
