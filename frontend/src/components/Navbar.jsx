import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="Maali Bhaiya Nursery"
    className="h-25 w-auto object-contain"
  />

</Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 hover:scale-105 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              className="hover:text-yellow-300 hover:scale-105 transition"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 hover:scale-105 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 hover:scale-105 transition"
            >
              Contact
            </Link>
          </li>

          {user ? (

  <>

    <li>
      <Link
        to="/my-orders"
        className="hover:text-yellow-300 hover:scale-105 transition"
      >
        My Orders
      </Link>
    </li>

    <li className="bg-green-600 px-4 py-2 rounded-full text-yellow-300 font-semibold shadow-md">
      👋 {user?.user?.name}
    </li>

    <li>
      <button
        onClick={logout}
        className="px-4 py-2 border border-white rounded-lg hover:bg-red-500 hover:border-red-500 transition"
      >
        Logout
      </button>
    </li>

  </>

) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-green-700 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {/* Cart */}
          <li>
            <Link
              to="/cart"
              className="relative hover:text-yellow-300 transition"
            >
              <FaShoppingCart size={24} />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;