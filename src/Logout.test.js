import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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


beforeEach(() => {
  window.history.pushState({}, '', '/login');
});

test('redirects to login after logout', async () => {
  const user = userEvent.setup ? userEvent.setup() : userEvent;
  render(<App />);

  await user.type(screen.getByPlaceholderText(/name/i), 'test');
  await user.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/welcome, test!/i)).toBeInTheDocument();
  const [logoutButton] = screen.getAllByRole('button', { name: /logout/i });
  await user.click(logoutButton);

  expect(screen.getAllByText(/login/i).length).toBeGreaterThan(0);
});