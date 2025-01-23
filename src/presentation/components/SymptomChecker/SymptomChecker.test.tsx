import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SymptomChecker } from './SymptomChecker';

describe('SymptomChecker Component', () => {
  test('renders symptom input', () => {
    render(<SymptomChecker />);
    expect(screen.getByLabelText(/enter symptom description/i)).toBeInTheDocument();
  });

  test('adds symptom to list', async () => {
    render(<SymptomChecker />);
    const input = screen.getByLabelText(/enter symptom description/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    await userEvent.type(input, 'Headache');
    await userEvent.click(addButton);

    expect(screen.getByText(/headache/i)).toBeInTheDocument();
  });

  test('shows AI advice after adding symptoms', async () => {
    render(<SymptomChecker />);
    const input = screen.getByLabelText(/enter symptom description/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    await userEvent.type(input, 'Headache');
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText(/mock ai advice/i)).toBeInTheDocument();
    });
  });

  test('removes symptom from list', async () => {
    render(<SymptomChecker />);
    const input = screen.getByLabelText(/enter symptom description/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    await userEvent.type(input, 'Headache');
    await userEvent.click(addButton);

    const removeButton = screen.getByRole('button', { name: /remove symptom headache/i });
    await userEvent.click(removeButton);

    expect(screen.queryByText(/headache/i)).not.toBeInTheDocument();
  });
});
