
function Hero() {
  return (
    <section className="bg-slate-900 text-white px-6 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Hero Content */}
        <div>

          <p className="text-blue-400 font-semibold mb-4">
            PROFESSIONAL AC SERVICES
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Stay Cool With Our
            <span className="text-blue-400"> Expert AC Services</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            We provide reliable AC installation,
            repair and maintenance services
            to keep your home comfortable.
          </p>

          <button className="mt-8 bg-blue-600 px-7 py-3 rounded-lg hover:bg-blue-700">
            Explore Services
          </button>

        </div>

        {/* Hero Image */}
        <div>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/QR/WB/QI/27985282/ac-repairing-services-for-industrial.png"
            alt="Air conditioning service"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero
