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
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Green Thumb Nursery 🌿
        </h1>

        <ul className="flex items-center gap-6 font-medium">

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
    <li className="text-yellow-300 font-semibold">
      {user.user.name}
    </li>

    <li>
      <button
        onClick={logout}
        className="hover:text-red-300"
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
        className="hover:text-yellow-300"
      >
        Login
      </Link>
    </li>

    <li>
      <Link
        to="/register"
        className="hover:text-yellow-300"
      >
        Register
      </Link>
    </li>
  </>

)}
          <li>
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />

             <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1 rounded-full">
              {cartItems.length}
             </span>
          </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;