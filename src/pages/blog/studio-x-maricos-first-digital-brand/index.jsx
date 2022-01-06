import React from "react";
import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const StudioX = () => {
  return (
    <React.Fragment>
      <Seo
        title="Studio X: Marico's First Digital Brand | Kraftshala"
        description="Digital-only brand launches from major FMCGs are not the future- they are the reality today.Catch Avijit Goel, Group Product Head, Marico talk about ..."
        url="https://www.kraftshala.com/blog/studio-x-maricos-first-digital-brand/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/studio-x-maricos-first-digital-brand">
          <div className="blog-wrapper">
            <h1>Studio X: Marico’s First Digital Brand</h1>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/UyzfNLQjEaM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="player_1"
                  ></iframe>
                </LazyLoad>
              </div>
              <div className="mtop-2">
                Digital-only brand launches from major FMCGs are not the future-
                they are the reality today.
              </div>
              <div>
                Catch Avijit Goel, Group Product Head, Marico talk about the
                insights and strategy behind the launch of Studio X in this new
                #IntegratedDigitalMarketing Story, created in partnership with
                Marico Campus Connections!
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default StudioX;
