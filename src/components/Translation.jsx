import React, { useEffect, useRef, useState } from 'react';
import '../styles/Translation.css';

/* джерела */
const VIDEOS = [
    { id: 'yt-1', kind: 'youtube', url: 'https://www.youtube.com/live/tjFMDajPr38', title: 'LIVE | ПАТРІОТ (ВІННИЦЯ) - ЯГУАР (ДНІПРО). ЧЕМПІОНАТ УКРАЇНИ З ХОКЕЮ (U-16). ЕЛІТ ЛІГА. 2-Й МАТЧ' },
    { id: 'yt-2', kind: 'youtube', url: 'https://www.youtube.com/watch?v=4ZdVMGStMac', title: 'LIVE | ПАТРІОТ (ВІННИЦЯ) - ЯГУАР (ДНІПРО). ЧЕМПІОНАТ УКРАЇНИ З ХОКЕЮ (U-16). ЕЛІТ ЛІГА. 1-Й ТУР' },
    { id: 'yt-3', kind: 'youtube', url: 'https://www.youtube.com/live/gaFkpnnYe1A', title: ' Ягуари (Дніпро) - Патріот (Вінниця) | ЧУ U13. Еліт ліга | 18.10.2025' },
    { id: 'yt-4', kind: 'youtube', url: 'https://www.youtube.com/watch?v=mFtHPVuq510', title: 'Ягуари (Дніпро) - Патріот (Вінниця) | ЧУ U13. Еліт ліга | 19.10.2025' },
    { id: 'yt-5', kind: 'youtube', url: 'https://www.youtube.com/watch?v=rQqORB2UGhE&t=3800s', title: 'МАТЧ №15 ЯГУАР - КРИЖИНКА' },
    { id: 'yt-6', kind: 'youtube', url: 'https://www.youtube.com/watch?v=tWuH3EUfufw&t=764s', title: 'МАТЧ №12 ШЕРШНІ - ЯГУАР' },
    { id: 'yt-7', kind: 'youtube', url: 'https://www.youtube.com/watch?v=DB-zUBelXv0', title: 'МАТЧ №7 КРИЖИНКА - ЯГУАР' },
    { id: 'yt-8', kind: 'youtube', url: 'https://www.youtube.com/watch?v=cgL1zMwO5fM&t=20s', title: 'МАТЧ №3 ЯГУАР - СОКІЛ 14 (1)' },
    { id: 'yt-9', kind: 'youtube', url: 'https://www.youtube.com/watch?v=UbA37lquVTU', title: 'МАТЧ №15 ШЕРШНІ - ЯГУАР' },
];

function getYouTubeId(url) {
  const m =
    url.match(/[?&]v=([^&]+)/) ||            // watch?v=ID
    url.match(/youtu\.be\/([^?]+)/) ||        // youtu.be/ID
    url.match(/youtube\.com\/live\/([^?]+)/) || // youtube.com/live/ID
    url.match(/youtube\.com\/embed\/([^?]+)/);  // youtube.com/embed/ID
  return m ? m[1] : null;
}


function LiteYouTube({ url, title = 'Відео' }) {
  const videoId = getYouTubeId(url);
  const [active, setActive] = useState(false);
  if (!videoId) return null;

  if (active) {
    return (
      <iframe
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="lite-yt" onClick={() => setActive(true)} aria-label="Відтворити">
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
      />
      <span className="play-btn" aria-hidden>▶</span>
    </button>
  );
}

function Mp4Player({ src, poster, title = 'Відео' }) {
  return (
    <video
      className="video-el"
      src={src}
      poster={poster}
      controls
      preload="none"
      playsInline
    >
      Ваш браузер не підтримує відео.
    </video>
  );
}

function HlsPlayer({ src, poster, title = 'Live' }) {
  const ref = useRef(null);
  const hlsRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, []);

  const onActivate = async () => {
    const video = ref.current;
    if (!video || ready) return;

    try {
      if (video.canPlayType('application/vnd.apple.mpegURL')) {
        video.src = src;
      } else {
        let Hls;
        try {
        
          Hls = (await import('hls.js')).default;
        } catch {
       
          Hls = (await import('hls.js/dist/hls.mjs')).default;
        }
        if (Hls?.isSupported()) {
          hlsRef.current = new Hls({ maxBufferLength: 30 });
          hlsRef.current.loadSource(src);
          hlsRef.current.attachMedia(video);
        } else {
        
          video.src = src;
        }
      }
      setReady(true);
      await video.play().catch(() => {});
    } catch (e) {
      setError('Помилка ініціалізації HLS');
      console.warn(e);
    }
  };

  return (
    <div className="hls-wrap">
      <video
        className="video-el"
        ref={ref}
        poster={poster}
        controls={ready}
        preload="none"
        playsInline
      />
      {!ready && !error && (
        <button type="button" className="play-overlay" onClick={onActivate} aria-label="Відтворити трансляцію">
          ▶
        </button>
      )}
      {error && <div className="hls-error">{error}</div>}
    </div>
  );
}


function VideoCard({ item }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        {item.kind === 'youtube' && <LiteYouTube url={item.url} title={item.title} />}
        {item.kind === 'mp4' && <Mp4Player src={item.src} poster={item.poster} title={item.title} />}
        {item.kind === 'hls' && <HlsPlayer src={item.src} poster={item.poster} title={item.title} />}
      </div>
      {item.title && <h3 className="video-title">{item.title}</h3>}
    </article>
  );
}

const Translation = () => {
  return (
    <section id="video" className="translation">
      <div className="container">
        <h2 className="titleTranslation">Трансляції матчів</h2>
        <div className="video-grid">
          {VIDEOS.map(v => <VideoCard key={v.id} item={v} />)}
        </div>
      </div>
    </section>
  );
};

export default Translation;
