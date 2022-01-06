import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import WorkWithUsForm from "../../Forms/WorkWithUsForm";

function JobDescription(props) {
  const [showForm, setShowForm] = useState(false);
  const [showClipboard, setShowClipboard] = useState(false);

  const handleCopyClipboard = () => {
    setShowClipboard(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(function () {
      setShowClipboard(false);
    }, 2000);
  };

  const handleBtnClick = () => {
    if (props.jobData.hasOwnProperty("external_link")) {
      window.open(props.jobData.external_link, "_blank");
      return;
    }
    setShowForm(true);
    setTimeout(function () {
      const element = document.getElementById("wwuan-work-with-us-form");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);
  };

  return (
    <React.Fragment>
      <div className="wwuan-desc-container">
        <Link className="wwuan-back-btn" to="/work-with-us/">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Arrow-1.webp"
            alt="back arrow"
            placeholder="none"
          />
          back to jobs
        </Link>

        <div className="wwuan-job-info-wrapper">
          <div className="wwuan-job-info-main">
            {props.invalidLink ? (
              <div className="wwuan-job-info" id="invalidlink">
                <p className="wwuan-job-info-heading">
                  Invalid Job Posting Link, Please use a correct link
                </p>
              </div>
            ) : props.jobData.is_active ? (
              <div className="wwuan-job-info" id="assoprogmgt">
                <div className="wwuan-job-info-container mtop-0">
                  <p className="wwuan-job-info-heading">About the company</p>
                  <p className="wwuan-job-info-description">
                    <a href="http://www.kraftshala.com/">Kraftshala</a> makes
                    India’s most loved marketing & sales training programs with
                    an Advocacy Score of 95%. We believe that education becomes
                    a lot more fruitful, and a lot more fun, when you get
                    kickass practitioners, the real experts, to train emerging
                    talent. Our programs are built on frameworks and examples
                    from the best in the industry and they are consistently
                    updated with the latest, cutting-edge tools & learnings from
                    the field.
                    <br />
                    <br />
                    This is why S&M professionals from world’s top consumer
                    companies (like Unilever, P&G, Nestlé, ITC, Facebook,
                    Amazon, Yum! Brands, etc) as well as students currently
                    studying in the best business schools of the country (all
                    major IIMs, ISB, FMS, XLRI, SP Jain, IIFT, etc.) find value
                    in our programs (remember 95%?). The goal now is to take our
                    training programs to India’s masses- the talented people
                    across the length and breadth of our country who have been
                    denied a shot at professional success due to the limitations
                    of the existing system.
                    <br />
                    <br />
                    We are a team that is gunning to bring transformative
                    changes to India’s higher education ecosystem. Welcome to
                    the ride!{" "}
                    <span role="img" aria-label="smily">
                      🙂
                    </span>
                  </p>
                </div>
                <div className="wwuan-job-info-container">
                  <p className="wwuan-job-info-heading">Funding</p>
                  <p className="wwuan-job-info-description">
                    Kraftshala is backed by Doreswamy Nandkishore (Former
                    Fortune 100 CEO, Head of Asia, Oceania, Africa for Nestlé
                    S.A.), Pallav Jain, and Sarfaraz Khimani (co-CEOs of
                    Performics, one of India's largest performance marketing
                    agencies).
                  </p>
                </div>
                <div className="wwuan-job-info-container">
                  <p className="wwuan-job-info-heading">
                    What we value (the Kraftshala Kode):
                  </p>
                  <p className="wwuan-job-info-description">
                    Like all good companies, we value integrity, excellence,
                    respect, inclusion, and collaboration. Our team’s
                    distinctiveness comes from the following:
                  </p>
                  <ul className="wwuan-job-info-list">
                    <li>
                      We seek a{" "}
                      <span className="wwuan-job-info-list-underline">
                        user centric mindset
                      </span>
                      . People who start with the user and work backward, and
                      take every opportunity to add value to their customers/
                      partners fit right in.
                    </li>
                    <li>
                      We value{" "}
                      <span className="wwuan-job-info-list-underline">
                        problem solving skills
                      </span>
                      . We look at problems objectively, solve for root causes,
                      make decisions for long term good instead of short term
                      gain, and don’t let processes get in the way of value
                      addition.
                    </li>
                    <li>
                      We look for{" "}
                      <span className="wwuan-job-info-list-underline">
                        learning agility
                      </span>
                      . We are a team of learners who like to read, talk to
                      experts, and seek feedback to be better today than we were
                      yesterday.
                    </li>
                    <li>
                      We respect{" "}
                      <span className="wwuan-job-info-list-underline">
                        ambition & courage
                      </span>{" "}
                      to take on large goals. Self starters who demonstrate high
                      ownership strengthen the backbone of our team.
                    </li>
                    <li>
                      We expect{" "}
                      <span className="wwuan-job-info-list-underline">
                        consistency and reliability
                      </span>
                      . Predictability just makes everyone’s life a lot
                      smoother.
                    </li>
                    <li>
                      We like people who are{" "}
                      <span className="wwuan-job-info-list-underline">
                        real, open, and direct in communication
                      </span>
                      , while still being{" "}
                      <span className="wwuan-job-info-list-underline">
                        empathetic
                      </span>
                      .
                    </li>
                    <li>
                      We are{" "}
                      <span className="wwuan-job-info-list-underline">
                        practical optimists
                      </span>
                      . Our team strongly believes in a better future and takes
                      joy and pride in the fact that we are playing our part to
                      make that future a reality.
                    </li>
                  </ul>
                </div>
                <div className="wwuan-job-info-container wwuan-job-info-container1">
                  <p className="wwuan-job-info-heading">
                    What is the recruitment process
                  </p>
                  <p className="wwuan-job-info-description">
                    As a small team (~26 folks), it’s imperative that we get to
                    know each other before taking the leap. We want to ensure
                    you succeed in your role within our team. Each conversation
                    with us will last about 40-75 minutes, except the first call
                    which is a short one to understand expectations. Typically
                    the whole process takes between 10 - 15 business days
                    depending on your and our schedules. The process will occur
                    over telephonic calls, so you don’t need to worry about
                    travel.
                  </p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.jobData.description,
                  }}
                ></div>
                <div className="wwuan-job-info-container">
                  <p className="wwuan-job-info-heading">Location</p>
                  <p className="wwuan-job-info-description">
                    While our office is in Delhi, we are on remote work till
                    end-2021. We are perfectly okay if you’d prefer to continue
                    working remotely even after the Covid crisis recedes.
                  </p>
                </div>
              </div>
            ) : (
              <div className="wwuan-job-info" id="expiredlink">
                <p className="wwuan-job-info-heading">
                  Thank you for expressing your interest. Unfortunately, this
                  job posting has expired but stay tuned for more opportunities
                  <span role="img" aria-label="smily">
                    🙂
                  </span>
                </p>
              </div>
            )}
          </div>
          {props.jobData.is_active && (
            <div className="wwuan-sidebar">
              <div className="wwuan-sidebar-content">
                <button
                  className="wwuan-sidebar-btn mobile-hide"
                  tabIndex={0}
                  aria-hidden="true"
                  onClick={handleBtnClick}
                >
                  apply now
                </button>

                <button
                  className="wwuan-sidebar-btn desktop-hide"
                  tabIndex={0}
                  aria-hidden="true"
                  onClick={handleBtnClick}
                >
                  apply now for this job
                </button>

                <div className="wwuan-sidebar-share-link">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/share-icon.webp"
                    placeholder="none"
                    alt="share icon"
                  />
                  <span>share</span>
                </div>
                <div className="wwuan-sidebar-share-icons">
                  <a
                    className="wwuan-sidebar-share-icon"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fkraftshala.com%2Fwork-with-us-apply-now%2F${props.jobData.id}%2F`}
                  >
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/fb-icon.webp"
                      placeholder="none"
                      alt="facebook icon"
                    />
                  </a>
                  <a
                    className="wwuan-sidebar-share-icon"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fkraftshala.com%2Fwork-with-us-apply-now%2F${props.jobData.id}%2F`}
                  >
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/twitter-icon.webp"
                      placeholder="none"
                      alt="twitter icon"
                    />
                  </a>
                  <a
                    className="wwuan-sidebar-share-icon"
                    target="_blank"
                    rel="noreferrer"
                    href={`mailto:?subject=I wanted you to see this site&body=Check out this site https://www.kraftshala.com/work-with-us-apply-now/${props.jobData.id}/`}
                  >
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/ms-icon.webp"
                      placeholder="none"
                      alt="mail icon"
                    />
                  </a>
                  <span
                    className="wwuan-sidebar-copy-link"
                    aria-hidden="true"
                    onClick={handleCopyClipboard}
                  >
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/link-icon.webp"
                      placeholder="none"
                      alt="copy link icon"
                    />
                  </span>
                </div>
                {showClipboard && (
                  <div
                    className="wwuan-copy-link-text"
                    id="wwuan-copy-link-text-id"
                  >
                    Linked Copied!
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="wwuan-footer-btn-wrap">
          <button
            className="wwuan-footer-btn mobile-hide"
            onClick={handleBtnClick}
          >
            apply to this job
          </button>
        </div>
        {showForm && <WorkWithUsForm role={props.jobData} />}
      </div>
    </React.Fragment>
  );
}

export default JobDescription;
