import React from 'react'
import '../styles/Location.css'

const Location = () => {

  const address = 'вул. Набережна Заводська, 53, Дніпро';
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=uk&z=15&output=embed`;

  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title">Наша локація</h2>
        <div className="location-content">
          <div className="location-map">
            <div className="map-wrap">
              <iframe
                className="map-iframe"
                src={src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Карта розташування"
              />
            </div>
          </div>
          <div className="location-info">
            <div className="info-item">
              <h3>Адреса</h3>
              <p>вул. Набережна Заводська, 53, м. Дніпро</p>

              <div className="info-item">
                <h3>Контакти</h3>
                <p>Телефон: +380 (00) 111-11-11</p>
                <p>Email: info@sportsclub.ua</p>
              </div>
            </div>

            <div className="info-item">
              <h3>Графік роботи</h3>
              <p>Понеділок: 16:00 - 20:00</p>
              <p>Вівторок: 16:00 - 20:00</p>
              <p>Середа: 6:00 - 08:00, 16.00 - 17.45</p>
              <p>Четвер: 16:00 - 20:00</p>
              <p>Пʼятниця: 6:00 - 08:00</p>
              <p>Субота, неділя: Ігри ЧУ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location