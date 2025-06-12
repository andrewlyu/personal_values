import React from 'react';
import { render, screen } from '@testing-library/react';
import ValuesSummary from './ValuesSummary';

describe('ValuesSummary', () => {
  const mockValues = [
    {
      name: "Achievement",
      score: 95,
      description: "Striving for excellence"
    },
    {
      name: "Creativity",
      score: 88,
      description: "Expressing yourself"
    }
  ];

  it('renders the component with title', () => {
    render(<ValuesSummary values={mockValues} />);
    expect(screen.getByText('Your Core Values')).toBeInTheDocument();
  });

  it('displays values in correct order', () => {
    render(<ValuesSummary values={mockValues} />);
    const valueNames = screen.getAllByRole('heading', { level: 2 });
    expect(valueNames[0]).toHaveTextContent('Achievement');
    expect(valueNames[1]).toHaveTextContent('Creativity');
  });

  it('shows correct scores', () => {
    render(<ValuesSummary values={mockValues} />);
    expect(screen.getByText('95%')).toBeInTheDocument();
    expect(screen.getByText('88%')).toBeInTheDocument();
  });

  it('displays value descriptions', () => {
    render(<ValuesSummary values={mockValues} />);
    expect(screen.getByText('Striving for excellence')).toBeInTheDocument();
    expect(screen.getByText('Expressing yourself')).toBeInTheDocument();
  });

  it('shows correct ranking', () => {
    render(<ValuesSummary values={mockValues} />);
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText('#2')).toBeInTheDocument();
  });
}); 