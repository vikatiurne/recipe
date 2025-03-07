import React from "react";

interface FilterInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 flex items-center flex-wrap gap-3 max-w-80 w-full justify-end">
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        className="ml-2  p-1 border rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
