import React from "react";
import Seo from "../../../components/Seo/seo";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const CreativeBriefWriting = () => {
  return (
    <React.Fragment>
      <Seo
        title="Creative brief-An integral part of Marketing Communication|Kraftshala"
        description="Creative brief writing is first step of any marketing communication.Learn the important aspects of writing an advertising brief with examples to avoid common mistakes."
        url="https://www.kraftshala.com/creative-brief-writing/"
        //courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="creative-brief-writing-article">
        <BlogLayout link="https://www.kraftshala.com/blog/creative-brief-writing">
          <div className="blog-wrapper">
            <h1>
              Why writing a Creative Brief is an integral part of Marketing
              Communication?
            </h1>

            <div className="mtop-2">
              Marketing Communication is the fun place where brands start to
              mean something. A sweet black carbonated beverage suddenly means
              so much more than just that. It looks, feels and tastes different
              if you know the brand story. A bag with a certain logo becomes so
              much more than just a “a flexible container used for carrying
              things”.
            </div>

            <div className="mtop-2">
              How does all this happen? With fantastic storytelling of course!
              It’s the content that brands drive, that make consumers perceive
              the brand in a certain way. All you need is good creative people,
              some money to produce content, and magic happens… That’s what most
              people see.
            </div>
            <div className="mtop-2">
              <h2>The Creative Brief</h2>
            </div>

            <div className="mtop-2">
              An important step that many forget, is the first step itself… the
              BRIEF. Actually, it would be wrong to suggest that people forget
              about the brief. It’s part of the marketing processes in most
              companies. However, many times it’s taken as a check-mark item,
              than a step with real value addition.
            </div>

            <div className="blog-hero-img img-div">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/creative_brief_writing/creative-brief-comic.webp"
                alt="How to write a creative brief comic"
                title="How to write a creative brief comic"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              A piece of communication may end up used for months, will surely
              take weeks to make, and its brief deserves more than an hour to
              make. Many times, the process of writing a brief itself helps in
              clarifying objectives.
            </div>
            <div className="mtop-2">
              <h2>Example of writing a creative brief </h2>
            </div>
            <div className="mtop-2">
              While writing a brief for a coffee brand, the communication
              objective was to “make the brand synonymous with the first
              beverage at home in the morning”. To increase trials amongst new
              users, the TG was defined to be students and young adults. While
              generating insights to be used for the brief, one may realize that
              students and young adults don’t wake up early enough before going
              to classes or office, to be able to manage the early morning
              coffee in bed, or even the breakfast coffee at home. For many of
              them, the first beverage is at 10am after reaching college or
              office.
            </div>

            <div className="mtop-2">
              If the brief is written properly, and each step thought through,
              this issue will come to light before it goes to the creative. This
              saves the brand from wastage of money, time and resources on
              creating a beautiful campaign around no actionable benefit.
            </div>

            <div className="mtop-2">
              <h2>Common mistakes in brief writing can be –</h2>
            </div>

            <ul className="mtop-2 bullet-points">
              <li className="no-list-style">
                <h3>
                  - Isn’t well thought through. Turns out to be a collection of
                  sentences rather than a clear direction.
                </h3>
              </li>
              <li className="no-list-style">
                <h3>
                  - Is a repetition and re-hash of earlier briefs sent on same
                  brand
                </h3>
              </li>
              <li className="no-list-style">
                <h3>
                  - Doesn’t mention the expectations and requirements as output
                </h3>
              </li>
              <li className="no-list-style">
                <h3>
                  - Doesn’t give enough flexibility for creative people to play
                  with ideas
                </h3>
              </li>
            </ul>

            <div className="mtop-2">
              The brief is an input for the creative team to consider, ideate
              upon, and come up with an output of content. While different
              brands are at different stages of evolution, and not all may have
              a clear direction forward.
            </div>

            <div className="mtop-2">
              <h2>
                A proper creative brief should mostly address the following –
              </h2>
            </div>

            <ol className="mtop-2 bullet-points">
              <li>
                <h3>Context to Brand, business and competition</h3>
              </li>
              <li>
                <h3>Business Objective</h3>
              </li>
              <li>
                <h3>Communication Objective</h3>
              </li>
              <li>
                <h3>Target Audience (describe behavior and attitudes)</h3>
              </li>
              <li>
                <h3>Insight into Target Audience</h3>
              </li>
              <li>
                <h3>Brand Tonality, Look and Feel</h3>
              </li>
              <li>
                <h3>Expected Timelines</h3>
              </li>
            </ol>

            <div className="mtop-2">
              This article was written by{" "}
              <a
                href="https://www.linkedin.com/in/sambit-dash-12772a5b/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Sambit Dash
              </a>
              , V.P marketing at MamaEarth.
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default CreativeBriefWriting;
