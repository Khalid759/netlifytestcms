import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { overviewData } from "./data";

import "./styles.scss";

function Overview() {
  return (
    <div className="dbb-main-overview" id="overview">
      <div className="dbb-program-overview scroll">
        <h2 className="dbb-highlight-heading">
          PROGRAM <b>OVERVIEW</b>
        </h2>
        <div className="dbb-default-wrap">
          <p className="dbb-program-overview-head-desc">
            A <b>digital branding course</b> covering communication and media
            built to give you a distinctive edge in internships, placements &
            beyond. This is an active industry immersion which features a unique
            industry forward approach paired with a practical, hands-on
            experience of creating and building a brand campaign in today's
            digital age.
          </p>
        </div>
        <div className="dbb-overview-subhead">
          We are training you to master ‘industry’s way’ of doing things. And
          our programs deliver that training 10% through content, 20% through
          feedbacks and discussions and 70% by doing it yourself
        </div>
        <div className="dbb-default-wrap">
          <div className="dbb-program-overview-cards">
            {overviewData.map((item) => {
              return (
                <div className="dbb-program-overview-card" key={item.id}>
                  <img
                    src={item.image}
                    className="dbb-program-overview-card-img"
                    alt={item.alt}
                    title={item.alt}
                  />
                  <p
                    className="dbb-program-overview-card-desc"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dbb-default-wrap">
          <div className="dbb-program-overview-insights">
            <h2 className="dbb-program-overview-insights-heading">
              Digital Tools you'll learn:
            </h2>
            <StaticImage
              className="dbb-program-overview-insights-DesktopImage mobile-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/tools-group-1.png"
              alt="Digital marketing tools taught by Kraftshala"
              title="Digital marketing tools taught by Kraftshala"
              placeholder="none"
            />
            <StaticImage
              className="dbb-program-overview-insights-DesktopImage mobile-hide-800 mtop-1"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/tools-group-2.png"
              alt="Digital marketing tools taught by Kraftshala"
              title="Digital marketing tools taught by Kraftshala"
              placeholder="none"
            />
            <StaticImage
              className="dbb-program-overview-insights-MobileImage desktop-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/tools-group-mb.png"
              alt="Digital marketing tools taught by Kraftshala"
              title="Digital marketing tools taught by Kraftshala"
              placeholder="none"
            />
          </div>
        </div>
        <div className="dbb-single-testimonial dbb-default-wrap wrapSmall">
          <StaticImage
            className="dbb-single-testimonial-img mobile-hide-800"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/ayush-goel.png"
            alt="Ayush Goel | IMT Ghaziabad, 2020 Batch, GroupM"
            title="Ayush Goel | IMT Ghaziabad, 2020 Batch, GroupM"
            placeholder="none"
          />
          <div className="dbb-single-testimonial-content">
            <div className="dbb-single-testimonial-content-head">
              <StaticImage
                className="dbb-single-testimonial-img desktop-hide-800"
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/DBB/ayush-goel.png"
                alt="Ayush Goel | IMT Ghaziabad, 2020 Batch, GroupM"
                title="Ayush Goel | IMT Ghaziabad, 2020 Batch, GroupM"
                placeholder="none"
              />
              <div className="dbb-single-testimonial-content-head-desc">
                <p>
                  <b>Ayush Goel | IMT Ghaziabad, 2020 Batch</b>
                </p>
                <p>PPO from GroupM</p>
              </div>
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                className="dbb-single-testimonial-content-head-quote"
                alt="quote"
              />
            </div>
            <p className="dbb-single-testimonial-content-desc">
              “It will not be wrong to say that Kraftshala became an integral
              part of my journey from selection in GroupM for my internship to
              doing well in the same. Apart from practical knowledge gained
              through Kraftshala’s digital branding courses, it acted as my
              mentor throughout via additional sessions taken by Varun Satia
              such as How to crack PPO and mentorship available on Kraftshala
              platform from industry experts. Overall, it has been an enriching
              experience so far and looking forward to working with Kraftshala
              to build it as a community of future leaders.”
            </p>
          </div>
        </div>

        <div className="dbb-queryBG">
          <div className="dbb-default-wrap dbb-wrapSmall">
            <div className="dbb-program-overview-query program-overview-queryMB">
              <h2 className="dbb-program-overview-query-head">
                WHO SHOULD APPLY?
              </h2>
              <p className="dbb-program-overview-query-desc">
                With increasing number of recruiters preferring candidates with
                digital experience for even traditional roles, and even case
                competitions increasingly testing you on crafting digital plans
                and strategies, this digital branding course with communication
                and media planning would be suited for all current B-School
                students irrespective of the field and the industry that you
                plan to get into.
              </p>
              <p className="dbb-program-overview-query-desc mtop-1">
                Our past students have ranged from campuses like IIM A, IIM B,
                IIM C, IIM I, IIM L, IIM K, SPJAIN, MDI, ISB and also BIMTECH,
                SIIB, KJSOM, VJSOM, amongst many more.
              </p>
            </div>

            <div className="dbb-admission-container">
              <div>
                <h2 className="dbb-admission-section-title">
                  Admissions Process
                </h2>
              </div>

              <div className="dbb-admission-timline">
                <div className="dbb-admission-vl"></div>

                <div className="dbb-admission-section">
                  <div className="dbb-admission-title">
                    <div className="dbb-admission-deco"></div>

                    <h3 className="dbb-admission-title-text">
                      Step 1: Apply to Kraftshala
                    </h3>
                  </div>

                  <div className="dbb-admission-description">
                    Apply to any of the program of your preference - Digital
                    Brand Building, Brand Building, Sales Leadership or any of
                    the Preparatory Packages. In case you are not clear, you can
                    always talk to our Admissions Team and change your
                    preference post applying.
                  </div>
                </div>

                <div className="dbb-admission-section">
                  <div className="dbb-admission-title">
                    <div className="dbb-admission-deco"></div>

                    <h3 className="dbb-admission-title-text">
                      Step 2: Appear for the Screening Test
                    </h3>
                  </div>

                  <div className="dbb-admission-description">
                    Take our Screening Test which will test you on logical
                    ability, user centricity and ability to grasp and apply
                    concepts that we teach. Practice material will be shared
                    with you beforehand. This is an elimination step.
                  </div>
                </div>

                <div className="dbb-admission-section">
                  <div className="dbb-admission-title">
                    <div className="dbb-admission-deco"></div>

                    <h3 className="dbb-admission-title-text">
                      Step 3: LIVE discussion on the Screening Test
                    </h3>
                  </div>

                  <div className="dbb-admission-description">
                    Upon completion of the Screening Test, you’ll get an
                    invitation to attend a live session by an expert to get
                    clarity on how you could have approached the Test questions.
                    While we can only accept a handful of students, we’d like to
                    help everyone who attempted the Test to become better
                    marketing and sales professionals.
                  </div>
                </div>

                <div className="dbb-admission-section">
                  <div className="dbb-admission-title">
                    <div className="dbb-admission-deco"></div>

                    <h3 className="dbb-admission-title-text">
                      Step 4: Enrollment
                    </h3>
                  </div>

                  <div className="dbb-admission-description">
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
