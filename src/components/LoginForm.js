import React, { useState } from 'react';
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            axios.post("http://localhost:59749/api/users/login", {
                username: username,
                password: password
            }).then((response) => {
                console.log(response);
                localStorage.setItem("user",response.data);
            }).catch((err) => {
                console.log(err);
                setError(err.response.data);
            });

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                error !== "" ? <div className="alert alert-danger" role="alert">
                    <strong> HATA : </strong> User is not valid...
                </div> : ""
            }
            <label>
                Username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;