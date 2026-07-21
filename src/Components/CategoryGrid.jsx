import React from "react";

const CategoryGrid = ({ categories, selectedCategory, onSelect }) => {
  return (
    <>
      {/* {!selectedCategory && (
        <div className="!mb-4 w-full rounded-full border border-yellow-300 bg-yellow-100 !px-4 !py-2 text-center font-medium text-yellow-800 shadow-sm sm:w-fit">
          Click on any category to filter the products below.
        </div>
      )} */}
      <div className="grid grid-cols-2 gap-2 !py-4 lg:grid-cols-4 sm:gap-4">
        {Array.isArray(categories) &&
          categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onSelect(cat.name)}
              className={`flex cursor-pointer flex-col items-center justify-between rounded-2xl transition duration-300 hover:scale-[1.02] hover:bg-white/30 hover:shadow-md !py-3 sm:!py-5 ${
                selectedCategory === cat.name
                  ? "text-[#00754b] border-3 bg-[#00754b]/10"
                  : "text-[#919191] "
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="!mb-3 h-26 w-46 object-cover sm:h-34 border border-gray-500 sm:w-56 lg:h-30 lg:w-62 rounded-full"
              />
              <h3 className="text-center text-sm font-bold text-[#324b4c] sm:text-lg">
                {cat.name}
              </h3>
              {/* <p className="!mt-1 text-center text-xs leading-5 text-[#474554] sm:text-sm sm:leading-6">
                {cat.description}
              </p> */}
            </div>
          ))}
      </div>
    </>
  );
};

CategoryGrid.defaultProps = {
  categories: [],
  selectedCategory: null,
  onSelect: () => {},
};

export default CategoryGrid;
