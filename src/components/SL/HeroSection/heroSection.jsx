import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function HeroSection(props) {
  return (
    <div className="sl-hero-container">
      <div className="sl-hero-content">
        <div className="sl-hero-left">
          <h1 className="sl-hero-nameHead">Sales Leadership</h1>
          <div className="sl-hero-cert">
            with INDUSTRY<b>Creds</b>™ Certification and Live Projects
          </div>
          <h2 className="sl-hero-info">
            An exclusive program for handpicked students from B-Schools across
            the country.
          </h2>
          <div className="sl-hero-btn-wrap">
            <div className="sl-hero-aboutForm">
              Applications for the 2020-22 batch are now open
            </div>
            <div className="sl-hero-btns">
              <button className="sl-hero-btn" onClick={props.showFormHandler}>
                {/* Apply Now */}
                GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
        <div className="sl-hero-right">
          <StaticImage
            className="sl-hero-img"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/SL-banner.png"
            placeholder="none"
            title="Sales Leadership Training Program Logo by Kraftshala"
            alt="Sales Leadership Training Program Logo by Kraftshala"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
