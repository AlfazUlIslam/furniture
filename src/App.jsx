import { Navbar } from "./components"
import { Hero, Features, Collection, YourSpace, Products } from "./sections"
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
    </div>
  )
}

export default App
