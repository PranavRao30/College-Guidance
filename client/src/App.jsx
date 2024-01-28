import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Prediction from './pages/Prediction';
import Landing2 from './pages/Landing2';
import About from './pages/About';
import FAQ from './pages/faq';
import SignupPage from './pages/Register';
import LoginPage from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing2 />} />
        <Route path="/home" element={<Landing2 />} />
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
