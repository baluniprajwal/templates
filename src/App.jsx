import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoffeeHero from './pages/CoffeeHero.jsx'
import CelestialMatcha from './templates/CelestialMatcha.jsx'
import ComingSoon from './templates/ComingSoon.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoffeeHero />} />
        <Route path="/templates/celestial-matcha" element={<CelestialMatcha />} />
        <Route path="/templates/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<CoffeeHero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
