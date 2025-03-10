import { Recipe } from "../types/recipe";
import RecipeCard from "./RecipeCard";

const RecipeList: React.FC<{
  recipes: Recipe[];
  visibleCount: number;
  handleShowMore: () => void;
  loading: boolean;
  error: string | null;
}> = ({ recipes, visibleCount, handleShowMore, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.length !== 0 ? (
          recipes
            .slice(0, visibleCount)
            .map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        ) : (
          <p className="font-bold text-xl text-center mt-20 col-span-3">
            Recipes not found
          </p>
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
    </>
  );
};

export default RecipeList;
