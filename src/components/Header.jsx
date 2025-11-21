import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/imageFon.png" alt="Логотип" className="logo-img" />
            <h1>ХК "ЯГУАР"</h1>
          </div>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#hero">Головна</a>
              </li>
              <li className="nav-item">
                <a href="#coach">Тренери</a>
              </li>
              <li className="nav-item">
                <a href="#about">Про нас</a>
              </li>
              <li className="nav-item">
                <a href="#athletes">Спортсмени</a>
              </li>
              <li className="nav-item">
                <a href="#news">Новини</a>
              </li>
              <li className="nav-item">
                <a href="#gallery">Галерея</a>
              </li>
              <li className="nav-item">
                <a href="#video">Трансляції</a>
              </li>
              <li className="nav-item">
                <a href="#location">Локація</a>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-button">
            <button
              type="button"
              className="burger-btn"
              aria-label="Відкрити меню"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <div className="mobile-overlay" hidden={!open} onClick={close} />

        <aside
          id="mobile-nav"
          className="mobile-nav"
          data-open={open}
          aria-hidden={!open}
        >
          <button
            type="button"
            className="close-btn"
            aria-label="Закрити меню"
            onClick={close}
          >
            <FiX />
          </button>
          <ul className="mobile-list" onClick={close}>
            <li>
              <a href="#hero">Головна</a>
            </li>
            <li>
              <a href="#coach">Тренери</a>
            </li>
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#athletes">Спортсмени</a>
            </li>
            <li>
              <a href="#news">Новини</a>
            </li>
            <li>
              <a href="#gallery">Галерея</a>
            </li>
            <li>
              <a href="#video">Трансляції</a>
            </li>
            <li>
              <a href="#location">Локація</a>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default Header