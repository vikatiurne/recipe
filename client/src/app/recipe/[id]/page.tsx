"use client";

import Link from "next/link";
import { Recipe, Ingredient } from "../../types/recipe";
import { extractIngredients } from "../../utils/extractIngredients";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getRecipeById } from "../../utils/api";

interface Props {
  params: { id: string | string[] };
}

const RecipeDetail: React.FC<Props> = ({ params }) => {
  const { id } = useParams();
  const recipeId = Array.isArray(id) ? id[0] : id;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const ingredients: Ingredient[] = recipe ? extractIngredients(recipe) : [];

  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowFullInstructions(!showFullInstructions);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchRecipe = async () => {
      if (recipeId) {
        try {
          console.log(`Fetching recipe with ID: ${recipeId}`);
          const fetchedRecipe = await getRecipeById(recipeId);
          console.log("Fetched recipe:", fetchedRecipe);
          if (isMounted) {
            setRecipe(fetchedRecipe);
          }
        } catch (err) {
          console.error(err);
          if (isMounted) {
            setError("Error loading recipe");
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      } else {
        setError("ID is undefined");
        setLoading(false);
      }
    };

    fetchRecipe();

    return () => {
      isMounted = false;
    };
  }, [recipeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={recipe.strMealThumb ?? "/placeholder.png"}
            alt={recipe.strMeal}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{recipe.strMeal}</h1>
          <Link
            href={`/?country=${recipe.strArea}`}
            className="text-blue-500 hover:underline block mb-4"
          >
            {recipe.strArea} Recipes
          </Link>

          <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
          <p className="text-gray-700">
            {showFullInstructions
              ? recipe.strInstructions
              : `${recipe.strInstructions?.slice(0, 100)}...`}{" "}
          </p>
          <button
            onClick={toggleInstructions}
            className="text-blue-500 hover:underline mt-2"
          >
            {showFullInstructions ? "show in short" : "show more"}
          </button>

          <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient.measure} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
