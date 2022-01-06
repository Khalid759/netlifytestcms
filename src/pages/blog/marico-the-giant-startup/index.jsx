import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const Marico = () => {
  return (
    <React.Fragment>
      <Seo
        title="Marico The Giant Startup | Kraftshala"
        description="An original Indian Start-up that became an FMCG behemoth!Watch Kunal Bhardwaj tell us how the company that gave us iconic brands like Parachute and Saffola."
        url="https://www.kraftshala.com/blog/marico-the-giant-startup/"
      />

      <div className="marico-container">
        <BlogLayout link="https://www.kraftshala.com/blog/marico-the-giant-startup">
          <div className="blog-wrapper">
            <h1>Marico The Giant Startup</h1>

            <div className="mtop-2">
              An original Indian startup which soon became an FMCG behemoth,
              both in India and internationally, Marico is India’s leading
              consumer goods companies providing consumer products and services
              in the areas of health, beauty and wellness.
            </div>
            <div className="mtop-2">
              Marico touches the lives of one out of every three Indians through
              its diverse portfolio of various brands such as Saffola,
              Parachute, Hair & Care, Livon, Nihar Naturals, Set Wet Studio X,
              Mediker and many more.
            </div>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/marico/image12.webp"
                alt="Marico Brands"
                title="Marico Brands"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              <b>
                Have you ever wondered what it is like to work for an FMCG
                behemoth like Marico? What is the mantra that drives the
                organization?
              </b>
            </div>

            <div className="mtop-2">
              Watch Kunal Bhardwaj, Group Product Head, Foods at Marico on what
              has been the gamechanger for the company that gave us these iconic
              brands. He takes you through how the culture of entrepreneurship,
              empowerment and taking risk is at the core of DNA that drives the
              organization.
            </div>

            <div className="mtop-2">
              <b>
                “Think like a CEO, act like a CEO” is the mantra for everyone at
                Marico.
              </b>
            </div>

            <div className="mtop-2">
              In the world of start-ups where speed and result-orientation is of
              paramount importance, it is refreshing to see a giant FMCG
              corporation encouraging this spirit. Marico sets the benchmark by
              perhaps being the only company with a flat structure and an open
              culture. Leadership for them is an action and not a position!
            </div>
            <div className="mtop-2">
              In his candid conversation, Kunal spoke about the role Marico has
              played in his career and what made him stick to the company for
              almost a decade:
            </div>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/wx2sgWeR2lg"
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
              “What Marico gave me was a sense of empowerment and that stems
              from the fact that the founder himself was an entrepreneur. He set
              up Marico as an organization which obviously now is an FMCG.
            </div>

            <div className="mtop-2">
              <b>
                So the culture of entrepreneurship, empowerment and taking risks
                is still at the core of DNA that drives this organization”
              </b>
            </div>

            <div className="mtop-2">
              Watch the above video to know more about the company which is as
              passionate about its Members ( At Marico, there are no employees-
              Only Members! ) as it is about its products.
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default Marico;
