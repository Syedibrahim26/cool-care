
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  })

  function handleChange(event) {

    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })

  }

  function handleSubmit(event) {

    event.preventDefault()

    const whatsappNumber = "8098281310"

    const message = `
Hello CoolCare Solutions!

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
`

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, "_blank")

  }

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16 px-6">

        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10">

            <h1 className="text-4xl font-bold text-slate-900">
              Contact Us
            </h1>

            <p className="text-gray-500 mt-3">
              Need AC service? Contact our team.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            >

              <option value="">Select AC Service</option>
              <option value="AC Installation">AC Installation</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Gas Filling">Gas Filling</option>
              <option value="General Service">General Service</option>

            </select>

            <textarea
              name="message"
              placeholder="Describe your AC problem"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Send via WhatsApp
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Contact
