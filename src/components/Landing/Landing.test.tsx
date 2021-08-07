import { render, screen } from '@testing-library/react';
import { Landing } from './Landing';

test('renders hello world', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
