import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully 🌿");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-green-50 py-16 px-6">

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-green-700 mb-8">
            Contact Maali Bhaiya Nursery 📞
          </h1>

          <p className="text-center text-gray-600 mb-8">
            We'd love to hear from you. Send us a message and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border p-3 rounded mb-4"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

          <div className="mt-10 grid md:grid-cols-3 gap-4 text-center">

            <p>📧 sunilkumar.dev@gmail.com.com</p>
            <p>📞 +91 95######</p>
            <p className="mt-2">
              📍 Uttar Pradesh, India
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;