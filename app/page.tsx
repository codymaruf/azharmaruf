import HeroSection from './sections/Hero';
import Why from './sections/Why';
import Service from './sections/Service';
import Different from './sections/Different';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <Why />
      <Service />
      <Different />
      <Contact />
    </main>
  )
}
