import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-green-50 p-6">

        <h1 className="text-5xl font-bold text-center text-green-800 mb-10">
          Your Cart 🛒
        </h1>

        {cartItems.length === 0 ? (

          <div className="text-center text-2xl text-gray-500">
            Cart is empty
          </div>

        ) : (

          <div className="max-w-4xl mx-auto">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between mb-5"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span className="text-xl font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="text-right mt-10">

              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Total: ₹{totalPrice}
              </h2>

              <Link
                to="/checkout"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Proceed To Checkout 🌿
              </Link>

            </div>

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;