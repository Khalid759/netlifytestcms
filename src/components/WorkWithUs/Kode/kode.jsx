import React from "react";
import CardGrids from "./CardGrids/cardGrids";
import CardSlider from "./CardSlider/cardSlider";
import { cardData } from "./data.js";

import "./styles.scss";

function Kode() {
  return (
    <div className="wwu-kode-container">
      <div className="wwu-kode-content">
        <div className="wwu-kode-header">
          <h2 className="wwu-kode-header-heading">
            WHAT DO WE VALUE - THE{" "}
            <span className="blockMB">
              <b>KRAFTSHALA KODE</b>
            </span>
          </h2>
          <p className="wwu-kode-header-desc">
            Like all good companies, we value integrity, excellence, respect,
            inclusion, and collaboration. Our team’s distinctiveness comes from
            the following:
          </p>
        </div>
        <div className="mobile-hide">
          <CardGrids data={cardData} />
        </div>
      </div>
      <div className="desktop-hide">
        <CardSlider data={cardData} />
      </div>
    </div>
  );
}

export default Kode;
