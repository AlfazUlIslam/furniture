import { Navbar } from "./components"
import { Hero, Features, Collection, YourSpace, Products, Services, Newsletter } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <YourSpace />
      <Products />
      <Services />
      <Newsletter />
    </div>
  )
}

export default App
