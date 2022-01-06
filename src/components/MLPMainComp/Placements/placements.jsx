import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import Card2 from "../../TestimonialCard/Card2/index";
import { placementsData } from "./data";

import "./styles.scss";

function Placements() {
  const settings = {
    prevArrow: "",
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="mlp-main-placements">
        <div className="placements-container">
          <h2 className="placements-head">Placements</h2>

          <div className="placements-description">
            You do not pay us anything if you don't get a job making at least
            ₹4.5 lakhs a year or more.
            <span className="placements-description-line-break">
              The more you earn, the more we earn. And so our incentives are
              aligned to getting you placed in top digital marketing roles
            </span>
          </div>

          <div className="recruiting-partner">
            <div className="mlp-student-slider">
              <div className="slider-section-head">Placements Results</div>
              <div className="batch-info">
                <b> 100% placements</b> in roles with{" "}
                <b> CTC {`>=`} 4.5 lakhs</b> Companies hiring across the
                different batches thus far:
              </div>
            </div>

            <div className="recruiter-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/mlp-placement-dsk-v2.png"
                alt="Digital Marketing Recruiting Partners for The Marketing Launchpad"
                title="Recruiting partners"
                placeholder="none"
              />
            </div>
            <div className="recruiter-img-mb">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/mlp-placement-mb-v2.png"
                alt="Digital Marketing Recruiting Partners for The Marketing Launchpad"
                title="Recruiting partners"
                placeholder="none"
              />
            </div>
          </div>

          <div className="placements-description">
            <h3 className="role-head">
              What Digital Marketing roles will I get placed in?
            </h3>
            <div className="placements-role-class">
              <div className="placements-role-class-sec placement-grid-1">
                <div className="placements-role-class-head">
                  <h4>Digital Media Marketing</h4>
                </div>
                <div className="placements-role-class-desc">
                  Performance Marketing Analyst | Digital Marketing Analyst |
                  Marketing Associate | Category Management | Account Manager |
                  SEO Analyst
                </div>
              </div>
              <div className="placements-role-class-sec  placement-grid-2">
                <div className="placements-role-class-head">
                  <h4>Content & Social Media Management</h4>
                </div>
                <div className="placements-role-class-desc">
                  Social Media Specialist | Creative Writing & Content Marketing
                  | Influencer Marketing Specialist
                </div>
              </div>
            </div>
          </div>

          <div className="placement-slider">
            <h3 className="role-head">Hear From our Recruiters </h3>
            <Slider {...settings}>
              {placementsData.map((info, key) => (
                <Card2
                  key={key}
                  image={info.image}
                  name={info.name}
                  company={info.company}
                  description={info.description}
                  extraText={info.extra_text ? info.extra_text : ""}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="should-apply ">
        <h2 className="should-title">Who Should Apply?</h2>

        <h3 className="should-description">
          Digital Marketing Course Eligibility: Anyone who wishes to kickstart
          their marketing career in a high potential role are eligible to apply
          to our digital marketing course.
        </h3>

        <div className="should-description">
          No prior work experience is necessary.
        </div>
      </div>
    </React.Fragment>
  );
}

export default Placements;
