import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setProduct(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProduct();

  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-green-50 p-10">

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-xl"
          />

          <div>

            <h1 className="text-5xl font-bold text-green-800">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-4">
              Category: {product.category}
            </p>

            <p className="text-3xl font-bold text-green-700 mt-6">
              ₹{product.price}
            </p>

            <p className="mt-6 text-gray-700">
              {product.description}
            </p>

            <p className="mt-6">
              Stock: {product.stock}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg"
            >
              Add To Cart
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;