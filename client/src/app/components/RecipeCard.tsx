import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link
      href={`/recipe/${recipe.idMeal}`}
      className="block rounded-lg shadow-md overflow-hidden"
    >
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-60 object-contain"
        width={500}
        height={500}
        priority
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;
