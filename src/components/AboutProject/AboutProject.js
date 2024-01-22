import "./AboutProject.css";

export function AboutProject({ data_for_about }) {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <h3 className="section-title">О проекте</h3>
        <div className="about-project__container">
          <ul className="about-project__items">
            {data_for_about.map((aboutItem) => {
              return (
                <li className="about-project__item">
                  <h4 className="about-project__item-title">
                    {aboutItem.title}
                  </h4>
                  <p className="about-project__item-discription">
                    {aboutItem.discription}
                  </p>
                  {/* <p className="about-project__item-duration">
                    {aboutItem.duration}
                  </p>
                  <p className="about-project__item-work-type">
                    {aboutItem.work_type}
                  </p> */}
                </li>
              );
            })}
          </ul>
          <div className="about-section__timeline-container">
            <div className="about-section__timeline-item_dark-theme">
              <p className="about-section__timeline-text_dark-theme">1 неделя</p>
            </div>
            <div className="about-section__timeline-item">
              <p className="about-section__timeline-text">4 недели</p>
            </div>
            <h6 className="about-section__timeline-title">Back-end</h6>
            <h6 className="about-section__timeline-title">Front-end</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
