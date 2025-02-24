import { render, screen } from '@testing-library/react';
import App from './App';
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 91d697a83f3ca06da025911d6b567bbc566ca545

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
