
import { About } from '../Components/About/About'
import { Contactme } from '../Components/ContactMe/ContactMe'
import { Footer } from '../Components/Footer/Footer'
import NavBarBrand from '../Components/NavBar/NavBarBrand'
import { Portfolio } from '../Components/Portfolio/Portfolio'
import Start from '../Components/StartDesign/StartDesign'
import './App.css'

function App() {


  return (
  <div>
  <NavBarBrand />
  <Start />
  <Portfolio />
  <About />
  <Contactme />
  <Footer />
  </div>
  )
}

export default App
