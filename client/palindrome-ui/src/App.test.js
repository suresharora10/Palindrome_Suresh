import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/The answer is:/i);
  expect(linkElement).toBeInTheDocument();
});
