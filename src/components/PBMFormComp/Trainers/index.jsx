import React from "react";
import { trainersDesktopData } from "./data";
import { trainersMobileData } from "./data";

import "./styles.scss";

function Trainers() {
  return (
    <div className="pbm-form-trainers">
      <h2 className="pbm-trainers-head">Program Trainers</h2>
      <div className="desktop-hide">
        <div className="pbm-trainers_cards">
          {trainersMobileData.map((info, k) => (
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
                <div className="pbm-trainers_card-desc">{info.ex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mobile-hide">
        <div className="pbm-trainers_cards">
          {trainersDesktopData.map((info, k) => (
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
                <div className="pbm-trainers_card-desc">{info.ex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trainers;
