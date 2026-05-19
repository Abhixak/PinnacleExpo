import React, { useState } from "react";
import CategoryGrid from "../Components/CategoryGrid";
import categories from "../data/categories";
import productsData from "../data/products";
import { getCallLink, getWhatsAppLink } from "../utils/contactLinks";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? null : cat);
  };

  const categorySections = categories
    .filter(
      (category) =>
        !selectedCategory || category.name === selectedCategory
    )
    .map((category) => ({
      ...category,
      products: productsData.filter((prod) => prod.category === category.name),
    }));

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

          <div className="!mt-6 ">
            {categorySections.map((category) => (
              <div key={category.name} className="space-y-4">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="!my-4">
                    <h3 className="text-xl font-bold text-[#313268] sm:text-2xl">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base">
                      {category.description}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-[#313268]/15 bg-white !px-3 !py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#313268]">
                    {category.products.length} products
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
                  <AnimatePresence>
                    {category.products.map((prod) => (
                      <motion.div
                        key={prod.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
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
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#313268] sm:text-xs">
                          {prod.category}
                        </p>
                        <p className="!mt-2 text-xs leading-5 text-[#474554] sm:text-sm sm:leading-6">
                          {prod.description}
                        </p>
                        <div
                          className="!mt-4 flex flex-col gap-2 sm:flex-row"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <a
                            href={getWhatsAppLink(prod.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#25D366] !px-4 !py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb85a]"
                          >
                            Enquire
                          </a>
                          <a
                            href={getCallLink()}
                            className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#313268] bg-white !px-4 !py-2.5 text-sm font-semibold text-[#313268] shadow-sm transition hover:bg-slate-50"
                          >
                            Book on Call
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
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
            <p className="!mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#313268] sm:text-xs">
              {selectedProduct.category}
            </p>
            <div className="!mt-5 flex flex-col gap-2 sm:flex-row">
              <a
                href={getWhatsAppLink(selectedProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#25D366] !px-4 !py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb85a]"
              >
                Enquire
              </a>
              <a
                href={getCallLink()}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#313268] bg-white !px-4 !py-3 text-sm font-semibold text-[#313268] shadow-sm transition hover:bg-slate-50"
              >
                Book on Call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
