import React from 'react'
import '../styles/GoalkeeperCoach.css';

const GoalkeeperCoach = () => {
  return (
    <section id="goalkeeper" className="goalkeeper">
      <div className="container">
        <h2 className="goalkeeper-title">Тренер воротарів</h2>
        <div className="goalkeeper-content">
          <div className="goalkeeper-image">
            <div className="placeholder-imageGoalkeeper">
              <img src="/H.png" alt="Coach goalkeeper" />
            </div>
          </div>
          <div className="goalkeeper-bio">
            <h3>Олександр Харитонов</h3>
            <p className="goalkeeper-position">Тренер воротарів</p>
            <p className="goalkeeper-description">......</p>
            <div className="goalkeeper-achievements">
              <div className="achievement">
                <span className="achievement-number">15+</span>
                <span className="achievement-text">років досвіду</span>
              </div>
              <div className="achievement">
                <span className="achievement-number">20+</span>
                <span className="achievement-text">чемпіонів</span>
              </div>
              <div className="achievement">
                <span className="achievement-number">5</span>
                <span className="achievement-text">міжнародних призерів</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalkeeperCoach;