import { useState } from "react";
import ButtonLogin from './ButtonLogin'
import "../../CSS/Login.css";

export default function LoginForm({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e, email, password);
            }}
        >
            <div className={"input-group"}>
                <input
                    className="login_input"
                    placeholder="Identifiant"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className={"input-group"}>
                <input
                    className="login_input"
                    placeholder="Mot de passe"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <ButtonLogin></ButtonLogin>
        </form>
    );
}
