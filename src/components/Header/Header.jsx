import React from "react";
import { LoginIcon, LogoutIcon } from "../../Assets/svg/allsvg";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import "./Header.css";

const Header = ({ isAuth, setIsAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      window.location.pathname = "/login";
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="header-section">
        <h1>Apiwiz</h1>
        <div className="icons">
          <LoginIcon onClick={signInWithGoogle} className="header-icons" />
          <LogoutIcon onClick={signUserOut} className="header-icons" />
        </div>
      </div>
    </>
  );
};

export { Header };
