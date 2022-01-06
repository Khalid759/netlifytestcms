import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { overviewData } from "./data";

import "./styles.scss";

function Overview() {
  return (
    <div className="bb-main-overview" id="overview">
      <div className="bb-program-overview scroll">
        <h2 className="bb-highlight-heading">
          PROGRAM <b>OVERVIEW</b>
        </h2>
        <div className="bb-default-wrap">
          <p className="bb-program-overview-head-desc">
            A <b>brand branding course</b> for MBA students to help them master
            brand communication. It is an active industry immersion that
            features a unique industry forward approach paired with a practical,
            hands-on experience and live projects.
          </p>
        </div>
        <div className="bb-overview-subhead">
          We are training you to master ‘industry’s way’ of doing things. And
          our programs deliver that training 10% through content, 20% through
          feedbacks and discussions and 70% by doing it yourself
        </div>
        <div className="bb-default-wrap">
          <div className="bb-program-overview-cards">
            {overviewData.map((item) => {
              return (
                <div className="bb-program-overview-card" key={item.id}>
                  <img
                    src={item.image}
                    className="bb-program-overview-card-img"
                    alt={item.alt}
                    title={item.alt}
                  />
                  <p
                    className="bb-program-overview-card-desc"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bb-default-wrap">
          <div className="bb-program-overview-insights">
            <h2 className="bb-program-overview-insights-heading">
              with case studies on brands like:
            </h2>
            <StaticImage
              className="bb-program-overview-insights-DesktopImage mobile-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/bb-insights-desk.png"
              alt="Brand case studies by Kraftshala"
              title="Brand case studies by Kraftshala"
              placeholder="none"
            />

            <StaticImage
              className="bb-program-overview-insights-MobileImage desktop-hide-800"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/bb-insights-mob.png"
              alt="Brand case studies by Kraftshala"
              title="Brand case studies by Kraftshala"
              placeholder="none"
            />
          </div>
        </div>
        <div className="bb-single-testimonial bb-default-wrap wrapSmall">
          <StaticImage
            className="bb-single-testimonial-img mobile-hide-800"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/ajinkya-choudekar.png"
            alt="Ajinkya Choudekar | JBIMS Batch’ 19, Mahindra & Mahindra"
            title="Ajinkya Choudekar | JBIMS Batch’ 19, Mahindra & Mahindra"
            placeholder="none"
          />
          <div className="bb-single-testimonial-content">
            <div className="bb-single-testimonial-content-head">
              <StaticImage
                className="bb-single-testimonial-img desktop-hide-800"
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/BB/ajinkya-choudekar.png"
                alt="Ajinkya Choudekar | JBIMS Batch’ 19, Mahindra & Mahindra"
                title="Ajinkya Choudekar | JBIMS Batch’ 19, Mahindra & Mahindra"
                placeholder="none"
              />
              <div className="bb-single-testimonial-content-head-desc">
                <p>
                  <b>Ajinkya Choudekar | JBIMS Batch’ 19</b>
                </p>
                <p>Placed at Mahindra & Mahindra</p>
                <p>
                  INDUSTRY<b>Creds™ Score: 85</b>
                </p>
                <p>Brand Building Program</p>
              </div>
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                className="bb-single-testimonial-content-head-quote"
                alt="quote"
              />
            </div>
            <p className="bb-single-testimonial-content-desc">
              “Kraftshala has been a true mentor to me throughout my B School
              journey. Kraftshala joined me on my journey when I needed it the
              most, during summer placements. With good results from that
              experience I took up the Brand Building course but the content is
              just half of the story, what I loved about Kraftshala the most is
              the support they provide in realizing our true potential. It could
              have been as easy as, you pay fees, do the online course but this
              isn't the case with Kraftshala. They've allotted me mentorship
              slots to help me with anything and everything right from CV review
              to mock interviews and all of the mentors are active industry
              professionals. That's just not it, they personally call up and
              check why I haven't utilized any mentorship sessions. I mean who
              does this much? This really gains my respect for them as an
              organization and as a service provider.”
            </p>
          </div>
        </div>

        <div className="bb-queryBG">
          <div className="bb-default-wrap bb-wrapSmall">
            <div className="bb-program-overview-query program-overview-queryMB">
              <h2 className="bb-program-overview-query-head">
                WHO SHOULD APPLY?
              </h2>
              <p className="bb-program-overview-query-desc">
                In case you are aspiring for a career in marketing or
                consulting, or you want to crack marketing case competitions,
                then this online certification course in branding is suited for
                you
              </p>
              <p className="bb-program-overview-query-desc mtop-1">
                Our past students have ranged from campuses like IIM A, IIM B,
                IIM C, IIM I, IIM L, IIM K, SPJAIN, MDI, ISB and also BIMTECH,
                SIIB, KJSOM, VGSOM, amongst many more.
              </p>
            </div>

            <div className="bb-admission-container">
              <div>
                <h2 className="bb-admission-section-title">
                  Admissions Process
                </h2>
              </div>

              <div className="bb-admission-timline">
                <div className="bb-admission-vl"></div>

                <div className="bb-admission-section">
                  <div className="bb-admission-title">
                    <div className="bb-admission-deco"></div>

                    <h3 className="bb-admission-title-text">
                      Step 1: Apply to Kraftshala
                    </h3>
                  </div>

                  <div className="bb-admission-description">
                    Apply to any of the program of your preference - Digital
                    Brand Building, Brand Building, Sales Leadership or any of
                    the Preparatory Packages. In case you are not clear, you can
                    always talk to our Admissions Team and change your
                    preference post applying.
                  </div>
                </div>

                <div className="bb-admission-section">
                  <div className="bb-admission-title">
                    <div className="bb-admission-deco"></div>

                    <h3 className="bb-admission-title-text">
                      Step 2: Appear for the Screening Test
                    </h3>
                  </div>

                  <div className="bb-admission-description">
                    Take our Screening Test which will test you on logical
                    ability, user centricity and ability to grasp and apply
                    concepts that we teach. Practice material will be shared
                    with you beforehand. This is an elimination step.
                  </div>
                </div>

                <div className="bb-admission-section">
                  <div className="bb-admission-title">
                    <div className="bb-admission-deco"></div>

                    <h3 className="bb-admission-title-text">
                      Step 3: LIVE discussion on the Screening Test
                    </h3>
                  </div>

                  <div className="bb-admission-description">
                    Upon completion of the Screening Test, you’ll get an
                    invitation to attend a live session by an expert to get
                    clarity on how you could have approached the Test questions.
                    While we can only accept a handful of students, we’d like to
                    help everyone who attempted the Test to become better
                    marketing and sales professionals.
                  </div>
                </div>

                <div className="bb-admission-section">
                  <div className="bb-admission-title">
                    <div className="bb-admission-deco"></div>

                    <h3 className="bb-admission-title-text">
                      Step 4: Enrollment
                    </h3>
                  </div>

                  <div className="bb-admission-description">
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
