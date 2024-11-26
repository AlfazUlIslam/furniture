import { Navbar } from "./components"
import { Hero, Features, Collection, YourSpace, Products, Services } from "./sections"
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
    </div>
  )
}

export default App
