import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";
import {
  leadershipPoints,
  leaderShipContent,
} from "../../../components/AmazonArticle/data";

import { courseSnipptJSON } from "../../../components/Seo/blogs/amazonInterviewSeo";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const AmazonArticle = () => {
  const handleClick = (contentID) => {
    const element = document.getElementById(contentID);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <React.Fragment>
      <Seo
        title="Amazon 14 Leadership Principles and Interview Questions | Kraftshala"
        description="The 14 Amazon Leadership Principles are critical to each Amazon interview Question. Check out the best bar raiser interview questions to get hired at Amazon."
        url="https://www.kraftshala.com/blog/amazon-interview-questions/"
        image="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Amazon-1-1-e1531121951917-1.png"
        courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />

      <div className="amazon-article-container">
        <BlogLayout link="https://www.kraftshala.com/blog/amazon-interview-questions">
          <div className="blog-wrapper">
            <h1>
              What to expect as Amazon Interview Questions? Here’s what the 14
              Amazon Leadership Principles tell us.
            </h1>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Amazon-1-1-e1531121951917-1.png"
                alt="Amazon Interview questions via Amazon Leadership Principles"
                title="Amazon Interview questions via Amazon Leadership Principles"
                placeholder="none"
              />
            </div>

            <div className="quote-div">
              <blockquote>
                “It would be impossible to produce results in an environment as
                dynamic as the Internet without extraordinary people… Setting
                the bar high in our approach to hiring has been, and will
                continue to be, the single most important element of
                Amazon.com’s success.”
              </blockquote>

              <div className="quote-by">
                – Jeff Bezos’ letter to shareholders in 1998, just four years
                after Amazon was founded already explains why guarding the
                leadership principles is so critical for Amazon
              </div>
            </div>

            <div className="hero-content">
              <div className="mtop-2">
                The above statement perfectly captures Amazon’s hiring
                philosophy in a nutshell. Amazon does not hire ordinary. It
                hires people who ‘Raise the Bar’. The company believes that
                every new employee should increase the average level of
                productivity on whichever team they join, ensuring that the
                company’s standards get higher and higher as time goes on. This
                implies that every new person hired through the Amazon interview
                process should be smarter/better/more qualified than 50% of the
                people currently in the role.
              </div>
              <div className="mtop-2">
                To ensure that this statement holds true, Amazon trains a
                selected few of its employees to be ‘Bar Raisers’ in the Amazon
                interview process. There is no separate thing as ‘the bar raiser
                interview questions’. Essentially, these Amazon employees take
                on a second unpaid job as candidate evaluators. Apart from
                taking one of the interviews, the primary job of a Bar Raiser is
                to ensure that for each position and level, every candidate is
                being interviewed across a shared set of competencies i.e. the
                14 Amazon leadership principles (more about them in a while).
                The Bar Raisers also help discover hidden hiring motives, like a
                severe near-term need, and force interviewers to reconsider
                their feedback in different contexts. Bar Raisers are known not
                to jump from one question to another, but savour hearing every
                relevant detail of your story in the Amazon interview process.
              </div>
            </div>

            {/* interview process */}

            <div className="amazon-interview mtop-2">
              <h2>Now let’s come to the Amazon interview process.</h2>

              <div className="mtop-2">
                The Amazon Interview Experience usually comprises about four to
                six interviews, wherein at least one interviewer is a bar
                raiser. Each interviewer covers a few of the 14 Amazon
                leadership principles so that in its entirety, the candidate is
                judged on each principle during the process. In addition,
                behavioural interview questions are asked to check if the
                candidate has manifested these 14 amazon leadership principles
                in the past. As stated earlier, these are the most important
                filters that Amazon uses to select candidates in the interview
                process. Amazon strongly believes that with the expansion rate
                of the company, the only way they can keep the company culture
                alive is by ferociously guarding their 14 leadership principles.
                Therefore, the candidates are expected to fulfil ‘minimum
                expectation’ on all 14 Amazon leadership principles and be
                ‘outstanding’ on at least one of them. If even one of the Bar
                Raisers has an objection to Amazon hiring the candidate, they
                can simply veto the application, and the interview process ends
                there.
              </div>

              <div className="quote-div mtop-2">
                <blockquote>
                  “Our Leadership Principles aren’t just a pretty inspirational
                  wall hanging. These Principles work hard, just like we do.
                  Amazonians use them every day, whether they’re discussing
                  ideas for new projects, deciding on the best solution for a
                  customer’s problem, or interviewing candidates. It’s just one
                  of the things that makes Amazon peculiar.”
                </blockquote>
              </div>
            </div>

            {/* leadership principle */}

            <div className="leadership mtop-2">
              <h2>Amazon 14 Leadership Principles:</h2>

              <div className="leadership-points mtop-2">
                {leadershipPoints.map((point) => (
                  <div
                    key={point.id}
                    onClick={() => handleClick(point.contentID)}
                    className="point-title"
                    aria-hidden="true"
                  >
                    {point.id}. {point.title}
                  </div>
                ))}
              </div>

              <div className="mtop-2">
                Having interviewed Amazon recruiters and candidates, we have
                collated a brief list of interview questions that are used in
                Amazon interviews to judge candidates on each of these 14
                leadership principles. Please note that the interview questions
                below are by no means exhaustive and are just indicative of the
                space that your Amazon interview questions would be penetrating
                into. You can use this list of interview questions to work on
                your laundry list of experiences and pick out your star stories:
                the stories that best manifest the Amazon leadership principles
                you want to highlight. Understand that every part of the Amazon
                Interview process has been created to systematically outline
                leadership traits, understand their importance to you and the
                degree of applicability of these 14 Amazon Leadership principles
                in your life experiences. The candidates applying for AWS roles
                should also make note that these 14 principles are also the AWS
                leadership principles, and it would be critical for their
                candidature to pay heed to these.{" "}
              </div>

              <div className="mtop-2">
                Choose a few of these leadership principles that mean the most
                to you and focus on them in an obvious way. Speak in them. Speak
                to them. Mention them in your stories.
              </div>

              <div className="learnship-points-content mtop-2">
                {leaderShipContent.map((content) => {
                  return (
                    <div key={content.id} className="mtop-2 " id={content.id}>
                      <h3>{content.title}</h3>

                      <div>{content.subPara}</div>

                      <div className="mtop-2">
                        <h4>{content.subHead}</h4>

                        <ul className="bullet-points">
                          {content.bulletPoints.map((point) => {
                            return <li key={point.id}>{point.contentLi}</li>;
                          })}
                        </ul>

                        {content.additonalContent && (
                          <div className="mtop-2">
                            <div>{content.additonalContent.contentHead}</div>

                            <div>
                              {content.additonalContent.contentDescription}
                            </div>

                            {content.additonalContent.embedLink && (
                              <LazyLoad height={300}>
                                <div className="blog-video-wrapper mtop-2">
                                  <iframe
                                    width="560"
                                    height="315"
                                    src={content.additonalContent.embedLink}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </LazyLoad>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mtop-2 parting-div">
                <div className="mtop-2">
                  Our parting advice is that you not try to game the Amazon
                  interview process, i.e. tell them what you think they want to
                  hear. Do not invent stories to fit the image you want to
                  showcase. That attitude, more often than not, makes the
                  candidate seem inconsistent or ‘unreal’. But most importantly,
                  by doing so, you lose out on a very critical opportunity: to
                  showcase the real you. Every story that you’d ever need is
                  already there in your laundry list. What is required is to
                  understand yourself better and craft these stories such that
                  it brings out your leadership principles and achievements.
                </div>
                <div className="mtop-2">
                  We wish you all the best for your Amazon interview process!
                </div>

                <div className="mtop-2 style-italics">
                  <div>
                    You may want to check out our articles on{" "}
                    <a
                      href="https://www.kraftshala.com/blog/how-to-crack-the-ceo-factory/"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      Hindustan Unilever
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.kraftshala.com/blog/png-interview-preparation-sales-marketing/"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      P&G
                    </a>
                    . The following article will put light on how to go about{" "}
                    <a
                      href="https://www.kraftshala.com/blog/group-discussions-how-to-champion-the-fish-market/"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      Group Discussions
                    </a>
                    . You can also simply follow us on{" "}
                    <a
                      href="https://www.instagram.com/kraftshala"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      Instagram
                    </a>{" "}
                    for more marketing / careers related insights. This article
                    is part of the series{" "}
                  </div>

                  <div className="mtop-2">
                    At Kraftshala, we use stories and expertise to craft the
                    marketing & sales leaders of tomorrow. If you are interested
                    in coaching, teaching or learning more about marketing and
                    our programs, you can write to us at contact@kraftshala.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default AmazonArticle;
