
export default function MaximOfficeSolution() { const products = [ "HP 88A Toner", "Canon 925 Cartridge", "Epson Ink Bottle", "Brother Laser Toner", ]; const services = [ "HP Cartridge", "Canon Toner", "Epson Ink", "Brother Cartridge", "Printer Repair", "GST Billing", ];

return ( <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

{/* Floating WhatsApp Button */}
  <a
    href="https://wa.me/917021489374"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 px-5 py-4 rounded-full shadow-2xl font-bold"
  >
    WhatsApp
  </a>
  {/* Header */}
  <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide text-red-600">
        Maxim Office Solution
      </h1>

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

  {/* Product Gallery */}
  <section className="py-24 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-14">
        Product Gallery
      </h3>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center hover:border-red-600 transition"
          >
            <div className="h-40 bg-gray-800 rounded-2xl mb-4 flex items-center justify-center text-gray-500">
              Product Image
            </div>
            <h4 className="text-xl font-semibold">{product}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* GST Details */}
  <section className="py-20 px-6 bg-gray-950">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8">GST Details</h3>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
        <p className="text-lg text-gray-300 mb-3">
          Business Name: Maxim Office Solution
        </p>
        <p className="text-lg text-gray-300">
          GSTIN: XXXXXXXX1234X1Z
        </p>
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

  {/* Google Maps */}
  <section className="py-24 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-10">
        Our Location
      </h3>

      <div className="rounded-3xl overflow-hidden border border-gray-800">
        <iframe
          src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="py-24 px-6 bg-gray-950">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl font-bold mb-10">Contact Us</h3>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        <form className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-5 text-left">
          <h4 className="text-2xl font-bold mb-4">Send Inquiry</h4>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />

          <textarea
            placeholder="Your Requirement"
            rows="4"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold w-full">
            Submit
          </button>
        </form>

        <div className="grid gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h4 className="text-xl font-semibold mb-3">Phone</h4>
          <p className="text-gray-300">7021489374</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h4 className="text-xl font-semibold mb-3">Location</h4>
          <p className="text-gray-300">
            Nariman Street, Mumbai - 400001
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h4 className="text-xl font-semibold mb-3">Business</h4>
          <p className="text-gray-300">
            Printer Cartridge & Office Solutions
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-gray-800 py-6 text-center text-gray-500 bg-black">
    © 2026 Maxim Office Solution. All Rights Reserved.
  </footer>
</div>

); }
