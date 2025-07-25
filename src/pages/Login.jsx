import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';


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
      login({ name: decoded.name });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => {}} />
    </div>
  );
}

export default Login;