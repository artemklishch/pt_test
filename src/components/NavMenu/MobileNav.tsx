import { FC, useRef } from "react";
import classes from "./MobileNav.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/menu_burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/close_icon.svg";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const MobileNav: FC = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => (menuRef.current!.style.marginLeft = "0px");
  const closeMenu = () => (menuRef.current!.style.marginLeft = "-100%");
  return (
    <nav className={classes.MobileNav}>
      <MenuIcon className={classes.MobileNav__menuicon} onClick={openMenu} />
      <header className={classes.MobileNav__header}>
        Hello to our books shop!!
      </header>
      <ul className={classes.MobileNav__menu} ref={menuRef}>
        <CloseIcon
          className={classes.MobileNav__menu_closeicon}
          onClick={closeMenu}
        />
        <li className={classes.MobileNav__menu_item} onClick={closeMenu}>
          <NavLink to={routes.homeRoute}>Home Page</NavLink>
        </li>
        <li className={classes.MobileNav__menu_item} onClick={closeMenu}>
          <NavLink to={routes.reactVirtualizedRoute}>
            React Virtualized Page
          </NavLink>
        </li>
        <li className={classes.MobileNav__menu_item} onClick={closeMenu}>
          <NavLink to={routes.customRealization}>
            Custom Realization Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
