import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

function Shop() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="bg-green-50 min-h-screen py-12 px-6">

        <h1 className="text-5xl font-bold text-center text-green-800 mb-10">
          Shop Plants 🌿
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-3 rounded-lg border w-full md:w-96"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-lg border"
          >
            <option>All</option>
            <option>Indoor</option>
            <option>Flower</option>
            <option>Medicinal</option>
          </select>

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
             <ProductCard
              key={product.id}
              product={product}
            />
        ))}

          </div>

        ) : (

          <div className="text-center text-2xl text-gray-500 mt-20">
            No plants found 🌱
          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default Shop;