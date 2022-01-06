import React from "react";
import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const AreaSalesManager = () => {
  return (
    <React.Fragment>
      <Seo
        title="What Does an Area Sales Manager do? | Kraftshala"
        description="Wondering what FMCG sales is really like? Catch Sachin from Unilever, Sudeep from Pidilite and Puru from P&G talk about their ASM experiences!"
        url="https://www.kraftshala.com/blog/what-does-an-area-sales-manager-do/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/what-does-an-area-sales-manager-do">
          <div className="blog-wrapper">
            <h1>What Does an Area Sales Manager do?</h1>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gki489sRTJk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="player_1"
                  ></iframe>
                </LazyLoad>
              </div>
              <div className="mtop-2">
                Wondering what FMCG sales is really like? Catch Sachin from
                Unilever, Sudeep from Pidilite and Puru from P&G talk about
                their ASM experiences!
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default AreaSalesManager;
