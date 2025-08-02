import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories";
import productsData from "../data/products";
import Header from "../Components/Header";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? null : cat);
    setVisibleCount(15); // reset count on new selection
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((prod) => prod.category === selectedCategory)
    : productsData;

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className=" bg-[#fff5ff] text-slate-800 !px-4 !py-2">
      <Header />

      <h2 className="text-2xl sm:text-3xl font-bold !my-8 text-[#005a34] text-center">
        Categories
      </h2>

      <CategoryGrid
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={handleCategoryClick}
      />
      <h3 className="text-2xl !m-8 text-center text-[#005a34] font-semibold">
        Featured Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 !py-4">
        {visibleProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-[#e6d8e9] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out !p-4 flex flex-col items-center text-center"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-24 h-24 object-cover !mb-3"
            />
            <h4 className="text-md font-semibold text-[#43655a] !mb-1">
              {prod.name}
            </h4>
            <p className="text-sm text-[#324b4c]/70">{prod.description}</p>
          </div>
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center !mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 5)}
            className="bg-green-600 hover:bg-green-700 text-white !px-6 !py-2 !mb-6 rounded-md transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
