import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../../components/Seo/seo";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const SixThings = () => {
  return (
    <React.Fragment>
      <Seo
        title="6 things you should definitely be doing in your summer internship….. or not? | Kraftshala"
        description="Summer internships are one of the most transformational experiences of an individual’s B-School life. As soon as you enter, the first thing you’re bombarded"
        url="https://www.kraftshala.com/blog/6-things-you-should-definitely-be-doing-in-your-summer-internship-or-not/"
      />

      <div className="6-things-container">
        <BlogLayout link="https://www.kraftshala.com/blog/6-things-you-should-definitely-be-doing-in-your-summer-internship-or-not">
          <div className="blog-wrapper">
            <h1>
              6 things you should definitely be doing in your summer
              internship….. or not?
            </h1>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/6_things/EAT-SLEEP-RAVE-REPEAT-1-633x363-e1515502612571_uwfgsy.webp"
                alt="Eat Sleep Intern Repeat"
                title="Eat Sleep Intern Repeat"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              Summer internships are one of the most transformational
              experiences of an individual’s B-School life. As soon as you
              enter, the first thing you’re bombarded with is preparing for your
              summers placement. Now if you’re lucky enough to crack the
              selection process of a top recruiter, there are several things you
              can spend on your time and energy on, but if you follow the
              following tips, we guarantee maximum fun and zero PPOs.
            </div>
            <div>
              While the article was written for non-COVID times, the principles
              still hold true.
            </div>
            <div className="mtop-2">
              <h3>Background Research….. on TRAVEL PLANS</h3>
            </div>
            <div className="mtop-2">
              If the company has selected you for their internship from among
              hundreds of applicants, you’re obviously awesome, right? Doing
              background research on the company is so pointless. What could you
              possibly gain by reading about the industry, the business model,
              the competitors of the company where you’re going to spend the
              next 8 weeks. Relax and just show up at the office and don’t
              forget to act surprised if they don’t immediately gather around
              you and fall at your feet for all the precious gyan you have.
            </div>
            <div className="mtop-2">
              <h3>Discipline?….. please spare me that!</h3>
            </div>
            <div className="mtop-2">
              You haven’t joined the army, have you? After your punishing
              schedule at the B-School, the internship is quite obviously an
              opportunity to chill and relax. Make the most of it. It’s
              perfectly okay to miss deadlines. In fact, as Douglas Adams used
              to say – you’ll begin to love the whooshing sound they make as
              they pass by. About coming to office on time – who even does that
              anymore?
            </div>
            <div className="mtop-2">
              <h3>Stay away from all initiatives, it’s just More Work!</h3>
            </div>
            <div className="mtop-2">
              Initiative? Wo kya hota hain? Don’t ever forget that the
              Internship is primarily an opportunity for you to explore the new
              city. Sample the food, go sight-seeing and have a drink at every
              bar and café you can find! As for the project, you’ve always
              managed to scrape a presentation on the last night! If you have an
              idea that can make a difference, make sure it stays with you.
              Others knowing about it would just increase your work, won’t it?
            </div>
            <div className="mtop-2">
              <h3>Networking?? Why even bother?</h3>
            </div>
            <div className="mtop-2">
              They chose YOU for the internship, didn’t they? Obviously, you
              have the stronger side here. Don’t ever bother building
              relationships with your colleagues and co-workers at the company.
              Who knows, they’ll maybe try and extract a favor from you at some
              point of time and you obviously won’t need any of them anytime in
              your career. So, why even bother with networking?
            </div>
            <div className="mtop-2">
              <h3>Mentorship? Too old fashioned!</h3>
            </div>
            <div className="mtop-2">
              Your mentor is a busy person, so avoid troubling him as much as
              possible. Even if you’re not clear about your project, its
              timeline and deliverables, DO NOT EVER APPROACH HIM. Make sure the
              distance between you two is always more than that between a
              finance guy and Kotler’s textbook. Even if he can connect you with
              the relevant persons in the company and open up some new
              opportunities, how does it matter? And seriously, is it even worth
              the trouble?
            </div>
            <div className="mtop-2">
              <h3>Curiosity kills the cat and BORES the intern</h3>
            </div>
            <div className="mtop-2">
              Remember, your internship lasts a measly 8 weeks. Don’t ever
              bother to learn about how their business is executed (or anything
              else for that matter). Never ask questions. Try not to utter
              anything that may be thought-provoking. You are there for two
              reasons – to get loads of money to party like there’s no tomorrow.
              Everything outside your project is a no go area and should be
              avoided at all costs. Try reading The Secret when you want to bore
              yourself sleep.
            </div>
            <div className="mtop-2">
              <h3>And if all goes well….</h3>
            </div>
            <div className="mtop-2">
              You might even be let off before your 8 weeks are over! WHAT A
              RELIEF! Right?
            </div>
            <div>
              We hope not, and the truth is that your internship really is a
              valuable investment in time and effort for both you and the
              company. You are there so that you can go beyond the tidy
              worldview of books and get a vision of how business is actually
              conducted in the real world. At the same time the company expects
              from you a fresh perspective and a different approach to the
              problem. And your mentor exists to facilitate this mutually
              beneficial relationship. Your internship is not a break from the
              B-School but an extension of it. Infuse it with all the energy,
              enthusiasm and discipline you can muster and it will be a truly
              enriching experience!
            </div>
            <div className="mtop-2">
              So if you think you should make an extra effort to get that edge
              in your internship, our programs are designed to give you the
              upper hand. As a first step, find out what project you’re like to
              be doing in this list of S&M summer internship projects.
            </div>
            <div className="mtop-2 style-italics">
              This article was written by Ajay Jadhav from IIM Raipur and edited
              by Anubhav Aggarwal with design by Dhruv Siwach
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default SixThings;
