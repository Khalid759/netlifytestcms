import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function Benefits() {
  return (
    <div className="mlp-main-benefits">
      <div className="benefits-container">
        <h2 className="benefit-title">
          We know this is a crucial step for you and here is a simple chart to
          make the decision easy.
        </h2>
        <h2 className="benefit-desc">
          It shows you a comparison of digital marketing courses & career
          trajectories
        </h2>

        <div className="benefit-img">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Group-11292.png"
            alt="Comparison of Digital Marketing Courses & Career Trajectories"
            title="The Marketing Launchpad comparison chart"
            placeholder="none"
          />
        </div>
        <div className="benefit-img-mb">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Group-11254.png"
            alt="Comparison of Digital Marketing Courses & Career Trajectories"
            title="The Marketing Launchpad comparison chart"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
