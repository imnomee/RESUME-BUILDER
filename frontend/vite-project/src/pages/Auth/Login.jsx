import React, { useState } from 'react';
import Input from '../../components/inputs/Input.jsx';
import { validateEmail } from '../../utils/helper.js';

const Login = ({ setCurrentPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !email) {
            setError('Invalid Email');
            return;
        }

        if (!password || password.length < 8) {
            setError('Password is required');
            return;
        }

        setError('');
    };

    return (
        <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6">
                Please enter your details
            </p>
            <form onSubmit={handleLogin}>
                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    label="Email Address"
                    placeHolder="john@example.com"
                    type="email"
                />
                <Input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    label="Password"
                    placeHolder="Min 8 Characters"
                    type="password"
                />

                {error && (
                    <p className="text-red-500 text-xs pb-2.5">{error}</p>
                )}
                <button type="submit" className="btn-primary">
                    LOGIN
                </button>
                <p className="text-base text-slate-800 mt-3">
                    Don't have an account?
                    <button
                        className="font-medium text-primary underline cursor-pointer"
                        onClick={() => setCurrentPage('signup')}>
                        SignUp
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
