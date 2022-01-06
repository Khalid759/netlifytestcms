import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function HeroSection(props) {
  return (
    <div className="bb-hero-container">
      <div className="bb-hero-content">
        <div className="bb-hero-left">
          <h1 className="bb-hero-nameHead">Brand Building</h1>
          <div className="bb-hero-cert">
            with INDUSTRY<b>Creds</b>™ Certification and Live Projects
          </div>
          <h2 className="bb-hero-info">
            An exclusive program for handpicked students from B-Schools across
            the country.
          </h2>
          <div className="bb-hero-btn-wrap">
            <div className="bb-hero-aboutForm">
              Applications for the 2020-22 batch are now open
            </div>
            <div className="bb-hero-btns">
              <button className="bb-hero-btn" onClick={props.showFormHandler}>
                {/* Apply Now */}
                GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
        <div className="bb-hero-right">
          <StaticImage
            className="bb-hero-img"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/BB-banner.png"
            placeholder="none"
            title="Brand Building course logo by Kraftshala"
            alt="Brand Building course logo by Kraftshala"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
