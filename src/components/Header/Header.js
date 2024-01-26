import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

export function Header({ navigationButtons }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__menu">
          <nav>
            <ul className="header__menu-list">
              {navigationButtons.map((button) => {
                return (
                  <li key={button} className="header__menu-item">
                    <NavLink className="header__menu-link" to="/movies">
                      {button}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
