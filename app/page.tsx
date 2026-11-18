import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import InfoBar from '@/components/InfoBar'
import Menu from '@/components/Menu'
import WhyUs from '@/components/WhyUs'
import Catering from '@/components/Catering'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <Menu />
        <Catering />
        <WhyUs />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
