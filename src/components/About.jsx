import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <h2 className="titleAbout">Про нас</h2>
      <div className="about">
        <video
          className="hero-bg"
          src="/1104.mov"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="about-overlay" />
    </section>
  );
};
export default About;
