import dotenv from "dotenv";

dotenv.config();

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
}

interface RecipesResponse {
  meals: Recipe[] | null;
}

class RecipesService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor() {
    this.baseUrl = "https://www.themealdb.com/api/json/v1/1";
    this.apiKey = process.env.API_KEY ?? "";
  }

  async getAllRecipes(): Promise<Recipe[] | null> {
    const response = await fetch(
      `${this.baseUrl}/search.php?s=&api_key=${this.apiKey}`
    );
    const data: RecipesResponse = await response.json();
    return data.meals;
  }

  async getRecipesByIngredient(ingredient: string): Promise<Recipe[] | null> {
    const response = await fetch(
      `${this.baseUrl}/filter.php?i=${ingredient}&api_key=${this.apiKey}`
    );
    const data: RecipesResponse = await response.json();
    return data.meals;
  }

  async getRecipesByCountry(country: string): Promise<Recipe[] | null> {
    const response = await fetch(
      `${this.baseUrl}/filter.php?a=${country}&api_key=${this.apiKey}`
    );
    const data: RecipesResponse = await response.json();
    return data.meals;
  }

  async getRecipesByCategory(categoryName: string): Promise<Recipe[] | null> {
    const response = await fetch(
      `${this.baseUrl}/filter.php?c=${categoryName}&api_key=${this.apiKey}`
    );
    const data: RecipesResponse = await response.json();
    return data.meals;
  }

  async getRecipesById(id: string): Promise<Recipe | null> {
    const response = await fetch(
      `${this.baseUrl}/lookup.php?i=${id}&api_key=${this.apiKey}`
    );
    const data: RecipesResponse = await response.json();
    return data.meals ? data.meals[0] : null;
  }
}

export default RecipesService;
