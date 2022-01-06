import React from "react";

import Form from "../../Forms/KraftshalaTraining/index";

import "./styles.scss";

const Overview = () => {
  return (
    <div className="kf-hiring-overview">
      <div className="inner-container">
        <Form />

        <div className="hire-talent">
          <h2>
            Hire talent ready to <b>impact your business from Day 1</b>
          </h2>

          <div className="talent-card">
            <div className="card-tile">
              <div className="tile-title">
                <span className="deco-txt">Freshers trained</span> Freshers
                trained extensively for SEO and Paid Media Roles
              </div>

              <div className="tile-points">
                <ul>
                  <li>
                    Handpicked talent (Selected basis their analytical and
                    communication skills) trained extensively to deliver on the
                    job from Day 1
                  </li>

                  <li>
                    Diverse backgrounds - 0-3 years of experience in tech,
                    digital, sales etc.
                  </li>
                  <li>
                    Trained on functional (SEO, SEM, FB, Google, Amazon Ads) as
                    well as Behavioural Skills (People Orientation, Career
                    Orientation, PPT, Excel etc)
                  </li>
                  <li>
                    100+ students trained and placed in agencies and brands like
                    Performics, iProspect, Souled Store, Toothsi, Sesa Care and
                    more!
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-tile">
              <div className="tile-title">
                <span className="deco-txt">Current B-School Students</span> for
                Sales, Marketing, Digital Roles
              </div>

              <div className="tile-points">
                <ul>
                  <li>
                    Wide reach across 60+ T1, T2 B-Schools (See Full list here)
                  </li>

                  <li>
                    Trained on real-life marketing and sales skills under No
                    coordination with individual placecoms
                  </li>
                  <li>
                    Demonstrated intent towards either sales, marketing or
                    digital
                  </li>
                  <li>
                    Pre-assessed by experts on competencies valued for your jobs
                  </li>
                  <li>No coordination with individual placecoms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
