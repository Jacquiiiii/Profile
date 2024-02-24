import { Karla } from "next/font/google"
import "./globals.css"
import Nav from "./components/Nav/Nav"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Footer from "./components/Footer/Footer"

const karla = Karla({ subsets: ["latin"] })

export const metadata = {
  title: "Jacqui Koroll's Portfolio",
  description: "Developer portfolio for Jacqui Koroll",
}
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={karla.className}>
        <main>
          <Nav />
          {children}
          <ScrollToTop />
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
