import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Prediction from './pages/Prediction';
import Landing2 from './pages/Landing2';
import About from './pages/About';
import FAQ from './pages/faq';
import SignupPage from './pages/Register';
import LoginPage from './pages/Login';
import Landing3 from './pages/Landing3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing3 />} />
        <Route path="/home" element={<Landing3 />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
