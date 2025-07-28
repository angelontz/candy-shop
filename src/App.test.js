import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

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

jest.mock('@react-oauth/google', () => ({
  GoogleOAuthProvider: ({ children }) => <div>{children}</div>,
  GoogleLogin: () => <div>GoogleLogin</div>,
}));

test('renders header', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});