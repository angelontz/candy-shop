import React, { useContext, useMemo } from 'react';
import { CartContext } from '../App';
import './Checkout.css';
import '../components/CartSummary.css';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  if (cartItems.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#e91e63' }}>
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Order Summary</h1>
      <ul className="order-list">
        {cartItems.map((item) => (
          <li key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>{item.quantity.toFixed(1)} kg</span>
            <span>€ {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="checkout-bar">
        <span className="total-amount">Total: € {total.toFixed(2)}</span>
        <Link to="/pickup" className="checkout-btn">Next</Link>
      </div>
    </div>
  );
}

export default Checkout;