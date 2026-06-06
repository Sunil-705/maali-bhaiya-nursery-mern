import { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";


function Checkout() {

  const navigate = useNavigate();

  const { cartItems, totalPrice } =
  useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const placeOrder = async () => {

  if (
    !formData.name ||
    !formData.address ||
    !formData.phone
  ) {
    toast.error("Please fill all fields");
    return;
  }

  try {

    await axios.post(
      "https://maali-bhaiya-nursery-mern.onrender.com/api/orders",
      {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        items: cartItems,
        totalAmount: totalPrice,
      }
    );

    toast.success("Order Placed Successfully 🌿");

    
    localStorage.removeItem("cartItems");

    setTimeout(() => {
      navigate("/my-orders");
    }, 2000);

  } catch (error) {

    toast.error("Failed to place order");

    console.log(error);

  }
};

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-green-50 py-12 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="bg-green-700 text-white p-6">

            <h1 className="text-4xl font-bold">
              Checkout 🌿
            </h1>

            <p className="mt-2">
              Complete your order details
            </p>

          </div>

          <div className="p-8">

            <div className="grid md:grid-cols-2 gap-8">

              {/* Customer Details */}
              <div>

                <h2 className="text-2xl font-bold text-green-700 mb-6">
                  Customer Details
                </h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg mb-4"
                />

                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg mb-4"
                  rows="4"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              {/* Order Summary */}
              <div>

                <h2 className="text-2xl font-bold text-green-700 mb-6">
                  Order Summary
                </h2>

                <div className="bg-green-50 p-6 rounded-xl">

                  <p className="mb-3">
                    🌱 Premium Quality Plants
                  </p>

                  <p className="mb-3">
                    🚚 Free Delivery
                  </p>

                  <p className="mb-3">
                    💳 Cash On Delivery Available
                  </p>

                  <p>
                    ✅ Secure Checkout
                  </p>

                </div>

              </div>

            </div>

            <button
              onClick={placeOrder}
              className="w-full mt-8 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Place Order 🌿
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Checkout;