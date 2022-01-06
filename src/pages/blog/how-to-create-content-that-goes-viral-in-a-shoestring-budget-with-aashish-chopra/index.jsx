import React from "react";
import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const ShoestringBudget = () => {
  return (
    <React.Fragment>
      <Seo
        title="How to create content that goes viral in a shoestring budget with Aashish Chopra | Kraftshala"
        description="Watch Aashish Chopra, an award-winning viral video marketer and author of 'Fast, Cheap & Viral', in this session where he will talk all about how you can create content that makes a mark efficiently. His videos have hit over 370 million views, with one becoming Asia's most shared branded Facebook post and another hitting 40 million views in a week. Full of practical insights, this session is an absolute must-attend for any brand builders, agency professionals, and students who'd like to learn the most important lessons of content creation and it’s marketing."
        url="https://www.kraftshala.com/blog/how-to-create-content-that-goes-viral-in-a-shoestring-budget-with-aashish-chopra/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/how-to-create-content-that-goes-viral-in-a-shoestring-budget-with-aashish-chopra">
          <div className="blog-wrapper">
            <h1>
              How to create content that goes viral in a shoestring budget with
              Aashish Chopra
            </h1>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/C2H4JeRWKvk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="player_1"
                  ></iframe>
                </LazyLoad>
              </div>
            </div>

            <div className="mtop-2">
              Are you looking to crack the content game? Here’s your chance to
              learn it from the master of viral content, for free!
            </div>
            <div className="mtop-2">
              Watch Aashish Chopra, an award-winning viral video marketer and
              author of "Fast, Cheap & Viral", in this session where he will
              talk all about how you can create content that makes a mark
              efficiently. His videos have hit over 370 million views, with one
              becoming Asia's most shared branded Facebook post and another
              hitting 40 million views in a week. Full of practical insights,
              this session is an absolute must-attend for any brand builders,
              agency professionals, and students who'd like to learn the most
              important lessons of content creation and its marketing.
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default ShoestringBudget;
