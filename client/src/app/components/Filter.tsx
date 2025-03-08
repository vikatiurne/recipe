import React from "react";
import { Filters } from "../types/recipe";

interface FilterProps {
  filters: Filters;
  onFilterChange: (id: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        value={filters.country}
        onChange={(e) => onFilterChange("country", e.target.value)}
      />

      <label htmlFor="ingredient">Ingredient:</label>
      <input
        type="text"
        id="ingredient"
        value={filters.ingredient}
        onChange={(e) => onFilterChange("ingredient", e.target.value)}
      />
    </div>
  );
};

export default Filter;
