import Navbar from "../components/Navbar"

function AdminLogin() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">

        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold text-center">
            Admin Login
          </h1>

          <p className="text-gray-500 text-center mt-3">
            CoolCare Management Portal
          </p>

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-lg mt-8"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mt-4"
          />

          <button className="w-full bg-blue-900 text-white p-3 rounded-lg mt-6">
            Login
          </button>

        </div>

      </div>
    </>
  )
}

export default AdminLogin