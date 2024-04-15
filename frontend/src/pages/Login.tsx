import './Login.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../assets/images/logo.png';
import Button from '../components/buttons/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const buttonText = 'Sign In';
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const loginHandler = async (username: String, password: String) => {
        try {
            const response = axios.post(
                'http://localhost:5000/api/user/login',
                { username: username, password: password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            Cookies.set('access_token', (await response).data.access_token, { expires: 1 });
            Cookies.set('refresh_token', (await response).data.refresh_token, { expires: 1 });
            navigate('/');
        } catch (error) {
            navigate('/login')
            console.error('Login Failed: ', error);
        }
    }

    const refreshToken = async () => {}
    Cookies.get('refresh_token');

    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="lucky home cafe logo" className="logo" />
            </div>

            <div className="login-container">
                <label className="login-label name"> Username: </label>
                <input
                    className='login-input username-input'
                    type='text'
                    placeholder="Type your Username"
                />
                <label className="login-label password"> Password: </label>
                <input
                    className='login-input password-input'
                    type='password'
                    placeholder="Type your Password"
                />
                <div className="button-container">
                    <Button
                        text={buttonText}
                        className="login-button"
                    />
                </div>

            </div>
        </>

    )
}