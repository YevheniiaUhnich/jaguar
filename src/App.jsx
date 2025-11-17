import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import AthletesPage from './pages/AthletesPage';
import GAListener from "./GAListener";
import "./styles/App.css";
import ScrollTopButton from "./components/ScrollTopButton";
import "./styles/ScrollTop.css";
import TranslationPage from "./pages/TranslationPage";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import StatsChUkU13Page from "./pages/StatsChUkU13Page";

export default function App() {
  return (
    <div className="app">
      <Header />

      <GAListener />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/players/:slug" element={<AthletesPage />} />
        <Route path="/translation" element={<TranslationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/stats-ch-uk-u13" element={<StatsChUkU13Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollTopButton />
      <Footer />
    </div>
  );
}
