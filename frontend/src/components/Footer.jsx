import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3">
            🌿Maali Bhaiya Nursery🌿
          </h2>

          <p className="text-gray-400">
            Bringing nature closer to every home with healthy,
            beautiful, and affordable plants.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">

            <li>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:text-green-400">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-green-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Contact
          </h2>

          <p className="text-gray-400">
            📧 support@greenthumbnursery.com
          </p>

          <p className="text-gray-400 mt-2">
            📞 +91 95XXXXXX
          </p>

          <p className="text-gray-400 mt-2">
            📍 India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center">

        <p className="text-gray-400">
          © 2026 Maali Bhaiya Nursery. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;