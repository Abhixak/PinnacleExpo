import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories";
import productsData from "../data/products";
import { IoClose } from "react-icons/io5";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState(null); // 🆕 Modal state

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? null : cat);
    setVisibleCount(5);
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((prod) => prod.category === selectedCategory)
    : productsData;

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <div className="bg-[#fff5ff] text-slate-800 !px-4 !py-2">
        <h2 className="text-2xl sm:text-3xl font-bold !mt-10 !mb-4 text-[#005a34] text-center">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 !mb-8 !py-4">
          {visibleProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setSelectedProduct(prod)} // 🆕 Set selected product
              className="cursor-pointer bg-[#e6d8e9] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out !p-4 flex flex-col items-center text-center"
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
              className="bg-green-600 hover:bg-green-700 text-white !px-8 !py-3 !mb-10 rounded-md transition"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* ✅ Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#faf8ff] w-[90%] max-w-md rounded-xl shadow-lg !p-6 relative text-center">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-2xl text-green-700 hover:text-red-500"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-32 h-32 object-cover !mx-auto !mb-4"
            />
            <h3 className="text-xl font-bold text-[#005a34] !mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-slate-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
