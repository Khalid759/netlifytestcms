import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import LazyLoad from "react-lazyload";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-links">
          <LazyLoad>
            <div className="social-links">
              <div>
                <StaticImage
                  className="story-logo"
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/footer-expertise-logo.png"
                  placeholder="none"
                  alt="expertise stories"
                  title="expertise stories"
                />
              </div>
              <div className="social-links-icons">
                <a
                  href="https://www.facebook.com/kraftshala/"
                  className="facebook-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Social+Logos/Facebook.svg"
                    alt="facebook"
                    title="facebook"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCIj1yZ44R1-ponVQnObkxSw"
                  className="youtube-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Social+Logos/Youtube.svg"
                    alt="youtube"
                    title="youtube"
                  />
                </a>
                <a
                  href="https://twitter.com/kraftshala"
                  className="twitter-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Social+Logos/Twitter.svg"
                    alt="twiiter"
                    title="twiiter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/school/kraftshala/"
                  className="linkedin-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Social+Logos/Linkedin.svg"
                    alt="linkedin"
                    title="linkedin"
                  />
                </a>
                <a
                  href="https://www.instagram.com/kraftshala/"
                  className="instagram-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Social+Logos/Instagram.svg"
                    alt="instagram"
                    title="instagram"
                  />
                </a>
              </div>
            </div>
          </LazyLoad>
          <div className="resources-links">
            <div>
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/footer-kraftshala-logo.png"
                placeholder="none"
                alt="kraftshala"
                title="kraftshala"
              />
            </div>
            <div className="about link">
              <Link to="/about/">About</Link>
            </div>
            <div className="alumni link">
              <Link to="/alumni/">Alumni</Link>
            </div>
            <div className="blog link">
              <Link to="/blog/">Blog</Link>
            </div>
            <div className="kraftshala-live link">
              <Link to="/kraftshala-live-professional-series/">
                Kraftshala Live
              </Link>
            </div>
          </div>
          <div className="program-links">
            <div>
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/footer-creds-logo.png"
                alt="industryCreds logo"
                title="industryCreds logo"
                placeholder="none"
              />
            </div>
            <div className="dbb-link link">
              <Link to="/digital-brand-building/">Digital Brand Building</Link>
            </div>
            <div className="bb-link link">
              <Link to="/brand-building/">Brand Building</Link>
            </div>
            <div className="sl-link link">
              <Link to="/sales-leadership/">Sales Leadership</Link>
            </div>
            <div className="pbm-link link">
              <Link to="/professional-brand-management-in-the-digital-age/">
                Professional Brand Mangement
              </Link>
            </div>
            <div className="mlp-link link">
              <Link to="/marketing-launchpad/">Marketing Launchpad</Link>
            </div>
          </div>

          <div className="additional-links">
            <div className="learn-link link">
              <a href="https://learn.kraftshala.com">Join Class</a>
            </div>
            <div className="work-with-us link">
              <Link to="/work-with-us/">Work With Us</Link>
            </div>
            <div className="contact-us link">
              <Link to="/contact-us/">Contact Us</Link>
            </div>
            <div className="privacy-pol link">
              <a href="http://class.kraftshala.com/kraft_shala/privacy-policy.html">
                Privacy Policy
              </a>
            </div>
            <div className="terms link">
              <a href="http://class.kraftshala.com/kraft_shala/terms-of-services.html">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="copyright-div">
          © Copyright 2015 - 2022 Expertizo Education Private Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
