import { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/orders"
        );

        setOrders(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchOrders();

  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Orders Management 📦
      </h1>

      {orders.length === 0 ? (

        <p className="text-xl text-gray-500">
          No Orders Found
        </p>

      ) : (

        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="font-bold text-2xl text-green-700">
                  Order #{order._id.slice(-6)}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  ✅ {order.status}
                </span>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>

                  <p className="mb-2">
                    <strong>Customer:</strong> {order.name}
                  </p>

                  <p className="mb-2">
                    <strong>Phone:</strong> {order.phone}
                  </p>

                  <p className="mb-2">
                    <strong>Address:</strong> {order.address}
                  </p>

                </div>

                <div>

                  <p className="mb-2">
                    <strong>Total Amount:</strong> ₹{order.totalAmount}
                  </p>

                  <p className="mb-2">
                    <strong>Items:</strong> {order.items.length}
                  </p>

                  <p className="mb-2">
                    <strong>Date:</strong>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AdminOrders;