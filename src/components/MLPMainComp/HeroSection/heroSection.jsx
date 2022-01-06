import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "./styles.scss";

function HeroSection(props) {
  return (
    <div className="mlp-main-hero">
      <div className="mlp-title">
        <div className="mlp-logo">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/4-copy-1-1.png"
            alt="Marketing Launchpad-Online Digital Marketing Course Kraftshala"
            title="The Marketing Launchpad Logo"
            placeholder="none"
          />
        </div>
        <h1 className="trademark">
          Online digital marketing course with <b>INDUSTRY</b>Creds™
          Certification
        </h1>

        <div className="apply-section mtop-3">
          <h2 className="education-txt">Education that gets you hired</h2>

          <Link
            to={`/marketing-launchpad-application-form/${props.urlParams}`}
            className="apply-btn-wrap"
          >
            <div className="apply-btn mtop-1">Apply Now</div>
          </Link>

          <div className="batch-date mtop-1">Batch Starts: 27th January</div>
        </div>
      </div>

      <div className="mlp-hero-img">
        <StaticImage
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Group-11306-1.png"
          alt="The Marketing Launchpad Hero"
          title="The Marketing Launchpad Hero"
          placeholder="none"
        />
      </div>
    </div>
  );
}

export default HeroSection;
