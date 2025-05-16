import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css';
import BooksGrid from './pages/booksgrid';
import Hometest from './pages/hometest';
import Home from './pages/home/home';
import BooksDetails from './pages/booksDetails/booksDetails';

import BooksGrid from './pages/booksgrid/booksgrid';
import Checkout from './pages/checkout/checkout';
import Hometest from './pages/Hometest';
import Home from './pages/home/home';

import './pages/checkout/checkout.css';
import './pages/booksgrid/styles.css';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booksgrid" element={<BooksGrid />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books-details" element={<BooksDetails />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
