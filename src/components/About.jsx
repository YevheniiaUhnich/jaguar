import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <h2 className="titleAbout">Про нас</h2>
      <div className="about">
        <video
          className="about-bg"
          src="/1104.mov"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="about-overlay" />
        <div className="about-photo-wrap">
          <img src="/JaguarNew1.jpeg" alt="jaguar" className="about-photo" />
          <Link
            to="/about"
            className="btn-about"
            aria-label="детальніше про нас"
          >
            Детальніше
          </Link>
        </div>
        <div className="about-text-wrap">
          <p className="about-hero-text">
            Ласкаво просимо до нашої команди - ХК «Ягуар»! Ми - молодий і
            амбіційний хокейний клуб, який об’єднує юних спортсменів років
            народження 2010-2012 та 2013-2014. Наша мета - створити умови для
            всебічного розвитку кожного гравця, сприяти формуванню високого
            рівня техніки та командної взаємодії.
            {/* <br></br> Ми прагнемо
            підтримати інтерес до хокею серед молоді, зосереджуючись на розвитку
            катання, передач, шайби і такий важливий навичок командної гри. Наші
            тренери - досвідчені фахівці, які працюють за індивідуальним
            підходом з урахуванням особливостей кожного спортсмена. */}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
