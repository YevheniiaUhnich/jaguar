const rawPlayers = [
    {
        id: '1-p',
        slug: 'tulinov-daniil',
        photo: '/athletes/Tulinov.jpg',
        surname: 'Тулінов',
        name: 'Даніїл',
        patronymic: '...',
        birthdate: '24.02.2013',
        number: 18,
        position: 'нападник',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        videos: '',
    },
    {
        id: '2-p',
        slug: 'dasko-semen',
        photo: '/athletes/Dashko.jpg',
        surname: 'Дашко',
        name: 'Семен',
        patronymic: 'Вадимович',
        birthdate: '28.01.2014',
        number: 28,
        position: 'захисник',
        weightKg: 48,
        heightCm: 160,
        stick: 'right',
        history: '...',
        videos: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '3-p',
        slug: 'abolmasov-marko',
        photo: '/athletes/Abolmasov.jpg',
        surname: 'Аболмасов',
        name: 'Марко',
        patronymic: 'Павлович',
        birthdate: '19.08.2014',
        number: 19,
        position: 'захисник',
        weightKg: 33,
        heightCm: 150,
        stick: 'right',
        history: '...',
        videos: [
            { src: '/video-athletes/BulitAbolmasov.mp4', poster: '/video-athletes/posterAbolmasov1.jpg' },
            { src: '/video-athletes/BulitAbolmasov2.mp4', poster: '/video-athletes/posterAbolmasov2.jpg'},
          ],

          stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '4-p',
        slug: 'torubara-ilona',
        photo: '/athletes/TorubaraI.jpg',
        surname: 'Торубара',
        name: 'Ілона',
        patronymic: 'Дмитрівна',
        birthdate: '20.12.2012',
        number: 88,
        position: 'нападник',
        weightKg: 57,
        heightCm: 163,
        stick: 'left',
        history: '...',
        videos: [
            {src: '/video-athletes/BulitTorubara.mp4', poster: '/video-athletes/posterTorubara2.jpg'},
            {src: '/video-athletes/BulitTorubara2.mp4', poster: '/video-athletes/posterTorubara1.jpg'}
        ],

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '5-p',
        slug: 'shtepa-liya',
        photo: '/athletes/ShtepaL.jpg',
        surname: 'Штепа',
        name: 'Лія',
        patronymic: '',
        birthdate: '14.05.2012',
        number: 14,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '6-p',
        slug: 'kliushnyk-kateryna',
        photo: '/athletes/KliushnykK.jpg',
        surname: 'Клюшник',
        name: 'Катерина',
        patronymic: '',
        birthdate: '14.01.2012',
        number: 8,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '7-p',
        slug: 'kliushnyk-yaroslava',
        photo: '/athletes/KliushnykYa.jpg',
        surname: 'Клюшник',
        name: 'Ярослава',
        patronymic: '',
        birthdate: '08.08.2012',
        number: 17,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '8-p',
        slug: 'reshetnova-myroslava',
        photo: '/athletes/Reshetnova.jpg',
        surname: 'Решетнева',
        name: 'Мирослава',
        patronymic: '',
        birthdate: '16.06.2011',
        number: 78,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '9-p',
        slug: 'zhirko-tymur',
        photo: '/athletes/Zhirko.jpg',
        surname: 'Жирко',
        name: 'Тимур',
        patronymic: '',
        birthdate: '14.06.2013',
        number: 77,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '10-p',
        slug: 'babycn-hlib',
        photo: '/athletes/Babych.jpg',
        surname: 'Бабич',
        name: 'Гліб',
        patronymic: '',
        birthdate: '23.07.2013',
        number: 25,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '11-p',
        slug: 'lytvynenko-mykola',
        photo: '/athletes/Lytvynenko.jpg',
        surname: 'Литвиненко',
        name: 'Микола',
        patronymic: '',
        birthdate: '15.07.2013',
        number: 52,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '12-p',
        slug: 'mul-nazar',
        photo: '/athletes/Mul.jpg',
        surname: 'Муль',
        name: 'Назар',
        patronymic: '',
        birthdate: '04.06.2013',
        number: 7,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '13-p',
        slug: 'moskvin-mykyta',
        photo: '/athletes/Moskvin.jpg',
        surname: 'Москвін',
        name: 'Микита',
        patronymic: '',
        birthdate: '05.09.2013',
        number: 66,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '14-p',
        slug: 'berdyiev-arhyp',
        photo: '/athletes/Berdyiev.jpg',
        surname: 'Бердиєв',
        name: 'Архип',
        patronymic: '',
        birthdate: '04.10.2014',
        number: 68,
        position: 'воротар',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '15-p',
        slug: 'zviahintsev-kyrylo',
        photo: '/athletes/Zviahintsev.jpg',
        surname: 'Звягінцев',
        name: 'Кирило',
        patronymic: '',
        birthdate: '26.09.2013',
        number: 12,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '16-p',
        slug: 'yurchenko',
        photo: '/athletes/Yurchenko.jpg',
        surname: 'Юрченко',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 11,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '17-p',
        slug: 'marchenko-fadey',
        photo: '/athletes/Marchenko.jpg',
        surname: 'Марченко',
        name: 'Фадей',
        patronymic: '',
        birthdate: '16.05.2013',
        number: 87,
        position: 'воротар',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '18-p',
        slug: 'hravchenko',
        photo: '/athletes/Hravchenko.jpg',
        surname: 'Кравченко',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 89,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '19-p',
        slug: 'loguntsov',
        photo: '/athletes/Loguntsov.jpg',
        surname: 'Логунцов',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 49,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '20-p',
        slug: 'neboian',
        photo: '/athletes/Neboian.jpg',
        surname: 'Небоян',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 72,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '21-p',
        slug: 'orlov',
        photo: '/athletes/Orlov.jpg',
        surname: 'Орлов',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 22,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '22-p',
        slug: 'novosolov',
        photo: '/athletes/Novosolov.jpg',
        surname: 'Новосьолов',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 37,
        position: '',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },
    {
        id: '23-p',
        slug: 'prytula',
        photo: '/athletes/Prytula.jpg',
        surname: 'Притула',
        name: '',
        patronymic: '',
        birthdate: '00.00.0000',
        number: 31,
        position: 'воротар',
        weightKg: 11,
        heightCm: 11,
        stick: '',
        history: '...',
        video: '',

        stats: {
            regular: [
              { season: '2022-2023', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2023-2024', club: 'Ягуари', league: 'ЧУ U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2024-2025', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
              { season: '2025-2026', club: 'Ягуари', league: 'Еліт-ліга U13', games: 0, goals: 0, assists: 0, pim: 0 },
            ]
          }
    },

]

const DEFAULTS = {
    photo: '',
    patronymic: '',
    birthdate: null,  
    number: null,
    position: '',
    weightKg: null,
    heightCm: null,
    stick: '',
    history: '',
    video: [],
  };

  const toISO = (s) => {
    if (!s || s === '00.00.0000') return null;
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(s)) {
      const [d, m, y] = s.split('.');
      return `${y}-${m}-${d}`; 
    }
    return s; 
  };
  const cleanNum = (n) => (n === 11 || n === 0 ? null : n); 
  
  const normalize = (p) => ({
    ...DEFAULTS,
    ...p,
    birthdate: toISO(p.birthdate),
    weightKg: cleanNum(p.weightKg),
    heightCm: cleanNum(p.heightCm),
    videos: Array.isArray(p.videos)
    ? p.videos.map(v => typeof v === 'string' ? ({ src: v, poster: '' }) : v)
    : [],
  });

  export const players = rawPlayers.map(normalize);

  export const getPlayerBySlug = (slug) => players.find(p => p.slug === slug);