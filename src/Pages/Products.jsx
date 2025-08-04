import React from "react";
import { useLocation, Link } from "react-router-dom";
import categories from "../data/categories.js";
import products from "../data/products.js";

const slugToName = (slug) => slug.replace(/-/g, " ");

const Products = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedCategory = slugToName(query.get("item") || "indian rice");

  const category = categories.find(
    (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
  );

  if (!category) {
    return (
      <section className="min-h-screen bg-white text-center text-red-600 !p-10">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <p className="!mt-4 text-gray-600">
          The selected category does not exist. Please check the URL or select a
          category from the menu.
        </p>
      </section>
    );
  }

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.name.toLowerCase()
  );

  const recommendedCategories = categories.filter(
    (cat) => cat.name.toLowerCase() !== category.name.toLowerCase()
  );

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      id="products"
      className="min-h-screen bg-white text-slate-800 !px-6 !py-12 max-w-7xl !mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-[#005a34] text-center !mb-8">
        {category?.name || "Our Products"}
      </h1>

      {/* Category Section */}
      <div className="bg-gray-50 rounded-2xl shadow-md flex flex-col sm:flex-row gap-6 items-center !p-6 !mb-10">
        <img
          src={category?.image}
          alt={category?.name}
          className="w-full sm:w-64 h-auto rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-[#005a34] !mb-2">
            {category?.name}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl">
            {category?.description}
          </p>
        </div>
      </div>

      {/* Product List */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#005a34] text-center bg-[#e8f5ec] shadow-sm rounded-full !px-6 !py-3 tracking-wide border border-[#b6dec6] !mb-6">
        🌾 Products under this Category
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name || "Product image"}
              className="w-full h-48 object-cover"
            />
            <div className="!p-4">
              <h3 className="text-lg font-bold text-[#005a34]">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 !mt-1">
                {product.description || "No description available."}
              </p>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No products available for this category.
          </p>
        )}
      </div>

      {/* Lubricants Brochure */}
      {selectedCategory.trim().toLowerCase() === "engine lubricants" && (
        <div className="text-center !mt-10">
          <a
            href="/brochures/Lubricants.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#005a34] text-white font-medium !px-6 !py-3 rounded-xl shadow hover:bg-[#00794e] transition"
          >
            📄 Download Lubricants Brochure
          </a>
        </div>
      )}

      {/* Recommended Categories */}
      <div className="!mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#005a34] bg-[#f1f8f5] border border-[#c9e7da] rounded-full !px-6 !py-3 shadow-sm tracking-wide !mb-6">
          🌟 Recommended Categories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCategories.map((rec) => (
            <Link
              key={rec.name}
              to={`/products?item=${slugify(rec.name)}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gray-50 border border-gray-100 rounded-xl shadow hover:shadow-md transition !p-4 flex flex-col items-center text-center"
            >
              <img
                src={rec.image}
                alt={rec.name}
                className="w-full h-40 object-cover rounded !mb-4"
              />
              <h3 className="text-lg font-semibold text-[#005a34]">
                {rec.name}
              </h3>
              <p className="text-sm text-gray-600 !mt-1">
                {rec.description.slice(0, 80)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
