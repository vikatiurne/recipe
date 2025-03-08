import Link from "next/link";
import { Meal } from "../types/recipe";

interface Props {
  categories: Meal[];
}

const Sidebar: React.FC<Props> = ({ categories }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-64">
      <h2 className="text-lg font-semibold mb-2">Recipe list</h2>

      <ul>
        {categories?.map((meal) => (
          <li key={meal.id} className="mb-1">
            <Link
              href={`/recipe/${meal.id}`}
              className={`text-blue-500 hover:underline `}
            >
              {meal.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
