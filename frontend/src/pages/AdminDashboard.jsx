import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/products"
        );

        setTotalProducts(res.data.length);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProducts();

  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-10">
        Maali Bhaiya Admin Dashboard 🌿
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          to="/admin/add-product"
          className="bg-white p-8 rounded-xl shadow text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold text-green-700">
            Add Product
          </h2>

          <p className="text-gray-500 mt-2">
            Create a new product
          </p>
        </Link>

        <Link
          to="/admin/products"
          className="bg-white p-8 rounded-xl shadow text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold text-blue-700">
            Manage Products
          </h2>

          <p className="text-gray-500 mt-2">
            Edit & Delete Products
          </p>
        </Link>

        <Link to="/admin/orders"className="bg-white p-8 rounded-xl shadow text-center hover:shadow-lg">
          <h2 className="text-2xl font-bold text-orange-700">
             Orders
          </h2>
          </Link>

        <div className="bg-white p-8 rounded-xl shadow text-center">

          <h2 className="text-2xl font-bold text-purple-700">
            Total Products
          </h2>

          <p className="text-5xl font-bold mt-4 text-gray-800">
            {totalProducts}
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;