import React from "react";
import classes from "../header/header.module.scss";
function Header() {
  return (
    <div>
      <header className={classes.header}>
        <img src="/assets/logos/Logo-bandsite.svg" alt="header" />

        <nav className={classes.navbar}>
          <ul className={classes.navbar__list}>
            <li className={classes.navbar__list__item__bio}>Biography</li>
            <li className={classes.navbar__list__item__show}>Shows</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
