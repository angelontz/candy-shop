import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ cartItems = [], user, logout, mobileOpen, setMobileOpen }) {
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
        {user ? (
          <>
            <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>Profile</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : null}
        <Link
          to={user ? '/profile' : '/login'}
          className={isActive(user ? '/profile' : '/login') ? 'active' : ''}
        >
          {user ? user.name : 'Login'}
        </Link>
      </div>

      <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;