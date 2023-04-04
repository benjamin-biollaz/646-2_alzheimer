import React, { useState } from "react";
import { auth } from "../../../DAL/FirebaseConf";
import { useNavigate } from "react-router-dom";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import swal from "sweetalert";
import Navbar from "../../../Presentation/Components/Navbar";
import "../../../Presentation/CSS/Profile.css";

function Profile() {

    const user = auth.currentUser;

    const [oldPassword, setoldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const navigate = useNavigate();

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setconfirmPassword(e.target.value);
    const handleOldPasswordChange = (e) => setoldPassword(e.target.value);

    // Method used to reauthenticate the connected user
    // It is necessary to do it before updating the password

    const reauthenticate = async (e) => {
        // Get the credentials from the connected user
        // The reauthenticate method needs this to update the password
        const credential = await EmailAuthProvider.credential(user.email, oldPassword);

        reauthenticateWithCredential(user, credential).then(() => {
            // Check if the 2 passwords match
            if (password !== confirmPassword) {
                swal("Erreur", "Les mots de passe ne sont pas identiques", "error");
                return;
            }

            // Firebase method to update the password
            updatePassword(user, confirmPassword).then(() => {
                swal({ timer: 1500, type: "success", icon: 'success', title: "Votre mot de passe a été modifié!" });
                navigate("/home");
            }).catch((error) => {
                swal("Erreur", "Le mot de passe n'est pas mis à jour", "error");
            });

        }).catch((error) => {
            swal("Erreur", "L'ancien mot de passe est incorrect", "error");
        });
    }

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        reauthenticate();
    };

    return (
        <>
            <Navbar />
            <div className="div_profile">
                <h3>{user.email}</h3>
                <form onSubmit={handlePasswordUpdate}>
                    <div className="account-group">
                        <input
                            className="account_password"
                            placeholder="Ancien mot de passe"
                            type="password"
                            value={oldPassword}
                            onChange={handleOldPasswordChange}
                            required
                        />
                    </div>
                    <div className="account-group">
                        <input
                            className="account_password"
                            placeholder="Nouveau mot de passe"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className="account_confirmPassword"
                            placeholder="Confirmez le mot de passe"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <button className="button_profile" type="submit">Changer le mot de passe</button>
                </form>
            </div>
        </>
    );
}

export default Profile;
