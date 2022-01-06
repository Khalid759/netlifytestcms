import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

import "./styles.scss";

function Review() {
  return (
    <div className="pbm-review-container">
      <div className="pbm-review-content">
        <div className="pbm-review-content-head mobile-hide">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/surabhi-tripathi-1.png"
            alt="Surabhi Tripathi, Senior Brand Manager, Pepsico"
            title="Surabhi Tripathi, Senior Brand Manager, Pepsico"
            placeholder="none"
          />
        </div>
        <div className="pbm-review-content-body">
          <div className="pbm-review-content-info">
            <div className="pbm-review-content-head desktop-hide">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/surabhi-tripathi.png"
                alt="Surabhi Tripathi, Senior Brand Manager, Pepsico"
                title="Surabhi Tripathi, Senior Brand Manager, Pepsico"
                placeholder="none"
              />
            </div>
            <div className="pbm-review-content-name">
              Surabhi Tripathi
              <div className="pbm-review-content-role">
                Senior Brand Manager, Pepsico
                <br />
                (Ex-ITC)
              </div>
              <div className="pbm-review-content-lineDesk"></div>
            </div>
          </div>

          <div className="pbm-review-content-content">
            I took up this program to update my skills and be ready for the
            Brand Management role that I had taken up at that time. I got to
            learn frameworks and concepts in absolute granularity and they are
            directly applicable to my job on a daily basis! The journey has been
            great and this was totally worth my time!
            <div className="pbm-testimonial-note">
              {" "}
              You can check out her{" "}
              <a
                href="https://www.linkedin.com/in/surabhitripathi12/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin Profile here
              </a>
              .{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
