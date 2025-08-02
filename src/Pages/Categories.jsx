import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories.js";
import productsData from "../data/products.js";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? null : cat);
    setVisibleCount(15);
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((prod) => prod.category === selectedCategory)
    : productsData;

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-white text-slate-800 !p-6 bg-[#ffe694]">
      <h2 className="text-2xl sm:text-3xl font-bold  text-[#00754b] text-center">
        Categories
      </h2>
      {/* Category Section */}
      <CategoryGrid
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={handleCategoryClick}
      />

      {/* Products Section */}
      <div className="!p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#00754b] text-center !mb-4">
          Featured Products
        </h2>
        <hr className="!mb-6 border-[#00754b]" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleProducts.map((prod) => (
            <div
              key={prod.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition !p-4 flex flex-col items-center text-center"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-24 h-24 object-cover !mb-3"
              />
              <h4 className="text-md font-semibold !mb-1">{prod.name}</h4>
              <p className="text-sm text-gray-600">{prod.description}</p>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center !mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 10)}
            className="bg-green-600 hover:bg-green-700 text-white !px-6 !py-2 rounded-md transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
