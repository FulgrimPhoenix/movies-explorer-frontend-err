import { AboutMe } from "../AboutMe/AboutMe.js";
import { AboutProject } from "../AboutProject/AboutProject.js";
import { Portfolio } from "../Portfolio/Portfolio.js";
import { Techs } from "../Techs/Techs.js";
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
        aboutProjectData={projectConstants.aboutProjectData}
      />
      <Techs
        techsList={projectConstants.techsData.techsList}
        techsData={projectConstants.techsData}
      />
      <AboutMe AboutMeData={projectConstants.AboutMeData} />
      <Portfolio portfolioData={projectConstants.portfolioData} />
    </main>
  );
}
