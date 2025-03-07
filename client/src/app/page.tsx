"use client";

import { useState, useEffect } from "react";
import Sidebar from "../app/components/Sidebar";
import RecipeCard from "../app/components/RecipeCard";
import { Recipe, Ingredient } from "../app/types/recipe";
import { getAllRecipes } from "../app/utils/api";

interface Filters {
  category?: string;
  country?: string;
  ingredient?: string;
}

const MainPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

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
        recipe.ingredients?.some((ingredient) =>
          doesIngredientMatch(ingredient, filters.ingredient!)
        );

      return categoryMatch && countryMatch && ingredientMatch;
    });
  };

  useEffect(() => {
    const result = filterRecipes(recipes, filters);
    setFilteredRecipes(result);
  }, [recipes, filters]);

  const handleFilterChange = (filter: Filters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filter }));
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="flex flex-row-reverse">
      <Sidebar
        categories={["Seafood", "Side", "Vegetarian"]}
        onFilterChange={handleFilterChange}
      />
      <div className="p-4 flex-1">
        <h1 className="text-2xl font-bold mb-4">Recipe List</h1>

        <div className="mb-4">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            className="ml-2 p-1 border rounded"
            value={filters.category ?? ""}
            onChange={(e) => handleFilterChange({ category: e.target.value })}
          />

          <label htmlFor="country" className="ml-4">
            Country:
          </label>
          <input
            type="text"
            id="country"
            className="ml-2 p-1 border rounded"
            value={filters.country ?? ""}
            onChange={(e) => handleFilterChange({ country: e.target.value })}
          />

          <label htmlFor="ingredient" className="ml-4">
            Ingredient:
          </label>
          <input
            type="text"
            id="ingredient"
            className="ml-2 p-1 border rounded"
            value={filters.ingredient ?? ""}
            onChange={(e) => handleFilterChange({ ingredient: e.target.value })}
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
