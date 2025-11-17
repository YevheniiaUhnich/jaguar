export const tur1U13 = [
  {
    points: 0,
    name: "МДЮСШ Ягуари, м. Дніпро",
  },
  {
    points: 6,
    name: "ДЮСШ Сокіл 1, м. Київ",
  },
  {
    points: 6,
    name: "ЮСШ Сокіл 2, м. Київ",
  },
  {
    points: 6,
    name: "ДЮСШ Крижинка, м. Київ",
  },
  {
    points: 6,
    name: "МДЮСШ Дніпро, м. Дніпро",
  },
  {
    points: 6,
    name: "ДЮСШ Авангард, м. Кременчук",
  },
  {
    points: 6,
    name: "ДЮСШ Патріот, м. Вінниця",
  },
  {
    points: 6,
    name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав",
  },
];

export const teams = [
  { id: "jaguars", points: 0, name: "МДЮСШ Ягуари, м. Дніпро" },
  { id: "sokil1", points: 6, name: "ДЮСШ Сокіл 1, м. Київ" },
  { id: "sokil2", points: 3, name: "ДЮСШ Сокіл 2, м. Київ" },
  { id: "kryzhynka", points: 0, name: "ДЮСШ Крижинка, м. Київ" },
  { id: "dnipro", points: 3, name: "МДЮСШ Дніпро, м. Дніпро" },
  { id: "avangard", points: 0, name: "ДЮСШ Авангард, м. Кременчук" },
  { id: "patriot", points: 6, name: "ДЮСШ Патріот, м. Вінниця" },
  { id: "shershni", points: 6, name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав" },
];

// хто зліва в рядках
export const rowTeams = ["jaguars", "sokil1", "sokil2", "kryzhynka"];

// хто зверху в колонках
export const colTeams = ["patriot", "avangard", "dnipro", "shershni"];

// допоміжна функція
export const getTeamById = (id) => teams.find((t) => t.id === id);

// рахунки: рядкова команда vs колонкова
export const tur1 = {
  jaguars: {
    patriot: ["1:6", "2:14"],
  },
  sokil1: {
    avangard: ["18:1", "20:2"],
  },
  sokil2: {
    dnipro: ["1:5", "4:2"],
  },
  kryzhynka: {
    shershni: ["4:10", "5:7"],
  },
};
