import { AboutProject } from "../AboutProject/AboutProject";
import { Technologies } from "../Technologies/Technologies";
import "./Main.css";

export function Main({ projectConstants }) {
  return (
    <main className="main">
      <section className="intro">
        <h1 className="intro__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </section>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">О проекте</li>
          <li className="menu__list-item">Технологии</li>
          <li className="menu__list-item">Студент</li>
        </ul>
      </nav>
      <AboutProject
        dataForAboutProject={projectConstants.dataForAboutProject}
      />
      <Technologies
        technologyList={projectConstants.technologyList}
        dataForTechnologySection={projectConstants.dataForTechnologySection}
      />
    </main>
  );
}
