import axios from "axios";
import { Recipe } from "../types/recipe";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/recipe`,
});

export const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>("/getAllRecipes");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipes");
  }
};

export const getRecipesByIngredient = async (
  ingredient: string
): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>("/getRecipesByIngredient", {
      params: { ingredient },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        `Failed to fetch recipes for ingredient: ${ingredient}`
    );
  }
};

export const getRecipesByCountry = async (
  country: string
): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>("/getRecipesByCountry", {
      params: { country },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        `Failed to fetch recipes for country: ${country}`
    );
  }
};

export const getRecipesByCategory = async (
  category: string
): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>("/getRecipesByCategory", {
      params: { category },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        `Failed to fetch recipes for category: ${category}`
    );
  }
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const response = await api.get<Recipe>(`/getOne/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || `Failed to fetch recipe with id: ${id}`
    );
  }
};
