import { Navbar } from "./components"
import { Hero, Features, Collection } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Features />
      <Collection />
    </div>
  )
}

export default App
