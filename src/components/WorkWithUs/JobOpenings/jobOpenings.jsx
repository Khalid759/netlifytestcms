import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";
// import { jobData } from "./data";

import "./styles.scss";

function JobOpenings() {
  // const activeJobs = jobData
  //   .slice(0)
  //   .reverse()
  //   .filter((data) => {
  //     return data.is_active;
  //   });

  return (
    <div className="wwu-openings" id="jobOpenings">
      <h2 className="wwu-openings-heading">
        <a
          href="https://kraftshala.freshteam.com/jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Current Job Openings &rarr;
        </a>
      </h2>
      {/* <ul className="wwu-openings-list">
        {activeJobs.map((item, key) => {
          return (
            <li key={key}>
              <div className="wwu-openings-list-content">
                <div className="wwu-openings-list-head">
                  <h3>{item.title}</h3>
                  <Link
                    className="apply_posting"
                    to={"/work-with-us-apply-now/" + item.id}
                  >
                    Apply Now
                  </Link>
                </div>
                <div className="wwu-openings-list-location">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/location-icon.webp"
                    placeholder="none"
                    alt="location icon"
                  />
                  New Delhi
                </div>
              </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default JobOpenings;
