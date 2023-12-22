import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div>
            <h1>The place you call home 🏠</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
