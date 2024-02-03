import "./MenuPopup.css";
import { MenuLink } from "../MenuLink/MenuLink";

export function MenuPopup({ togglePopup, popupStatus, popupData }) {
  return (
    <section onClick={togglePopup} className={`popup ${popupStatus ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button onClick={togglePopup} className="popup__exit-button">
          <img src={popupData.exitButton} alt="exit" />
        </button>
        <nav className="popup__link-items">
          <MenuLink title={"Главная"} to={"/"} styleMode={"popup__link-item"} />
          <MenuLink title={"Фильмы"} to={"/movies"} styleMode={"popup__link-item"} />
          <MenuLink title={"Сохраненные фильмы"} to={"/saved-movies"} styleMode={"popup__link-item"} />
          <div className="popup__accaunt-cell">
            <MenuLink title="Аккаунт" to={"/profile"} styleMode={"popup__link-item popup__link-item_accaunt"} />
            <div className="popup__accaunt-image-container">
              <img className="popup__accaunt-image" src={popupData.accauntImg} alt="accImg" />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
