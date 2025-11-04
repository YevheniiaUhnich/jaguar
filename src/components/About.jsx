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
          <img src="/HK-Jaguar-gray.jpg" alt="jaguar" className="about-photo" />
          <Link
            to="/about"
            className="btn-about"
            aria-label="детальніше про нас"
          >
            Детальніше
          </Link>
        </div>{" "}
      </div>
    </section>
  );
};
export default About;
