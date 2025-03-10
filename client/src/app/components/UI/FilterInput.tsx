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
    <div className="mb-4 p-1 flex items-center justify-center flex-wrap gap-3 max-w-80 w-full justify-en bg-amber-100  rounded-2xl">
      <label className="font-bold" htmlFor={id}>
        {label}:
      </label>
      <input
        type="text"
        id={id}
        className="p-1  border-b border-black focus:outline-none rounded-none"
        placeholder="type a text...."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
