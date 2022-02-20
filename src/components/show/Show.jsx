import React from "react";
import classes from "../show/show.module.scss";

function Show(props) {
  const { product } = props;
  return (
    <div className={classes.show}>
      {/* <div className={classes.main}>
        <h1 className={classes.main__tilte}>Shows</h1>
      </div> */}
      <div className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.list__title__dates}>DATES</li>
          <li className={classes.list__item}>{product.DATES}</li>
          <li className={classes.list__title__venue}>VENUE</li>
          <li className={classes.list__item}>{product.VENUE}</li>
          <li className={classes.list__title__location}>LOCATION</li>
          <li className={classes.list__item}>{product.LOCATION}</li>
        </ul>
        <button className={classes.button}>BUY TICKETS</button>
      </div>
      <hr />
    </div>
  );
}

export default Show;
