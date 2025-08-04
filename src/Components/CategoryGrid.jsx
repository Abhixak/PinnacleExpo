import React from "react";

const CategoryGrid = ({ categories, selectedCategory, onSelect }) => {
  const categoryCount = categories.length;

  // Generate responsive column classes based on available category count
  const getResponsiveCols = () => {
    if (categoryCount === 1) return "grid-cols-1";
    if (categoryCount === 2) return "grid-cols-2";
    if (categoryCount === 3) return "grid-cols-2 sm:grid-cols-3";
    if (categoryCount === 4) return "grid-cols-2 sm:grid-cols-2 md:grid-cols-4";
    if (categoryCount === 5)
      return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5";
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5";
  };

  return (
    <div className={`grid gap-4 !py-4 ${getResponsiveCols()}`}>
      {Array.isArray(categories) &&
        categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => onSelect(cat.name)}
            className={`flex flex-col cursor-pointer items-center bg-[#e3e0f3] border-[#00754b] justify-between rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition duration-300 !px-4 !pt-3 !pb-6 min-w-[150px] h-[220px] ${
              selectedCategory === cat.name
                ? "text-[#00754b]"
                : "text-[#919191]"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-cover !mb-3"
            />
            <h3 className="text-lg font-medium text-center">{cat.name}</h3>
            <p className="text-sm !mt-1 text-center">{cat.description}</p>
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
