import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories";
import productsData from "../data/products";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <section className="!px-4 !py-5 sm:!px-6 sm:!py-10 lg:!px-8">
        <div className="!mx-auto max-w-7xl rounded-[2rem] bg-[#fffade] !px-4 !py-4 text-slate-800 shadow-sm sm:!px-6 sm:!py-6">
          <div className="text-center">
            <h2 className="!mx-auto inline-flex w-fit items-center justify-center rounded-full border border-[#313268] bg-gradient-to-r from-[#fdf4ff] via-[#faf8ff] to-[#fdf4ff] !px-4 !py-2 text-xl font-semibold tracking-tight text-[#313268] shadow-md sm:!px-5 sm:text-3xl">
              Explore Our Categories
            </h2>
          </div>

          <CategoryGrid
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={handleCategoryClick}
          />

          <p className="!mb-2 text-xs text-gray-500 sm:text-sm">
            Showing {filteredProducts.length} Product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 gap-4 !py-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
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
                  className="cursor-pointer rounded-2xl bg-[#faf7ff] !p-3 text-center shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md sm:!p-4"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="!mb-2 h-24 w-full rounded-xl object-cover sm:!mb-3 sm:h-32"
                  />
                  <h4 className="!mb-1 text-sm font-semibold text-[#324b4c] sm:text-md">
                    {prod.name}
                  </h4>
                  <p className="text-xs leading-5 text-[#474554] sm:text-sm sm:leading-6">
                    {prod.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center">
              <button
                onClick={() => setVisibleCount(visibleCount + 5)}
                className="rounded-md bg-[#313268] !px-8 !py-3 text-white transition hover:bg-[#661f21]"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 !px-4 !py-4 sm:items-center">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#faf8ff] !p-4 text-center shadow-lg sm:!p-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 rounded-full bg-white !p-2 text-xl text-green-700 shadow-sm hover:text-red-500"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="!mx-auto !mb-4 h-28 w-28 rounded-xl object-cover sm:h-36 sm:w-36"
            />
            <h3 className="!mb-2 text-lg font-bold text-[#005a34] sm:text-xl">
              {selectedProduct.name}
            </h3>
            <p className="text-xs leading-6 text-slate-700 sm:text-base sm:leading-7">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
