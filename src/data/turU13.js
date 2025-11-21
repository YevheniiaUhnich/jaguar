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
    name: "ДЮСШ Сокіл 2, м. Київ",
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

export const tur2U13 = [
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
    name: "ДЮСШ Сокіл 2, м. Київ",
  },
  {
    points: 0,
    name: "ДЮСШ Крижинка, м. Київ",
  },
  {
    points: 0,
    name: "МДЮСШ Дніпро, м. Дніпро",
  },
  {
    points: 0,
    name: "ДЮСШ Авангард, м. Кременчук",
  },
  {
    points: 0,
    name: "ДЮСШ Патріот, м. Вінниця",
  },
  {
    points: 6,
    name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав",
  },
];

export const tur3U13 = [
  {
    points: 5,
    name: "МДЮСШ Ягуари, м. Дніпро",
  },
  {
    points: 6,
    name: "ДЮСШ Сокіл 1, м. Київ",
  },
  {
    points: 6,
    name: "ДЮСШ Сокіл 2, м. Київ",
  },
  {
    points: 1,
    name: "ДЮСШ Крижинка, м. Київ",
  },
  {
    points: 0,
    name: "МДЮСШ Дніпро, м. Дніпро",
  },
  {
    points: 0,
    name: "ДЮСШ Авангард, м. Кременчук",
  },
  {
    points: 6,
    name: "ДЮСШ Патріот, м. Вінниця",
  },
  {
    points: 0,
    name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав",
  },
];

export const teamsTur1 = [
  { id: "jaguars", points: 0, name: "МДЮСШ Ягуари, м. Дніпро" },
  { id: "sokil1", points: 6, name: "ДЮСШ Сокіл 1, м. Київ" },
  { id: "sokil2", points: 3, name: "ДЮСШ Сокіл 2, м. Київ" },
  { id: "kryzhynka", points: 0, name: "ДЮСШ Крижинка, м. Київ" },
  { id: "dnipro", points: 3, name: "МДЮСШ Дніпро, м. Дніпро" },
  { id: "avangard", points: 0, name: "ДЮСШ Авангард, м. Кременчук" },
  { id: "patriot", points: 6, name: "ДЮСШ Патріот, м. Вінниця" },
  { id: "shershni", points: 6, name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав" },
];

export const teamsTur2 = [
  { id: "jaguars", points: 0, name: "МДЮСШ Ягуари, м. Дніпро" },
  { id: "sokil1", points: 6, name: "ДЮСШ Сокіл 1, м. Київ" },
  { id: "sokil2", points: 6, name: "ДЮСШ Сокіл 2, м. Київ" },
  { id: "kryzhynka", points: 0, name: "ДЮСШ Крижинка, м. Київ" },
  { id: "dnipro", points: 0, name: "МДЮСШ Дніпро, м. Дніпро" },
  { id: "avangard", points: 0, name: "ДЮСШ Авангард, м. Кременчук" },
  { id: "patriot", points: 0, name: "ДЮСШ Патріот, м. Вінниця" },
  { id: "shershni", points: 6, name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав" },
];

export const teamsTur3 = [
  { id: "jaguars", points: 5, name: "МДЮСШ Ягуари, м. Дніпро" },
  { id: "sokil1", points: 6, name: "ДЮСШ Сокіл 1, м. Київ" },
  { id: "sokil2", points: 6, name: "ДЮСШ Сокіл 2, м. Київ" },
  { id: "kryzhynka", points: 1, name: "ДЮСШ Крижинка, м. Київ" },
  { id: "dnipro", points: 0, name: "МДЮСШ Дніпро, м. Дніпро" },
  { id: "avangard", points: 0, name: "ДЮСШ Авангард, м. Кременчук" },
  { id: "patriot", points: 6, name: "ДЮСШ Патріот, м. Вінниця" },
  { id: "shershni", points: 0, name: "КПНЗ КОР КОК ДЮСШ Шершні, м. Богуслав" },
];

export const rowTeams = ["jaguars", "sokil1", "sokil2", "kryzhynka"];

export const colTeams = ["patriot", "avangard", "dnipro", "shershni"];

export const getTeamById = (id) => teams.find((t) => t.id === id);

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

export const tur2 = {
  sokil1: {
    patriot: ["12:2", "6:2"],
  },
  jaguars: {
    sokil2: ["3:4", "1:5"],
  },
  avangard: {
    shershni: ["8:13", "6:13"],
  },
  kryzhynka: {
    dnipro: ["0:0", "0:0"],
  }
}

export const tur3 = {
  sokil1: {
    dnipro: ["10:0", "11:2"],
  },
  sokil2: {
    shershni: ["10:2", "6:5"],
  },
  kryzhynka: {
    jaguars: ["3:4(Б)", "0:6"],
  },
  patriot: {
    avangard: ["18:4", "9:5"],
  },
}
