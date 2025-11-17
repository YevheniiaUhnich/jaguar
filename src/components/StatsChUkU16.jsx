import React from 'react';
import '../styles/LeagueTable.css';
import { standingsU16 } from '../data/standingsU16';
import { rankStandings } from '../utils/rank.js';



export default function StatsChUkU16() {
  const rows = rankStandings(standingsU16);
  if (!rows?.length) return null;
  return (
    <section className="leaguePage">
      <div className="container">
        <h2 className="titleChUk">
          Чемпіонат України з хокею <br></br>серед юнаків 2010-2012 року
          народження <br></br>сезону 2025-2026 р. ЕЛІТ ЛІГА
        </h2>

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
  );
}