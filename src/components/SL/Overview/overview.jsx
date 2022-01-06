import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { overviewData } from "./data";

import "./styles.scss";

function Overview() {
  return (
    <div className="sl-main-overview" id="overview">
      <div className="sl-program-overview scroll">
        <h2 className="sl-highlight-heading">
          PROGRAM <b>OVERVIEW</b>
        </h2>
        <div className="sl-default-wrap">
          <p className="sl-program-overview-head-desc">
            <b>
              An online sales training course built as an active industry
              immersion to{" "}
            </b>
            give you a distinctive edge in internships, placements & beyond. The
            program features industry forward frameworks and concepts which will
            help you master both B2B and B2C sales and Ecom setups paired with a
            practical, hands-on experience of{" "}
            <b>growing categories and working the market.</b>
          </p>
        </div>
        <div className="sl-overview-subhead">
          We are training you to master ‘industry’s way’ of doing things. And
          our programs deliver that training 10% through content, 20% through
          feedbacks and discussions and 70% by doing it yourself
        </div>
        <div className="sl-default-wrap">
          <div className="sl-program-overview-cards">
            {overviewData.map((item) => {
              return (
                <div className="sl-program-overview-card" key={item.id}>
                  <div>
                    <img
                      src={item.image}
                      className="sl-program-overview-card-img"
                      alt={item.alt}
                      title={item.alt}
                    />
                  </div>
                  <p
                    className="sl-program-overview-card-desc"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sl-default-wrap">
          <div className="sl-program-overview-insights">
            <h2 className="sl-program-overview-insights-heading">
              with insights on:
            </h2>
            <StaticImage
              className="sl-program-overview-insights-DesktopImage mobile-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/sl_insights_desk.png"
              alt="Brand case studies by Kraftshala"
              title="Brand case studies by Kraftshala"
              placeholder="none"
            />

            <StaticImage
              className="sl-program-overview-insights-MobileImage desktop-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/sl_insights_mob.png"
              alt="Brand case studies by Kraftshala"
              title="Brand case studies by Kraftshala"
              placeholder="none"
            />
          </div>
        </div>
        <div className="sl-single-testimonial sl-default-wrap wrapSmall">
          <StaticImage
            className="sl-single-testimonial-img mobile-hide-800"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/chinmay-panday.png"
            alt="Chinmay Panday | JBIMS Mumbai Batch’19, HUL"
            title="Chinmay Panday | JBIMS Mumbai Batch’19, HUL"
            placeholder="none"
          />
          <div className="sl-single-testimonial-content">
            <div className="sl-single-testimonial-content-head">
              <StaticImage
                className="sl-single-testimonial-img desktop-hide-800"
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/SL/chinmay-panday.png"
                alt="Chinmay Panday | JBIMS Mumbai Batch’19, HUL"
                title="Chinmay Panday | JBIMS Mumbai Batch’19, HUL"
                placeholder="none"
              />
              <div className="sl-single-testimonial-content-head-desc">
                <p>
                  <b>Chinmay Panday | JBIMS Mumbai Batch’19</b>
                </p>
                <p>Placed at HUL</p>
                <p>
                  INDUSTRY<b>Creds™ Score: 88</b>
                </p>
                <p>Sales Leadership Program</p>
              </div>
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                className="sl-single-testimonial-content-head-quote"
                alt="quote"
              />
            </div>
            <p className="sl-single-testimonial-content-desc">
              “I cannot narrow it down to a particular one thing about
              Kraftshala that helped me. It's about how their online sales
              training course in its entirety familiarised me with the marketing
              concepts through rich content and the application of those
              concepts through live projects. Doing the projects with
              Kraftshala's Sales Leadership program gave me an understanding of
              how things work and thus during internship gave me a headstart in
              understanding the processes and working my way through my
              internship project more productively”
            </p>
          </div>
        </div>

        <div className="sl-queryBG">
          <div className="sl-default-wrap sl-wrapSmall">
            <div className="sl-program-overview-query program-overview-queryMB">
              <h2 className="sl-program-overview-query-head">
                WHO SHOULD APPLY?
              </h2>
              <p className="sl-program-overview-query-desc">
                In case you are aspiring for a B2C sales role in consumer goods,
                e-commerce, banking or a B2B sales role in healthcare and IT
                etc, then this online sales training program would be suited for
                you.
              </p>
              <p className="sl-program-overview-query-desc mtop-1">
                Our past students have ranged from campuses like IIM A, IIM B,
                IIM C, IIM I, IIM L, IIM K, SPJAIN, MDI, ISB and also BIMTECH,
                SIIB, KJSOM, VGSOM, amongst many more.
              </p>
            </div>

            <div className="sl-admission-container">
              <div>
                <h2 className="sl-admission-section-title">
                  Admissions Process
                </h2>
              </div>

              <div className="sl-admission-timline">
                <div className="sl-admission-vl"></div>

                <div className="sl-admission-section">
                  <div className="sl-admission-title">
                    <div className="sl-admission-deco"></div>

                    <h3 className="sl-admission-title-text">
                      Step 1: Apply to Kraftshala
                    </h3>
                  </div>

                  <div className="sl-admission-description">
                    Apply to any of the program of your preference - Digital
                    Brand Building, Brand Building, Sales Leadership or any of
                    the Preparatory Packages. In case you are not clear, you can
                    always talk to our Admissions Team and change your
                    preference post applying.
                  </div>
                </div>

                <div className="sl-admission-section">
                  <div className="sl-admission-title">
                    <div className="sl-admission-deco"></div>

                    <h3 className="sl-admission-title-text">
                      Step 2: Appear for the Screening Test
                    </h3>
                  </div>

                  <div className="sl-admission-description">
                    Take our Screening Test which will test you on logical
                    ability, user centricity and ability to grasp and apply
                    concepts that we teach. Practice material will be shared
                    with you beforehand. This is an elimination step.
                  </div>
                </div>

                <div className="sl-admission-section">
                  <div className="sl-admission-title">
                    <div className="sl-admission-deco"></div>

                    <h3 className="sl-admission-title-text">
                      Step 3: LIVE discussion on the Screening Test
                    </h3>
                  </div>

                  <div className="sl-admission-description">
                    Upon completion of the Screening Test, you’ll get an
                    invitation to attend a live session by an expert to get
                    clarity on how you could have approached the Test questions.
                    While we can only accept a handful of students, we’d like to
                    help everyone who attempted the Test to become better
                    marketing and sales professionals.
                  </div>
                </div>

                <div className="sl-admission-section">
                  <div className="sl-admission-title">
                    <div className="sl-admission-deco"></div>

                    <h3 className="sl-admission-title-text">
                      Step 4: Enrollment
                    </h3>
                  </div>

                  <div className="sl-admission-description">
                    We will be taking 2-10 students from every campus. Offers
                    will be rolled out basis your profile and your performance
                    in the test! If you get in, welcome to the ride{" "}
                    <span role="img" aria-label="smily">
                      🙂
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
