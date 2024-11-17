import { Navbar } from "./components"
import { Hero, Features } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default App
