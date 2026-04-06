import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Company from './components/Company'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full bg-gray-950">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Company />
      <Footer />
    </main>
  )
}
