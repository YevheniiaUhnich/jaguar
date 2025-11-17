import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-row">
              <img
                src="/imageFon.png"
                alt="Логотип"
                className="brand-logo-img"
              />
              <h1 className="brand-title">ХК "Ягуари"</h1>
            </div>
            <p className="brand-subtitle">Досягайте нових висот разом з нами</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Навігація</h3>
              <ul>
                <li>
                  <a href="#hero">Головна</a>
                </li>
                <li>
                  <a href="#coach">Тренер</a>
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
            </div>
            <div className="footer-links-column">
              <h3>Контакти</h3>
              <ul>
                <li>Телефон: +380(67) 438-84-44</li>
                <li>Email: jaguardnipro20132014@gmail.com</li>
                <li>Адреса: вул. Набережна Заводська, 53, м. Дніпро</li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Соціальні мережі</h3>
              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com/groups/1280780848954295/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} ХК "Ягуари". Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer