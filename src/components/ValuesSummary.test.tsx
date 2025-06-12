import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ValuesSummary from './ValuesSummary';

// Mock the fetch function
global.fetch = jest.fn();

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

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the component with title', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ values: mockValues })
    });

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Your Core Values')).toBeInTheDocument();
    });
  });

  it('displays values in correct order', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ values: mockValues })
    });

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const valueNames = screen.getAllByRole('heading', { level: 2 });
      expect(valueNames[0]).toHaveTextContent('Achievement');
      expect(valueNames[1]).toHaveTextContent('Creativity');
    });
  });

  it('shows correct scores', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ values: mockValues })
    });

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('95%')).toBeInTheDocument();
      expect(screen.getByText('88%')).toBeInTheDocument();
    });
  });

  it('displays value descriptions', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ values: mockValues })
    });

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Striving for excellence')).toBeInTheDocument();
      expect(screen.getByText('Expressing yourself')).toBeInTheDocument();
    });
  });

  it('shows correct ranking', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ values: mockValues })
    });

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('#1')).toBeInTheDocument();
      expect(screen.getByText('#2')).toBeInTheDocument();
    });
  });

  it('shows error state when fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <MemoryRouter initialEntries={['/results/test-key']}>
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument();
    });
  });
}); 