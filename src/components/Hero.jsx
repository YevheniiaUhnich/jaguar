import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <video
        className="hero-bg"
        src="/hero-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
       <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Досягайте <br></br> нових висот разом з нами</h2>
            <p>Наш хокейний клуб допоможе вам розкрити свій потенціал та досягти найвищих результатів</p>
            <button className="cta-button">Приєднатися</button>
          </div>
          <div className="hero-image">

            <div className="placeholder-image">
              <img src="/jaguar.jpg" alt="Yaguar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero