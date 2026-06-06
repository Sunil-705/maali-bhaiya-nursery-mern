import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyOrders() {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

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
                key={order.id}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h2 className="text-xl font-bold mb-2">
                  Order #{order.id}
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
                  <strong>Date:</strong> {order.date}
                </p>

                <p className="text-green-600 font-semibold mt-2">
                  ✅ {order.status}
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