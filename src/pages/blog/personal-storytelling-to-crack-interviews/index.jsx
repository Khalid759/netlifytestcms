import React from "react";
import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const StoryTelling = () => {
  return (
    <React.Fragment>
      <Seo
        title="Personal Storytelling to Crack Interviews | Kraftshala"
        description="Sitback and watch :How to tell powerful stories in the Interview?"
        url="https://www.kraftshala.com/blog/personal-storytelling-to-crack-interviews/"
      />

      <div className="story-telling-container">
        <BlogLayout link="https://www.kraftshala.com/blog/personal-storytelling-to-crack-interviews">
          <div className="blog-wrapper">
            <h1>Personal Storytelling to Crack Interviews</h1>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/storytelling/Unleavables-1-2-900x500.webp"
                alt="Which story should you tell in the interview"
                title="Which story should you tel in the interview"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              While preparing for interviews, it is challenging for candidates
              to stand out amongst the rest. It is equally challenging for the
              interviewers who have to interview a large pool of candidates to
              find out the right candidates.
            </div>
            <div className="mtop-2">
              In this video, Indranil Chakraborty, Founder, Storyworks teaches
              you how to master the art of Storytelling while engaging in any
              conversation and how it should be used in interviews to exhibit
              your qualities.
            </div>

            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eJSPEn72fdk"
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
              We have summed up the important points discussed by Idranil in
              this video here as well:
            </div>

            <div className="mtop-2">
              Let us start with the golden question: Tell me about yourself.
            </div>

            <div className="mtop-2">
              Do you answer this question using the conventional way of laying
              out the chronological sequence of events? While there is nothing
              wrong with this approach, ask yourself is it really making a mark?
              After hearing 30 other candidates, will the interviewer still
              remember you?
            </div>
            <div className="mtop-2">
              <b>
                Is there a winning formula that increases the chances of
                conversion?
              </b>
            </div>

            <div className="mtop-2">
              The answer is really simple and an age old principle in Marketing
              - <b>Differentiation.</b> So, what is unique about you? It is your
              experiences - your stories!
            </div>
            <div className="mtop-2">
              What works is a compelling story which is woven in the right
              fashion so as to create the necessary connect with the
              interviewers.
            </div>
            <div className="mtop-2">
              <b>But what kind of stories should you tell?</b>
            </div>
            <div className="mtop-2">
              This is an oft asked question when it comes to personal
              storytelling to crack interviews.
            </div>
            <div className="mtop-2">
              <ol className="bullet-points">
                <li>
                  Start with yourself : You need to first figure out what your
                  relevant strengths are that would make a difference to the
                  individual or the company.
                </li>
                <li>
                  Find out what the company is looking for : Identify the key
                  values, beliefs and skills that they are looking for and then
                  think of the scenarios where you would have displayed those
                  abilities which you would like to highlight.
                </li>
              </ol>
            </div>
            <div className="mtop-2">
              As quoted by Indranil Chrakarborty in the video:
            </div>
            <div className="mtop-2">
              “If the company is looking for someone with an entrepreneurial
              mindset, whereas you are someone who has worked in one of the most
              risk-averse companies, you do not want to come across as someone
              who likes to work in structured environments.
            </div>
            <div className="mtop-2">
              In this case, the interviewer might think that he's got all the
              support for the work he does. So will he be able to do things on
              his own will? Does he have entrepreneurial skills?
            </div>
            <div className="mtop-2">
              You need to prove to him that without using that word. You go back
              through your life and run the timeline to see what are the
              instances where you have demonstrated that. It lends credibility
              to the answer.”
            </div>
            <div className="mtop-2">The last important part is:</div>
            <div className="mtop-2">
              <b>How to tell powerful stories in the interview?</b>
            </div>
            <div className="mtop-2">
              Given that in an interview situation, someone else is going to
              open the conversation except in case you are giving a
              presentation, you should look for an opening as early as you can.
            </div>
            <div className="mtop-2">
              Find places where instead of giving an opinion, you can use a
              story. The best way to start is to add a time marker and a
              location marker, which makes the story come alive.
            </div>
            <div className="mtop-2">
              Remember to add a sequence of events to make the story coherent
              and have a clear trail of cause and effect. The next important
              thing that a story will have is characters. It is because people
              can identify with the characters and it makes the story
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default StoryTelling;
