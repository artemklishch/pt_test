import { FC } from "react";
import classes from "./DesktopNav.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const DesktopNav: FC = () => {
  return (
    <nav className={classes.DesktopNav}>
      <header className={classes.DesktopNav__header}>
        Hello to our books shop!!
      </header>
      <ul className={classes.DesktopNav__menu}>
        <li className={classes.DesktopNav__menu_item}>
          <NavLink to={routes.homeRoute}>Home Page</NavLink>
        </li>
        <li className={classes.DesktopNav__menu_item}>
          <NavLink to={routes.reactVirtualizedRoute}>
            React Virtualized Page
          </NavLink>
        </li>
        <li className={classes.DesktopNav__menu_item}>
          <NavLink to={routes.customRealization}>
            Custom Realization Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
