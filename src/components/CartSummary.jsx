import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import './CartSummary.css';

function CartSummary() {
  const { cartItems } = useContext(CartContext);

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="checkout-bar">
      <span className="total-amount">Total: € {total.toFixed(2)}</span>
      <Link to="/checkout" className="checkout-btn">Checkout</Link>
    </div>
  );
}

export default CartSummary;