import { Navbar } from "./components"
import { Hero, Features, Collection, YourSpace } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <YourSpace />
    </div>
  )
}

export default App
