import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

import "./styles.scss";

function SafeSpace() {
  return (
    <div className="newPartners-wrap">
      <h2 className="newPartners-head">
        Your <span> safe space for life </span> with a tribe of
        <span className="desk-block"> like-minded people.</span>
      </h2>
      <div className="newPartners-desc">
        You will be a part of a group of 3-4 people who will come from different
        experiences. But all of you will have the zeal to go over and above to
        learn and succeed in marketing and thus will become your safe space! In
        addition, you get access to a closed knit community of 2500+ ambitious
        professionals (and growing) becomes available to you for all kinds of
        support.
      </div>
      <h3 className="newPartners-foot">
        Join other participants from companies like
      </h3>

      <div className="compWrapNew mobile-hide">
        <StaticImage
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/alumni-company-dsk.png"
          alt="Kraftshala partner companies"
          title="Kraftshala partner companies"
          placeholder="none"
        />
      </div>
      <div className="compWrapNew desktop-hide">
        <StaticImage
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/alumni-company.png"
          alt="Kraftshala partner companies"
          title="Kraftshala partner companies"
          placeholder="none"
        />
      </div>
    </div>
  );
}

export default SafeSpace;
