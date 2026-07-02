import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />
      <Hero />

      <div className="h-screen" />

      <main className="relative">
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
