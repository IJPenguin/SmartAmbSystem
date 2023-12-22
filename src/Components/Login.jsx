import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className="login__form">
                <input
                    type="email"
                    className="login__form__email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="login__form__password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login__button">
                    Login
                </button>
            </form>
            <p className="login__text">
                Need to Signup? <Link to="/signup">Create Account</Link>
            </p>
        </div>
    );
};
