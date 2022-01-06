import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

import "./styles.scss";

function HeroSection() {
  return (
    <div className="pbm-page-overview" id="pbm-overview">
      <div className="pbm-overview-container">
        <div className="pbm-overview-1">
          The <strong>Professional Brand Management in the Digital Age</strong>{" "}
          is an intensive program which delivers{" "}
          <strong>
            decades worth of hard-earned insights & industry experience in 20
            weeks. You learn side-by-side from industry experts
          </strong>{" "}
          who’ve built their careers growing brands across sectors and
          industries and leveraging traditional and digital media to drive
          business growth.
        </div>

        <div className="pbm-overview-2">
          This will be unlike any other educational experience that you have had
          online - or even in your MBA programs.
        </div>
      </div>

      <div className="pbm-expertise mtop-2">
        <h2 className="pbm-main-text">
          Built with
          <span className="pbm-yellow-txt"> 100% industry expertise,</span> 0%
          fluff
        </h2>
        <div className="pbm-main-text-desc">
          Course designed &amp; delivered 100% by industry’s top practitioners
        </div>
      </div>
      <div className="pbm-overview-content-1 mtop-4">
        <div className="pbm-learning-seo">
          <div className="pbm-learning-txt">
            <div className="pbm-learning-container">
              <div className="pbm-learning-img-count desktop-hide">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/1.png"
                  alt="1"
                  placeholder="none"
                />
              </div>
              <h2 className="pbm-div-title">
                You learn best from people who have{" "}
                <span className="pbm-yellow-txt displayBlock">
                  succeeded in the roles that you want to be in.
                </span>
              </h2>
            </div>

            <div className="pbm-div-description pbm-overview-content-2 mtop-2">
              Get up to speed through tons of frameworks for identifying brand
              objectives, identifying an insight, structuring campaigns,
              evaluating media plans, and more. You learn not just the digital
              tools, but how to precisely use each of those in different
              contexts.
              <br />
              <br />
              Along with our industry experts, we’ve brought tons of insights on
              the challenges that you face as a marketing professional. Our
              in-house team has converted all those insights into thought
              structures which are easy to understand and apply.
            </div>
          </div>

          <div className="pbm-learning-creative">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/about-pbm-group.png"
              alt="Brand Oppourtunity, Keyword Research, Funnel Framework of Professional Brand Management course|Kraftshala"
              title="Frameworks by Kraftshala - Brand Opportunity, Keyword research and Consumer Funnel"
              placeholder="none"
            />
          </div>
        </div>
      </div>
      <div className="learn-bestMB-border desktop-hide"></div>
      <div className="pbm-overview-content-2">
        <div className="pbm-learning-seo">
          <div className="pbm-learning-txt">
            <div className="pbm-learning-container">
              <div className="pbm-learning-img-count desktop-hide">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/2.png"
                  alt="2"
                  placeholder="none"
                />
              </div>
              <h2 className="pbm-div-title">
                In-depth understanding comes from solving{" "}
                <span className="pbm-yellow-txt displayBlock">
                  real business problems yourself
                </span>
              </h2>
            </div>

            <div className="pbm-div-description pbm-overview-content-2 mtop-2">
              Marketing recruiters hire lateral talent with relevant experience
              as they can add value from day 1. In this program, you gain that
              experience by working on a real business problem. This batch will
              be working with LEGO to solve an actual problem faced by the
              brand.
              <br />
              <br />
              There will be feedbacks at every stage to help you improve and
              become confident of leading a brand.
            </div>
          </div>
          <div className="pbm-learning-creative">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/devi-pradeep.png"
              alt="Devi Pradeep, Manager, Digital Marketing, TAFE"
              title="Devi Pradeep, Manager, Digital Marketing, TAFE"
              placeholder="none"
            />
          </div>
        </div>
      </div>
      <div className="learn-bestMB-border desktop-hide"></div>
      <div className="pbm-overview-content-3">
        <div className="pbm-learning-seo">
          <div className="pbm-learning-txt">
            <div className="pbm-learning-container">
              <div className="pbm-learning-img-count desktop-hide">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/3.png"
                  alt="2"
                  placeholder="none"
                />
              </div>
              <h2 className="pbm-yellow-txt pbm-div-title pbm-displayBlock">
                You get better at marketing by discussing,{" "}
                <span className="pbm-div-title-block">
                  not by just doing it yourself
                </span>
              </h2>
            </div>

            <div className="pbm-div-description pbm-overview-content-2 mtop-2">
              A large part of marketing is articulating your thoughts, taking in
              new ideas from peers, getting perspectives on your work from
              experienced / specialised professionals to deliver a fantastic
              output. Nothing prepares you better for marketing leadership roles
              than this!
              <br />
              <br />
              The course promotes this sentiment by making you work in groups of
              3-4 and discussing your work with industry experts.
            </div>
          </div>

          <div className="pbm-learning-creative">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/discussion-network.png"
              alt="Industry Experts led Online Brand Management course"
              title="Industry Experts led Online Brand Management course"
              placeholder="none"
            />
          </div>
        </div>
      </div>
      <div className="learn-bestMB-border desktop-hide"></div>
    </div>
  );
}

export default HeroSection;
