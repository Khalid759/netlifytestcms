import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Programs() {
  return (
    <div className="bb-program-default-wrap">
      <h2 className="bb-program-highlight-heading">
        Looking for more{" "}
        <span className="bb-program-blockMB">
          <b>B-School programs?</b>
        </span>
      </h2>
      <div className="bb-program-twoColGrid">
        <div className="bb-program-card">
          <div className="bb-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/sales-leadership-1.png"
              placeholder="none"
              alt="Sales Leadership"
              title="Sales Leadership"
            />
          </div>
          <div className="bb-program-card-content">
            <h2 className="bb-program-card-heading">Sales Leadership</h2>
            <div className="bb-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="bb-program-card-btn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kraftshala.com/sales-leadership/"
              >
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="bb-program-card">
          <div className="bb-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/digital-brand-building.png"
              placeholder="none"
              alt="Digital Brand Building"
              title="Digital Brand Building"
            />
          </div>
          <div className="bb-program-card-content">
            <h2 className="bb-program-card-heading">Digital Brand Building</h2>
            <div className="bb-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="bb-program-card-btn">
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
