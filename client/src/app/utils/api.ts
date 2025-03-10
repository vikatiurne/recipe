import { Recipe } from "../types/recipe";
import { apiGet } from "./apiGet";
import { handleApiError } from "./handleApiError";

export const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    return await apiGet<Recipe[]>("/getAllRecipes");
  } catch (error: unknown) {
    throw handleApiError(error, "Failed to fetch recipes");
  }
};

export const getRecipesByIngredient = async (
  ingredient: string
): Promise<Recipe[]> => {
  try {
    return await apiGet<Recipe[]>("/getRecipesByIngredient", { ingredient });
  } catch (error: unknown) {
    throw handleApiError(
      error,
      `Failed to fetch recipes for ingredient: ${ingredient}`
    );
  }
};

export const getRecipesByCountry = async (
  country: string
): Promise<Recipe[]> => {
  try {
    return await apiGet<Recipe[]>("/getRecipesByCountry", { country });
  } catch (error: unknown) {
    throw handleApiError(
      error,
      `Failed to fetch recipes for country: ${country}`
    );
  }
};

export const getRecipesByCategory = async (
  category: string
): Promise<Recipe[]> => {
  try {
    return await apiGet<Recipe[]>("/getRecipesByCategory", { category });
  } catch (error: unknown) {
    throw handleApiError(
      error,
      `Failed to fetch recipes for category: ${category}`
    );
  }
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
    return await apiGet<Recipe>(`/getOne/${id}`);
  } catch (error: unknown) {
    throw handleApiError(error, `Failed to fetch recipe with id: ${id}`);
  }
};
