import React from "react";

import classes from "../Tickets/tickets.module.scss";

function Tickets(props) {
  const { dates, venue, location } = props;
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li className={classes.list__title}>DATES</li>
        <li className={classes.list__item}>{dates}</li>
        <li className={classes.list__title}>VENUE</li>
        <li className={classes.list__item}>{venue}</li>
        <li className={classes.list__title}>LOCATION</li>
        <li className={classes.list__item}>{location}</li>
      </ul>
      <button className={classes.button}>BUY TICKETS</button>
      {/* <hr className={classes.list__hr} /> */}
    </div>
  );
}

export default Tickets;
