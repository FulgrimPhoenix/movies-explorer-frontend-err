import myPhoto from "../images/myPhoto.jpg";

export const projectConstants = {
  aboutProjectData: [
    {
      title: "Дипломный проект включал 5 этапов",
      description:
        "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
    },
    {
      title: "На выполнение диплома ушло 5 недель",
      description:
        "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
    },
  ],
  techsData: {
    title: "7 технологий",
    description:
      "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.",
    techsList: ["HTML", "CSS", "JS", "React", "Git", "Express.js", "MongoDB"],
  },
  AboutMeData: {
    sectionTitle: "Студент",
    name: "Виталий",
    specialization: "Фронтенд-разработчик, 30 лет",
    aboutMe:
      "Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.",
    photo: myPhoto,
  },
  portfolioData: {
    sectionTitle: "Портфолио",
    menuIcon: "↗",
    projects: [
      { title: "Статичный сайт", link: "https://fulgrimphoenix.github.io/how-to-learn/" },
      { title: "Адаптивный сайт", link: "https://fulgrimphoenix.github.io/russian-travel/" },
      { title: "Одностраничное приложение", link: "https://garazhelka.nomoredomainsmonster.ru/" },
    ],
  },
  footerData: {
    signature: "Ivanyuschin Ilia © 2020",
    mainInfo:"Учебный проект Яндекс.Практикум х BeatFilm.",
    links: [
      { title: "Яндекс.Практикум", link: "https://fulgrimphoenix.github.io/how-to-learn/" },
      { title: "Github", link: "https://fulgrimphoenix.github.io/how-to-learn/" }
    ]
  }
};
