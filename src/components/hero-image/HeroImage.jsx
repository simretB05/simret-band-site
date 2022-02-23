import React from "react";
import classes from "../hero-image/heroImage.module.scss";
import Music from "../music/Music";
function HeroImage() {
  return (
    <div>
      <div className={classes.hero}>
        <h2 className={classes.hero__subheader}>Beautiful Beasts Album</h2>
        <h1 className={classes.hero__header}>
          Queen of Yellow x For The Stings
        </h1>
        <div>
          <Music />
        </div>
      </div>

      <h3 className={classes.shows__title}>Shows</h3>
      <ul className={classes.shows__list}>
        <li className={classes.shows__list__item}>DATE</li>
        <li className={classes.shows__list__item}>VENUE</li>
        <li className={classes.shows__list__item}>LOCATION</li>
      </ul>
    </div>
  );
}

export default HeroImage;
