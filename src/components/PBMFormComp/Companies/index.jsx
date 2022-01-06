import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

import "./styles.scss";

function SafeSpace() {
  return (
    <div className="pbm-form-newPartners-wrap">
      <h2 className="newPartners-foot">
        Join other participants from companies like
      </h2>

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
