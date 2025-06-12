import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders values summary component', () => {
  render(<App />);
  expect(screen.getByText('Your Core Values')).toBeInTheDocument();
  expect(screen.getByText('Achievement')).toBeInTheDocument();
  expect(screen.getByText('Creativity')).toBeInTheDocument();
});
