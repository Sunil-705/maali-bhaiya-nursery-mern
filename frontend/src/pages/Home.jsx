import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-100 min-h-screen flex flex-col justify-center items-center text-center px-6">
        
        <h1 className="text-6xl font-bold text-green-800 mb-6">
          Welcome to Green Thumb Nursery 🌿
        </h1>

        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Discover beautiful indoor and outdoor plants to make
          your home greener and healthier.
        </p>

        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold">
          Shop Now
        </button>
      </section>

      <Footer />
    </>
  );
}

export default Home;