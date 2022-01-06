import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const Marico = () => {
  return (
    <React.Fragment>
      <Seo
        title="Decoding the Colour Experience Store by Asian Paints: A short Marketing Case | Kraftshala"
        description="Indian Paint Consumer doesn’t experiment with colours. How is Asian Paints turning it around?Kraftshala Students visited the Colour Experience Store"
        url="https://www.kraftshala.com/blog/decoding-the-colour-experience-store-by-asian-paints-a-short-marketing-case/"
      />

      <div className="asian-paints-container">
        <BlogLayout link="https://www.kraftshala.com/blog/decoding-the-colour-experience-store-by-asian-paints-a-short-marketing-case">
          <div className="blog-wrapper">
            <h1>
              Decoding the Colour Experience Store by Asian Paints: A short
              Marketing Case
            </h1>

            <div className="mtop-2">
              <b>
                How does India's largest paint company solve its most pressing
                business issue?
              </b>
            </div>
            <div className="mtop-2">
              To find out, Kraftshala sent its students on a mission - The
              Reverse Marketing Mission. The students visited Asian Paints
              Colour Experience Store in Connaught Place, New Delhi to gain a
              first hand experience of how the company has brought evolution in
              this space.
            </div>

            <div className="mtop-2">
              <b>Here’s a little backstory to the Indian Paints Category:</b>
            </div>

            <div className="mtop-2">
              Indian Consumers have never been comfortable applying paint
              themselves. A Do it Yourself (DIY) is considered as low status.
              Even the purchase of paints is done by contractors rather than the
              homeowners.
            </div>
            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/asian_paints/image9.webp"
                alt="asian paints"
                title="asian paints"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              These stores are often dark, cluttered spaces, stocking endless
              tins of paint and offer a depressing consumer experience.
            </div>
            <div className="mtop-2">
              As a category leader, Asian Paints believed that the path to
              growth required evolution. Evolution from being known as a paint
              manufacturer to a home décor expert.
            </div>

            <div className="mtop-2">
              <b>So, what was the insight that led to this transformation?</b>
            </div>

            <div className="mtop-2">
              What did Asian Paints discover that led to them to invest in and
              create this beautiful experience?
            </div>

            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0I7RdMQY498"
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
              What our students figured out was that – The store doesn’t even
              sell Paint! Instead it creates an inspirational and educational
              colour decoration experience. It presents products within
              lifestyle contexts with easy-to understand choices.
            </div>

            <div className="mtop-2">
              As you start off the entire store experience starts with what
              Asian Paints stands for – Colours in the lives and the experience
              of their customers.{" "}
              <b>
                The students actually see how Marketing is done to real people,
                how the conversion is done and how the deals are cracked.
              </b>
            </div>

            <div className="mtop-2">
              It uses technology to create an interactive and personalized
              colour solution and most importantly, it lets them have fun with
              colours. People do not come to you when you are trying to hardsell
              but instead when they want to create an experience for you.
            </div>
            <div className="mtop-2">
              Asian Paints realised that people want their homes to reflect
              their personality and individuality, many are not confident of
              their experience or “taste” in aesthetics.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/asian_paints/image2.webp"
                alt="asian paints interior design"
                title="asian paints interior design"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <b>
                Asian Paints Journey from being a Paint Manufacturer to a Home
                décor Expert
              </b>
            </div>
            <div className="mtop-2">
              As a category leader, Asian Paints realized that the path to
              success required Evolution. What people needed was a guide, and a
              partner to their journey of transforming their homes into heavens.
              So they built the most inspirational customer experience, giving
              them free consultation with design experts, and in fact using the
              3D modelling on the consumers’ actual home images, helping them
              visualize how their house would look even before they started the
              work. This is rooted in customer centricity. In essence, they
              helped consumers gain confidence to truly express themselves
              through their homes. Watch the Kraftshala students as they reverse
              market the strategy behind it and experience colours like they
              have never experienced before.
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default Marico;
