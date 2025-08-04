import React from "react";

const CategoryGrid = ({ categories, selectedCategory, onSelect }) => {
  const categoryCount = categories.length;

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
    <>
      <div className={`grid gap-4 !py-4 ${getResponsiveCols()}`}>
        {Array.isArray(categories) &&
          categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onSelect(cat.name)}
              className={`flex flex-col cursor-pointer items-center bg-[#e3e0f3] border-[#00754b] justify-between rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition duration-300 !px-4 !pt-3 !pb-6 min-w-[150px] h-[220px] ${
                selectedCategory === cat.name
                  ? "text-[#00754b] border-2"
                  : "text-[#919191] border-0"
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
      {!selectedCategory && (
        <div className="!mb-4 w-fit mx-auto !px-4 !py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium shadow-sm border border-yellow-300 text-center animate-pulse">
          Click on any category to change the products below
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
