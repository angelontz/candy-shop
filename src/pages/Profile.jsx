import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulated order data
    const fakeOrders = [
      { id: 'ORD123', date: '2025-07-01', total: '€18.90', status: 'Delivered' },
      { id: 'ORD124', date: '2025-07-10', total: '€9.50', status: 'Shipped' },
    ];
    setOrders(fakeOrders);
  }, []);

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="profile-page">
      <h1>Welcome, {user.name}!</h1>
      {user.email && <p className="email">Email: {user.email}</p>}

      <h2>Your Orders</h2>
      <div className="orders">
        {orders.length === 0 ? (
          <p>You have no previous orders.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="order-card">
                <strong>Order:</strong> {order.id}<br />
                <strong>Date:</strong> {order.date}<br />
                <strong>Total:</strong> {order.total}<br />
                <strong>Status:</strong> {order.status}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="logout-btn" onClick={logout}>Log Out</button>
    </div>
  );
}

export default Profile;
