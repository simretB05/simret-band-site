import React from "react";
import HeroImage from "../hero-image/HeroImage";
import Tickets from "../Tickets/Tickets";
import data from "../Data/data";
const { products } = data;

function Show() {
  return (
    <div>
      <HeroImage />
      {products.map((x) => {
        return (
          <Tickets dates={x.dates} venue={x.venue} location={x.location} />
        );
      })}
    </div>
  );
}

export default Show;
