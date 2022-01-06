import React from "react";
import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const AmazonFlywheel = () => {
  return (
    <React.Fragment>
      <Seo
        title="The Amazon Flywheel | Kraftshala"
        description="Have you ever wondered what’s the secret behind Amazon’s worldwide sucess? Here’s a look at their Magic Flywheel, a strategy that was first"
        url="https://www.kraftshala.com/blog/the-amazon-flywheel/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/the-amazon-flywheel">
          <div className="blog-wrapper">
            <h1>The Amazon Flywheel</h1>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GlPofUUnjlg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="player_1"
                  ></iframe>
                </LazyLoad>
              </div>
              <div className="mtop-2">
                Have you ever wondered what’s the secret behind Amazon’s
                worldwide sucess? Here’s a look at their Magic Flywheel, a
                strategy that was first articulated in the 90’s and continues to
                underpin their business today!
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default AmazonFlywheel;
