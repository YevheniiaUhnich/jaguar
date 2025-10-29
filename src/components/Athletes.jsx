import React from 'react'
import '../styles/Athletes.css'

const Athletes = () => {

  const athletesData = [
    { id: 1, name: 'Тулінов Двніїл', position: '...', birthDate: '24.02.2013', photo: '/athletes/Tulinov.jpg' },
    { id: 2, name: 'Дашко Семен', position: 'Захисник', birthDate: '28.01.2014', photo: '/athletes/Dashko.jpg' },
    { id: 3, name: 'Аболмасов Марко', position: 'Захисник', birthDate: '19.18.2014', photo: '/athletes/Abolmasov.jpg' },
    { id: 4, name: 'Торубара Ілона', position: 'Нападник', birthDate: '20.12.2012', photo: '/athletes/TorubaraI.jpg' },
    { id: 5, name: 'Штепа Лія', position: '...', birthDate: '14.05.2012', photo: '/athletes/ShtepaL.jpg' },
    { id: 6, name: 'Клюшник Катерина', position: '...', birthDate: '14.01.2012', photo: '/athletes/KliushnykK.jpg' },
    { id: 7, name: 'Клюшник Ярослава', position: '...', birthDate: '08.08.2012', photo: '/athletes/KliushnykYa.jpg' },
    { id: 8, name: 'Решетнева Мирослава', position: '...', birthDate: '16.06.2011', photo: '/athletes/Reshetnova.jpg' },
    { id: 9, name: 'Жирко Тимур', position: '...', birthDate: '14.06.2013', photo: '/athletes/Zhirko.jpg' },
    { id: 10, name: 'Бабич Гліб', position: '...', birthDate: '23.07.2013', photo: '/athletes/Babych.jpg' },
    { id: 11, name: 'Литвиненко Микола', position: '...', birthDate: '15.07.2013', photo: '/athletes/Lytvynenko.jpg' },
    { id: 12, name: 'Муль Назар', position: '...', birthDate: '04.06.2013', photo: '/athletes/Mul.jpg' },
    { id: 13, name: 'Москвін Микита', position: '...', birthDate: '05.09.2013', photo: '/athletes/Moskvin.jpg' },
    { id: 14, name: 'Бердиєв Архип', position: '...', birthDate: '04.10.2014', photo: '/athletes/Berdyiev.jpg' },
    { id: 15, name: 'Звягінцев Кирило', position: '...', birthDate: '26.09.2013', photo: '/athletes/Zviahintsev.jpg' },
    { id: 16, name: 'Юрченко', position: '...', birthDate: '00.00.0000', photo: '/athletes/Yurchenko.jpg' },
    { id: 17, name: 'Марченко Фадей', position: 'Воротар', birthDate: '16.05.2013', photo: '/athletes/Marchenko.jpg' },
    { id: 18, name: 'Кравченко', position: '...', birthDate: '00.00.0000', photo: '/athletes/Hravchenko.jpg' },
    { id: 19, name: 'Логунцов', position: '...', birthDate: '00.00.0000', photo: '/athletes/Loguntsov.jpg' },
    { id: 20, name: 'Небоян', position: '...', birthDate: '00.00.0000', photo: '/athletes/Neboian.jpg' },
    { id: 21, name: 'Орлов', position: '...', birthDate: '00.00.0000', photo: '/athletes/Orlov.jpg' },
    { id: 22, name: 'Новосьолов', position: '...', birthDate: '00.00.0000', photo: '/athletes/Novosolov.jpg' },
    { id: 23, name: 'Притула', position: '...', birthDate: '00.00.0000', photo: '/athletes/Prytula.jpg' },
    
  ]

  return (
    <section id="athletes" className="athletes">
      <div className="container">
        <h2 className="section-title">Наші спортсмени</h2>
        <div className="athletes-grid">
          {athletesData.map(athlete => (
            <div key={athlete.id} className="athlete-card">
              <div className="athlete-image">
                {athlete.photo ? (
                  <img 
                    src={athlete.photo} 
                    alt={`Фото ${athlete.name}`} 
                    className="athlete-photo" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="placeholder-image" style={{display: athlete.photo ? 'none' : 'flex'}}>
                  <p>Фото</p>
                </div>
              </div>
              <div className="athlete-info">
                <h3 className="athlete-name">{athlete.name}</h3>
                <p className="athlete-position">{athlete.position}</p>
                <p className="athlete-birthdate">Дата народження: {athlete.birthDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Athletes