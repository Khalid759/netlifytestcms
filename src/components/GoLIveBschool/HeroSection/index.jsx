import React from "react";
import "./styles.scss";
import GoBschoolLiveForm from "../../Forms/GoBschoolLiveForm";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <div>
      <div className="go-bschool-live-wrap">
        <div className="live new-live">
          <div className="live-img-wrap new-img-wrap">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/go_live_bschool/summer-placement.webp"
              alt="Summer Placement Banner"
              placeholder="none"
            />
            <div className="live-content content-div">
              <p className="live-content-head">Upcoming Session</p>
              <div className="live-headlines-content-heading">
                Kraftshala LIVE: Summer Placements Prep
              </div>
              <div className="live-content-desc">
                This exclusive session is for B-school 1st year students who are
                preparing for their summer placement interviews. It will cover:
              </div>
              <ul className="live-content-desc">
                <li>Frameworks to solve the most common marketing cases </li>
                <li>Principles of how to succeed in virtual interviews</li>
                <li>
                  Additional free resources to upskill in sales, marketing, and
                  personal storytelling{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="form-div">
            <GoBschoolLiveForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
