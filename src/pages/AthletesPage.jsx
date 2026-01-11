import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { players } from '../data/players.js';
import '../styles/AthletesPage.css';
import PlayerStats from '../components/PlayerStats.jsx';

export default function AthletesPage() {
  const { slug } = useParams();
  const p = players.find(x => x.slug === slug);

  const videos = p.videos || [];
const topVideos = videos.slice(0, 2);
const restVideos = videos.slice(2);

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
      <div><span>Дата народження:</span> {new Date(p.birthdate).toLocaleDateString('uk-UA')}</div>
      <div><span>Амплуа:</span> {p.position}</div>
      <div><span>Зріст:</span> {p.heightCm} см</div>
      <div><span>Вага:</span> {p.weightKg} кг</div>
      <div><span>Номер:</span> {p.number}</div>
      <div><span>Хват:</span> {p.stick}</div>
      <div>{p.history}</div>
    </div>

    {topVideos.length > 0 && (
      <section className="player-videos player-videos--top">
        <h3 className="player-videos-title">Відео</h3>
        <div className="player-videos-grid player-videos-grid--2">
          {topVideos.map((v, i) => (
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

{restVideos.length > 0 && (
  <section className="player-videos player-videos--full">
    <h3 className="player-videos-title">Інші відео</h3>
    <div className="player-videos-grid player-videos-grid--3">
      {restVideos.map((v, i) => (
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

        {p.stats?.regular?.length > 0 && <PlayerStats rows={p.stats.regular} />}
      </div>
    </section>
  );
}
