import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Translation.css";
import { videoUrl } from "../data/translation";

function getYouTubeId(url) {
  if (!url) return null;
  const m =
    url.match(/[?&]v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/youtube\.com\/live\/([^?]+)/) ||
    url.match(/youtube\.com\/embed\/([^?]+)/);
  return m ? m[1] : null;
}

function LiteYouTube({ url, title = "Відео" }) {
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
    <button
      type="button"
      className="lite-yt"
      onClick={() => setActive(true)}
      aria-label="Відтворити"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
      />
      <span className="play-btn" aria-hidden>
        ▶
      </span>
    </button>
  );
}

function Mp4Player({ src, poster, title = "Відео" }) {
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

function HlsPlayer({ src, poster, title = "Live" }) {
  const ref = useRef(null);
  const hlsRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    },
    []
  );

  const onActivate = async () => {
    const video = ref.current;
    if (!video || ready) return;
    try {
      if (video.canPlayType("application/vnd.apple.mpegURL")) {
        video.src = src;
      } else {
        let Hls;
        try {
          Hls = (await import("hls.js")).default;
        } catch {
          Hls = (await import("hls.js/dist/hls.mjs")).default;
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
      setError("Помилка ініціалізації HLS");
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
        <button
          type="button"
          className="play-overlay"
          onClick={onActivate}
          aria-label="Відтворити трансляцію"
        >
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
        {item.kind === "youtube" && (
          <LiteYouTube url={item.url} title={item.title} />
        )}
        {item.kind === "mp4" && (
          <Mp4Player src={item.src} poster={item.poster} title={item.title} />
        )}
        {item.kind === "hls" && (
          <HlsPlayer src={item.src} poster={item.poster} title={item.title} />
        )}
      </div>
      {item.title && <h3 className="video-title">{item.title}</h3>}
    </article>
  );
}

const Translation = () => {
  const VISIBLE_COUNT = 6; // 2 ряди по 3
  const VISIBLE = Array.isArray(videoUrl)
    ? videoUrl.slice(0, VISIBLE_COUNT)
    : [];

  return (
    <section id="video" className="translation">
      <div className="container">
        <h2 className="titleTranslation">Трансляції матчів</h2>
        <div className="video-grid">
          {VISIBLE.map((v) => (
            <VideoCard key={v.id} item={v} />
          ))}
        </div>
        <div className="view-all-row">
          <Link
            to="/translation"
            className="view-all-btn"
            aria-label="Дивитися усі відео"
          >
            Дивитися усі відео
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Translation;
export { VideoCard };
