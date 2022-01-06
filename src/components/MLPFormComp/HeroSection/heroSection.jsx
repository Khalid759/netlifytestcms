import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroSection = (props) => {
  const [openVideo, setOpenVideo] = useState(false);

  const showModalHandler = () => {
    setOpenVideo(true);
  };

  const hideModalHandler = () => {
    setOpenVideo(false);
  };
  return (
    <div className="hero-sec-container">
      <div className="page-logo">
        <Link to={`/marketing-launchpad${props.urlParams}`}>
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/logo.png"
            alt="The Marketing Launchpad"
            placeholder="none"
          />
        </Link>
      </div>

      <div className="trademark">
        with <b>INDUSTRY</b>Creds™ Certification
      </div>

      <div className="hired-section">
        <div className="sec-title">Education that gets you hired</div>

        <div className="sec-subtitle">
          A <b> 20 week,</b> online, full-time program.
          <br /> Pay the fees ONLY when you land a job with a <br />{" "}
          <b>
            {" "}
            <em>minimum CTC of INR ₹4.5 lakhs.</em>
          </b>
        </div>

        <div className="sec-img">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/lauchpad-group.png"
            alt="underlines"
            placeholder="none"
          />
        </div>

        <div className="sec-description mtop-2">
          <div className="desc-1">
            The Marketing Launchpad is a{" "}
            <span className="highlight-grey">
              20 week, online, full-time program
            </span>{" "}
            that includes an 8 week internship.
          </div>

          <div className="desc-2 mtop-1">
            We select, train and invest in high potential graduates to help them{" "}
            <span className="highlight-grey">
              kickstart their marketing career.
            </span>{" "}
            You only pay when you land a job with a minimum CTC of ₹4.5 lakhs.
            <span className="text-strokes">
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/strokes.png"
                alt="strokes"
              />
            </span>
          </div>
        </div>
        <div className="mlp-form-video-container mobile-hide">
          <div className="mlp-video-flex">
            <div
              className="mlp-video-icon-wrap"
              onClick={showModalHandler}
              aria-hidden="true"
            >
              <div className="mlp-video-icon-bg-light">
                <div className="mlp-video-icon-bg-dark">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/resumeMobIcon.svg"
                    alt="video icon"
                  />
                </div>
              </div>
            </div>
            <div
              className="mlp-video-text"
              onClick={showModalHandler}
              aria-hidden="true"
            >
              <div className="mlp-video-heading">Watch</div>
              <div className="mlp-video-subheading">How the program works</div>
            </div>
          </div>
        </div>
      </div>
      {openVideo ? (
        <React.Fragment>
          <div
            className="spec-mask spec-active"
            onClick={hideModalHandler}
            aria-hidden="true"
          ></div>
          <div className="spec-modal">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/cross-white.svg"
              alt="cross icon"
              className="spec-modal-cross"
              onClick={hideModalHandler}
              aria-hidden="true"
            />
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QgDxj-1wqDo?autoplay=1"
              title="Kraftshala YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-player"
            ></iframe>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default HeroSection;
