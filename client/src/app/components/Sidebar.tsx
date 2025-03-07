import Link from "next/link";

interface Props {
  categories: string[];
  onFilterChange: (filter: {
    category?: string;
    country?: string;
    ingredient?: string;
  }) => void;
}

const Sidebar: React.FC<Props> = ({ categories, onFilterChange }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-64">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-1">
            <Link
              href={`/?category=${category}`}
              className="text-blue-500 hover:underline block"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
