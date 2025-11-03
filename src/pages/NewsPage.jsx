import React from "react";
import "../styles/News.css";
import { newsUrl } from "../data/news";
import { NewsCard } from "../components/News.jsx";
import { Link } from "react-router-dom";

// числова частина з id, напр. 'n-12' -> 12
const idNum = (v) => {
  const raw = typeof v?.id === "string" ? v.id : String(v?.id ?? "");
  const m = raw.match(/(\d+)(?!.*\d)/);
  return m ? parseInt(m[1], 10) : 0;
};

export default function NewsPage() {
  const list = Array.isArray(newsUrl) ? [...newsUrl] : [];
  list.sort((a, b) => idNum(b) - idNum(a)); 

  return (
    <section className="news news-page">
      <div className="container">
        <div className="container">
          <Link to="/" className="playerBackNews">
            ← Назад
          </Link>
        </div>

        <h1 className="titleNewsPadding">Усі новини</h1>

        <div className="news-grid">
          {list.map((item) => (
            <NewsCard
              key={item.id ?? `${item.title}-${idNum(item)}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
