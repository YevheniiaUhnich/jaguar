import React from 'react'
import '../styles/Coach.css'

const Coach = () => {
  return (
    <section id="coach" className="coach">
      <div className="container">
        <h2 className="section-title">Головний тренер</h2>
        <div className="coach-content">
          <div className="coach-image">
            <div className="placeholder-image">
              <img src="/84.jpg" alt="Coach" />
            </div>
          </div>
          <div className="coach-bio">
            <h3>Дмитро Вікторович Якушин</h3>
            <p className="coach-position">Головний тренер</p>
            <p className="coach-description">
              Дмитро Вікторович Якушин - досвідчений тренер з більш ніж
              15-річним стажем роботи. Тренер команди "Ягуари" 13-14 року
              народження (U13) і 10 року народження (U16). Вихованець СДЮШОР
              Харків. У сезоні 1994-95 у 18 років дебютував у CJHL за «Пембрук
              Ламбер Кінгс» - 31 матч, 13 очок. 22 червня 1996 обраний «Торонто
              Мейпл-Ліфс» у 6 раунді, №140 драфту НХЛ 1996. WHL: «Едмонтон Айс»
              1996-97 - 63 ігри, 17 очок; 1997-98 - 29 ігор, 11 очок. Того ж
              сезону ЗХЛ «Реджайна Петс» - 13 ігор, 14 очок; плей-оф - 9 матчів,
              2+8; команда перша у Східному дивізіоні, у плей-оф 4:0 «Муз-Джо
              Ворріорс», 1:4 «Брендон Віт-Кінгс». AHL: «Сент-Джонс Мейпл-Ліфс»
              1998-99 - 71 гра, 2+6; 1999-00 - 64 гри, 1+13; 2000-01 - 45
              матчів, 2 голи. НХЛ: дебют 29 листопада 1999 за «Торонто
              Мейпл-Ліфс» проти «Вашингтон Кепіталс» - 3:1, всього 2 матчі; 26
              вересня 2000 повернений до «Сент-Джонс».
            </p>
            <div className="coach-achievements">
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

export default Coach