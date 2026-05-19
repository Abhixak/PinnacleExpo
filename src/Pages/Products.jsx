import React from "react";
import { useLocation, Link } from "react-router-dom";
import categories from "../data/categories.js";
import products from "../data/products.js";
import { cloudinaryAssets } from "../data/cloudinaryAssets";
import { getCallLink, getWhatsAppLink } from "../utils/contactLinks";

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
      <section className="min-h-screen bg-white !px-4 !py-10 text-center text-red-600 sm:!px-6 lg:!px-8">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <p className="!mt-4 text-gray-600">
          The selected category does not exist. Please check the URL or select
          a category from the menu.
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
    <section id="products" className="min-h-screen bg-white text-slate-800">
      <div className="!mx-auto max-w-7xl !px-4 !py-6 sm:!px-6 sm:!py-10 lg:!px-8">
        <h1 className="!mb-5 text-center text-2xl font-bold text-[#005a34] sm:text-4xl">
          {category?.name || "Our Products"}
        </h1>

        <div className="!mb-8 flex flex-col gap-5 overflow-hidden rounded-3xl bg-gray-50 shadow-md lg:flex-row lg:items-center !p-4 sm:!p-6">
          <img
            src={category?.image}
            alt={category?.name}
            className="h-44 w-full rounded-2xl object-cover shadow-md sm:h-64 lg:h-80 lg:w-[28rem]"
          />
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#005a34] sm:text-3xl">
              {category?.name}
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:leading-7 sm:text-base">
              {category?.description}
            </p>
          </div>
        </div>

        <h2 className="!mb-5 rounded-full border border-[#b6dec6] bg-[#e8f5ec] !px-5 !py-3 text-center text-xl font-bold tracking-wide text-[#005a34] shadow-sm sm:text-3xl">
          Products under this Category
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name || "Product image"}
                className="h-40 w-full object-cover sm:h-44 lg:h-52"
              />
              <div className="!p-4 sm:!p-5">
                <h3 className="text-base font-bold text-[#005a34] sm:text-xl">
                  {product.name}
                </h3>
                <p className="!mt-1 text-sm leading-5 text-gray-600 sm:leading-6">
                  {product.description || "No description available."}
                </p>
                <div className="!mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={getWhatsAppLink(product.name)}
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
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products available for this category.
            </p>
          )}
        </div>

        {selectedCategory.trim().toLowerCase() === "engine lubricants" && (
          <div className="!mt-8 text-center">
            <a
              href={cloudinaryAssets.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#005a34] !px-6 !py-3 font-medium text-white shadow transition hover:bg-[#00794e] sm:w-auto"
            >
              📄 Download Lubricants Brochure
            </a>
          </div>
        )}

        <div className="!mt-12">
          <h2 className="!mb-5 rounded-full border border-[#c9e7da] bg-[#f1f8f5] !px-5 !py-3 text-center text-xl font-semibold tracking-wide text-[#005a34] shadow-sm sm:text-3xl">
            Recommended Categories
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {recommendedCategories.map((rec) => (
              <Link
                key={rec.name}
                to={`/products?item=${slugify(rec.name)}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 text-center shadow-sm transition hover:shadow-md"
              >
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="h-36 w-full object-cover sm:h-40"
                />
                <div className="!p-4 sm:!p-5">
                  <h3 className="text-base font-semibold text-[#005a34] sm:text-lg">
                    {rec.name}
                  </h3>
                  <p className="!mt-1 text-sm leading-5 text-gray-600 sm:leading-6">
                    {rec.description.slice(0, 80)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
