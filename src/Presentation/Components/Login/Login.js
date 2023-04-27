import React from "react";
import { auth } from "../../../DAL/FirebaseConf";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';
import LoginForm from "./LoginForm";
import logoSwal from "../../img/logo_swal.png";
import logo from "../../img/logo_memorys.png";
import "../../CSS/Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      swal({ timer: 1500, icon: logoSwal, title: "Bienvenue!" });
    } catch (e) {
      swal("Email ou mot de passe invalide", "Veuillez contrôler vos informations de connection", "error");
    }
  };

  return (
    <>
      <div className="div_img">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="584"
          height="677"
          fill="max"
          viewBox="0 0 584 832"
        >
          <path
            fill="#A78A7F"
            fillOpacity=".86"
            d="M1197.2 559.412c0 283.907-211.331 514.058-472.022 514.058C-318.715 1399.91-1.3 570.913 249.683 485.5c-99.631-472.408 394.751-141.161 165-544.5C675.374-59 1197.2 275.505 1197.2 559.412Z"
          />
        </svg>
        <img className="logo_memorys" src={logo} alt="logo"></img>
      </div>
      <div className="login">
        <div className="login_container">
          <div className="btn_container">
            <LoginForm handleSubmit={handleLogin} />
            <br></br>
            <NavLink className="link_login" to="/reset">Oublié votre mot de passe?</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}