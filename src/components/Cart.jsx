import React, { useContext } from 'react';
import { CartContext } from '../App';
import CartItem from './CartItem';

function Cart() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p style={{ color: '#e91e63' }}>Your cart is empty.</p>;
  }

  return (
    <div className="product-grid">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;