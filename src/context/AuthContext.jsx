import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children, initialUser = null }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);

  const login = (userData) => {
    setUser(userData);
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}