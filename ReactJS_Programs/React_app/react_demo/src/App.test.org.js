import { render, screen } from '@testing-library/react';
import App from './App';

test('check hello jayant text is present', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello jayant /i);
  expect(linkElement).toBeInTheDocument();
});


test('check india text is present', () => {
  render(<App />);
  const linkElement = screen.getByText(/my name is jayant /i);
  expect(linkElement).toBeInTheDocument();
});
