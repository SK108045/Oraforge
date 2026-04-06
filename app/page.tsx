import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
