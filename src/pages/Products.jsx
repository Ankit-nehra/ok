// src/components/ProductsPage.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productsData from '../data/products.json'; // Adjust the path if needed

const ProductsPage = () => {
  // Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 mt-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.Products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"                       // 👈 Scroll animation
            data-aos-delay={index * 100}              // 👈 Staggered delay
            className="bg-white/20 backdrop-blur-md shadow-xl rounded-xl border border-white/30 p-6 transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-700 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
