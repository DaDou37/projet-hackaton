import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import BooksGrid from './pages/booksgrid/booksgrid';
import Hometest from './pages/Hometest';
import Home from './pages/home/home';
import './pages/booksgrid/styles.css';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BooksGrid" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
