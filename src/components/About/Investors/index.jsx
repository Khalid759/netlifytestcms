import React from "react";
import "./styles.scss";
import { investorsData } from "./data";

const Investors = () => {
  return (
    <div className="about-us-investors">
      <div className="about-us-investors-wrap">
        <div className="about-us-investors-head">
          <p className="about-us-investors-head-heading">
            meet our{" "}
            <span className="about-us-mb-block">
              <b>investors/gurus</b>
            </span>
          </p>
        </div>
        <div className="about-us-investors-cards">
          {investorsData.map((info, key) => (
            <div className="about-us-investors-card" key={key}>
              <div>
                <img
                  className="about-us-investor-img"
                  src={info.image}
                  alt="nandkishore"
                />
              </div>
              <div className="about-us-investors-card-content">
                <p className="about-us-investors-card-content-name">
                  {info.name}
                </p>
                <p className="about-us-investors-card-content-role">
                  {info.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
