import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../PageStyle/register.css";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();

        try {
            const registration = await axios.post('http://localhost:8000/register', { name, email, password });
            console.log(registration.status);
            if (registration.status === 201) {
                alert("You are successfully registered.");
                navigate("/");
            }
        } catch (error) {
            console.log('Error during registration!', error);
        }
    }

    return (
        <div className='registerComponent'>
            <form onSubmit={registerHandler} className='registerForm'>
                <input type='text' required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
            </form>

            <Link to="/" className='linkToLogin'>
                <p>You already have an account? Go to login page.</p>
            </Link>
        </div>
    )
}

export default Register;
