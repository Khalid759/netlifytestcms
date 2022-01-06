import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function SLSuccess(props) {
  return (
    <div className="sl-success-group">
      <div className="sl-success-ty-text1">
        Hey, <span className="sl-success-ty-textFillMidPage">{props.name}</span>
      </div>
      <div className="sl-success-ty-text2">
        Your application is successfully submitted. All the best for the next
        steps in your Kraftshala journey
      </div>
      <div className="sl-success-ty-youtube">
        <a
          href="https://www.youtube.com/watch?v=7yuSbKo5GmY"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/Decoding-top-inian-ads-of-2020-PBM-thankyou-screen-1.webp"
            alt="successfully applied"
            placeholder="none"
          />
        </a>
      </div>
      <div className="sl-success-step3-footer">
        <div className="sl-success-step3-footer-head">
          <div className="sl-success-step3-footer-head-border" />
          <div className="sl-success-step3-footer-heading">Help desk</div>
        </div>
        <div className="sl-success-step3-footer-info">
          <div className="sl-success-step3-footer-hi">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11313.png"
              alt="contact us"
            />
            hi@kraftshala.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default SLSuccess;
