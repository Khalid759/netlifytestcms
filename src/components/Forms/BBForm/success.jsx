import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function BBSuccess(props) {
  return (
    <div className="bb-success-group">
      <div className="bb-success-ty-text1">
        Hey, <span className="bb-success-ty-textFillMidPage">{props.name}</span>
      </div>
      <div className="bb-success-ty-text2">
        Your application is successfully submitted. All the best for the next
        steps in your Kraftshala journey
      </div>
      <div className="bb-success-ty-youtube">
        <a
          href="https://www.youtube.com/watch?v=7yuSbKo5GmY"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/Decoding-top-inian-ads-of-2020-PBM-thankyou-screen-1.webp"
            alt="successfully applied"
            placeholder="none"
          />
        </a>
      </div>
      <div className="bb-success-step3-footer">
        <div className="bb-success-step3-footer-head">
          <div className="bb-success-step3-footer-head-border" />
          <div className="bb-success-step3-footer-heading">Help desk</div>
        </div>
        <div className="bb-success-step3-footer-info">
          <div className="bb-success-step3-footer-hi">
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

export default BBSuccess;
