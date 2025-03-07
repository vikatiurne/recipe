"use client";

import { useState, useEffect } from "react";
import Sidebar from "../app/components/Sidebar";
import RecipeCard from "../app/components/RecipeCard";
import { Recipe } from "../app/types/recipe";
import { getAllRecipes } from "../app/utils/api";

const MainPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    category?: string;
    country?: string;
    ingredient?: string;
  }>({});
  const [visibleCount, setVisibleCount] = useState<number>(9);

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

  const handleFilterChange = (filter: {
    category?: string;
    country?: string;
    ingredient?: string;
  }) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filter }));
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (!filters.category || recipe.strCategory === filters.category) &&
      (!filters.country || recipe.strArea === filters.country) &&
      (!filters.ingredient ||
        recipe.ingredients.some(
          (ingredient) => ingredient.name === filters.ingredient
        ))
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="flex">
      <Sidebar
        categories={["Breakfasts", "Dinners", "Desserts"]} 
        onFilterChange={handleFilterChange}
      />
      <div className="p-4 flex-1">
        <h1 className="text-2xl font-bold mb-4">Recipe List</h1> 
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