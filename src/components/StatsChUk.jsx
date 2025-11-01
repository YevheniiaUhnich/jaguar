import React from 'react';
import '../styles/StatsChUk.css';
import { standingsU13 } from '../data/standingsU13';

export default function StatsChUk ({ rows = standingsU13 }) {
    if (!rows?.length) return null;
    return (
        <section>
            <div className="container">
                <h2 className="titleChUk">Чемпіонат України з хокею <br></br>серед юнаків 2013-2014 року народження <br></br>сезону 2025-2026 р. ЕЛІТ ЛІГА</h2>
            
                <div className="table-wrap">
        <table className="league-table">
          <thead>
            <tr>
              <th>Місце</th>
              <th>Команда</th>
              <th>Ігри</th>
              <th>ЗШ</th>
              <th>ПШ</th>
              <th>ВІ</th>
              <th>ПІ</th>
              <th>О</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.team}>
                <td className="c">{r.place}</td>
                <td>{r.team}</td>
                <td className="c">{r.games}</td>
                <td className="c">{r.zsh}</td>
                <td className="c">{r.psh}</td>
                <td className="c">{r.vi}</td>
                <td className="c">{r.pi}</td>
                <td className="c">{r.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </div>
        </section>
    )
}