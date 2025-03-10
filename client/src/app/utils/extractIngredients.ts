import { Recipe, Ingredient } from "../types/recipe";

export const extractIngredients = (recipe: Recipe): Ingredient[] => {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientName = recipe[`strIngredient${i}` as keyof Recipe] as
      | string
      | undefined;
    const ingredientMeasure = recipe[`strMeasure${i}` as keyof Recipe] as
      | string
      | undefined;

    if (ingredientName) {
      ingredients.push({
        name: ingredientName,
        measure: ingredientMeasure ?? "",
      });
    }
  }

  return ingredients;
};
