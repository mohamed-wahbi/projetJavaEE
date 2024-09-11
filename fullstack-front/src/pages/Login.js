import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../PageStyle/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handelLogin = async (e) => {
        e.preventDefault();
        try {
            const logination = await axios.post("http://localhost:8000/login", {
                email,
                password
            });
            console.log(logination.status);
            if (logination.status === 200) {
                alert("Login successful.");
                navigate("/home");
            } 
        } catch (error) {
            console.log("Error during login!", error);
            setErrorMsg("Email or Password is invalid!");
        }
    };

    return (
        <div className='loginComponent'>
            <form onSubmit={handelLogin} className='loginForm'>
                <input type='email' required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
            <p className='errorMsg'>{errorMsg}</p>

            <Link to="/register" className='registerLink'>
                <p>You don't have an account? Create one.</p>
            </Link>
        </div>
    );
};

export default Login;
