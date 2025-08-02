import React from "react";

const CategoryGrid = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 !py-4">
      {Array.isArray(categories) &&
        categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => onSelect(cat.name)}
            className={`flex flex-col cursor-pointer items-center bg-[#e3e0f3] border-[#00754b] justify-center !p-4 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition duration-300 ${
              selectedCategory === cat.name ? "text-[#00754b]" : "text-[#919191]"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-cover !mb-3"
            />
            <h3 className="text-lg font-medium text-center">{cat.name}</h3>
          </div>
        ))}
    </div>
  );
};

CategoryGrid.defaultProps = {
  categories: [],
  selectedCategory: null,
  onSelect: () => {},
};

export default CategoryGrid;
