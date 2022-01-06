import React from "react";
import Seo from "../../../components/Seo/seo";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const DelhiElectionCampaigns = () => {
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
        title="The Ultimate Marketing Analysis of Delhi Election Campaigns 2020 | Kraftshala"
        description="Read Kraftshala's analysis of Delhi Election Campaigns 2020. Marketers love analyzing communication. Be it TV ads, emails..."
        url="https://www.kraftshala.com/blog/the-ultimate-marketing-analysis-of-delhi-elections-campaigns-2020/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/the-ultimate-marketing-analysis-of-delhi-elections-campaigns-2020">
          <div className="blog-wrapper">
            <h1>
              The Ultimate Marketing Analysis of Delhi Election Campaigns 2020
            </h1>
            <div className="blog-hero-img mtop-1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Delhi-election-campaigns-decoded-blog-2-1.webp"
                alt="delhi election campaign"
                title="delhi election campaign"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Marketers love analyzing communication. Be it TV ads, emails, push
              notifications from random apps or billboards (we don’t make safe
              drivers)!
            </div>
            <div className="mtop-2">
              There is also the excitement of unearthing some insider
              information that was till now only confined to the ‘strategic
              leadership’ of the company that created the ad.
            </div>
            <div className="mtop-2">
              We were happy with this everyday intellectual stimulation of ours
              when in mid-January 2020 we got absolutely fed up of political
              campaigns repeatedly interrupting our marketing meditation. Did
              you know that ad spends in the 2020 Delhi elections are estimated
              to be close to
              <a
                href="https://www.exchange4media.com/advertising-news/delhi-polls-traditional-media-ad-spends-to-see-10-15-hike-101941.html"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                {" "}
                200 crores
              </a>{" "}
              ? Anyways, we decided we would take our marketing tools that we
              teach in our programs and analyze the Delhi election campaign of
              2020. When we found a lot of delicious stuff, we did a free
              webinar at Kraftshala Live. A lot of the marketing junta that
              attended it, loved it and wanted it in a written format. Well,
              this is how you are reading this
            </div>
            <div className="mtop-2">
              So let us start brewing this concoction of Marketing & Politics,
              shall we?
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">
                The Ultimate Marketing Analysis of Delhi Elections Campaigns
                2020
              </h3>
            </div>

            <div className="mtop-1">
              <ol className="bullet-points ">
                <li
                  className="content-li"
                  onClick={() => handleClick("content-1")}
                  aria-hidden="true"
                >
                  Context
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-2")}
                  aria-hidden="true"
                >
                  Analyzing AAP’s campaigns
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-3")}
                  aria-hidden="true"
                >
                  Analyzing BJP’s campaigns
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-4")}
                  aria-hidden="true"
                >
                  The Pivot
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-5")}
                  aria-hidden="true"
                >
                  The Ending Note
                </li>
              </ol>
            </div>
            <div>
              <div className="mtop-2">
                <h2 id="content-1">Context</h2>
              </div>
              <div className="mtop-2">
                Now, to analyze any brand communication, Kraftshala has created
                a framework that we call the Marketing Prism Framework. Just
                like a prism segregates white light into the separate colors of
                VIBGYOR, similarly the Marketing Prism breaks up a communication
                into its key elements.
              </div>
              <div className="mtop-2">
                While we will not use the framework in its entirety for this
                analysis, it will be still be central to this article. You will
                get to know the different parts in it as we analyze the
                campaigns.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-25-2.webp"
                  alt="Marketing Prism Framework"
                  title="Marketing Prism Framework"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                Let us start with the Viewer & the Objective
              </div>
              <div className="mtop-2">
                To understand the target viewer and the objective of this ad, it
                is helpful for us to divide the Delhi electorate into three
                segments.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-4.webp"
                  alt="All vote shares are for the Delhi region"
                  title="All vote shares are for the Delhi region"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                <h3>Segment 1: BJP Loyalists: This the BJP core.</h3>
                <div>
                  There are folks that agree with almost the entire width of
                  BJP’s manifesto. While the actual campaigns will have much
                  more rigorous data, we can approximate their size by looking
                  at the number of people who voted for BJP even when there was
                  an AAP wave in the state elections of 2015: ~{" "}
                  <span className="text-red">32%</span>
                </div>
              </div>
              <div className="mtop-2">
                <h3>Segment 2: AAP Loyalists + Anti – BJP:</h3>
                <div>
                  This includes those folks who are fierce AAP loyalists and
                  also those who are fiercely Anti-BJP. We can approximate their
                  size by looking at the Non-BJP vote share in Delhi in 2019
                  General Elections: INC (22%) + AAP (18%) ~{" "}
                  <span className="text-red">40%</span>
                </div>
              </div>
              <div className="mtop-2">
                <h3>Segment 3: Swing Voters:</h3>
                <div>
                  These are the ones. Most of them voted for Mr. Modi in 2019
                  general elections and hence we can infer that a majority of
                  them are either happy or reasonably satisfied by the progress
                  made at the center. Most of them also agree that the work done
                  by AAP in Delhi has been good.
                </div>
              </div>
              <div className="mtop-2">
                Now, while the first two segments are folks that are very highly
                unlikely to shift bases (very loyal in marketing terms and both
                segments insist that the other is ‘Loyal Beyond Reason’), the
                Swing Voters are the ones that can be made to change their mind.
              </div>
              <div className="mtop-2">
                They constitute another ~{" "}
                <span className="text-red">30% of the electorate size.</span>
              </div>
              <div className="mtop-2">
                Let us go over to our first campaign now.
              </div>
              <div className="blog-hero-img mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Line-25.webp"
                  alt="Marketing Alliances"
                  title="Marketing Alliances"
                  placeholder="none"
                />
              </div>
            </div>
            <div>
              <div className="mtop-2">
                <h2 id="content-2">Analyzing AAP’s campaigns</h2>
              </div>
              <div className="mtop-2">
                Now while political parties put out a lot of communication
                throughout the election campaign, it is important to choose a
                piece that is central to their strategy.
              </div>
              <div className="mtop-2">
                We chose an ad that AAP put the maximum amount of monies behind.
                No surprise that this video was also by far the most viewed
                video from the Delhi Election Campaign, with more than 8 million
                views.
              </div>
              <div className="mtop-2">
                It is the ‘Kya aap BJP Samarthak hain” campaign video by AAP
              </div>
              <div className="mtop-2">
                <div className="yt-video">
                  <LazyLoad>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/iWXt2_I_Tp8"
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
                Please make sure that you watch this video at least twice before
                reading further.
              </div>
              <div className="mtop-2">
                So let us now analyze this video using the{" "}
                <span className="text-red">
                  Marketing PRISM Framework. (shown above)
                </span>
              </div>
              <div className="mtop-2">
                <div className="text-blue">The Target Viewer</div>
                <div>
                  So, who do you think this ad was targeting? Who was the viewer
                  and what was the objective?
                </div>
              </div>
              <div className="mtop-2">
                Well BJP loyalists is not the target viewer of this ad. As
                discussed earlier, the loyalists are not going to budge. We
                actually took to the streets and showed this campaign to people,
                and what we found out was that BJP loyalists couldn’t even bear
                to watch it in its entirety.
              </div>
              <div className="mtop-2">
                The Target Viewer of this ad are the Swing Voters. As mentioned
                earlier, these guys voted for BJP in the General Elections and
                hence do approve of the BJP Government. AAP appreciates this
                support and calls them ‘BJP Samarthak.’
              </div>
              <div className="mtop-2">
                <span className="text-blue">The Objective</span> of this ad is
                to get Swing Voters to vote for AAP.
              </div>
              <div className="mtop-2">
                <div className="text-blue">
                  Insight & Communication Challenge
                </div>
                <div>
                  Now Insight & Communication Challenge are one of the most
                  important parts of the VIBGYOR reverse marketing framework. To
                  keep things a little simple, in this analysis we will largely
                  focus on the Communication Challenge.
                </div>
              </div>
              <div className="mtop-2">
                If you could perform a surgery in the mind of the consumer and
                could convince them of just one single thing, then that is the
                Communication Challenge.
              </div>
              <div className="mtop-2">
                It defines the direction of the entire ad creative. It is what a
                brand manager fills up in the blank below:
              </div>
              <div className="mtop-2 text-red">
                The one thing that I want to convince my Target Viewer of is
                that “………”
              </div>
              <div className="mtop-2">
                So what is the single most important thing that this AAP ad
                wanted to convince the Swing Voters of?
              </div>
              <div className="mtop-2">
                Let us breakdown this campaign line by line to find out.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-5-1.webp"
                  alt="Campaign Breakup"
                  title="Campaign Breakup"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                Analyzing the exact statements of this ad it seems that the
                Communication Challenge that they had probably intended was:
              </div>
              <div className="mtop-2">
                I want to convince my TG that…{" "}
                <span className="text-red">
                  if you vote for BJP, all the good work that AAP has done in
                  government service delivery will go to waste.
                </span>
              </div>
              <div className="mtop-2">
                Why do you think AAP went for such a communication strategy
                which:
              </div>
              <div className="mtop-2">
                <ul className="bullet-points mtop-1">
                  <li>
                    Is layered- is not as simple as how most Political Campaigns
                    are - “We are brilliant, we have done amazing work”
                  </li>
                  <li>
                    More importantly it does not attack BJP straight off- “BJP
                    is evil”
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                To understand this, let us take up the example of probably the
                greatest work of art that has been created on the concept of
                Communication Challenge.
              </div>
              <div className="mtop-2">A totem to those who guess it!</div>
              <div className="mtop-2">Drum Rolls!!!</div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-28.webp"
                  alt="Inception"
                  title="Inception"
                  placeholder="none"
                  className="w-50 wm-100"
                />
              </div>
              <div className="mtop-2">
                The entire movie is basically built around trying to get a rich
                businessman to sell the empire that he inherited from his
                father.
              </div>
              <div className="mtop-2">
                Leonardo De Caprio (who was still Oscarless when this movie came
                out) and his team are adept professionals in getting into
                people’s brains and incepting ideas into their mind. Let us try
                to understand Communication Challenge from their perspective.
              </div>
              <div className="mtop-2">
                The Target Viewer in this case is Robert, the rich businessman’s
                son
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-17.webp"
                  alt="current behavior"
                  title="current behavior"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                The Desired Mindset is where the entire game is. What is the
                desired mindset that we want to incept in the mind of our target
                viewer that they get convinced of our communication challenge?
              </div>
              <div className="mtop-2">Well the best Desired Mindsets are:</div>
              <div className="mtop-1">
                <ul className="bullet-points">
                  <li>TG should already believe it.</li>
                  <li className="mtop-1">TG should not be opposed to it.</li>
                  <li className="mtop-1">
                    They are not salesy or too explicit
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                And hence the Desired Mindset that Leonardo and his team
                incepted is:
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-19-1.webp"
                  alt="Desired Mindset"
                  title="Desired Mindset"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">Saw that?</div>
              <div className="mtop-2">
                Now let us come back to our Target Viewer. Remember it is the
                Swing Voter.
              </div>
              <div className="mtop-2">
                A part of the answer you have already got. AAP didn’t go for any
                of the other routes because:
              </div>
              <div className="mtop-2">
                <ul className="bullet-points mtop-1">
                  <li>
                    “We are brilliant, we have done amazing work”- This is too
                    salesy and explicit. The communication would have simply
                    revealed the intent of the call- ‘Give me votes.’
                  </li>
                  <li>
                    “BJP is evil”- This is something which the Swing Voter is
                    actually opposed to.
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                The second decision is especially crucial because AAP had done
                this a lot in the past. Here is Saurabh from AAP very clearly
                explaining this decision on NDTV.
              </div>
              <div className="mtop-2">
                <div className="yt-video">
                  <LazyLoad>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/yYifC6tJqQ0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      id="player_1"
                    ></iframe>
                  </LazyLoad>
                </div>
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-20-1.webp"
                  alt="saurabh bharadwaj"
                  title="saurabh bharadwaj"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                They instead played on this indecisiveness or the duality of the
                Swing Voter. Acknowledging it and using it as their Campaign
                slogan even.
              </div>
              <div className="mtop-2">
                “Delhi me toh Kejriwal” actually acknowledges the fact that in
                the centre you guys want to vote Modi in. We accept it. But in
                Delhi, you know Kejriwal is better.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-29.webp"
                  alt="delhi mai to kejariwal"
                  title="delhi mai to kejariwal"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2 text-blue">Benefits:</div>
              <div>
                <b>Functional Benefits:</b> A promise of brilliant education,
                accessible health care and other government services for your
                family.
              </div>
              <div className="mtop-2">
                <b>Emotional Benefits:</b>
              </div>
              <div>
                - I am securing a bright future for my family, my city and my
                country
              </div>
              <div>
                - I can rely on Kejriwal just like a member of my family.
              </div>
              <div className="mtop-2">
                Now the emotional benefits are multiple & they are a bit
                tangential to our communication Challenge and to our functional
                benefits. They do not add up on each other and make each other
                stronger or more memorable.
              </div>
              <div className="mtop-2">
                Let us take the example of this{" "}
                <span className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-30.webp"
                    alt="Marketing Alliances"
                    title="Marketing Alliances"
                    placeholder="none"
                    className="v-align-middle w-20 wm-30"
                  />
                </span>{" "}
                communication that does this well.
              </div>
              <div className="mtop-2">
                <div className="yt-video">
                  <LazyLoad>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/3HeFs-YCK8A"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      id="player_1"
                    ></iframe>
                  </LazyLoad>
                </div>
              </div>
              <div className="blog-hero-img mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-21.webp"
                  alt="delhi election"
                  title="delhi election"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                <h3 className="text-blue">GYan - Reason to Believe:</h3>
                <div>
                  The Reason to Believe is what makes the Target Viewer believe
                  in the benefits. When Colgate tells you that it is affiliated
                  by the Indian Dental Association or Olay states that it has
                  the Regenerist Advanced Anti-Ageing Micro Sculpting
                  technology, those are RTBs.
                </div>
              </div>
              <div className="mtop-2">
                While there was no reason to believe in this ad, there were some
                very strong RTBs that AAP had created throughout the campaign.
              </div>
              <div className="mtop-2">
                <ul className="bullet-points mtop-1">
                  <li>
                    {" "}
                    <a
                      href="https://aamaadmiparty.org/aap2019/"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      AAP’s Report Card
                    </a>{" "}
                  </li>
                  <li>Welcomekejriwal.in:</li>
                </ul>
              </div>
              <div className="mtop-2">
                <div className="yt-video">
                  <LazyLoad>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/_sv8zuE0BwQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      id="player_1"
                    ></iframe>
                  </LazyLoad>
                </div>
              </div>
              <div className="mtop-2 ">
                <h3 className="text-blue">Origins</h3>
                <div>
                  Origins is about the Brand Personality, the Brand Essence and
                  the Purpose. While it makes for another very interesting deep
                  dive, we will not go into Origins here.
                </div>
              </div>
              <div className="mtop-2 ">
                <h3 className="text-blue">Recital</h3>
                <div>
                  So far we have discussed everything about the strategy of the
                  ad. This is the part that analyses the Execution of the ad. At
                  Kraftshala, we use the following checklist to rate a campaign
                  on storytelling execution.
                </div>
              </div>
              <div className="mtop-2">
                <ul className="bullet-points mtop-1">
                  <li>Is Simple?</li>
                  <li>Is? Distinctive?</li>
                  <li>Does it keep the medium in mind?</li>
                  <li>Has a call to action?</li>
                  <li>Connects to the Target Viewer?</li>
                </ul>
              </div>
              <div className="mtop-2">Let us pick up the first one.</div>
              <div className="mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/check_circle-24px-1.png"
                  alt="checkmark"
                  placeholder="none"
                  className="checkmark v-align-sub"
                />
                <h3 className="d-inline">Is Simple</h3>
              </div>
              <div>
                Well simplicity is of paramount importance. See how simple Trump
                keeps stuff. It is often said that a campaign should be for the
                lowest common denominator.
              </div>
              <div className="mtop-2">
                This ad fails on simplicity. Let us explain to you why.
              </div>
              <div className="mtop-2">
                Watch the ad and go line by line. If communication challenge is
                what the viewer needs to take away from this campaign, how many
                lines do you think are helping build this narrative? And how
                many lines are distracting you from this narrative?
              </div>
              <div className="mtop-2">
                Remember that the Narrative is ‘if you vote for BJP, all the
                good work that AAP has done in government service delivery will
                go to waste.’ Here is the answer:
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-6-1.webp"
                  alt="delhi election"
                  title="delhi election"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                As you can see only about 35-40% of the script is on point.
              </div>
              <div className="mtop-2">
                Because of this, the message that comes out from this ad,
                especially for those people who are slightly more predisposed
                towards BJP is:
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-7.webp"
                  alt="Marketing Alliances"
                  title="Marketing Alliances"
                  placeholder="none"
                />
              </div>

              <div className="mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/check_circle-24px-1.png"
                  alt="checkmark"
                  placeholder="none"
                  className="checkmark v-align-sub"
                />
                <h3 className="d-inline"> Is Distinctive?</h3>
              </div>
              <div className="bullet-points">
                Yes, addressing the other party supporters in this way has not
                been done before.
              </div>
              <div className="mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/check_circle-24px-1.png"
                  alt="checkmark"
                  placeholder="none"
                  className="checkmark v-align-sub"
                />
                <h3 className="d-inline"> Does it keep the Medium in mind?</h3>
              </div>
              <div className="bullet-points">
                Yes, created specifically for phone with a vertical video. Cut
                down from{" "}
                <a
                  href="https://www.youtube.com/watch?v=EA9Big_OZqE&t=1s"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  3 minutes
                </a>{" "}
                keeping in account the attention spans on internet.
              </div>
              <div className="mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/check_circle-24px-1.png"
                  alt="checkmark"
                  placeholder="none"
                  className="checkmark v-align-sub"
                />
                <h3 className="d-inline"> Has a call to action?</h3>
              </div>
              <div className="bullet-points">Yes. Clearly asks for vote.</div>
              <div className="mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/check_circle-24px-1.png"
                  alt="checkmark"
                  placeholder="none"
                  className="checkmark v-align-sub"
                />
                <h3 className="d-inline"> Connects to the Target Viewer?</h3>
              </div>
              <div className="bullet-points">
                Yes. It is based on a strong understanding of the user.
              </div>

              <div className="blog-hero-img mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Line-25.webp"
                  alt="Line"
                  placeholder="none"
                />
              </div>
            </div>
            <div>
              <div className="mtop-2">
                <h2 id="content-3">Analyzing BJP’s campaigns</h2>
                <div className="mtop-2">
                  This time, before we go into the Marketing PRISM, let us go
                  into the broad strategy at play.
                </div>
                <div className="mtop-2">
                  Now the part to note here from the BJP’s perspective is that
                  BJP was trying to defeat someone already in power.
                </div>
                <div className="mtop-2">
                  Now the typical strategy for defeating incumbents is:
                </div>
                <div className="mtop-2">
                  <ul className="bullet-points mtop-1">
                    <li>Figure out point(s) of Dissonance</li>
                    <li>Make it the focal point with top of the mind recall</li>
                    <li>Don’t budge from it and WIN</li>
                  </ul>
                </div>
                <div className="mtop-2">
                  The first point, which is choosing a point of Dissonance is
                  the most critical one. Now there is a simple 2 by 2 targeting
                  matrix that outlines the topics one should talk about when
                  trying to defeat a Ruling Player.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-8-1.webp"
                    alt="opposition opportunity matrix"
                    title="opposition opportunity matrix"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  A great marketing example for ‘Trying to defeat the ruling
                  player’ is when Yippee tried to displace Maggi from the top
                  position of the instant noodle category. Remember this
                  campaign that came out in the winters?
                </div>
                <div className="mtop-2">
                  <div className="yt-video">
                    <LazyLoad>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/oowajrc7kew"
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
                  Taste is the most important aspect when we think of Instant
                  Noodles. But since Yippee knew that Maggi has a strong hold on
                  Taste, they went after the stickiness of Maggi, especially in
                  winters. It really worked as Yippee was able to take share
                  from Maggi.
                </div>
                <div className="mtop-2">
                  Let us check out how the above targeting matrix looked for BJP
                  when they were up against the Ruling Party Congress in 2014
                  General Elections.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-9-2.webp"
                    alt="2014 general elections"
                    title="2014 general elections"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  As you can see a lot of good areas. And so they came up with
                  the very famous campaign{" "}
                  <span className="text-red">‘Janta Maaf Nahi Karegi’:</span>
                </div>
                <div className="mtop-2">
                  <div className="yt-video">
                    <LazyLoad>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/jvHa6-54JDE"
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
                  Now let us look at the Targeting Matrix for the 2020 Delhi
                  elections.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-10-1.webp"
                    alt="2020 delhi elelctions"
                    title="2020 delhi elelctions"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  So a lot of areas that were not BJP’s relative strength
                  primarily because AAP had demonstrable proof and RTBs that
                  they had done good work in those areas.
                </div>
                <div className="mtop-2">
                  So the first Strategy of BJP was the following:
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-11-1.webp"
                    alt="2020 delhi election - BJP strategy 1"
                    title="2020 delhi election - BJP strategy 1"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  Increase their own Relative Strength on the issues in yellow.
                  Both by bringing AAP’s hold on those issues down as well as
                  making promises of their own on those issues.
                </div>
                <div className="mtop-2">
                  Let us analyse campaigns from this strategy.
                </div>
                <div className="mtop-2">
                  <div className="yt-video">
                    <LazyLoad>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/XfjKkr0D2js"
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
                  Also there were tons of display & billboard ads that they put
                  their monies on:
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-28.webp"
                    alt="water campaign"
                    title="water campaign"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  <div className="text-blue">Target Viewer:</div>
                  <div>Swing Voters</div>
                </div>
                <div className="mtop-2">
                  <div className="text-blue">Communication Challenge:</div>
                  <div>
                    I want to convince my TG that BJP will bring the same
                    development in Delhi that it brought at the centre.
                  </div>
                </div>
                <div className="mtop-2">
                  <div className="text-blue">Benefits:</div>
                  <div>
                    <b>Functional:</b> Promise of Good Water, Lessened
                    Pollution, Transportation, Housing to the slum dwellers,
                    Free and Accessible Health Services, Lessened Traffic
                    Problems
                  </div>
                </div>
                <div className="mtop-2">
                  <div className="text-blue d-inline">Emotional:</div>{" "}
                  Confidence & Trust towards Growth
                </div>
                <div className="mtop-2">
                  <div className="text-blue">GYan-Reason to Believe (RTB):</div>
                  <div>
                    Well there is nothing. They make claims for their future
                    promises but do not substantiate it using any stats (which
                    they could have using the central government’s record.)
                  </div>
                </div>
                <div className="mtop-2">
                  Surprisingly, a fairly down-the-ditches opponent has done a
                  better job of the RTB in their communication.
                </div>
                <div className="mtop-2">
                  They talked about the development that Congress brought to
                  Delhi with stats.
                </div>
                <div className="mtop-2">
                  <ul className="bullet-points">
                    <li>Delhi became the greenest capital in the world</li>
                    <li className="mtop-1">
                      World’s largest CNG Public Transport
                    </li>
                    <li className="mtop-1">India’s best domestic airport</li>
                    <li className="mtop-1">
                      India’s first Kerosene free state
                    </li>
                    <li className="mtop-1">5 times more doctors</li>
                    <li className="mtop-1">
                      India’s Health Capital- 28 new hospitals & 20348 new beds
                      Etc.
                    </li>
                  </ul>
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-8.webp"
                    alt="I know"
                    title="I know"
                    placeholder="none"
                    className="w-70 wm-100"
                  />
                </div>
                <div className="mtop-2">
                  Let us come back to the BJP campaign:{" "}
                  <span className="text-red">Hum hain Bhajpa!</span>
                </div>
                <div className="mtop-2">
                  How could it have been a better campaign?
                </div>
                <div className="mtop-2">
                  Well substantiate your promises with some RTBs. They can be
                  stats of what you have been able to achieve in the other
                  states in this term. Referring to some of the huge development
                  problems that BJP has solved at the Centre like toilets, LPG,
                  Housing, etc., even if they are not the exact problems that
                  Delhi is facing, could have made the campaign more believable.
                </div>
                <div className="mtop-2">
                  Would they have won with this? Probably not. Read on to find
                  out.
                </div>
                <div className="mtop-2">
                  <h3>Recital</h3>
                </div>
                <div className="mtop-2">
                  <ul className="bullet-points">
                    <li>
                      Is Simple? Yes, simple language and simple logic of how
                      they’ll make everything better.
                    </li>
                    <li className="mtop-1">
                      Is Distinctive? No, pretty standard political narrative.
                    </li>
                    <li className="mtop-1">
                      Does it keep the medium in mind? No, too long to make any
                      dent online.
                    </li>
                    <li className="mtop-1">
                      Is within the Personality of the Brand? Yes
                    </li>
                    <li className="mtop-1">Has a call to action? Yes</li>
                    <li className="mtop-1">
                      Connects to the Target Viewer? NO
                    </li>
                  </ul>
                </div>
                <div className="mtop-2">
                  Let us talk about the last point for a bit. So why did it not
                  connect with the voters? Does the consumer believe in BJP’s
                  point of Dissonance or not?
                </div>
                <div className="mtop-2">
                  Our answer lies in the same Opposition Opportunity Matrix that
                  we saw earlier.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-13-1.webp"
                    alt="BJP's relative strength vs AAP"
                    title="BJP's relative strength vs AAP"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  The point BJP was playing at was not of relative strength to
                  them. It was very difficult to persuade people that AAP had
                  not worked well on these issues. Poll after poll showed that
                  the Delhi electorate believed that AAP had worked.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-22.webp"
                    alt="Are you satisfied with the work of AAP government"
                    title="Are you satisfied with the work of AAP government"
                    placeholder="none"
                  />
                </div>
                <div className="text-center">
                  Source:{" "}
                  <a
                    href="https://economictimes.indiatimes.com/news/elections/assembly-elections/delhi/over-58-in-delhi-satisfied-with-kejriwals-performance-survey/articleshow/73640245.cms"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Economic Times
                  </a>{" "}
                  26th Jan 2020
                </div>
                <div className="mtop-2">
                  And the more BJP attacked this point, the bigger the point
                  became! By talking about this point, BJP kept feeding into
                  AAP’s hands. Elementary mistake.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-16.webp"
                    alt="Aap chronology samajhiye"
                    title="Aap chronology samajhiye"
                    placeholder="none"
                  />
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-23.webp"
                    alt="Focus on creating dissonance on AAP's proposition of - Kaam pe Vote"
                    title="Focus on creating dissonance on AAP's proposition of - Kaam pe Vote"
                    placeholder="none"
                  />
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Line-25.webp"
                    alt="Line"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  <h2 id="content-4">Pivot</h2>
                </div>
                <div className="mtop-2">
                  When the 2nd person in command in the country after Mr. Modi
                  could not elicit a change in the electorate’s mindset about
                  AAP’s work, in came PLAN B.
                </div>
                <div className="mtop-2">
                  Suddenly a lot of BJP spokesperson’s started focusing on
                  Polarization. Trying to equate this election into a ‘Hindu vs
                  Muslim’ or a ‘Shaheen Bagh’ related issue.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-15-1.webp"
                    alt="The pivot: BJP Campaign Strategy 2"
                    title="The pivot: BJP Campaign Strategy 2"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  It can be cross checked with a lot of events that happened
                  around that time.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-24.webp"
                    alt="kapil mishra equates efection of india vs pakistan"
                    title="kapil mishra equates efection of india vs pakistan"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  All of this resulted in a lot of sudden rise in chatter around
                  Shaheen Bagh at that point of time.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/image-27.webp"
                    alt="shaheen bagh"
                    title="shaheen bagh"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  And as a perfect embodiment of the Plan B came this campaign:
                </div>
                <div className="mtop-2">
                  <div className="yt-video">
                    <LazyLoad>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/6hqL0yDBLas"
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
                  Read through the lyrics to understand Plan B
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Group-16-1.webp"
                    alt="BJP - Ab Dilli Badlo"
                    title="BJP - Ab Dilli Badlo"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  This blatant campaign charged up BJP Loyalists but it
                  alienated some swing voters who do not see how this issue is
                  relevant to the election.
                </div>
                <div className="blog-hero-img mtop-1">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/delhi_election/Line-25.webp"
                    alt="Line"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  <h2 id="content-5">The Ending Note</h2>
                </div>
                <div className="mtop-2">Dear AAP and BJP,</div>
                <div className="mtop-2">
                  In marketing there is a{" "}
                  <span className="text-red">P.C.M.</span> rule.
                </div>
                <div className="mtop-2">
                  It means that the <span className="text-red">Product</span> is
                  more important than the
                  <span className="text-red">Communication</span>, which in turn
                  is more important than the{" "}
                  <span className="text-red">Media</span>. There is nothing
                  truer than this rule.
                </div>
                <div className="mtop-2">
                  While marketers like us can help Political Parties in
                  communicating better, in the long run, it is only a strong
                  product that will keep you competitive. No amount of great
                  communication or media strategy can help you out. Or let us
                  say no amount of great communication or media strategy SHOULD
                  help you out. Just what you can see happening with Congress.
                  Long live Democracy!
                </div>
                <div className="mtop-2">
                  Wow you have reached the end! If you have really enjoyed
                  reading this Marketing Analysis of the Delhi Elections
                  campaign and are interested in marketing as a career, here is
                  an interesting opportunity for you.
                </div>
                <div className="mtop-2">
                  Apply for the highest rated online marketing program in the
                  country:{" "}
                  <a
                    href="https://www.kraftshala.com/professional-brand-management-in-the-digital-age/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Professional Brand Management in the Digital Age
                  </a>
                </div>
                <div className="mtop-2">See you!</div>
                <div className="mtop-2 mbottom-4 style-italics">
                  This article was written by{" "}
                  <a
                    href="https://www.linkedin.com/in/varunsatia/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Varun Satia
                  </a>{" "}
                  ,
                  <a
                    href="https://www.linkedin.com/in/eshu-sharma-04287386/?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Eshu Sharma
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.linkedin.com/in/nishtha-jain-47b65323/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Nishtha Jain
                  </a>{" "}
                  , Marketing Team at Kraftshala.
                </div>
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default DelhiElectionCampaigns;
