import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Profile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {user.name}</p>
      
      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
}

export default Profile;