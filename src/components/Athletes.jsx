import React from 'react'
import '../styles/Athletes.css'
import { Link } from 'react-router-dom';
import { players } from '../data/players';

export default function Athletes () {
  return (
    <section id="athletes" className="athletes">
      <div className="container">
        <h2 className="section-title">Наші спортсмени</h2>

        <div className="athletes-grid">
          {players.map(player => (
            <div key={player.id} className="athlete-card">
              <Link to={`/players/${player.slug}`} className="athlete-image" aria-label={`${player.surname} ${player.name}`}>
                {player.photo && (
                  <img
                    src={player.photo}
                    alt={`Фото ${player.surname} ${player.name}`}
                    className="athlete-photo"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      img.nextElementSibling.style.display = 'flex';
                    }}
                  />
                )}
                <div className="placeholder-image" style={{ display: player.photo ? 'none' : 'flex' }}>
                  <p>Фото</p>
                </div>
              </Link>

              <div className="athlete-info">
                <h3 className="athlete-name">{player.name}</h3>
                <p className="athlete-position">{player.position}</p>
                <p className="athlete-birthdate">
                  Дата народження: {player.birthdate ? new Date(player.birthdate).toLocaleDateString('uk-UA') : '—'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  


