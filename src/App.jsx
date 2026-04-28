import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Timeline from './components/Timeline'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import MobileFloatingCTA from './components/MobileFloatingCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Timeline />
        <CTABanner />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  )
}
