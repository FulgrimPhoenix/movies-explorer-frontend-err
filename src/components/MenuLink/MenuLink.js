import { NavLink } from "react-router-dom";
import "./MenuLink.css";

export function MenuLink({ styleMode, to, title }) {
  const setActive = ({ isActive }, baseStyle) =>
    isActive
      ? `${baseStyle} navigation__link navigation__link_active`
      : `${baseStyle}`;
  return (
    <NavLink
      className={({ isActive }) => setActive({ isActive }, styleMode)}
      to={to}
    >
      {title}
    </NavLink>
  );
}
