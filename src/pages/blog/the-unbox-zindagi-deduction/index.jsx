import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const UnboxZindagi = () => {
  return (
    <React.Fragment>
      <Seo
        title="The 'Unbox Zindagi' Deduction | Kraftshala"
        description="Snapdeal: Unboxing Zindagi deduction by Kraftshala's Founder and Chief Storyteller, Varun Satia."
        url="https://www.kraftshala.com/blog/the-unbox-zindagi-deduction/"
      />

      <div className="unbox-zindagi-container">
        <BlogLayout link="https://www.kraftshala.com/blog/the-unbox-zindagi-deduction">
          <div className="blog-wrapper">
            <h1>The ‘Unbox Zindagi’ Deduction</h1>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/unbox_zindagi/Unbox-Zindagi-Display-Picture-900x500-2.webp"
                alt="snapdeal unbox zindagi"
                title="snapdeal unbox zindagi"
                placeholder="none"
              />
            </div>

            <div className="yt-video mtop-2">
              <LazyLoad>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://player.vimeo.com/video/227864243?autoplay=1&autopause=0"
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

export default UnboxZindagi;
