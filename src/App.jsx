import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import BooksGrid from './pages/BooksGrid';
import Hometest from './pages/Hometest';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
