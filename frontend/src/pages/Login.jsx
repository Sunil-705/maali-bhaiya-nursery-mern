import { useState, useContext } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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
        "http://localhost:5000/api/auth/login",
        formData
      );

      login(res.data);

      toast.success("Login Successful 🌿");

      navigate("/");

    } catch (error) {

      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-green-50">

        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Login
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
              Login
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;