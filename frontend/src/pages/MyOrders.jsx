import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await axios.get(
          "https://maali-bhaiya-nursery-mern.onrender.com/api/orders"
        );

        setOrders(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchOrders();

  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-green-50 p-8">

        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          My Orders 📦
        </h1>

        {orders.length === 0 ? (

          <p className="text-center text-xl text-gray-500">
            No Orders Found
          </p>

        ) : (

          <div className="max-w-4xl mx-auto space-y-4">

            {orders.map((order) => (

              <div
                key={order._id}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h2 className="text-xl font-bold mb-2">
                  Order #{order._id.slice(-6)}
                </h2>

                <p>
                  <strong>Name:</strong> {order.name}
                </p>

                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>

                <p>
                  <strong>Address:</strong> {order.address}
                </p>

                <p>
                  <strong>Total:</strong> ₹{order.totalAmount}
                </p>

                <p className="text-green-600 font-semibold mt-2">
                  ✅ Order Placed
                </p>

              </div>

            ))}

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default MyOrders;