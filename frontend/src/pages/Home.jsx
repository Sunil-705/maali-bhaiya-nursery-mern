import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [featuredPlants, setFeaturedPlants] = useState([]);

  useEffect(() => {

    const fetchPlants = async () => {

      try {

        const res = await axios.get(
          "https://maali-bhaiya-nursery-mern.onrender.com/api/products"
        );

        setFeaturedPlants(
          res.data.slice(0, 3)
        );

      } catch (error) {

        console.log(error);

      }
    };

    fetchPlants();

  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-300 py-16 lg:py-20 flex items-center px-6">

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
        Bring Nature Into Your Home 🌿
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
        Explore premium indoor and outdoor plants
        carefully selected to make your home healthier,
        greener and more beautiful.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">

        <Link
          to="/shop"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
        >
          Shop Now
        </Link>

        <Link
          to="/about"
          className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-700 hover:text-white transition"
        >
          Learn More
        </Link>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow">
    <h3 className="font-bold text-green-700">
      👨‍🌾 Gardening
    </h3>
    <p className="text-sm text-gray-700">
      Expert gardening services
    </p>
  </div>

  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow">
    <h3 className="font-bold text-green-700">
      🌾 Fertilizers
    </h3>
    <p className="text-sm text-gray-700">
      Organic plant nutrition
    </p>
  </div>

  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow">
    <h3 className="font-bold text-green-700">
      🚚 Delivery
    </h3>
    <p className="text-sm text-gray-700">
      Fast home delivery
    </p>
  </div>

  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow">
    <h3 className="font-bold text-green-700">
      🌱 Plant Care
    </h3>
    <p className="text-sm text-gray-700">
      Complete maintenance support
    </p>
  </div>

</div>

    </div>

    {/* Right Side */}
    <div>

      <img
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900"
        alt="Plant"
       className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />

    </div>

  </div>

</section>
      

      {/* Featured Plants */}
      <section className="py-20 bg-white">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          🌟 Best Selling Plants
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

  {featuredPlants.length === 0 ? (

    <p className="text-center text-gray-500 col-span-full">
      Loading featured plants...
    </p>

  ) : (

    featuredPlants.map((plant) => (
      <ProductCard
        key={plant._id}
        product={plant}
      />
    ))

  )}

</div>

      </section>

      {/* Seasonal Collection */}
      <section className="bg-green-700 text-white py-16">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-4">
            Summer Collection ☀️
          </h2>

          <p className="text-xl mb-6">
            Explore our handpicked seasonal plants and
            make your garden bloom this season.
          </p>

          <Link
            to="/shop"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-bold"
          >
            Explore Collection
          </Link>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Why Choose Us?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-4">
              🌱 Healthy Plants
            </h3>

            <p>
              Carefully nurtured plants delivered fresh to your home.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-4">
              🚚 Fast Delivery
            </h3>

            <p>
              Safe and quick delivery across multiple locations.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-4">
              💚 Affordable Prices
            </h3>

            <p>
              Premium quality plants at budget-friendly prices.
            </p>
          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-green-700">
              1000+
            </h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-green-700">
              150+
            </h2>
            <p>Plant Varieties</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-green-700">
              24/7
            </h2>
            <p>Support</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-green-700">
              4.9★
            </h2>
            <p>Customer Rating</p>
          </div>

        </div>

      </section>
      

      <Footer />
    </>
  );
}

export default Home;