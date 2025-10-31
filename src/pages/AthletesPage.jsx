import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { players } from '../data/players.js';
import '../styles/AthletesPage.css';
import PlayerStats from '../components/PlayerStats.jsx';

export default function AthletesPage() {
  const { slug } = useParams();
  const p = players.find(x => x.slug === slug);

  if (!p) {
    return (
      <section className="player">
        <div className="container">
          <h2 className="player-title">Гравця не знайдено</h2>
          <Link to="/" className="cta-button">← Повернутися</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="player">
      <div className="container">
        <Link to="/" className="player-back">← Назад</Link>

        <div className="player-wrap">
          <div className="player-media">
            <img src={p.photo} alt={`${p.surname} ${p.name}`} />
            <span className="player-number">#{p.number}</span>
          </div>

          <div className="player-data">
            <h1 className="player-name">{p.surname} {p.name}</h1>
            <div className="player-meta">
              {/* <div><span>По батькові:</span> {p.patronymic}</div> */}
              <div><span>Дата народження:</span> {new Date(p.birthdate).toLocaleDateString('uk-UA')}</div>
              <div><span>Амплуа:</span> {p.position}</div>
              <div><span>Зріст:</span> {p.heightCm} см</div>
              <div><span>Вага:</span> {p.weightKg} кг</div>
              <div><span>Номер:</span> {p.number}</div>
              <div><span>Хват:</span>{p.stick}</div>
            </div>
            {p.videos.length > 0 && (
              <section className="player-videos">
                <h3 className="player-videos-title">Відео</h3>
                <div className="player-videos-grid">
                  {p.videos.map((v, i) => (
                    <video
                      key={i}
                      className="player-video"
                      src={v.src}
                      poster={v.poster}
                      controls
                      preload="none"
                      playsInline
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
        {p.stats?.regular?.length > 0 && <PlayerStats rows={p.stats.regular} />}
      </div>
    </section>
  );
}
