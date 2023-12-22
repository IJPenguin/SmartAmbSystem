import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="signup__card">
            <div className="signup__flex__container">
                <h1 className="signup__heading">Create Your Account!</h1>
                <form onSubmit={handleSubmit} className="signup__form">
                    <input
                        className="signup__form__email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="signup__form__password"
                        type="password"
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="signup__button">
                        Sign Up
                    </button>
                </form>

                <p className="signup__text">
                    Already have an account? <Link to="/login" className="signup__login__link">Login</Link>
                </p>
            </div>
            <img
                src="../../assets/images/signup_img.png"
                className="signup__img"
            />
        </div>
    );
}
