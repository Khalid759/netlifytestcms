import React from "react";
import Seo from "../../../components/Seo/seo";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const TargetAudience = () => {
  const handleClick = (contentID) => {
    const element = document.getElementById(contentID);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <React.Fragment>
      <Seo
        title="Why is defining a Target Audience critical for a brand? | Kraftshala"
        description=""
        url="https://www.kraftshala.com/blog/why-is-defining-a-target-audience-critical-for-a-brand/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/why-is-defining-a-target-audience-critical-for-a-brand">
          <div className="blog-wrapper">
            <h1>Why is defining a Target Audience critical for a brand?</h1>
            <div className="mtop-2">
              In our interactions with thousands of marketing aspirants each
              year, one of the most commonly asked questions is, “Why can’t I go
              after everyone? What is the point of targeting?” In this article,
              we cover the following -
            </div>
            <div className="mtop-2">
              <ul className="bullet-points ">
                <li
                  className="content-li"
                  onClick={() => handleClick("content-1")}
                  aria-hidden="true"
                >
                  Is targeting critical for your brand? Example of ThumsUp
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-2")}
                  aria-hidden="true"
                >
                  How ThumsUp has chosen its target audience?
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-3")}
                  aria-hidden="true"
                >
                  What is the difference between communication target audience &
                  media target audience?
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              Here is a video which captures the answer to all these questions:
            </div>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/T6kL4NNdYk4"
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
              In case, you’re more the reading kinds, we have summed it up here
              as well:
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  <h3 id="content-1">
                    Section 1: Is targeting critical for your brand?
                  </h3>
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              We truly believe that this is one of the most important
              realizations that anyone who aspires to be in marketing can have
              at an initial stage of their infatuation with the subject. Yes,
              targeting is critical. To put this in another words, ignoring a
              large part of your own consumer universe is critical. Let us take
              an example of one of the biggest cola brands in India. Thums Up is
              many decades old. A lot of things - campaigns, brand endorsers,
              etc. have changed about it, but what has remained unchanged is the
              Target Audience that the campaigns speak to. This Target Audience
              is Adventurous and Macho Image Seeking Teenagers. This includes
              those people who are not necessarily adventure seeking themselves
              but aspire to have that image. So now let us ask the Million
              Dollar Question: What percentage of actual Thums Up customers are
              adventurous and macho image seeking teens? Let's examine this!
            </div>
            <div className="mtop-2">
              <ol className="bullet-points">
                <li>
                  Because we are talking about macho image seeking teens, we are
                  only talking about men. So <b>that rules out</b> all the
                  women, which is about 50% of the entire population.
                </li>
                <li>
                  Because we are talking about teens, <b>that rules out</b> both
                  children and adults, which is another
                </li>
                <li>
                  And lastly, among male teens we only want macho image seeking
                  ones, <b>that rules out</b> all the other teens who might be
                  seeking other images for themselves, say the nerds, the
                  romantics, etc.
                </li>
              </ol>
            </div>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/target_audience/Delighting-target-audience.webp"
                alt="Delighting target audience"
                title="Delighting target audience"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              What is important to note is that a lot of women consume Thums Up.
              So do a lot adults and non-macho image seeking teens. They are all
              consumers of Thums Up.
            </div>
            <div className="mtop-2">
              Ruling all of these out, means that we are left with approximately
              15-20% of all the people who consume Thums Up.
            </div>
            <div className="mtop-2">
              <b>
                So why does Thums Up continue to ignore in its ads almost 80% of
                their consumers, year after year after year?
              </b>{" "}
              This is the now a Billion Dollar Question.
            </div>
            <div className="mtop-2">
              The reason is that when you are up against competitors such as,
              Pepsi, Coke, Sprite and all of these high spending cola brands,
              your only chance of survival is when you're truly differentiated
              as a brand.
            </div>
            <div className="mtop-2">
              And to be differentiated you cannot be all things to all people.
            </div>
            <div className="mtop-2">
              Just think for a while about how you behave with your best friend
              or with your love interest. What if you start behaving in the
              exact same way with every person that you meet, would you be able
              to have a close intimate relationship with your best friend or
              your love interest anymore? Nope.
            </div>
            <div className="mtop-2">
              In the same way, a brand has to choose who does it want to create
              a close intimate relationship with. If a brand tries to be for
              everyone, then it will end up being for no one. That is why a
              Target Audience exists.
            </div>
            <div className="mtop-2">
              Hence a brand’s optimal strategy should be to choose a set of
              consumers which you can call your Target Audience. A particular
              set that you're not only going to attempt to satisfy but go ahead
              and absolutely delight them with your product, your brand, your
              communication. Even your packaging or the tonality of your social
              media posts are dictated by this very Target Audience.
            </div>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/target_audience/Target-audience.webp"
                alt="target audience"
                title="target audience"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <b>Extra Gyaan:</b> Marketers also create a very specific consumer
              portrait out of their Target Audience which they call the
              SuperConsumer. This is the exercise of almost visualizing your
              Target Audience by giving them a name, an occupation, a face, etc.
              It helps brands choose Brand Ambassadors and also create
              communication keeping an almost real person in mind rather just a
              rough idea of a target audience. The SuperConsumer is often an
              image of the lead that marketers cast in their advertisements.
            </div>
            <div className="mtop-2">
              Now the rest of your consumers who are still your consumers need
              to be satisfied as well. In the case of Thums Up, satisfaction
              could mean, offering a good tasting product at a reasonable price,
              which is well distributed so that it is in consumers' reach.
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  <h3 id="content-2">
                    Section 2: How ThumsUp has chosen its target audience?
                  </h3>
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              So the next interesting question that you as a brand need to
              answer is, which set of consumers are you going to call your
              SuperConsumers and try to delight? Well that decision is a
              function of your users, the product you're selling and the
              category in which you exist as a brand.*
            </div>
            <div className="mtop-2">
              In the case of Thums Up, since food tastes are developed in the
              early part of a person's life, most food brands like Thums Up,
              need to target either kids or teenagers, or target the parents of
              these children such that they have an early entry into a person's
              life.
            </div>
            <div className="mtop-2">
              Let's say, a teenager named Kartik who is 15 years old, sees a
              Thums Up ad, becomes interested in the brand and decides to start
              consuming Thums Up.
            </div>
            <div className="mtop-2">
              Now 15 years later, Kartik is married and setting up his own
              household.
            </div>
            <div className="mtop-2">
              Kartik loves Thums Up but his wife likes to consume another cola
              brand.
            </div>
            <div className="mtop-2">
              Which brand do you think is going to come into the household?
            </div>
            <div className="mtop-2">
              Are they going to buy both the brands or just one ?
            </div>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/target_audience/Superconsumer-or-target-audience.webp"
                alt="Superconsumer or target audience"
                title="Superconsumer or target audience"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              You can imagine, over a period of time, their choices are likely
              to come down to one specific brand which is going to be their most
              frequently bought brand. And that brand will belong to the person
              who's most unreasonably loyal to his/her own brand choice, who's
              simply intransigent, who refuses to consume any other brand than
              that of his/her own choice.
            </div>
            <div className="mtop-2">
              So if Kartik's love for Thums Up trumps his wife's love for
              another brand, over a period of time, you will find that, Thums Up
              comes more into their household.
            </div>
            <div className="mtop-2">
              Since Thums Up comes more into their household their children are
              more likely to start consuming Thums Up and that is how the brand
              will continue to do well.
            </div>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/target_audience/Superconsumer-or-target-audience.webp"
                alt="Superconsumer or target audience"
                title="Superconsumer or target audience"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              That is the reason, when expert brand builders launch campaigns,
              they ignore the larger chunk of their customers. They don’t want
              to just add up a little bit of delta into their lives. What they
              tend to do is pick a sharper communication audience and go ahead
              to delight them with their campaign.
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  <h3 id="content-3">
                    Section 3: What is the difference between communication
                    target audience & media target audience?
                  </h3>
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              The final point to remember here is the distinction between the
              communication target audience and the media target audience.
            </div>
            <div className="mtop-2">
              Till now, what we have discussed is essentially the audience you
              need to keep in mind while creating the ads and other
              communication, so that your brand has a coherent and consistent
              voice which really delights that audience. This audience is the
              Communication Target Audience.
            </div>
            <div className="mtop-2">
              However, when you have created your ad and are now trying to
              determine who is going to see your ads through your different
              media options like TV, radio, Facebook ads, Youtube ads, etc., you
              go for a much wider targeting. You speak to a much larger group
              rather than just the 15-20% of your consumer universe.
            </div>
            <div className="mtop-2">
              This is called the Media Target Audience.
            </div>
            <div className="mtop-2">
              It is important that our Media Target Audience is bigger and we
              don’t just show our ads to Macho Image Seeking teens. Otherwise 30
              years old Kartik who loves Thums Up, might forget to stock his
              fridge in summers and be made to settle with another brand.
            </div>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/target_audience/Communication-vs-media-target-audience.webp"
                alt="Communication vs media target audience"
                title="Communication vs media target audience"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              Therefore, when you’re defining your media audience on platforms
              like, Facebook, Google or on the conventional media channels, the
              media targeting is very wide and you need to go after large sets
              of audiences but when you’re creating an ad campaign you’re forced
              to be very selective.
            </div>

            <div className="quote-div ">
              <blockquote>
                * Choosing your SuperConsumer is a decision which being so
                critical for the brand’s future, is taken after a series of
                steps called STP (Segmentation, Targeting & Positioning). In
                this article, we will not go into STP as the objective of this
                article is not how to find your Target Audience. The objective
                is to find out why is defining a Target Audience important. If
                you want us to learn more about how to choose your Target
                Audience, try considering one of our flagship Marketing
                programs:{" "}
                <a
                  href="https://www.kraftshala.com/brand-building/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Brand Building
                </a>{" "}
                or{" "}
                <a
                  href="https://www.kraftshala.com/digital-brand-building/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Digital Brand Building
                </a>{" "}
                for current students, and{" "}
                <a
                  href="https://www.kraftshala.com/professional-brand-management-in-the-digital-age/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Professional Brand Management in digital age
                </a>{" "}
                for Working Professionals. You can also continue to access high
                quality content on the{" "}
                <a
                  href="https://www.kraftshala.com/kraftshala-app-download-mobile/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Kraftshala App
                </a>
              </blockquote>
            </div>

            <div className="mtop-2 mbottom-4 style-italics">
              This article was conceptualized by{" "}
              <a
                href="https://www.linkedin.com/in/varunsatia/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Varun Satia
              </a>
              , Founder & CEO and{" "}
              <a
                href="https://www.linkedin.com/in/eshu-sharma-04287386/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Eshu Sharma
              </a>{" "}
              , Co-founder & Head of Student Experience and was edited by{" "}
              <a
                href="https://www.linkedin.com/in/priya-tomar-340742121/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Priya Tomar
              </a>{" "}
              , Content Marketing Intern at{" "}
              <a
                href="http://kraftshala.com/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Kraftshala
              </a>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default TargetAudience;
