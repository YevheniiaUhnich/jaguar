import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Coach from './components/Coach'
import Athletes from './components/Athletes'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Coach />
        <Athletes />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App