import React from "react";
import "../styles/LeagueTable.css";
import { tur1U13 } from "../data/tur1U13.js";
import { tur1 } from "../data/tur1U13.js";
import { teams } from "../data/tur1U13.js";
import { rankStandings } from "../utils/rank.js";
import { AiOutlineDownCircle } from "react-icons/ai";

export default function StatsChUkU13Page() {
  const rows = rankStandings(tur1U13);
  if (!rows?.length) return null;

  // допоміжна функція: повертає рахунок з точки зору рядка
  const getScoreForPair = (rowId, colId) => {
    if (rowId === colId) return "";

    const direct = tur1[rowId]?.[colId];
    const reverse = tur1[colId]?.[rowId];

    const base = direct ?? reverse;
    if (!base) return "";

    const scores = Array.isArray(base) ? base : [base];
    const needReverse = !direct && !!reverse; // якщо дані зберігаються у зворотньому напрямку

    const normalized = scores.map((s) => {
      const [a, b] = s.split(":").map((v) => v.trim());
      if (!a || !b) return s;
      // перша цифра - команда з рядка
      return needReverse ? `${b}:${a}` : `${a}:${b}`;
    });

    return normalized.join("  /  ");
  };

  return (
    <section className="league-page">
      <div className="container">
        <h2 className="titleChUk">
          Турнірна таблиця Чемпіонату України з хокею <br />
          серед юнаків 2013-2014 року народження
          <br />
          сезону 2025-2026 р. ЕЛІТ ЛІГА
        </h2>
        <h3 className="titleChUk">Тур 1</h3>

        <div className="table-wrap">
          <table className="tournament-matrix">
            <thead>
              <tr>
                <th>Очки</th>
                <th>Команда</th>
                {teams.map((t) => (
                  <th key={t.id}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teams.map((team, rowIndex) => (
                <tr key={team.id}>
                  <td>{team.points}</td>
                  <td>{team.name}</td>

                  {teams.map((opponent, colIndex) => {
                    // діагональ - іконка, без рахунку
                    if (rowIndex === colIndex) {
                      return (
                        <td key={opponent.id} className="cell-diag">
                          <AiOutlineDownCircle />
                        </td>
                      );
                    }

                    const score = getScoreForPair(team.id, opponent.id);

                    return (
                      <td key={opponent.id} className="cell-score">
                        {score}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
