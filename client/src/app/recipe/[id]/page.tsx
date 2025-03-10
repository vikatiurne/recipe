"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Recipe, Ingredient } from "../../types/recipe";
import { extractIngredients } from "../../utils/extractIngredients";
import { getRecipeById } from "../../utils/api";

interface Props {
  params: { id: string | string[] };
}

const RecipeDetail: React.FC<Props> = () => {
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
          const fetchedRecipe = await getRecipeById(recipeId);
          if (isMounted) {
            setRecipe(fetchedRecipe);
          }
        } catch (err: unknown) {  
          if (isMounted) {  
            if (err instanceof Error) {  
              setError("Error loading recipe: " + err.message);  
            } else {  
              setError("Error loading recipe: An unknown error occurred");  
            }  
          }  
        }   finally {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={recipe.strMealThumb ?? "/placeholder.png"}
            alt={recipe.strMeal}
            className="w-full rounded-lg shadow-md "
            width={500}
            height={500}
            priority 
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2 text-center">
            {recipe.strMeal}
          </h1>
          <Link
            href={`/?country=${recipe.strArea}`}
            className="text-blue-500 hover:underline block mb-4"
          >
            {recipe.strArea} Recipes
          </Link>

          <h2 className="text-2xl font-semibold mb-2 text-center">
            Instructions:
          </h2>
          <p className="text-gray-700 text-xl mb-3">
            {showFullInstructions
              ? recipe.strInstructions
              : `${recipe.strInstructions?.slice(0, 400)}...`}{" "}
            <button
              onClick={toggleInstructions}
              className="text-blue-500 hover:underline "
            >
              {showFullInstructions ? "show in short" : "show more"}
            </button>
          </p>

          <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {ingredients.map((ingredient, index) => (
              <Link
                key={index}
                href={`/?ingredient=${ingredient.name}`}
                className="text-gray-500 hover:underline block mb-2"
              >
                <li>
                  {ingredient.measure} {ingredient.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
