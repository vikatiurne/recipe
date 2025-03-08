export interface Ingredient {
  name: string;
  measure: string;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  ingredients: Ingredient[];
}

export interface Meal {
  id: string;
  name: string;
}

export interface Filters {
  category?: string;
  country?: string;
  ingredient?: string;
}
