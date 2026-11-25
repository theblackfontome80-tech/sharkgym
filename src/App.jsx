import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Spaces from './components/Spaces'
import Family from './components/Family'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCall from './components/FloatingCall'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-electric focus:px-4 focus:py-3 focus:text-sm focus:font-semibold"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Spaces />
        <Family />
        <Gallery />
        <Pricing />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </MotionConfig>
  )
}
