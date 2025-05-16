import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
<<<<<<< HEAD
import './App.css';
import BooksGrid from './pages/booksgrid';
import Hometest from './pages/hometest';
import Home from './pages/home/home';
import BooksDetails from './pages/booksDetails/booksDetails';
=======
import BooksGrid from './pages/booksgrid/booksgrid';
import Hometest from './pages/Hometest';
import Home from './pages/home/home';
import './pages/booksgrid/styles.css';

import './App.css';
>>>>>>> 00ecba1fdf519362c03dde8105439a2611fdbe8e

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BooksGrid" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
        <Route path="/books-details" element={<BooksDetails />} />
=======
        
>>>>>>> 00ecba1fdf519362c03dde8105439a2611fdbe8e
      </Routes>
    </BrowserRouter>
  );
}

export default App;
