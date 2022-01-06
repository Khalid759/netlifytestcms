import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Specialisations(props) {
  const [viewModal, showViewModal] = useState(false);
  const [viewSrc, setViewSrc] = useState("");
  const [viewAlt, setViewAlt] = useState("");
  const [tabSelected, setTabSelected] = useState("1");

  const showViewHereModal = (src, alt) => {
    setViewSrc(src);
    setViewAlt(alt);
    showViewModal(true);
  };

  const hideViewHereModal = () => {
    showViewModal(false);
  };

  return (
    <div className="mlp-main-specialisation">
      <div className="specialisation-container">
        <div>
          <h2 className="specialisation-section-title">Specialisations</h2>

          <span>
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11278.png"
              alt="title underlines"
              placeholder="none"
            />
          </span>
        </div>

        <div className="mobile-hide">
          <div className="spec-content">
            <div className="spec-card">
              <div className="spec-card-head">
                <div className="spec-card-icon">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/dmm.svg"
                    alt="Digital Media Marketing"
                  />
                </div>
                <div className="spec-card-title">
                  <h3>Digital Media Marketing</h3>
                </div>
              </div>
              <div className="spec-card-body">
                <div className="spec-card-body-content">
                  <div className="spec-card-body-desc">
                    Excel in paid media platforms and tools widely used by
                    marketers around the world. Master the principles of SEO to
                    build brands and drive sales.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    So, what will I learn?
                  </div>
                  <div className="spec-card-body-desc">
                    Designing Integrated Digital Marketing Campaigns with
                    Facebook ads, Google ads, Google Analytics, SEO and more.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">Is this for me?</div>
                  <div className="spec-card-body-desc">
                    Yes, if you are interested in marketing and have decent
                    quant and logical ability.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    What could my career trajectory look like?
                  </div>

                  <div
                    className="spec-card-body-click"
                    onClick={() =>
                      showViewHereModal(
                        "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/dmm-desk.png",
                        "Digital Media and Marketing Career Trajectories"
                      )
                    }
                    aria-hidden="true"
                  >
                    View here
                  </div>
                </div>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-card-head">
                <div className="spec-card-icon">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/csmm.svg"
                    alt="Content & Social Media Marketing"
                  />
                </div>
                <div className="spec-card-title">
                  <h3> Content & Social Media Marketing</h3>
                </div>
              </div>
              <div className="spec-card-body">
                <div className="spec-card-body-content">
                  <div className="spec-card-body-desc">
                    Master how to write creatively, create stellar content,
                    handle a buzzing social media account and create fabulous
                    influencer marketing plans.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    So, what will I learn?
                  </div>
                  <div className="spec-card-body-desc">
                    Creating social media calendars, increasing brand
                    engagement, partnering with influencers, optimizing content
                    basis SEO, and writing for Blogs, Social Media etc.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">Is this for me?</div>
                  <div className="spec-card-body-desc desktop-hide">
                    Yes, if you have good writing skills and an interest in
                    marketing.
                  </div>
                  <div className="spec-card-body-desc mobile-hide">
                    Yes, if you have good writing skills and an interest in
                    <br />
                    marketing.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    What could my career trajectory look like?
                  </div>

                  <div
                    className="spec-card-body-click"
                    onClick={() =>
                      showViewHereModal(
                        "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/csmm-desk.png",
                        "Content and Social Media Marketing Career Trajectories"
                      )
                    }
                    aria-hidden="true"
                  >
                    View here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-hide">
          <div className="spec-tab-head">
            <h3
              className={
                tabSelected === "1"
                  ? "spec-tab-head-name active-tab"
                  : "spec-tab-head-name"
              }
              onClick={() => setTabSelected("1")}
              aria-hidden="true"
            >
              Digital Media Marketing
            </h3>
            <h3
              className={
                tabSelected === "2"
                  ? "spec-tab-head-name active-tab"
                  : "spec-tab-head-name"
              }
              onClick={() => setTabSelected("2")}
              aria-hidden="true"
            >
              Content & Social Media Marketing
            </h3>
          </div>
        </div>
        <div className="desktop-hide">
          <div className="spec-content">
            {tabSelected === "1" && (
              <div className="spec-card">
                <div className="spec-card-body">
                  <div className="spec-card-body-content">
                    <div className="spec-card-body-desc">
                      Excel in paid media platforms and tools widely used by
                      marketers around the world. Master the principles of SEO
                      to build brands and drive sales.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      So, what will I learn?
                    </div>
                    <div className="spec-card-body-desc">
                      Designing Integrated Digital Marketing Campaigns with
                      Facebook ads, Google ads, Google Analytics, SEO and more.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      Is this for me?
                    </div>
                    <div className="spec-card-body-desc">
                      Yes, if you are interested in marketing and have decent
                      quant and logical ability.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      What could my career trajectory look like?
                    </div>

                    <div
                      className="spec-card-body-click"
                      onClick={() =>
                        showViewHereModal(
                          "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/dmm-1-mob.png",
                          "Digital Media and Marketing Career Trajectories"
                        )
                      }
                      aria-hidden="true"
                    >
                      View here
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabSelected === "2" && (
              <div className="spec-card">
                <div className="spec-card-body">
                  <div className="spec-card-body-content">
                    <div className="spec-card-body-desc">
                      Master how to write creatively, create stellar content,
                      handle a buzzing social media account and create fabulous
                      influencer marketing plans.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      So, what will I learn?
                    </div>
                    <div className="spec-card-body-desc">
                      Creating social media calendars, increasing brand
                      engagement, partnering with influencers, optimizing
                      content basis SEO, and writing for Blogs, Social Media
                      etc.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      Is this for me?
                    </div>
                    <div className="spec-card-body-desc">
                      Yes, if you have good writing skills and an interest in
                      marketing.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      What could my career trajectory look like?
                    </div>
                    <div
                      className="spec-card-body-click"
                      onClick={() =>
                        showViewHereModal(
                          "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/csmm-1-mob.png",
                          "Content and Social Media Marketing Career Trajectories"
                        )
                      }
                      aria-hidden="true"
                    >
                      View here
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {viewModal ? (
        <React.Fragment>
          <div
            className="spec-mask spec-active"
            onClick={hideViewHereModal}
            aria-hidden="true"
          ></div>
          <div className="spec-modal">
            <img className="spec-modal-img" src={viewSrc} alt={viewAlt} />
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/cross.svg"
              alt="cross icon"
              className="spec-modal-cross"
              onClick={hideViewHereModal}
              aria-hidden="true"
            />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Specialisations;
