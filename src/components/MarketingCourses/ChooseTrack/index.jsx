import React from "react";
import "./styles.scss";

const ChooseTrack = () => {
  return (
    <div className="choose-track-container">
      <div className="choose-track-bg">
        <div className="container">
          <div className="choose-track-head">Choose your track</div>

          <div className="choose-track-cards">
            <div className="track-card">
              <div className="track-card-title">For Entry-Level roles</div>

              <div className="track-card-box">
                <div className="track-card-deco">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/marketing-courses/mlp-deco.svg"
                    alt=""
                  />
                </div>
                <div className="track-card-title-mob">
                  For Entry-Level roles
                  <span className="bottom-line"></span>
                </div>
                <div className="track-card-head">The Marketing Launchpad</div>
                <div className="track-card-subhead"></div>
                <div className="seperator"></div>
                <div className="track-card-about">
                  Pay only when you get a job with a CTC of ₹ 4.5 lakhs or more
                </div>
                <div className="track-card-btn">
                  <a
                    href="https://www.kraftshala.com/marketing-launchpad-application-form/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="track-card">
              <div className="track-card-title">For Manager-Level roles</div>
              <div className="track-card-box">
                <div className="track-card-deco">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/marketing-courses/pbm-deco.svg"
                    alt=""
                  />
                </div>
                <div className="track-card-title-mob">
                  For Manager-Level roles
                  <span className="bottom-line"></span>
                </div>
                <div className="track-card-head">
                  Professional Brand Management
                </div>
                <div className="track-card-subhead">in the Digital Age</div>
                <div className="seperator"></div>
                <div className="track-card-about">
                  Fastest path to marketing leadership in the digital age.
                </div>
                <div className="track-card-btn">
                  <a
                    href="https://www.kraftshala.com/professional-brand-management-in-the-digital-age-application-form/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTrack;
