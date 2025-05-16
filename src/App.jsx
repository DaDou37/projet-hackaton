import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import BooksGrid from './pages/booksgrid';
import Hometest from './pages/hometest';
import Home from './pages/home/home';
import BooksDetails from './pages/booksDetails/booksDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books-details" element={<BooksDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
