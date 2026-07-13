import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddFlight from './components/AddFlight'
import ViewFlight from './components/ViewFlight'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddFlight />} />
        <Route path="/view" element={<ViewFlight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App