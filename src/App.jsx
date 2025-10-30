import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Coach from './components/Coach'
import Athletes from './components/Athletes'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import './styles/App.css'
import Translation from './components/Translation'
import News from './components/News'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Coach />
        <Athletes />
        <News />
        <Translation />
        <Gallery />
        <Location />
      </main>
      
      <Footer />
    </div>
  )
}

export default App