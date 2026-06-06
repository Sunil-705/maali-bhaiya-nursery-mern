import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get(
          "https://maali-bhaiya-nursery-mern.onrender.com/api/products"
        );

        setProducts(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProducts();

  }, []);

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `https://maali-bhaiya-nursery-mern.onrender.com/api/products/${id}`
      );

      setProducts(
        products.filter(
          (product) => product._id !== id
        )
      );

      alert("Product Deleted Successfully 🗑️");

    } catch (error) {

      console.log(error);

      alert("Failed to delete product");

    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Admin Products 🌿
      </h1>

      <div className="space-y-4">

        {products.length > 0 ? (

          products.map((product) => (

            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >

              <div>
                <h2 className="font-bold text-xl">
                  {product.name}
                </h2>

                <p className="text-gray-600">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>
              </div>

              <div className="flex gap-2">

                <Link
                  to={`/admin/edit-product/${product._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    deleteProduct(product._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center text-xl text-gray-500">
            No Products Available
          </div>

        )}

      </div>

    </div>
  );
}

export default AdminProducts;