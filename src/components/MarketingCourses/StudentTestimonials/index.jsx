import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

const StudentTestimonials = () => {
  return (
    <div className="student-testimonials">
      <div className="container">
        <div className="student-testi-card">
          <div className="student-image-div">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Mask-Group-2.png"
              placeholder="none"
              alt="Rahul Nagpal | The Marketing Launchpad"
            />
          </div>

          <div className="student-about-div">
            <div className="student-name">
              Rahul Nagpal | The Marketing Launchpad
            </div>

            <div className="student-designation">
              Trainee Analyst @ Performics
            </div>

            <div className="student-about">
              The entire experience at Kraftshala was amazing as there was a lot
              more emphasis on practical knowledge, projects and learning from
              your mistakes rather than just mugging up concepts.
            </div>
          </div>
        </div>
        <div className="student-testi-card reverse-card">
          <div className="student-image-div">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Mask-Group1.png"
              placeholder="none"
              alt="Mayank Sharma | Professional Brand Management in the Digital Age"
            />
          </div>

          <div className="student-about-div">
            <div className="student-name">
              Mayank Sharma | Professional Brand Management in the Digital Age
            </div>

            <div className="student-designation">
              Brand Manager @ Tata SmartFoodz
            </div>

            <div className="student-about">
              With Kraftshala, you get to learn and master methodology that is
              used in the industry. Now, I am neck-to-neck with someone who is
              experienced as a Digital Marketer!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;
