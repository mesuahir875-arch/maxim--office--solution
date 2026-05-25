export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        Maxim Office Solution
      </h1>

      <p className="text-gray-300 text-center max-w-xl mb-8">
        Professional Printer Cartridge, Toner, Ink Refill & Printer Repair Services in Mumbai.
      </p>

      <div className="flex gap-4">
        <a
          href="https://wa.me/917021489374"
          className="bg-green-500 px-6 py-3 rounded-xl font-bold"
        >
          WhatsApp
        </a>

        <a
          href="tel:7021489374"
          className="bg-red-500 px-6 py-3 rounded-xl font-bold"
        >
          Call Now
        </a>
      </div>

    </main>
  );
}
