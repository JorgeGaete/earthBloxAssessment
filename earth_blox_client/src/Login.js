import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState(''); // replace with call to express server
    const [password, setPassword] = useState(''); // replace with call to express server
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    navigate('/welcome')
                }

            })
            .catch(err => console.log(err))
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>


                    <div class="wrap">
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
