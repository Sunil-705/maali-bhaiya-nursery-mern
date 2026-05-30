import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
   <Link to={`/product/${product._id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-green-700 text-xl font-bold mt-2">
          ₹{product.price}
        </p>

        <button
          onClick={(e) => {e.preventDefault(); 
            addToCart(product);
          }}
          className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg"
        >
          Add to Cart
        </button>

      </div>
    </Link>
  );
}

export default ProductCard;