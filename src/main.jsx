import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
    <Routes>
              <Route path="/" element={<App />} >
              </Route>
<Route path="/auth/signup/" element={<Navbar />} >
              </Route>
              <Route path="/auth/login" element={<Navbar />} >
              </Route>
               <Route path="/auth/login" element={<Navbar />} >
              </Route>
 <Route path="/admin/seller/signup" element={<Navbar />} >
              </Route>

 <Route path="/admin/login" element={<Navbar />} >
              </Route>
    </Routes>
  </Router>
  </StrictMode>,
)
