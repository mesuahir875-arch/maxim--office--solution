import "./globals.css"

export const metadata = {
  title: "Maxim Office Solution",
  description: "Professional Printer & Cartridge Solutions in Mumbai",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
