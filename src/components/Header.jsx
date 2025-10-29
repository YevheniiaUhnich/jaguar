import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/imageFon.png" alt="Логотип" className="logo-img" />
            <h1>ХК "Ягуари"</h1>
          </div>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item"><a href="#hero">Головна</a></li>
              <li className="nav-item"><a href="#coach">Тренер</a></li>
              <li className="nav-item"><a href="#athletes">Спортсмени</a></li>
              <li className="nav-item"><a href="#gallery">Галерея</a></li>
              <li className="nav-item"><a href="#video">Трансляції</a></li>
              <li className="nav-item"><a href="#location">Локація</a></li>
            </ul>
          </nav>
          <div className="mobile-menu-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header