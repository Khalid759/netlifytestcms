import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Information() {
  return (
    <div className="kflive-infos-wrap">
      <div className="kflive-wrap">
        <div className="kflive-infos">
          <div className="kflive-info">
            <StaticImage
              className="kflive-info-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/kraftshalaLiveSeries/participants.webp"
              placeholder="none"
              alt="Participants"
            />
            <p className="kflive-info-figure">20,000+</p>
            <p className="kflive-info-desc">participants</p>
            <div className="kflive-info-borderMB desktop-hide"></div>
          </div>
          <div className="kflive-info">
            <StaticImage
              className="kflive-info-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/kraftshalaLiveSeries/training.webp"
              placeholder="none"
              alt="Training"
            />
            <p className="kflive-info-figure">90 Minutes</p>
            <p className="kflive-info-desc">of training</p>
            <div className="kflive-info-borderMB desktop-hide"></div>
          </div>
          <div className="kflive-info">
            <StaticImage
              className="kflive-info-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/kraftshalaLiveSeries/rating.webp"
              placeholder="none"
              alt="Average Rating"
            />
            <p className="kflive-info-figure">9.3</p>
            <p className="kflive-info-desc">average rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
