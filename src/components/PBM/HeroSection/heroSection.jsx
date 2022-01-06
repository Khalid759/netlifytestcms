import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function HeroSection(props) {
  const handleClick = () => {
    const navbar = window.document.querySelector(".page-navbar");
    const navBarHeight = navbar.offsetHeight;
    const element =
      document.getElementById("pbm-overview").offsetTop - navBarHeight;
    window.scroll({ top: element, behavior: "smooth" });
  };

  return (
    <div className="pbm-container">
      <div className="pbm-hero-section">
        <h1 className="pbm-program-name">
          <span>Professional </span>
          <span className="brand-management"> Brand Management</span>
          <span className="pbm-digital-txt">in the Digital Age</span>
        </h1>

        <h2 className="pbm-sub-head">
          Fastest path to marketing leadership in the digital age
        </h2>

        <Link
          to={`/professional-brand-management-in-the-digital-age-application-form/${props.urlParams}`}
          className="pbm-apply-now"
        >
          Apply Now
        </Link>

        <div className="pbm-batch-date">
          Batch Starts: 4<sup>th</sup> January 2022
        </div>
        <div className="pbm-arrow-mb" onClick={handleClick} aria-hidden="true">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/header-bottom-arrow.png"
            alt="arrow down"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
