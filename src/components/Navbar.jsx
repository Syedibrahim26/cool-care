
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-blue-900">
          CoolCare
        </Link>

        <div className="flex gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>

        </div>

        <Link
          to="/admin/login"
          className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Admin Login
        </Link>

      </div>

    </nav>
  )
}

export default Navbar
