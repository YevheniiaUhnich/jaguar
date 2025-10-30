import React from 'react';
import '../styles/News.css';

const newsUrl = [
  { id: 'u-1', url: 'https://www.facebook.com/share/v/1Fo5v1wvjS/', title: '🏒 Чемпіонат України. Еліт-ліга U13 💛 ХК Ягуар 🆚 ХК Сокіл 2014 🕗 Початок матчу - 08:00',  video: '/news/videoNews1.mp4', poster: '/news/new1.png'  },
  { id: 'u-2', url: 'https://www.facebook.com/share/r/17VfbDtFeC/', title: '🏒🏒 Перший тур чемпіонату України з хокею з шайбою серед юнаків 2013–2014 р.н. 🏆', image: '/news/new2.png' },
  ];

function getHost(url) {
  try { return new URL(url).hostname.replace(/^www\./,''); }
  catch { return 'джерело'; }
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
  return ''; 
}

function NewsCard({ item }) {
  const host = getHost(item.url);
  const isVideo = Boolean(item.video) || /\.(mp4|webm|ogg)$/i.test(item.image || '');
  const videoSrc = item.video || (/\.(mp4|webm|ogg)$/i.test(item.image || '') ? item.image : '');
  const img = !isVideo ? (item.image || autoImage(item.url)) : '';


  return (
    <article className="news-card">
      <a className="news-link" href={item.url} target="_blank" rel="noopener noreferrer">
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
  return (
    <section className="news">
      <div className="container">
        <h2 className="titleNews">Останні новини</h2>

        {newsUrl.length === 0 ? (
          <p className="news-empty">Поки що немає новин</p>
        ) : (
          <div className="news-grid">
            {newsUrl.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
