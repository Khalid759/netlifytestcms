import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function IndustryPartners() {
  return (
    <div className="dbb-main-parteners" id="partners">
      <div className="dbb-default-wrap partners">
        <h2 className="dbb-highlight-heading">
          INDUSTRY <b>PARTNERS</b>
        </h2>
        <p className="dbb-program-overview-head-desc">
          With our sales and marketing expertise, we work with some of the top
          recruiters in training B-School talent.
        </p>
        <div className="dbb-partners-cards">
          <StaticImage
            className="dbb-partners-card item1"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/hindustan-unilever.png"
            alt="hindustan unilever logo"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item2"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/nestle.png"
            alt="nestle logo"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item3"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/reckitt.png"
            alt="reckitt logo"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item4"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/marico.png"
            alt="marico"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item5"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/3M.png"
            alt="3M logo"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item6"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/performics.png"
            alt="performics logo"
            placeholder="none"
          />
          <StaticImage
            className="dbb-partners-card item7"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/yum.png"
            alt="yum logo"
            placeholder="none"
          />
        </div>
      </div>
      <div className="dbb-default-wrap hideMB">
        <div className="dbb-testimonial-card ">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/kriti-kaur.png"
            className="dbb-testimonial-card-img mobile-hide-800"
            alt="Kriti Kaur Sablok Ex - Employer Brand Manager, Hindustan Unilever"
            title="Kriti Kaur Sablok Ex - Employer Brand Manager, Hindustan Unilever"
            placeholder="none"
          />
          <div className="dbb-testimonial-card-content">
            <div className="dbb-testimonial-card-content-head">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/kriti-kaur.png"
                className="dbb-testimonial-card-img desktop-hide-800"
                alt="Kriti Kaur Sablok Ex - Employer Brand Manager, Hindustan Unilever"
                title="Kriti Kaur Sablok Ex - Employer Brand Manager, Hindustan Unilever"
                placeholder="none"
              />
              <div className="dbb-testimonial-card-content-head-profile">
                <p className="dbb-testimonial-card-content-head-profile-name">
                  Kriti Kaur Sablok
                </p>
                <p className="dbb-testimonial-card-content-head-profile-desig">
                  Ex - Employer Brand Manager, Hindustan Unilever
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                className="dbb-testimonial-card-content-head-quoute"
                alt="quote"
              />
            </div>
            <p className="dbb-testimonial-card-content-desc">
              “It has been a pleasure working with Kraftshala as our partner
              right from Day 1. The team under the leadership of Varun Satia has
              always brought in strategic insights which helped strengthen our
              brand. The uniqueness that Kraftshala brings to the table is to{" "}
              <b>
                demystify ‘marketing’ and bring in tools on the science and art
                of marketing.
              </b>{" "}
              This results in a set of candidates who{" "}
              <b>become real assets to the company from day 1“.</b>
            </p>
          </div>
        </div>
        <div className="dbb-testimonial-card">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/emilia.png"
            className="dbb-testimonial-card-img mobile-hide-800"
            alt="Emilia Matsumura Director of Marketing, Asia Pacific at Taco Bell"
            title="Emilia Matsumura Director of Marketing, Asia Pacific at Taco Bell"
            placeholder="none"
          />
          <div className="dbb-testimonial-card-content">
            <div className="dbb-testimonial-card-content-head">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/emilia.png"
                className="dbb-testimonial-card-img desktop-hide-800"
                alt="Emilia Matsumura Director of Marketing, Asia Pacific at Taco Bell"
                title="Emilia Matsumura Director of Marketing, Asia Pacific at Taco Bell"
                placeholder="none"
              />
              <div className="dbb-testimonial-card-content-head-profile">
                <p className="dbb-testimonial-card-content-head-profile-name">
                  Emilia Matsumura
                </p>
                <p className="dbb-testimonial-card-content-head-profile-desig">
                  Director of Marketing, Asia Pacific at Taco Bell
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                className="dbb-testimonial-card-content-head-quoute"
                alt="quote"
              />
            </div>
            <p className="dbb-testimonial-card-content-desc">
              “Kraftshala crafted a training module for our teams to ensure that
              our communication is always ‘on-brand’. The module was
              entertaining, easy to follow and interesting.
              <b>
                {" "}
                They demonstrated their expertise in the marketing by creating a
                tailored, one-of-a-kind brand workshop that I know we will refer
                back to for years to come.”
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryPartners;
