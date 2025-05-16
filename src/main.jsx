import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======

import '@fortawesome/fontawesome-free/css/all.min.css';

import BooksGrid from './pages/booksgrid/booksgrid.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


>>>>>>> 00ecba1fdf519362c03dde8105439a2611fdbe8e

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
