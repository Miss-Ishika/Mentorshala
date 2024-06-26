
import './App.css'
import About from './compnents/About'
import AboutMe from './compnents/AboutMe'
import Banner from './compnents/Banner'
import Feature from './compnents/Feature'
import Footer from './compnents/Footer'
import Home from './compnents/Home'
import Navbar from './compnents/Navbar'
import Newsletter from './compnents/Newsletter'
import Popup from './compnents/Popup'
import Pricing from './compnents/Pricing'
import Sidebar from './compnents/Sidebar'

function App() {
  

  return (
    <>
      <Banner />
      <Navbar />
      <Sidebar />
      <Home />
      <Feature />
      <About />
      <Pricing />
      <Newsletter />
      <AboutMe />
      <Footer />
      <Popup/>
    </>
  )
}

export default App
