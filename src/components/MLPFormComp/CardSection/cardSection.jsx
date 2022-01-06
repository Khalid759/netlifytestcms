import React, { useState } from "react";

const data = [
  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-1.png",
    title: "Practical",
    description: "You’re trained for 12 weeks by top experts.",
  },

  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-2.png",
    title: "Personalised",
    description:
      "Coaching 50 people together doesn't help. At Kraftshala, you get feedback in smaller groups on your work to build your individual strengths.",
  },

  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-3.png",
    title: "Performance-driven",
    description:
      "You don't pay us anything if you don't get a job of min 4.5 lakhs / year.",
  },
];

function CardSection() {
  const [openVideo, setOpenVideo] = useState(false);

  const showModalHandler = () => {
    setOpenVideo(true);
  };

  const hideModalHandler = () => {
    setOpenVideo(false);
  };
  return (
    <div className="card-section-div">
      <div className="desktop-hide">
        <div
          className="mlp-form-mob-video"
          onClick={showModalHandler}
          aria-hidden="true"
        >
          <img
            className="mlp-mob-video-img"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/kraftshala-mlp.png"
            alt="kraftshala Marketing Launchpad Video"
          />
          <div className="mlp-video-flex">
            <div className="mlp-video-icon-wrap">
              <div className="mlp-video-icon-bg-light">
                <div className="mlp-video-icon-bg-dark">
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/resumeMobIcon.svg"
                    alt="video icon"
                  />
                </div>
              </div>
            </div>
            <div className="mlp-video-text">
              <div className="mlp-video-heading">Watch</div>
              <div className="mlp-video-subheading">How the program works</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-head">
        The Marketing Launchpad trains candidates to deliver on the job from Day
        1. Here’s how:
      </div>

      <div className="card-container">
        {data.map((info, k) => {
          return (
            <div key={k} className="card-div">
              <div className="card-icon">
                <img src={info.image_url} alt={info.title} />
              </div>

              <div className="card-info">
                <div className="card-title">{info.title}</div>

                <div className="card-description">{info.description}</div>
              </div>
            </div>
          );
        })}
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
}

export default CardSection;
