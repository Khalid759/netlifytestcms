import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Programs() {
  return (
    <div className="sl-program-default-wrap">
      <h2 className="sl-program-highlight-heading">
        Looking for more{" "}
        <span className="sl-program-blockMB">
          <b>B-School programs?</b>
        </span>
      </h2>
      <div className="sl-program-twoColGrid">
        <div className="sl-program-card">
          <div className="sl-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/brand-building.png"
              placeholder="none"
              alt="Brand Building"
              title="Brand Building"
            />
          </div>
          <div className="sl-program-card-content">
            <h2 className="sl-program-card-heading">Brand Building</h2>
            <div className="sl-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="sl-program-card-btn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kraftshala.com/brand-building/"
              >
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="sl-program-card">
          <div className="sl-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/digital-brand-building.png"
              placeholder="none"
              alt="Digital Brand Building"
              title="Digital Brand Building"
            />
          </div>
          <div className="sl-program-card-content">
            <h2 className="sl-program-card-heading">Digital Brand Building</h2>
            <div className="sl-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="sl-program-card-btn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kraftshala.com/digital-brand-building/"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
