import React from "react";
import data from "../../components/Data/data";
import HeroImage from "../../components/hero-image/HeroImage";
import Tickets from "../../components/Tickets/Tickets";
const { products } = data;

function Show() {
  return (
    <div className="content">
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
