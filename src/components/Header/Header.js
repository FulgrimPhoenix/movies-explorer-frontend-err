import "./Header.css";
import logo from "../../images/logo.svg";

export function Header({ children }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="headr__menu">
        {children}
      </div>
    </header>
  );
}
