import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Overview() {
  const [openVideo, setOpenVideo] = useState(false);

  const showModalHandler = () => {
    setOpenVideo(true);
  };

  const hideModalHandler = () => {
    setOpenVideo(false);
  };

  const cards = [
    {
      image:
        "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/Group-11299.png",
      alt: "Why is Marketing Launchpad Practical",
      title: "Practical Training ",
      name: "Practical",
      description:
        "<h3>Created by industry's top practitioners with focus on the  latest digital marketing examples, case studies and tools</h3>",
    },
    {
      image:
        "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/Group-11300.png",
      alt: "How does Marketing Launchpad deliver Personalized Coaching",
      title: "Personalized Coaching",
      name: "Personalised",
      description:
        "<h3>Coaching 50 people together doesn't help. At Kraftshala, you get feedback in smaller groups on your work to build your individual strengths.</h3>",
    },
    {
      image:
        "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/Group-11301.png",
      alt: "How is Marketing Launchpad Performance Driven? ",
      title: "Performance Driven Learning",
      name: "Performance - driven",
      description:
        "<h3>This is a pay after placement program. The more you earn, the more we earn. And <b> if you earn less than ₹4.5 lakhs / year, we earn nothing.</b></h3>",
    },
  ];

  return (
    <div className="mlp-main-overview">
      <div className="about-mlp overview-container">
        <div className="about-mlp-overview">
          <h2 className="mtop-2">
            The Marketing Launchpad is a{" "}
            <span className="gray-text"> 20 week, online, full-time</span>{" "}
            <br />
            digital marketing course with specialisations in Digital Media and
            Content & Social Media that includes an 8 week internship.
          </h2>

          <h2 className="mtop-2">
            We select, train and invest in high potential graduates to help them{" "}
            <br />
            <span className="gray-text">
              {" "}
              kickstart their marketing career.
            </span>{" "}
            You only pay when you land a job with a minimum CTC of ₹4.5 lakhs.
          </h2>
        </div>
        <div className="desktop-hide">
          <div
            className="mlp-mob-video"
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
                <div className="mlp-video-subheading">
                  How the program works
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mlp-video-container mobile-hide">
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

      <div className="future-education mtop-4">
        <h2 className="future-title mtop-2">
          The Launchpad is the Future of Education
          <span className="bold-title">
            Practical. Personalised.
            <span className="future-title-line-break">Performance-Driven.</span>
          </span>
        </h2>
        <h2 className="future-title below-text">
          A pay-after-placement online marketing course
        </h2>
        <div className="cards overview-container">
          {cards.map((card, k) => {
            return (
              <div key={k} className="card">
                <div className="card-img">
                  <img
                    src={card.image}
                    width="217"
                    height="200"
                    alt={card.alt}
                    title={card.title}
                  />
                </div>

                <h3 className="card-head">{card.name}</h3>

                <div
                  className="card-desc"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="student-testimonial overview-container">
        <div className="student-img">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Mask-Group.png"
            alt="Rahul Nagpal, Digital Marketing Analyst, Performics"
            placeholder="none"
            title="Rahul Nagpal, Digital Marketing Analyst, Performics"
          />
        </div>

        <div className="student-img-mb">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Mask-Group.png"
            alt="Rahul Nagpal, Digital Marketing Analyst, Performics"
            placeholder="none"
            title="Rahul Nagpal, Digital Marketing Analyst, Performics"
          />
          <div className="student-name">
            Rahul Nagpal | Trainee Analyst @ Performics
          </div>
        </div>

        <div className="student-info">
          <div className="student-name">
            Rahul Nagpal | Trainee Analyst @ Performics
          </div>

          <div className="student-say">
            The entire experience at Kraftshala was amazing as there was a lot
            more emphasis on practical knowledge, projects and learning from
            your mistakes rather than just mugging up concepts. In under 3
            months of training, I got an offer from Performics, the largest
            agency in India and one of my dream companies. So I'm really, really
            excited about it.
            <span className="say-break">
              If you are willing to fully immerse yourself, there is just so
              much you can get out of this experience that you won’t find
              anywhere else.
            </span>
            <span className="say-break about-student">
              Rahul graduated from IHM Chandigarh in 2017 and was working with
              Hyatt Hotels before joining the 1st batch of MLP in Nov 2020. You
              can check out his{" "}
              <a
                href="https://www.linkedin.com/in/rahul-nagpal-829005128/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                Linkedin Profile
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="heres-how overview-container">
        <h2 className="heres-how-title">
          Here’s how you learn digital marketing &{" "}
          <span className="heres-how-line-break">get placed in 20 weeks</span>
        </h2>
        <div className="heres-description">
          While there are two specialisations -{" "}
          <span className="heres-bold">
            Digital Media Marketing and Content & Social Media,
          </span>
          <span className="heres-description-line-break">
            the route for excelling in Digital Marketing and getting places is
            the same for both.
          </span>
        </div>

        <div className="heres-how-week">
          <div className="week-vl"></div>
          <div className="week-section">
            <div className="week-title">
              <div className="week-deco"></div>

              <h3 className="week-title-text">
                0-12 weeks : Full time training
              </h3>
            </div>

            <div className="week-description">
              Here is our learning methodology:
              <ul className="week-points">
                <li>
                  {" "}
                  <span>70%</span> through hands-on projects that you work on in
                  groups
                </li>
                <li>
                  {" "}
                  <span>20%</span> through mentorship and coaching from expert
                  practitioners
                </li>
                <li>
                  {" "}
                  <span>10%</span> through online lectures on digital marketing
                  examples, frameworks & concepts from top marketing and
                  business leaders
                </li>
              </ul>
            </div>
          </div>

          <div className="week-section">
            <div className="week-title">
              <div className="week-deco"></div>

              <h3 className="week-title-text">13-20 weeks: Internship</h3>
            </div>

            <div className="week-description">
              You will be spending your weekdays as a Digital Marketing Intern (
              Interning in Digital Media Marketing or Content and social media
              ), and Sundays with us to further sharpen your skill sets. At the
              end of 8 weeks, you might also have a chance to get confirmed with
              the same company as well.
            </div>
          </div>

          <div className="week-section">
            <div className="week-title">
              <div className="week-deco"></div>

              <h3 className="week-title-text">Behavioural training</h3>
            </div>

            <div className="week-description">
              Having worked with 1,000’s of students we know that functional
              knowledge can land you the job, but behavioural skills will make
              your career. This is thus a core aspect of your training.
            </div>
          </div>

          <div className="week-section">
            <div className="week-title">
              <div className="week-deco"></div>

              <h3 className="week-title-text">Final placements</h3>
            </div>

            <div className="week-description">
              For this you work with our placement teams who will help you
              source, interview, and finally land a job with a minimum CTC of
              ₹4.5 lakhs.
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
}

export default Overview;
