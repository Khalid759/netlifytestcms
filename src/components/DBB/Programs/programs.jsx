import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Programs() {
  return (
    <div className="dbb-program-default-wrap">
      <h2 className="dbb-program-highlight-heading">
        Looking for more{" "}
        <span className="dbb-program-blockMB">
          <b>B-School programs?</b>
        </span>
      </h2>
      <div className="dbb-program-twoColGrid">
        <div className="dbb-program-card">
          <div className="dbb-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/sales-leadership-1.png"
              placeholder="none"
              alt="Sales Leadership"
              title="Sales Leadership"
            />
          </div>
          <div className="dbb-program-card-content">
            <h2 className="dbb-program-card-heading">Sales Leadership</h2>
            <div className="dbb-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="dbb-program-card-btn">
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

        <div className="dbb-program-card">
          <div className="dbb-program-card-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/brand-building.png"
              placeholder="none"
              alt="Brand Building"
              title="Brand Building"
            />
          </div>
          <div className="dbb-program-card-content">
            <h2 className="dbb-program-card-heading">Brand Building</h2>
            <div className="dbb-program-card-desc">
              With Industry<b>Creds</b> certification
            </div>
            <div className="dbb-program-card-btn">
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
      </div>
    </div>
  );
}

export default Programs;
