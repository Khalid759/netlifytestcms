import React from "react";

import "./styles.scss";

const HiringSolutions = () => {
  return (
    <div className="hiring-solution-container">
      <h2>
        Hiring solutions for <b>companies of every size</b>
      </h2>

      <div className="hiring-card-div">
        <div className="fees-div">
          <div className="fee-content">
            <div className="fee-title">NO HIRING FEES</div>

            <div className="fee-sub">
              Let us know what roles and skill sets you’re looking to fill and
              we’ll match you to a few students we think you’ll love at no cost
              to you.
            </div>
          </div>

          <div className="fee-img">
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582285106/Group_11246_vwfewv.svg"
              alt=""
            />
          </div>
        </div>

        <div className="fee-bg">
          <div className="fees-div ">
            <div className="fee-img">
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1582285143/Group_11254_pdg4wn.svg"
                alt=""
              />
            </div>

            <div className="fee-content">
              <div className="fee-title">No-RISK HIRING</div>

              <div className="fee-sub">
                Want to try out our candidate matching program before you make a
                full-time hire? Fill temporary gaps in your staff by hiring a
                Kraftshala alumni for 3-6 months, and if you love them, hire
                them full-time with no recruiting fees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringSolutions;
