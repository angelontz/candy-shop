import React, { useContext } from 'react';
import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import { AuthContext } from '../context/AuthContext';

function CartPage() {
  const { user } = useContext(AuthContext);
  const title = user ? `${user.name}'s Cart` : 'My Cart';

  return (
    <div>
      <h1>{title}</h1>
      <Cart />
      <CartSummary />
    </div>
  );
}

export default CartPage;