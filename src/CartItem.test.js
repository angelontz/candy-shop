import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from './components/CartItem';
import { CartContext } from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <div>{children}</div>,
  useLocation: () => ({ pathname: '/' }),
  useParams: () => ({ id: '1' }),
  Navigate: ({ to }) => <div>Navigate to {to}</div>,
}), { virtual: true });

const item = {
  id: 1,
  name: 'Test Candy',
  price: 1.5,
  image: 'test.jpg',
  quantity: 1,
};

test('remove button removes item from cart', async () => {
  const user = userEvent.setup ? userEvent.setup() : userEvent;
  const setCartItems = jest.fn();
  render(
    <CartContext.Provider value={{ cartItems: [item], setCartItems }}>
      <CartItem item={item} />
    </CartContext.Provider>
  );

  await user.click(screen.getByRole('button', { name: /remove/i }));
  expect(setCartItems).toHaveBeenCalledWith([]);
});