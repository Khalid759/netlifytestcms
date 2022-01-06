import React from "react";
import HelpDesk from "../../Common/HelpDesk/helpDesk";

function InEligible() {
  return (
    <React.Fragment>
      <div className="pbm-screen-thankYou pbm-screen-inEligible">
        <div className="success-msg mid-container">
          You have successfully submitted your application.
        </div>

        <div className="curve-container">
          <div className="next-steps mtop-2 mid-container">
            Thank you for your interest in the Professional Brand Management
            Program However, we cannot process this application further for now,
            since this is a program eligible for working professionals
            <div className="mtop-2">
              In the meantime, you can check out our other programs that are
              designed for
            </div>
          </div>

          <div className="courses">
            <div className="graduates mtop-2">
              <div className="for-grads">Graduates</div>

              <div className="course-img mtop-1">
                <a
                  href="https://www.kraftshala.com/marketing-launchpad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Marketing-Launchpad-Logo-2-1-1.png"
                    alt="Marketing Launchpad"
                  />
                </a>
              </div>
            </div>

            <div className="bSchools mtop-2">
              <div className="for-bSchools">B-School Students</div>

              <div className="course-img mtop-1">
                <a
                  href="https://www.kraftshala.com/digital-brand-building/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/BB-square-3.png"
                    alt="Digital Brand Building"
                  />
                </a>
              </div>
            </div>
          </div>

          <HelpDesk />
        </div>
      </div>
    </React.Fragment>
  );
}

export default InEligible;
