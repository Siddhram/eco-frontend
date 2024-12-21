import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Signinpage from './components/Signinpage.jsx'
import Signuppage from './components/Signuppage.jsx'
import Signuppageadmin from './components/Signuppageadmin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
    <Routes>
              <Route path="/" element={<App />} >
              </Route>
              {/* com */}
<Route path="/auth/signup/" element={<Signuppage />} >
              </Route>
              <Route path="/auth/login" element={<Signinpage />} >
              </Route>


                        {/* com */}
 <Route path="/admin/seller/signup" element={<Signuppageadmin />} >
              </Route>

 <Route path="/admin/login" element={<Navbar />} >
              </Route>
    </Routes>
  </Router>
  </StrictMode>,
)
