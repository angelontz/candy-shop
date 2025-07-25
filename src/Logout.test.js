import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/login');
});

test('redirects to login after logout', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByPlaceholderText(/name/i), 'test');
  await user.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/welcome test/i)).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /logout/i }));

  expect(screen.getByText(/login/i)).toBeInTheDocument();
});