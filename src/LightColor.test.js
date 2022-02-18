import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('gets red if you select the red light option', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /red/i });

  fireEvent.click(buttonElement);

  const redElement = screen.getByText(/red/i);
  expect(redElement).toBeInTheDocument();
});

