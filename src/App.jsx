import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewFlight from './components/ViewFlight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ViewFlight/>
    </>
  )
}

export default App
