import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Maali Bhaiya Nursery"
            className="h-12 md:h-14 w-auto object-contain"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold">
              Maali Bhaiya
            </h1>

            <p className="text-xs text-green-100">
              Har Ghar Hariyali 🌱
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">

          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-yellow-300">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to="/my-orders"
                  className="hover:text-yellow-300"
                >
                  Orders
                </Link>
              </li>

              <li className="bg-green-600 px-3 py-1 rounded-full text-yellow-300">
                👋 {user?.user?.name}
              </li>

              <li>
                <button
                  onClick={logout}
                  className="px-3 py-1 border border-white rounded-lg hover:bg-red-500"
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
                  className="px-3 py-1 border border-white rounded-lg hover:bg-white hover:text-green-700"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="bg-white text-green-700 px-3 py-1 rounded-lg font-semibold"
                >
                  Register
                </Link>
              </li>
            </>
          )}

          <li>
            <Link
              to="/cart"
              className="relative"
            >
              <FaShoppingCart size={22} />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 px-6 py-4">

          <div className="flex flex-col gap-4 font-medium">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            {user ? (
              <>
                <Link
                  to="/my-orders"
                  onClick={() => setMenuOpen(false)}
                >
                  My Orders
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
            >
              🛒 Cart ({cartItems.length})
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;