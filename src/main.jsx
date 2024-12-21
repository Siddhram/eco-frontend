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
import Signupseller from './components/Signupseller.jsx'
import Signinpageseller from './components/Signinpageseller.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
    <Routes>
              <Route path="/" element={<App />} >
              </Route>
              {/* com auth/signup/*/}
<Route path="/auth/signup/" element={<Signuppage />} >
              </Route>
                 {/* com auth/login */}
              <Route path="/auth/login" element={<Signinpage />} >
              </Route>


                        {/* com auth/seller/signup*/}
 <Route path="/auth/seller/signup" element={<Signupseller />} >
              </Route>

                        {/* com  auth/seller/login*/}
 <Route path="/auth/seller/login" element={<Signinpageseller />} >
              </Route>
              <Route path="/admin/seller/signup" element={<Signuppageadmin />} >
              </Route>
    </Routes>
  </Router>
  </StrictMode>,
)
