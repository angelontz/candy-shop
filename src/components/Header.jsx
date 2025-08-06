import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../App';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const { cartItems = [] } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const cartCount = cartItems.length;

  const isActive = (path) => location.pathname === path;

  const categories = [
    { name: 'Chocolate', subs: ['Dark Chocolate', 'Milk Chocolate'] },
    { name: 'Gummies', subs: ['Bears', 'Worms'] },
    { name: 'Hard Candy', subs: ['Lollipops', 'Butterscotch'] },
    { name: 'Sour Candy', subs: ['Sour Belts', 'Sour Gummies'] },
    { name: 'Licorice', subs: ['Red Licorice', 'Black Licorice'] },
  ];

  const cartRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, startX: 0, startY: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('floatingCartPosition');
    if (saved && cartRef.current) {
      const { x, y } = JSON.parse(saved);
      pos.current.x = x;
      pos.current.y = y;
      cartRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  const startDrag = (e) => {
    e.preventDefault();
    const startX = e.touches ? e.touches[0].clientX : e.clientX;
    const startY = e.touches ? e.touches[0].clientY : e.clientY;

    pos.current.startX = startX;
    pos.current.startY = startY;

    const handleMove = (moveEvent) => {
      const moveX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;

      const dx = moveX - pos.current.startX;
      const dy = moveY - pos.current.startY;

      pos.current.x += dx;
      pos.current.y += dy;

      const cart = cartRef.current;
      if (cart) {
        cart.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      pos.current.startX = moveX;
      pos.current.startY = moveY;
    };

    const stopMove = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', stopMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', stopMove);

      localStorage.setItem(
        'floatingCartPosition',
        JSON.stringify({ x: pos.current.x, y: pos.current.y })
      );
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', stopMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', stopMove);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-mobile">
          <div className="hamburger-container">
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              ☰
            </button>
          </div>
          <Link to="/">
            <img src="/logo.png" alt="Καραμελο Κοσμος Logo" className="logo" />
          </Link>
          {!user && (
            <Link to="/login" className="login-icon mobile-only">
              <img src="/profile-icon.png" alt="Login Icon" className="login-icon-img" />
            </Link>
          )}
        </div>

        <div className="navbar-left desktop-only">
          <Link to="/">
            <img src="/logo.png" alt="Καραμελο Κοσμος Logo" className="logo" />
          </Link>
        </div>

        <div
          className={`navbar-right mobile-fullscreen ${mobileOpen ? 'open' : ''}`}
          onClick={(e) => {
            if (!e.target.closest('.dropdown-menu') && !e.target.closest('.category-toggle')) {
              setMobileOpen(false);
              setShowCategories(false);
              setActiveCategory(null);
            }
          }}
        >
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <button
            className={`category-toggle ${showCategories ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowCategories(!showCategories);
              setActiveCategory(null);
            }}
          >
            Categories
          </button>
          {showCategories && (
            <div className="dropdown-menu visible">
              {activeCategory === null ? (
                categories.map((cat) => (
                  <div key={cat.name} className="dropdown-category">
                    <button
                      className="subcategory-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(cat.name);
                      }}
                    >
                      {cat.name}
                    </button>
                  </div>
                ))
              ) : (
                <>
                  <button
                    className="subcategory-toggle back"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCategory(null);
                    }}
                  >
                    ← Back
                  </button>
                  <div className="dropdown-category">
                    <Link
                      to={`/products?category=${encodeURIComponent(activeCategory)}`}
                      onClick={() => {
                        setShowCategories(false);
                        setMobileOpen(false);
                        setActiveCategory(null);
                      }}
                    >
                      View All {activeCategory}
                    </Link>
                    <div className="sub-menu">
                      {categories.find((c) => c.name === activeCategory)?.subs.map((sub) => (
                        <Link
                          key={sub}
                          to={`/products?category=${encodeURIComponent(activeCategory)}&subcategory=${encodeURIComponent(sub)}`}
                          onClick={() => {
                            setShowCategories(false);
                            setMobileOpen(false);
                            setActiveCategory(null);
                          }}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          <Link to="/cart" className={isActive('/cart') ? 'active cart-link' : 'cart-link'}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          {!user && (
            <Link to="/login" className="login-icon desktop-only">
              <img src="/profile-icon.png" alt="Login Icon" className="login-icon-img" />
            </Link>
          )}
          {user && (
            <>
              <Link
                to="/profile"
                className={`${isActive('/profile') ? 'active ' : ''}user-name`}
              >
                {user.name}
              </Link>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          )}
        </div>
      </header>

      {cartItems.length > 0 && (
        <div
          className="floating-cart-mobile"
          ref={cartRef}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <Link to="/cart" className="floating-cart-content">
            🛒
            {cartItems.length > 0 && <span className="cart-badge-bubble">{cartItems.length}</span>}
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
