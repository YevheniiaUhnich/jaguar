export function rankStandings(rows){
    const diff = r => (r.zsh - r.psh);
    const sorted = [...rows].sort((a,b) =>
      b.pts - a.pts ||
      diff(b) - diff(a) ||
      b.zsh - a.zsh
    );
    return sorted.map((r, i) => ({ ...r, place: i + 1 }));
  }