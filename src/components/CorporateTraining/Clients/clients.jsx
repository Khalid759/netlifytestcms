import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function IndustryPartners() {
  return (
    <div className="corp-train-main-parteners" id="partners">
      <div className="corp-train-default-wrap partners">
        <h2 className="corp-train-highlight-heading">
          <b>OUR CLIENTS</b> INCLUDES
        </h2>
        <div className="corp-train-partners-cards">
          <StaticImage
            className="corp-train-partners-card item1"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/hindustan-unilever.webp"
            alt="hindustan unilever logo"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item2"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/nestle.webp"
            alt="nestle logo"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item3"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/reckitt.webp"
            alt="reckitt logo"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item4"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/marico.webp"
            alt="marico"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item5"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/3M.webp"
            alt="3M logo"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item6"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/performics.webp"
            alt="performics logo"
            placeholder="none"
          />
          <StaticImage
            className="corp-train-partners-card item7"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/yum.webp"
            alt="yum logo"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
}

export default IndustryPartners;
