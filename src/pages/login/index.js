import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            const data = await response.json();
            // Store tokens in local storage (or state management)
            localStorage.setItem('idToken', data.idToken);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            // Redirect or show a success message
            alert('Login successful!');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light px-4">
                    &nbsp;
                    <Link className="nav-link" to="/">
                        <span className='navbar-brand-logo'>IMES</span>
                    </Link>
                </nav>
            </header>

            <main>
                <section>
                    <div className="container">
                        <div className="row justify-content-md-center py-5">
                            <div className="col-md-6">
                                <h2>Login</h2>
                                <form onSubmit={handleLogin}>
                                    <div>
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Login</button>
                                </form>
                                {errorMessage && <p className='pt-2'>{errorMessage}</p>}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-light text-center py-3">
                <p>&copy; 2024 Infosys Public Services, Inc.,</p>
            </footer>
        </>
    );
}

export default Login;