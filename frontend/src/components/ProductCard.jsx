import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

 return (
  <Link
    to={`/product/${product._id}`}
    className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 relative"
  >

    {/* Best Seller Badge */}
    <div className="absolute top-3 left-3 z-10 shadow-md">
      <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
        Best Seller
      </span>
    </div>

    {/* Product Image */}
    <div className="overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 sm:h-64 w-full object-cover hover:scale-110 transition duration-500"
      />

    </div>

    {/* Product Details */}
    <div className="p-5">

      <h2 className="text-xl md:text-2xl font-bold text-gray-800">
        {product.name}
      </h2>

      <p className="text-sm text-green-600 font-medium mt-1">
        {product.category}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-2 text-yellow-500">
        ★★★★☆
        <span className="text-gray-500 text-sm ml-2">
          (4.5)
        </span>
      </div>

      {/* Price */}
    <div className="mt-3">

  <div className="flex items-center gap-3">

    <p className="text-green-700 text-2xl font-bold">
      ₹{product.price}
    </p>

    <span className="text-gray-400 line-through">
      ₹{Math.round(product.price * 1.2)}
    </span>

  </div>

  <p className="text-sm text-gray-500 mt-1">
    🚚 Free Delivery Available
  </p>

</div>

      {/* Add To Cart */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
      >
       🛒 Add to Cart
      </button>

    </div>

  </Link>
);
}

export default ProductCard;