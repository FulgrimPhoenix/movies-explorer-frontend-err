import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUrlPathName } from "../../hooks/useUrlPathName";

export function Header({ headerData, isLoggedIn }) {
  const setActive = ({ isActive }, baseStyle) =>
    isActive ? `${baseStyle} header__link_active` : `${baseStyle}`;

  const isMainPage = useUrlPathName() === "/";

  return (
    <header
      className={`header ${
        isMainPage ? "header_main-page-color" : ""
      }`}
    >
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img src={headerData.logo} alt="logo" />
        </Link>

        <div className="header__menu">
          <nav>
            <ul className="header__menu-list">
              {isLoggedIn ? (
                <>
                  <li className="header__menu-nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        setActive({ isActive }, "header__nav-link")
                      }
                      to="/movies"
                    >
                      Фильмы
                    </NavLink>
                  </li>
                  <li className="header__menu-nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        setActive({ isActive }, "header__nav-link")
                      }
                      to="saved-movies"
                    >
                      Сохраненные фильмы
                    </NavLink>
                  </li>
                  <li className="header__profile-cell">
                    <NavLink
                      className={({ isActive }) =>
                        setActive({ isActive }, "header__accaunt-nav-link")
                      }
                      to="profile"
                    >
                      Аккаунт
                    </NavLink>
                    <div className={`header__accaunt-img-container ${isMainPage ? "" : "header__accaunt-img-container_lite"}`}>
                      <picture className="header__accaunt-img">
                        <source
                          srcSet={!isMainPage ? headerData.accauntImgPink : headerData.accauntImg}
                          media="(min-width: 600px)"
                          type="image/svg"
                        />
                        <img src={!isMainPage ? headerData.legacyAccauntImgPink : headerData.legacyAccauntImg} alt="logo" />
                      </picture>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__menu-item">
                    <Link className="header__link" to="signup">
                      Регистрация
                    </Link>
                  </li>
                  <li className="header__menu-item header__menu-item_dark-theme">
                    <Link
                      className="header__link header__link_dark-theme"
                      to="signin"
                    >
                      Войти
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
