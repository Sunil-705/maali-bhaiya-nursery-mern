import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-green-50 min-h-screen py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
            About Maali Bhaiya Nursery 🌿
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 text-lg leading-8">
            Maali Bhaiya Nursery is an online plant and gardening platform that helps customers buy healthy plants, fertilizers and gardening services from the comfort of their homes.
            </p>

          </div>

          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl mb-3">🌱</h3>
              <h3 className="font-bold text-xl mb-2">
                Healthy Plants
              </h3>
              <p className="text-gray-600">
                Carefully nurtured and quality-tested plants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl mb-3">🚚</h3>
              <h3 className="font-bold text-xl mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Safe and quick delivery to your doorstep.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl mb-3">💰</h3>
              <h3 className="font-bold text-xl mb-2">
                Affordable Prices
              </h3>
              <p className="text-gray-600">
                Premium plants at budget-friendly prices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl mb-3">💚</h3>
              <h3 className="font-bold text-xl mb-2">
                Customer Support
              </h3>
              <p className="text-gray-600">
                Dedicated support for all your gardening needs.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;