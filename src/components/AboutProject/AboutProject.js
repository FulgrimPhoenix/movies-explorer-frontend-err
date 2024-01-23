import "./AboutProject.css";

export function AboutProject({ dataForAboutProject }) {
  return (
    <section className="about-project-section">
      <h3 className="section-title">О проекте</h3>
      <div className="about-project-section__container">
        
        <ul className="about-project-section__items">
          {dataForAboutProject.map((aboutItem) => {
            return (
              <li className="about-project-section__item">
                <h4 className="about-project-section__item-title">{aboutItem.title}</h4>
                <p className="about-project-section__item-description">
                  {aboutItem.description}
                </p>
              </li>
            );
          })}
        </ul>
        {/* Try to refactor table architecture */}
        <div className="about-project-section__timeline-container">
          <div className="about-project-section__timeline-item_dark-theme">
            <p className="about-project-section__timeline-text_dark-theme">
              1 неделя
            </p>
          </div>
          {/* add constants to the shared file */}
          <div className="about-project-section__timeline-item">
            <p className="about-project-section__timeline-text">4 недели</p>
          </div>
          <h6 className="about-project-section__timeline-title">Back-end</h6>
          <h6 className="about-project-section__timeline-title">Front-end</h6>
        </div>
      </div>
    </section>
  );
}
