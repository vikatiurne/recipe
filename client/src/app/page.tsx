"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import FilterInput from "./components/UI/FilterInput";
import RecipeList from "./components/RecipeList";
import Sidebar from "../app/components/Sidebar";

import { Recipe, Meal, Filters } from "../app/types/recipe";

import {
  getAllRecipes,
  getRecipesByCategory,
  getRecipesByCountry,
  getRecipesByIngredient,
} from "../app/utils/api";

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
  const [initialLoad, setInitialLoad] = useState<boolean>(false);

  useEffect(() => {
    if (country) {
      setFilters({ country: country });
      setInitialLoad(true);
    } else if (ingredient) {
      setFilters({ ingredient: ingredient });
      setInitialLoad(true);
    } else {
      setInitialLoad(true);
    }
  }, [country, ingredient]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);

      try {
        let allRecipes;

        if (
          Object.values(filters)[0] === "" ||
          Object.keys(filters).length === 0
        ) {
          allRecipes = await getAllRecipes();
          setArrBySelectedCategory([]);
        } else {
          const selectedFilter = Object.keys(filters)[0];
          const filterKeyword = Object.values(filters)[0];

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
        }

        const mealNames = allRecipes?.map((recipe) => ({
          id: recipe.idMeal,
          name: recipe.strMeal,
        }));

        if (
          Object.values(filters)[0] === "" ||
          Object.keys(filters).length === 0
        ) {
          setArrBySelectedCategory([]);
        } else {
          setArrBySelectedCategory(mealNames);
        }

        setRecipes(allRecipes ?? []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError("Error loading: " + err.message);
        } else {
          setError("Error loading recipe: An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (initialLoad) {
      fetchRecipes();
    }
  }, [filters, initialLoad]);

  const handleFilterChange = (filter: Filters) => {
    setFilters(filter);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="flex flex-row-reverse">
      {recipes.length > 0 && (
        <Sidebar
          categories={arrBySelectedCategory}
          filter={Object.values(filters)[0]}
        />
      )}
      <div className="px-4 pt-4 flex-1">
        <h1 className="text-2xl text-center font-bold mb-10 uppercase">
          Recipe List{" "}
          {filters.category ?? filters.country ?? filters.ingredient}
        </h1>

        <div className="flex flex-wrap justify-center mb-5 gap-4">
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

        <RecipeList
          recipes={recipes}
          visibleCount={visibleCount}
          handleShowMore={handleShowMore}
          loading={loading}
          error={error}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default MainPage;
