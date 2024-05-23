import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            Username:
                        </label>

                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your Username"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div class="wrap">
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Register
                        </button>
                    </div>
                </form>
                <div>
                    <p>Already have an account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Signup;

