
function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Company Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            CoolCare
          </h1>
          <p className="text-xs text-gray-500">
            Your Comfort, Our Priority
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-700 font-medium">

          <a href="/" className="hover:text-blue-600">
            Home
          </a>

          <a href="/about" className="hover:text-blue-600">
            About
          </a>

          <a href="/services" className="hover:text-blue-600">
            Services
          </a>

          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>

        </div>

        {/* Admin Button */}
        <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Admin Login
        </button>

      </div>

    </nav>
  )
}

export default Navbar
