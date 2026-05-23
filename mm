export default function MaximOfficeSolution() { const services = [ "HP Cartridge", "Canon Toner", "Epson Ink", "Brother Cartridge", "Printer Repair", "GST Billing", ];

return ( <div className="min-h-screen bg-black text-white font-sans"> {/* Header */} <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> <h1 className="text-2xl font-bold tracking-wide text-red-600"> Maxim Office Solution </h1>

<nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#home" className="hover:text-red-500 transition">
          Home
        </a>
        <a href="#services" className="hover:text-red-500 transition">
          Services
        </a>
        <a href="#about" className="hover:text-red-500 transition">
          About
        </a>
        <a href="#contact" className="hover:text-red-500 transition">
          Contact
        </a>
      </nav>
    </div>
  </header>

  {/* Hero Section */}
  <section
    id="home"
    className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 text-center"
  >
    <div>
      <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        Professional Printer & Cartridge Solutions
      </h2>

      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
        Trusted supplier for printer cartridges, toner refilling,
        printer repair, and office solutions in Mumbai.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="https://wa.me/917021489374"
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
        >
          WhatsApp Now
        </a>

        <a
          href="#services"
          className="border border-gray-500 hover:border-red-500 px-8 py-4 rounded-xl font-semibold transition"
        >
          Our Services
        </a>
      </div>
    </div>
  </section>

  {/* Services */}
  <section id="services" className="py-24 px-6 bg-gray-950">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-14">
        Our Services
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-red-600 transition"
          >
            <div className="text-red-500 text-5xl mb-4">●</div>
            <h4 className="text-2xl font-semibold mb-3">{service}</h4>
            <p className="text-gray-400 leading-relaxed">
              High-quality service with genuine products and fast support.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About */}
  <section id="about" className="py-24 px-6 bg-black">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8">About Us</h3>

      <p className="text-gray-300 text-lg leading-8">
        Maxim Office Solution provides premium office and printer solutions
        for businesses and individuals. We specialize in printer cartridges,
        toner refilling, printer repair, and complete office support
        services.
      </p>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="py-24 px-6 bg-gray-950">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl font-bold mb-10">Contact Us</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h4 className="text-xl font-semibold mb-3">Phone</h4>
          <p className="text-gray-300">7021489374</p>
        </di…
