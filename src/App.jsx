import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CelestialMatcha from './templates/CelestialMatcha.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CelestialMatcha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
