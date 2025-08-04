import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories";
import productsData from "../data/products";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

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
        <h2 className="text-2xl w-full sm:text-3xl font-semibold tracking-tight text-center text-[#005a34] !mt-4 !mb-1 relative inline-block !px-6 !py-2 bg-gradient-to-r from-[#e3ffe9] via-[#faf8ff] to-[#e3ffe9] border border-[#b2dfdb] rounded-full shadow-md">
          🌟 Explore Our Categories 🌿
        </h2>

        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategoryClick}
        />

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center text-[#4a006e] bg-gradient-to-r from-[#fdf4ff] via-[#faf8ff] to-[#fdf4ff] border border-[#e0baff] rounded-full !px-6 !py-2 shadow-sm !mt-6 !mb-2">
          ✨ Featured Products ✨
        </h2>

        <p className="text-sm text-gray-500 !mb-2">
          Showing {filteredProducts.length} Product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 !mb-8 !py-4">
          <AnimatePresence>
            {visibleProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProduct(prod)}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 5)}
              className="bg-green-600 hover:bg-green-700 text-white !mb-6 !px-8 !py-3 rounded-md transition"
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
