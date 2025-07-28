import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext } from './App';
import Checkout from './pages/Checkout';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
  useParams: () => ({ id: '1' }),
  Navigate: ({ to }) => <div>Navigate to {to}</div>,
}), { virtual: true });

const cartItems = [{ id: 1, name: 'Candy', price: 1, quantity: 1 }];

test('shows link to pickup page', () => {
  render(
    <CartContext.Provider value={{ cartItems }}>
      <Checkout />
    </CartContext.Provider>
  );
  const link = screen.getByRole('link', { name: /next/i });
  expect(link).toHaveAttribute('href', '/pickup');
});