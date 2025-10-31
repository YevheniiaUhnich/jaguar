import React from 'react';
import '../styles/PlayerStats.css';

const n = v => Number(v || 0);

export default function PlayerStats({ rows = [] }) {
    if (!rows || rows.length === 0) return null;

    const data = rows.map(r => {
        const g = n(r.goals);
        const a = n(r.assists);
        return {
            ...r,
            games: n(r.games),
            goals: g,
            assists: a,
            points: g + a,
            pim: n(r.pim),
        };
    });

    const totals = data.reduce((acc, r) => ({
        games: acc.games + r.games,
        goals: acc.goals + r.goals,
        assists: acc.assists + r.assists,
        points: acc.points + r.points,
        pim: acc.pim + r.pim,
    }), { games: 0, goals: 0, assists: 0, points: 0, pim: 0 });


    return (
        <section className="player-stats">
            <h2 className="stats-title">СТАТИСТИКА</h2>
            <h3 className="stats-subtitle">Регулярний сезон</h3>

            <div className="table-responsive">
                <table className="stats-table">
                    <thead>
                        <tr>
                            <th>Сезон</th>
                            <th>Клуб</th>
                            <th>Чемпіонат/Турнір</th>
                            <th>І</th>
                            <th>Г</th>
                            <th>П</th>
                            <th>О</th>
                            <th>ШХ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((r, i) => (
                            <tr key={r.season || i}>
                                <td>{r.season}</td>
                                <td>{r.club}</td>
                                <td>{r.league}</td>
                                <td>{r.games}</td>
                                <td>{r.goals}</td>
                                <td>{r.assists}</td>
                                <td>{r.points}</td>
                                <td>{r.pim}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="stats-total">
                            <td colSpan="3">Разом</td>
                            <td>{totals.games}</td>
                            <td>{totals.goals}</td>
                            <td>{totals.assists}</td>
                            <td>{totals.points}</td>
                            <td>{totals.pim}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    );
}
