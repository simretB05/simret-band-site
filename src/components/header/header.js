import React from "react";
import { Link } from "react-router-dom";
import classes from "../header/header.module.scss";
function Header() {
  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <img src="/assets/logos/Logo-bandsite.svg" alt="header" />
        </Link>

        <nav className={classes.navbar}>
          <ul className={classes.navbar__list}>
            <Link className={classes.navbar__list__bio__link}  aria-label="linkto biography page"to="/">
              <li className={classes.navbar__list__item__bio}>Biography</li>
            </Link>
            <Link className={classes.navbar__list__show__link} to="/Show" aria-label="linkto show page">
              <li className={classes.navbar__list__item__show}>Shows</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
