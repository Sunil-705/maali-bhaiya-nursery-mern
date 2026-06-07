import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://maali-bhaiya-nursery-mern.onrender.com/api/auth/register",
        formData
      );

      toast.success(res.data.message);

      navigate("/login");

    }catch (error) {
  console.log("REGISTER ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  toast.error(
    error.response?.data?.message || "Registration Failed"
  );
}
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-green-50">

        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Register
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
            >
              Register
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;