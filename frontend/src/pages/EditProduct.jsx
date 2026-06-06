import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: "",
  });

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setFormData(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProduct();

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData
      );

      alert("Product Updated Successfully ✏️");

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

      alert("Failed to update product");

    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center p-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
      >

        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Edit Product ✏️
        </h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg"
        >
          Update Product
        </button>

      </form>

    </div>
  );
}

export default EditProduct;