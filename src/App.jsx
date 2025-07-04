import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Service from './Sections/Service'
import Testimonial from './Sections/Testimonial'
import Animation from './Sections/Animation'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Nav from './Sections/Nav'


const App = () => {
  return (
    <section className='font-inter'>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Animation />
      <Service />   
      <Contact />
      <Footer />
    </section>
  )
}

export default App