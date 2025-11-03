import React from "react";
import "../styles/Translation.css";
import { videoUrl } from "../data/translation";
import { VideoCard } from "../components/Translation.jsx";


const idNum = (v) => {
  const raw = typeof v?.id === "string" ? v.id : String(v?.id ?? "");
  const m = raw.match(/(\d+)(?!.*\d)/);
  return m ? parseInt(m[1], 10) : 0;
};

export default function TranslationPage() {
  const videos = Array.isArray(videoUrl) ? [...videoUrl] : [];
  videos.sort((a, b) => idNum(b) - idNum(a));

  return (
    <section className="translation">
      <div className="container">
        <h1 className="titleTranslationAll">Усі відео</h1>
        <div className="video-grid">
          {videos.map((v) => (
            <VideoCard key={v.id ?? `${v.title}-${idNum(v)}`} item={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
