import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// Optional: Replace this with real cart context if you have one
const CartContext = React.createContext({ cartItems: [] });

function Header() {
  const { cartItems } = useContext(CartContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Καραμελο Κοσμος Logo" className="logo" />
        </Link>
      </div>

      <div className={`navbar-right ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link>
        <Link to="/cart" className={isActive('/cart') ? 'active cart-link' : 'cart-link'}>
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>

      <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;
