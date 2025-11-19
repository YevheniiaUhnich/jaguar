import React from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { rankStandings } from "../utils/rank.js";

export function TourMatrixU13({ title, standings, results, teams }) {
  const rows = rankStandings(standings);
  if (!rows?.length) return null;

  const orderedTeams = rows
    .map((r) => teams.find((t) => t.name === r.name))
    .filter(Boolean);

  const getScoreForPair = (rowId, colId) => {
    if (rowId === colId) return "";

    const direct = results[rowId]?.[colId];
    const reverse = results[colId]?.[rowId];

    const base = direct ?? reverse;
    if (!base) return "";

    const scores = Array.isArray(base) ? base : [base];
    const needReverse = !direct && !!reverse;

    const normalized = scores.map((s) => {
      const [a, b] = s.split(":").map((v) => v.trim());
      if (!a || !b) return s;
      return needReverse ? `${b}:${a}` : `${a}:${b}`;
    });

    return normalized.join("  /  ");
  };

  return (
    <>
      <h3 className="titleChUk">{title}</h3>
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
            {orderedTeams.map((team) => (
              <tr key={team.id}>
                <td>{team.points}</td>
                <td>{team.name}</td>

                {teams.map((opponent) => {
                  if (team.id === opponent.id) {
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
    </>
  );
}
