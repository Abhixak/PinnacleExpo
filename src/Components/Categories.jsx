import React from 'react';
import riceImg from '../assets/Rice.jpeg';
import engineOilImg from '../assets/EOil.jpeg';
// import spicesImg from '../assets/categories/spices.png';
// import fruitsImg from '../assets/categories/fruits.png';
// import handicraftsImg from '../assets/categories/handicrafts.png';

// Sample category data
const categories = [
  {
    name: 'Rice',
    image: riceImg,
  },
  {
    name: 'Engine Oil',
    image: engineOilImg,
  }
//   {
//     name: 'Spices',
//     image: spicesImg,
//   },
//   {
//     name: 'Fruits',
//     image: fruitsImg,
//   },
//   {
//     name: 'Handicrafts',
//     image: handicraftsImg,
//   },
];

const Categories = () => {
  return (
    <div className="!px-6 !py-10 bg-white text-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold !mb-6 text-[#00754b] text-center">
        Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer items-center justify-center !p-4 border rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-contain !mb-3"
            />
            <h3 className="text-lg font-medium">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
