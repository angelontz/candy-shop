import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../App';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) => location.pathname === path;

  const categories = [
    { name: 'Chocolate', subs: ['Dark Chocolate', 'Milk Chocolate'] },
    { name: 'Gummies', subs: ['Bears', 'Worms'] },
    { name: 'Hard Candy', subs: ['Lollipops', 'Butterscotch'] },
    { name: 'Sour Candy', subs: ['Sour Belts', 'Sour Gummies'] },
    { name: 'Licorice', subs: ['Red Licorice', 'Black Licorice'] },
  ];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Καραμελο Κοσμος Logo" className="logo" />
        </Link>
      </div>

      <div className={`navbar-right ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <div className="dropdown">
          <Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link>
          <div className="dropdown-menu">
            {categories.map((cat) => (
              <div key={cat.name} className="dropdown-category">
                <Link to={`/products?category=${encodeURIComponent(cat.name)}`}>{cat.name}</Link>
                <div className="sub-menu">
                  {cat.subs.map((sub) => (
                    <Link
                      key={sub}
                      to={`/products?category=${encodeURIComponent(cat.name)}&subcategory=${encodeURIComponent(sub)}`}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/cart" className={isActive('/cart') ? 'active cart-link' : 'cart-link'}>
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>Profile</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className={isActive('/login') ? 'active' : ''}>Login</Link>
        )}
      </div>

      <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </button>
    </header>
  );
}


export default Header;