import React from 'react';
import '../styles/News.css';
import { newsUrl } from "../data/news";
import { Link } from "react-router-dom";

const idNum = (v) => {
  const raw = typeof v?.id === "string" ? v.id : String(v?.id ?? "");
  const m = raw.match(/(\d+)(?!.*\d)/);
  return m ? parseInt(m[1], 10) : 0;
};

function getHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "джерело";
  }
}

function getYouTubeId(url) {
  const m =
    url.match(/[?&]v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/youtube\.com\/live\/([^?]+)/) ||
    url.match(/youtube\.com\/embed\/([^?]+)/);
  return m ? m[1] : null;
}

function autoImage(url) {
  const yt = getYouTubeId(url);
  if (yt) return `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
  return "";
}

function NewsCard({ item }) {
  const host = getHost(item.url);
  const isVideo =
    Boolean(item.video) || /\.(mp4|webm|ogg)$/i.test(item.image || "");
  const videoSrc =
    item.video ||
    (/\.(mp4|webm|ogg)$/i.test(item.image || "") ? item.image : "");
  const img = !isVideo ? item.image || autoImage(item.url) : "";

  return (
    <article id="news" className="container news-card">
      <a
        className="news-link"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="news-media">
          {isVideo ? (
            <video
              className="news-video"
              src={videoSrc}
              poster={item.poster}
              controls
              preload="none"
              playsInline
            />
          ) : img ? (
            <img src={img} alt={item.title || host} loading="lazy" />
          ) : (
            <div className="news-ph" aria-hidden="true" />
          )}
          {host && <span className="news-badge">{host}</span>}
        </div>

        <div className="news-content">
          <h3 className="news-h3">{item.title || host}</h3>
          <p className="news-excerpt">Перейти до джерела →</p>
        </div>
      </a>
    </article>
  );
}

const News = () => {
  const list = Array.isArray(newsUrl) ? [...newsUrl] : [];
  list.sort((a, b) => idNum(b) - idNum(a));
  const VISIBLE = list.slice(0, 3);
  return (
    <section className="news">
      <div className="container">
        <h2 className="titleNews">Останні новини</h2>
        {VISIBLE.length === 0 ? (
          <p className="news-empty">Поки що немає новин</p>
        ) : (
          <>
            <div className="news-grid">
              {VISIBLE.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            <div className="view-all-row">
              <Link
                to="/news"
                className="view-all-btn"
                aria-label="Дивитися усі новини"
              >
                Дивитися усі
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default News;
export { NewsCard };
