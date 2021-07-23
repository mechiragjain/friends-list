import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.queryByText('Friends List');
  expect(linkElement).toBeInTheDocument();
});
