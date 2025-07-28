import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Pickup from './pages/Pickup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';


// CartContext provides global state for cart items and actions throughout the app.
export const CartContext = React.createContext();
const initialCartItems = [];

function App() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Router>
        <AuthProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pickup" element={<Pickup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
