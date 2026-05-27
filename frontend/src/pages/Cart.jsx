import { useContext } from "react";

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
                key={item.id}
                className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between mb-5"
              >

                <div>
                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span className="text-xl">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="text-right mt-10">

              <h2 className="text-3xl font-bold text-green-800">
                Total: ₹{totalPrice}
              </h2>

            </div>

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;