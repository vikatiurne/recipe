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
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        className="ml-2 mr-3 p-1 border rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default FilterInput;
