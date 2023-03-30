import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../DAL/FirebaseConf";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        async function logout() {
            await signOut(auth);
            navigate("/login");
        }
        logout();
    }, [navigate]);

    return <h1>Logging out...</h1>;
}