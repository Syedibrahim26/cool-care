
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-400 font-semibold">
            ABOUT OUR COMPANY
          </p>

          <h1 className="text-5xl font-bold mt-4">
            About CoolCare Solutions
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            CoolCare Solutions provides professional air
            conditioning installation, repair and maintenance
            services for homes and businesses.
            Our goal is to deliver reliable service and
            customer satisfaction.
          </p>

        </div>

      </section>

      <section className="py-16 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-blue-700">
              10+
            </h2>
            <p className="mt-3 text-gray-600">
              Years of Experience
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-blue-700">
              500+
            </h2>
            <p className="mt-3 text-gray-600">
              Happy Customers
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-blue-700">
              24/7
            </h2>
            <p className="mt-3 text-gray-600">
              Customer Support
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default About
