

const services = [
  {
    title: "AC Installation",
    description: "Professional AC installation for homes and offices.",
    icon: "❄️"
  },
  {
    title: "AC Repair",
    description: "Expert solutions for all AC technical problems.",
    icon: "🔧"
  },
  {
    title: "Gas Filling",
    description: "AC refrigerant checking and gas charging.",
    icon: "🧊"
  },
  {
    title: "General Service",
    description: "Complete AC cleaning and maintenance.",
    icon: "🛠️"
  },
  {
    title: "PCB Repair",
    description: "AC circuit board inspection and repair.",
    icon: "⚡"
  },
  {
    title: "Water Leakage",
    description: "Drainage and water leakage problem fixing.",
    icon: "💧"
  }
]

function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold">
            WHAT WE OFFER
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Our AC Services
          </h2>

          <p className="text-gray-500 mt-4">
            Complete air conditioning solutions under one roof.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
            >

              <div className="text-4xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services
