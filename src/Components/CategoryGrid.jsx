import React from "react";

const CategoryGrid = ({ categories, selectedCategory, onSelect }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 !py-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-4">
        {Array.isArray(categories) &&
          categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onSelect(cat.name)}
              className={`flex cursor-pointer flex-col items-center justify-between rounded-2xl border bg-[#faf7ff] shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md !px-3 !py-3 sm:!px-5 sm:!py-5 ${
                selectedCategory === cat.name
                  ? "text-[#00754b] border-3"
                  : "text-[#919191] border-1"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="!mb-3 h-16 w-16 object-cover sm:h-24 sm:w-24"
              />
              <h3 className="text-center text-sm font-medium text-[#324b4c] sm:text-lg">
                {cat.name}
              </h3>
              <p className="!mt-1 text-center text-xs leading-5 text-[#474554] sm:text-sm sm:leading-6">
                {cat.description}
              </p>
            </div>
          ))}
      </div>
      {!selectedCategory && (
        <div className="!mb-4 w-full rounded-full border border-yellow-300 bg-yellow-100 !px-4 !py-2 text-center font-medium text-yellow-800 shadow-sm sm:w-fit">
          Click on any category to filter the products below.
        </div>
      )}
    </>
  );
};

CategoryGrid.defaultProps = {
  categories: [],
  selectedCategory: null,
  onSelect: () => {},
};

export default CategoryGrid;
