import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

function Testimonial1() {
  return (
    <div className="alumni-testi1-wrap">
      <div className="alumni-testi1-leaders-cards">
        <div className="alumni-testi1-leaders-card-img-wrap2 leaders-cardsImgWrap">
          <div className="alumni-testi1-leaders-card-img-wrap">
            <StaticImage
              className="alumni-testi1-leaders-cards-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/alumni/Mask-Group-26.webp"
              alt="alumni"
              placeholder="none"
            />
          </div>
        </div>
        <div className="alumni-testi1-leaders-cards-content leaders-cards-content2">
          <div className="alumni-testi1-leaders-cards-content-head">
            <p className="alumni-testi1-leaders-cards-content-name">
              Aman D | Growth, InMobi
            </p>
            <p className="alumni-testi1-leaders-cards-content-course">
              The Marketing Launchpad Program
            </p>
          </div>
          <p className="alumni-testi1-leaders-cards-content-desc">
            I had never thought it was possible to bag a prominent role in
            marketing without an MBA but I guess the right guidance and mindset
            are not bogged down by labels and degrees. Few people and
            organisations deliver more than they promise and Kraftshala has been
            one of those. The journey with these guys has been phenomenal and
            this post is long overdue! Everyone at Kraftshala provided me great
            help and personal attention which can only be justified by a genuine
            love for their students and mission. Thank You for making it
            possible Kraftshala!
          </p>
        </div>
      </div>
      <div className="alumni-testi1-leaders-cards leaders-cards1">
        <div className="alumni-testi1-leaders-card-img-wrap leaders-cardsImgWrap">
          <div className="alumni-testi1-leaders-card-img-wrap">
            <StaticImage
              className="alumni-testi1-leaders-cards-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/alumni/alumniSurbhi.webp"
              alt="alumni"
              placeholder="none"
            />
          </div>
        </div>
        <div className="alumni-testi1-leaders-cards-content leaders-cards-content1">
          <div className="alumni-testi1-leaders-cards-content-head">
            <p className="alumni-testi1-leaders-cards-content-name">
              Surabhi Tripathi | Assistant Brand Manager, Sunfeast Bounce
            </p>
            <p className="alumni-testi1-leaders-cards-content-course">
              Professional Brand Management Program
            </p>
          </div>
          <p className="alumni-testi1-leaders-cards-content-desc">
            Joined this online brand management certification to update my
            skills and be ready for the Brand Management role that I have just
            taken up. I got to learn frameworks and concepts in absolute
            granularity and they are directly applicable to my job on a daily
            basis! The journey has been great and this is totally worth my time!
          </p>
        </div>
      </div>
      <div className="alumni-testi1-leaders-cards">
        <div className="alumni-testi1-leaders-card-img-wrap2 leaders-cardsImgWrap">
          <div className="alumni-testi1-leaders-card-img-wrap">
            <StaticImage
              className="alumni-testi1-leaders-cards-img"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/alumni/nakul.webp"
              alt="alumni"
              placeholder="none"
            />
          </div>
        </div>
        <div className="alumni-testi1-leaders-cards-content leaders-cards-content2">
          <div className="alumni-testi1-leaders-cards-content-head">
            <p className="alumni-testi1-leaders-cards-content-name">
              Nakul Kumar | Cofounder and COO, Cashify
            </p>
            <p className="alumni-testi1-leaders-cards-content-course">
              Professional Brand Management Program
            </p>
          </div>
          <p className="alumni-testi1-leaders-cards-content-desc">
            Would highly recommend the Professional Brand Management in the
            Digital Age program to anyone looking for a no-nonsense approach to
            marketing! As a co-founder at Cashify, I wanted to build a brand
            that resonates with customers across demographics. The program
            course work, which is full of useful tools, application forward
            examples and personalised coaching from brand and digital experts,
            helped us build clearer messaging and a distinct brand identity for
            Cashify
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial1;
