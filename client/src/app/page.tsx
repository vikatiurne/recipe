"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "../app/components/Sidebar";
import RecipeCard from "../app/components/RecipeCard";
import { Recipe, Meal } from "../app/types/recipe";
import {
  getAllRecipes,
  getRecipesByCategory,
  getRecipesByCountry,
  getRecipesByIngredient,
} from "../app/utils/api";

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
  const [arrBySelectedCategory, setArrBySelectedCategory] = useState<Meal[]>(
    []
  );
  console.log(Object.keys(filters), Object.values(filters)[0]);
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);

      try {
        let allRecipes;
        let mealNames;

        if (Object.keys(filters).length === 0) {
          allRecipes = await getAllRecipes();
          setArrBySelectedCategory([]);
        } else {
          const selectedFilter = Object.keys(filters)[0];
          const filterKeyword = Object.values(filters)[0];

          console.log(`Ключ: ${selectedFilter}, Значение: ${filterKeyword}`);

          switch (selectedFilter) {
            case "category":
              allRecipes = await getRecipesByCategory(filterKeyword);
              break;
            case "country":
              allRecipes = await getRecipesByCountry(filterKeyword);
              break;
            case "ingredient":
              allRecipes = await getRecipesByIngredient(filterKeyword);
              break;
            default:
              allRecipes = await getAllRecipes();
              break;
          }

          mealNames = allRecipes?.map((recipe) => ({
            id: recipe.idMeal,
            name: recipe.strMeal,
          }));
          Object.values(filters)[0] === ""
            ? setArrBySelectedCategory([])
            : setArrBySelectedCategory(mealNames);
        }

        setRecipes(allRecipes ?? []);
      } catch (error) {
        setError("Error loading");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [filters]);

  console.log(recipes);

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
          {recipes.length !== 0 ? (
            recipes
              .slice(0, visibleCount)
              .map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))
          ) : (
            <p>recipes not found</p>
          )}
        </div>
        {visibleCount < recipes.length && (
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
