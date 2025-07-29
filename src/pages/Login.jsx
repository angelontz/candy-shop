import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login({ name });
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      login({ name: decoded.name || decoded.email || 'Google User' });
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <div className="social-logins">
        <div className="google-wrapper">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => alert('Google login failed')}
            useOneTap={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
