import React from "react";

const DynamicField = ({
  name = "Field",
  index = 1,
  currentValue,
  setInput,
  remove,
}) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor={`ingredient-${index}`}
        className="block text-sm font-medium text-gray-700"
      >
        {`${name} - ${index}`}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm relative">
        <input
          onChange={setInput}
          value={currentValue}
          type="text"
          name={`${name}-${index}`}
          id={`${name}-${index}`}
          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button onClick={remove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicField;
