import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import BooksGrid from './pages/booksgrid'
import Hometest from './pages/hometest'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/home" element= {<Home />} /> 
        </Routes>
    </BrowserRouter>

  )
}

export default App
