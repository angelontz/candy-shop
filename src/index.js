import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

root.render(
  <React.StrictMode>
    {clientId ? (
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    ) : (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
        Error: Google Client ID is not set. Please set REACT_APP_GOOGLE_CLIENT_ID in your environment variables.
      </div>
    )}

  </React.StrictMode>
);


reportWebVitals();
