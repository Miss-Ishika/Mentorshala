
import './App.css'
import About from './compnents/About'
import AboutMe from './compnents/AboutMe'
import Feature from './compnents/Feature'
import Footer from './compnents/Footer'
import Home from './compnents/Home'
import Navbar from './compnents/Navbar'
import Newsletter from './compnents/Newsletter'
import Pricing from './compnents/Pricing'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Pricing />
      <Newsletter />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
