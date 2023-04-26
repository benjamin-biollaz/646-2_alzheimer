import { useState } from "react";
import { auth } from "../../../DAL/FirebaseConf";
import { sendPasswordResetEmail } from "firebase/auth";
import swal from "sweetalert";
import logo from "../../img/logo_memorys.png";
import "../../CSS/Login.css";
import { NavLink } from "react-router-dom";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);
            swal({icon: 'success', title: "Si votre email existe vous allez recevoir une notification pour changer votre mot de passe!" });
        } catch (error) {
            swal({icon: 'success', title: "Si votre email existe vous allez recevoir une notification pour changer votre mot de passe!" });
        }
    }

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
                        <form
                            onSubmit={handlePasswordReset}
                        >
                            <div className={"input-group"}>
                                <input
                                    className="login_input"
                                    placeholder="Adresse Email"
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <button className="button_login_reset" type="submit">Réinitialiser le mot de passe</button>
                            <div className="div_link_login">
                                <NavLink className="link_login" to="/login">Annuler</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}
