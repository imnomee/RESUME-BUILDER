import React, { useContext, useState } from 'react';
import Input from '../../components/inputs/Input.jsx';
import { validateEmail } from '../../utils/helper.js';
import { UserContext } from '../../context/userContext.jsx';
import axiosInstance from '../../utils/axiosInstance.js';
import { API_PATHS } from '../../utils/apiPaths.js';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentPage }) => {
    const { updateUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email,
                password,
            });
            const { token } = response.data;
            if (token) {
                localStorage.setItem('token', token);
                updateUser(response.data);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError(error.response?.data?.message || 'Login failed');
        }
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
