import React from "react";
import { trainersData } from "./data";
import TrainersSlider from "./TrainersSlider/trainersSlider";

import "./styles.scss";

function Trainers() {
  return (
    <div className="pbm-trainers">
      <h2 className="pbm-trainers-head">Program Trainers</h2>
      <div className="pbm-trainers_cards">
        {trainersData.map((info, k) => (
          <div className="pbm-trainers_card" key={k}>
            <img
              className="pbm-trainers_cart_img"
              src={info.image}
              alt={info.alt}
              title={info.alt}
            />
            <div className="pbm-trainers_card-text">
              <div className="pbm-trainers_card-head">{info.name}</div>
              <div className="pbm-trainers_card-desc">{info.designation}</div>
            </div>
          </div>
        ))}
      </div>
      <TrainersSlider />
      <div className="learn-bestMB-border desktop-hide"></div>
    </div>
  );
}

export default Trainers;
