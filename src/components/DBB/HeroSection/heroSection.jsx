import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function HeroSection(props) {
  return (
    <div className="dbb-hero-container">
      <div className="dbb-hero-content">
        <div className="dbb-hero-left">
          <h1 className="dbb-hero-nameHead">
            Digital Brand
            <br /> Building
          </h1>
          <div className="dbb-hero-cert">
            with INDUSTRY<b>Creds</b>™ Certification and Live Projects
          </div>
          <h2 className="dbb-hero-info">
            An exclusive program for handpicked students from B-Schools across
            the country.
          </h2>
          <div className="dbb-hero-btn-wrap">
            <div className="dbb-hero-aboutForm">
              Applications for the 2020-22 batch are now open
            </div>
            <div className="dbb-hero-btns">
              <button className="dbb-hero-btn" onClick={props.showFormHandler}>
                {/* Apply Now */}
                GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
        <div className="dbb-hero-right">
          <StaticImage
            className="dbb-hero-img"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/DBB-banner.png"
            placeholder="none"
            title="Digital Brand Building course logo by Kraftshala"
            alt="Digital Brand Building course logo by Kraftshala"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
