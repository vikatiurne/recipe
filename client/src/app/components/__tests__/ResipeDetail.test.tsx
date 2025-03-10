import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, waitFor } from '@testing-library/react';
import RecipeDetail from '../../recipe/[id]/page'; // Убедитесь, что путь правильный
import { getRecipeById } from '../../utils/api';
import { useParams } from 'next/navigation';
import { mockOneRecipe } from '../__mocks__/mockRecipes';

// Мокируем модуль next/navigation
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

// Мокируем функцию getRecipeById
jest.mock('../../utils/api');

describe('RecipeDetail', () => {
  const mockRecipe = mockOneRecipe

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('renders loading state', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '53065' });
    (getRecipeById as jest.Mock).mockReturnValue(new Promise(() => {})); 

    render(<RecipeDetail params={{ id: '53065' }} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders recipe details', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '53065' });
  (getRecipeById as jest.Mock).mockResolvedValue(mockRecipe); 

  render(<RecipeDetail params={{ id: '53065' }} />);
  expect(await screen.findByText(/sushi/i)).toBeInTheDocument();
  expect(await screen.findByText(/japanese/i)).toBeInTheDocument();
  expect(await screen.findByText(/step 1/i)).toBeInTheDocument();

  });

  it('renders error message', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '53065' });
    (getRecipeById as jest.Mock).mockRejectedValue(new Error('Error loading recipe'));

    render(<RecipeDetail params={{ id: '53065' }} />);

    await waitFor(() => {
      expect(screen.getByText(/error loading recipe/i)).toBeInTheDocument();
    });
  });

  it('renders recipe not found message', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '53065' });
    (getRecipeById as jest.Mock).mockResolvedValue(null); 

    render(<RecipeDetail params={{ id: '53065' }} />);

    await waitFor(() => {
      expect(screen.getByText(/recipe not found/i)).toBeInTheDocument();
    });
  });
});