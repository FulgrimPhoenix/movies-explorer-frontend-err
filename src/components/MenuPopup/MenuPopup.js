import "./MenuPopup.css";
import { MenuLink } from "../MenuLink/MenuLink";

export function MenuPopup({ popupData }) {
  return (
    <section className="popup popup_opened">
      <div className="popup__container">
        <button className="popup__exit-button">
          <img src={popupData.exitButton} alt="exit" />
        </button>
        <nav className="popup__link-items">
          <MenuLink title={"Главная"} to={"/"} styleMode={"popup__link-item"}/>
          <MenuLink title={"Фильмы"} to={"/movies"} styleMode={"popup__link-item"}/>
          <MenuLink title={"Сохраненные фильмы"} to={"/saved-movies"} styleMode={"popup__link-item"}/>
        </nav>
      </div>
    </section>
  );
}
