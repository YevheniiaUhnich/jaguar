import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import AthletesPage from './pages/AthletesPage';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:slug" element={<AthletesPage />} />
      
         {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>

      <Footer />
    </div>
  );
}
