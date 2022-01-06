import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const BestBrand = () => {
  return (
    <React.Fragment>
      <Seo
        title="What is it like to work on the Best Brand in the world? | Kraftshala"
        description="Hear Sreerupa Banerjee- Vice President, Brand Strategy & Communication at Vodafone, tell us how is to work on the Best Brand in the World"
        url="https://www.kraftshala.com/blog/what-is-it-like-to-work-on-the-best-brand-in-the-world/"
      />

      <div className="best-brand-container">
        <BlogLayout link="https://www.kraftshala.com/blog/what-is-it-like-to-work-on-the-best-brand-in-the-world">
          <div className="blog-wrapper">
            <h1>What is it like to work on the Best Brand in the world?</h1>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/best_brand/Capture-588x363-e1515502463618_za6iax.webp"
                alt="Best brand"
                title="Best brand"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              Hear Sreerupa Banerjee- Vice President, Brand Strategy &
              Communication at Vodafone, tell us how is to work on the Best
              Brand in the World (Global Effies 2017)..
            </div>

            <div className="yt-video mtop-2">
              <LazyLoad>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/362FCNKyOIQ"
                  title="vimeo video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  id="player_1"
                ></iframe>
              </LazyLoad>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default BestBrand;
