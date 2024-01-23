import "./Technologies.css";

export function Technologies({ technologyList, dataForTechnologySection }) {
  return (
    <section className="technologies-section">
      <h3 className="section-title">Технологии</h3>
      <div className="technologies-section__container">
        <h2 className="technologies-section__title">
          {dataForTechnologySection.title}
        </h2>
        <p className="technologies-section__description">
          {dataForTechnologySection.description}
        </p>
        <ul className="technologies-grid">
          {technologyList.map((item) => {
            return (
              <li className="technologies-grid__cell">
                <p className="technologies-grid__cell-content">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
