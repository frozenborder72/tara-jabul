import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
