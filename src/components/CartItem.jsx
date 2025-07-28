import React, { useContext } from 'react';
import { CartContext } from '../App';
import './ProductCard.css';

function CartItem({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const increase = () => {
    const updated = cartItems.map((ci) =>
      ci.id === item.id ? { ...ci, quantity: parseFloat((ci.quantity + 0.1).toFixed(1)) } : ci
    );
    setCartItems(updated);
  };

  const decrease = () => {
    const updated = cartItems.map((ci) =>
      ci.id === item.id ? { ...ci, quantity: parseFloat(Math.max(0.1, ci.quantity - 0.1).toFixed(1)) } : ci
    );
    setCartItems(updated);
  };

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>€ {item.price.toFixed(2)}</p>
      <div className="quantity-selector">
        <button onClick={decrease}>-</button>
        <span>{item.quantity.toFixed(1)} kg</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default CartItem;