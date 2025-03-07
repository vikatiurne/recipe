"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "../app/components/Sidebar";
import RecipeCard from "../app/components/RecipeCard";
import { Recipe, Ingredient, Meal } from "../app/types/recipe";
import { getAllRecipes } from "../app/utils/api";
import { extractIngredients } from "./utils/extractIngredients";
import FilterInput from "./components/UI/FilterInput";

interface Filters {
  category?: string;
  country?: string;
  ingredient?: string;
}

const MainPage: React.FC = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const ingredient = searchParams.get("ingredient");

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [arrBySelectedCategory, setArrBySelectedCategory] = useState<Meal[]>(
    []
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const allRecipes = await getAllRecipes();
        setRecipes(allRecipes);
      } catch (err) {
        setError("Error loading");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const doesIngredientMatch = (
    ingredient: Ingredient,
    filter: string
  ): boolean => {
    return ingredient.name.toLowerCase().includes(filter.toLowerCase());
  };

  const filterRecipes = (recipes: Recipe[], filters: Filters): Recipe[] => {
    return recipes.filter((recipe) => {
      const ingredients = extractIngredients(recipe);

      const categoryMatch =
        !filters.category ||
        recipe.strCategory
          .toLowerCase()
          .includes(filters.category.toLowerCase());

      const countryMatch =
        !filters.country ||
        recipe.strArea.toLowerCase().includes(filters.country.toLowerCase());

      const ingredientMatch =
        !filters.ingredient ||
        ingredients.some((ingredient) =>
          doesIngredientMatch(ingredient, filters.ingredient!)
        );

      return categoryMatch && countryMatch && ingredientMatch;
    });
  };

  useEffect(() => {
    const result = filterRecipes(recipes, filters);
    setFilteredRecipes(result);
    const mealNames = result.map((recipe) => ({
      id: recipe.idMeal,
      name: recipe.strMeal,
    }));
    result.length !== recipes.length
      ? setArrBySelectedCategory(mealNames)
      : setArrBySelectedCategory([]);
  }, [recipes, filters]);

  useEffect(() => {
    if (country) {
      setFilters({ country: country });
    }
  }, [country]);

  useEffect(() => {
    if (ingredient) {
      setFilters({ ingredient: ingredient });
    }
  }, [country]);

  console.log(country);

  const handleFilterChange = (filter: Filters) => {
    setFilters(filter);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="flex flex-row-reverse">
      <Sidebar categories={arrBySelectedCategory} />
      <div className="px-4 pt-4 flex-1">
        <h1 className="text-2xl font-bold mb-4">
          Recipe List{" "}
          {filters.category ?? filters.country ?? filters.ingredient}
        </h1>

        <div className="flex flex-wrap">
          <FilterInput
            label="Category"
            id="category"
            value={filters.category ?? ""}
            onChange={(value) => handleFilterChange({ category: value })}
          />
          <FilterInput
            label="Country"
            id="country"
            value={filters.country ?? ""}
            onChange={(value) => handleFilterChange({ country: value })}
          />
          <FilterInput
            label="Ingredient"
            id="ingredient"
            value={filters.ingredient ?? ""}
            onChange={(value) => handleFilterChange({ ingredient: value })}
          />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredRecipes.slice(0, visibleCount).map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
        {visibleCount < filteredRecipes.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
