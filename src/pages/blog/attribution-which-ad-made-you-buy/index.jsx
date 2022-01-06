import React from "react";
import Seo from "../../../components/Seo/seo";
// import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const AdMadeYouBuy = () => {
  return (
    <React.Fragment>
      <Seo
        title="Attribution - Which Ad made you buy? | Kraftshala"
        description="People click on different ads before conversion. But, what ad really made them buy? This is at the heart of attribution models covered here."
        url="https://www.kraftshala.com/blog/attribution-which-ad-made-you-buy/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/attribution-which-ad-made-you-buy">
          <div className="blog-wrapper">
            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/So-which-ad-made-you-buy-1.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
                className="br-25"
              />
            </div>
            <div className="mtop-2">
              <h2>Why is attribution Important?</h2>
            </div>
            <div className="mtop-2">
              A marketer’s goal is to increase the Return on Investments (ROI).
              The success of this objective depends crucially on how the
              marketer chooses to spend the marketing budget? Since there are a
              plethora of offline (TV, radio, billboard, BTL activities, etc.)
              as well as online (FB, YT, google display, seach, linkedin,
              influencer marketing etc.) channels to choose from, how these
              budget decisions are taken is of paramount importance.
            </div>
            <div className="mtop-2">
              The problem in this process is that how well a marketing channel
              has performed isn’t very easy to figure out. This is because
              consumers have complicated buying journeys.
            </div>
            <div className="mtop-2">
              For example, you want to buy a gift for a friend.
            </div>
            <div className="mtop-2">
              <b>Search 1:</b> You search for{" "}
              <div className="style-italics d-inline">
                “best gifts to buy online”
              </div>{" "}
              The search results throw up an ad by, say, Google Nexus. You click
              on it, and realize maybe tablets would be a good idea
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/attribution-article-image-1.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <b>Search 2:</b> Then, you search for{" "}
              <div className="style-italics d-inline">
                {" "}
                “best tablets under 10K”
              </div>{" "}
              Another Nexus ad throws up. You click and browse, and get
              interested in Nexus tablets.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/attribution-article-image-2.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <b>Search 3:</b> Few days later, you finally search{" "}
              <div className="style-italics d-inline">
                {" "}
                “buy Nexus 9 best price”
              </div>{" "}
              A perfect Nexus ad with an offer pops up.You click and buy!
            </div>
            <div className="mtop-2">
              Now which of these three ads should be given the credit for this
              sale?
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Attribution-journey.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              It is the same question that football has faced forever.
            </div>
            <div className="mtop-2">
              Does the striker deserve 100% credit for every goal? The answer is
              a clear No.
            </div>
            <div className="mtop-2">
              The problem is that giving the third ad (buy Nexus 9 best price)
              all the credit might lead to the marketer concluding that the
              first ad (that was prompted for ‘best gifts to buy online’)
              doesn’t contribute to any conversions. And hence the marketer
              might remove the budget for that ad altogether. Which might be a
              wrong decision since that ad was able to set up the entire journey
              for the next two ads.
            </div>
            <div className="mtop-2">
              What we just saw is called the <b>Last Click Model.</b>We gave
              100% of the credit to the third ad, i.e. ‘attributed’ all the
              credit of the conversion to the third ad and no credit to the
              first two ads.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Last-click-Model-of-Attribution.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              The example you saw right now was about different search ads in
              the same media (search ads).
            </div>
            <div className="">The same thing happens across channels too.</div>
            <div className="mtop-2">
              As you just saw using a Last Click model can lead to
              de-prioritizing of critical media, leading to loss of final
              efficiency. Hence it is critical to get our attribution right.
            </div>
            <div className="mtop-2">
              Now that you have understood why attribution is important, let us
              go to the types of attribution.
            </div>
            <div className="mtop-2">
              <h2>Types of attribution</h2>
            </div>
            <div className="mtop-2">
              There are 2 types of digital interactions: Clicks & Impressions.
              You just saw an example of how attribution decisions were taken
              based on which ad the user clicked on. However, attribution can
              also be done on the basis of impressions, i.e. an ad might play an
              important part in the conversion journey because of the user just
              having looked at it.
            </div>
            <div className="mtop-2">Hence attribution models can be both:</div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>Only Click-based attribution</li>
                <li>
                  Or Click + Impression based attribution (whenever possible)
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              With that in mind, let us look at some of the most commonly used
              Attribution Models.
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  <b>Last Click Attribution Model:</b> You have already gone
                  through this above. This model is very commonly used because
                  it gives a singular truth to everyone. This is because
                  tracking where did the last click before a purchase came from
                  is very easy to do, it can be done from the URL itself in most
                  cases (next time you click on an ad, see how the URL changes:
                  all the information about the channel, the type of ad, and a
                  lot of other parameters are passed on in the URL). Hence
                  despite it being biased towards the channels that get the
                  final click, it is still very commonly used.
                </li>
                <li>
                  <b>First Click Attribution Model:</b> All the credit is given
                  to the channel that got you the first click and no credit to
                  the rest of the channels. Similar to it is the first
                  interaction attribution model, where all the credit goes to
                  the channel where the user clicked on or even saw the ad for
                  the first time. Assume that a user first sees an ad on
                  Youtube, followed by a Banner Ad on GDN, followed by an ad on
                  Facebook and finally goes and searches on Google for the final
                  purchase. For this journey, the first click model would
                  attribute all the credit to Youtube since thats where the
                  first interaction took place.
                </li>
              </ul>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/First-Click-Attribution.webp"
                alt="Dove"
                title="Dove"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              The first click model isn’t used very much, but it is useful for
              big brands who are not so focused on conversions as of now and are
              primarily going after Brand Awareness. Since the objective in a
              Brand Awareness campaign is to get the brand’s communication to
              new people, the First Interaction model makes sense as it will
              give credit to the channel that gets us new reach.
            </div>
            <div className="mtop-1">
              <ul>
                <li>
                  <b>Linear Attribution Model:</b> Every channel that took part
                  in the journey gets equal credit.
                </li>
              </ul>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Linear-Model-of-Attribution.webp"
                alt="Linear Model of Attribution"
                title="Linear Model of Attribution"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              For industries where the acquisition funnel is long, for example
              Real Estate, some marketers may resort to a Linear Attribution
              Model since it gives them an understanding of which all channels
              were able to serve an ad to the user.
            </div>
            <div className="mtop-1">
              <ul>
                <li>
                  <b>Time Decay Attribution Model:</b> The channel that is
                  closer to the conversion gets more credit than the other
                  channels.
                </li>
              </ul>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Time-Decay-Attribution-Model.webp"
                alt="Time Decay Attribution Model"
                title="Time Decay Attribution Model"
                placeholder="none"
              />
            </div>
            <div className="mtop-1">
              <ul>
                <li>
                  <b>Position Based Attribution Model:</b>
                  This model can be used to customize the weightage as per your
                  business’ conversion journey. For example, in a category like
                  Menstrual Cups, suppose you are getting people to your website
                  for the first time primarily by search ads, you then put
                  cookies in their system and run retargeting ads on FB, Display
                  and YT so that they convert. Now your understanding about your
                  acquisition funnel is that the most difficult part is to get
                  the first click on the search ad and then the final
                  conversion. Hence you may over index the weightage for the
                  first and the last click, and reduce for the ones in the
                  middle.
                </li>
              </ul>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Position-based-Attribution-Model.webp"
                alt="Position based Attribution Model"
                title="Position based Attribution Model"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <h3>So which one should you use?</h3>
            </div>
            <div className="mtop-2">
              There is no clear answer, but the factors to consider are as
              follows:
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>Depends on your business</li>
                <li>
                  Generally speaking, models that do not allow 100% weightage to
                  one channel are better. Thus, Time Decay/Position Based First
                  click/Last click
                </li>
                <li>All models available in Google Ads & Google Analytics</li>
              </ul>
            </div>
            <div className="mtop-2">
              But there is a problem with all these models. They do not always
              account for “true contribution”. Would the conversion have come if
              this channel was missing? Is there a better solution, yes.
            </div>
            <div className="mtop-2">
              <h2>Data-Driven Attribution (DDA)</h2>
            </div>
            <div className="mtop-2">
              This is the best of all attribution methods, as it tries to figure
              out the real contribution for every channel. Let us see how it
              works. Let us assume that the conversion journey includes these 3
              channels.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Channels.webp"
                alt="Channels"
                title="Channels"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              The previous year’s report of these 3 channels is given below. So
              how should we change budgets this year?
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Budget-Split.webp"
                alt="Budget Split"
                title="Budget Split"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Based on this data a lot of people might be tempted to remove
              Youtube’s budget allocation and give it to Facebook. Put a pin on
              that. Let us look at how the Data Driven Attribution Model can
              help us take this decision.
            </div>
            <div className="mtop-2">
              We first look at all the consumer journeys that led to a
              conversion.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Converted-Consumer-Journeys.webp"
                alt="Converted Consumer Journeys"
                title="Converted Consumer Journeys"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              And we also take into account all journeys that did not lead to a
              conversion as well. THis is the only attribution model that looks
              at <b>non-converted journeys.</b>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Converted-and-non-converted-consumer-journeys-1.webp"
                alt="Converted and non converted consumer journeys"
                title="Converted and non converted consumer journeys"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              We then put all the journeys that are the same together. For
              example, below we have highlighted the journey :{" "}
              <b>Search to Youtube to Facebook</b>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Search-Youtube-Facebook-Journey.webp"
                alt="Search Youtube Facebook Journey"
                title="Search Youtube Facebook Journey"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              When we put them together, we see that Team 1 (Search to Youtube
              to Facebook) has led to 2 converts and 3 non-converts.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/All-Conversion-Probabilities.webp"
                alt="All Conversion Probabilities"
                title="All Conversion Probabilities"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <h3>The probability of conversion for Team 1 is: 2 / 5 = 40%</h3>
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Team-1-Conversion-Probability.webp"
                alt="Team 1 Conversion Probability"
                title="Team 1 Conversion Probability"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Similarly we put the probability down for other Consumer Journeys
              as well:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/All-Conversion-Probabilities.webp"
                alt="All Conversion Probabilities"
                title="All Conversion Probabilities"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Now we see that the only difference between Team 1 (Search to
              Youtube to Facebook) and Team 2 (Search to Facebook) is that
              Youtube is missing in between. This shows that the presence of
              Youtube in the middle actually leads to an increase of 0.07 in
              probability.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Youtubes-contribution-to-conversion.webp"
                alt="Youtubes contribution to conversion"
                title="Youtubes contribution to conversion"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Similarly by picking up other journeys we calculate this
              individual contribution of each channel to the probability of
              conversion of Team 1.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/All-Channels-contribution-to-conversion.webp"
                alt="All Channels contribution to conversion"
                title="All Channels contribution to conversion"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Now we can calculate the % contribution.
            </div>
            <div className="mtop-2">
              <h3>Search = 0.1/ (0.1 + 0.07 + 0.15) = 31%</h3>
            </div>
            <div>
              <h3>Youtube = 0.07/ (0.1 + 0.07 + 0.15)= 22%</h3>
            </div>
            <div>
              <h3>Facebook = 0.15/ (0.1 + 0.07 + 0.15) = 47%</h3>
            </div>
            <div className="mtop-2">
              Note that had this been a linear model, we would have given 33% to
              each of these channels. Had this been first click, 100% to search,
              and 0% to YT an FB. Had this been last click, 100% to FB and 0%to
              search and YT.
            </div>
            <div className="mtop-2">
              Data Driven Attribution here shows that based on past data, in
              this consumer journey (Search to Youtube to Facebook), Search
              should get 31% of the credit, Youtube 22% of the credit and
              Facebook should get 47% of the credit.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Actual-attribution-based-on-data-driven-model.webp"
                alt="Actual attribution based on data driven model"
                title="Actual attribution based on data driven model"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              So now we know the exact contribution of each channel in a
              consumer journey. This has an effect on the total number of
              conversions that we attribute to a channel.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Revised-CPL-based-on-Data-driven-Attribution.webp"
                alt="Revised CPL based on Data driven Attribution"
                title="Revised CPL based on Data driven Attribution"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              As you can see Facebook has come down from 10,000 conversions to
              8,998 conversions. This has happened because for a lot of
              conversions like the one we saw in Team A (Search to Youtube to
              Facebook), Facebook was given full 100% credit, which we have now
              reduced to 47%.
            </div>
            <div className="mtop-2">
              Similarly Youtube and Search get credited for more than they had
              been previously.
            </div>
            <div className="mtop-2">
              This has led to the CPL of Facebook increase by 11% and that of
              Youtube decrease by 38%.
            </div>
            <div className="mtop-2">
              What comes out of this is that Youtube, while it is not leading to
              a lot of last clicks is certainly quite useful to get the consumer
              interested, and hence is setting up the entire game for the
              channels that follow.
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/made_you_buy/Attribution-Funnel.webp"
                alt="Attribution Funnel"
                title="Attribution Funnel"
                placeholder="none"
                className="w-40 wm-100"
              />
            </div>
            <div className="mtop-2">
              We have put in a lot of money at the end of the funnel, but not
              enough at the top.
            </div>
            <div className="mtop-2">
              This can lead us to a conclusion that we actually should put in
              some more money in Youtube so that we expand the top of our
              funnel. We can do it at the cost of Facebook. It is a reasonable
              assumption that can lead to an increase in the efficiency of the
              campaign.
            </div>
            <div className="mtop-2">
              Just a few things to note about the Data Driven Attribution Model:
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  The model does NOT have FIXED weights for each channel &
                  position
                </li>
                <li>
                  It depends on the data for your campaign and is dynamic. The
                  weights change with EVERY new conversion that you get.
                </li>
                <li>
                  It also factors in ABSENCE of a conversion. Thus, it also
                  changes with every path NOT resulting in a conversion as well.
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              <h2>Some constraints to all Attribution Models</h2>
            </div>
            <div className="mtop-2">
              <ol className="bullet-points">
                <li>
                  <b>The walled gardens of Facebook v/s Google:</b> Facebook and
                  Google are walled gardens i.e. they do not share any data with
                  each other. This means that attribution models cannot be used
                  simply across Facebook and Google currently. There are a few
                  workarounds though. One way is through Click and Impression
                  tracking using tags. These tags are present in each creative
                  and they report as soon as they are loaded or clicked.
                  Facebook allows Click & Impression tracking but it doesn’t
                  allow it if when you are using an Audience Targeting Strategy
                  for example, lookalike, or custom match, etc.
                </li>
                <li>
                  <b>No tracking of Offline Media:</b> To measure offline +
                  online, probabilistic techniques are used, called MMMs:
                  Marketing/Media Mix Modelling. They in no way provide exact
                  numbers and just provide probabilistic directions to
                  understand which platform will contribute to how much of the
                  result.
                </li>
                <li>
                  <b>
                    Models break if your journey moves from online to offline:
                  </b>{" "}
                  For any business where the consumer journey moves to offline
                  for example, a site visit for real estate, or a counselor-call
                  for an education program, etc. the models don’t work anymore.
                </li>
                <li>
                  <div>
                    <b>Google Analytics works on ‘Non Direct’ Attribution:</b>{" "}
                    Since a lot of you might set up your attribution models on
                    Google, it is important to note that Google works on ‘Non
                    Direct Attribution’. (Direct traffic are those visits that
                    have arrived on your site either by typing your website URL
                    into a browser or through browser bookmarks.)
                  </div>
                  <div className="mtop-2">
                    Non Direct Attribution means that Google only gives the
                    credit to the direct channel if the entire journey comprises
                    only of Direct. If there is any other channel present
                    anywhere in the journey, it attributes the credit to the
                    non-direct channel. At times this is fine, for example:
                  </div>
                  <div className="mtop-2">
                    a) Sees paid ad and visits the website {"->"} Doesn’t
                    transact
                    {"->"} Continues to visit site directly multiple times{"->"}
                    Transacts after X days
                  </div>
                  <div className="mtop-2">
                    Google will give the credit of this conversion to the Paid
                    Ad and not to direct, which makes sense. However there are
                    usecases where Non-direct attribution under-reports the
                    efficacy of direct traffic, which you might be getting
                    because of word of mouth or having your URL on your
                    billboard campaigns, etc. For example:
                  </div>
                  <div className="mtop-2">
                    b) Comes directly to the website {"->"} Again directly{" "}
                    {"->"} Clicks on a Organic search result or a Paid ad {"->"}{" "}
                    Again comes directly and converts
                  </div>
                </li>
              </ol>
            </div>
            <div className="mtop-2">
              Google still attributes it to Paid rather than direct. Hence we
              should watch out for this while using Attribution models in
              google.
            </div>
            <div className="mtop-2 style-italics">
              This is a summary of the Kraftshala Live hosted by{" "}
              <a
                href="https://www.linkedin.com/in/eshu-sharma-04287386/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                Eshu Sharma
              </a>
              , Co-founder @ Kraftshala on 31st March 2020.
            </div>
            <div className="mtop-2">
              In case of any questions, please write to us at
              contact@kraftshala.com.
            </div>
            <div className="mtop-2">
              <h2>
                Following were some interesting questions that were asked during
                the session.
              </h2>
            </div>
            <div className="mtop-2">
              <ul>
                <li className="mtop-1">
                  <h3>
                    How did one find out the total conversions and revenue
                    generated from these specific channels?
                  </h3>
                  <div>
                    Google Analytics gives this data. You can login to Google
                    Analytics even if you dont have a company account and the
                    see demo account the data for Google Merchandise store to
                    get a hang of the various things that you can do with that
                    tool.
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>Where do you set the rules for attribution?</h3>
                  <div>
                    To set the rules for attribution, follow these steps for
                    Google. Sign into your Google Ads account. In the upper
                    right corner, click the tools icon , and under
                    "Measurement", click "Conversions. Find the conversion
                    action you'd like to edit. Click its name in the “Name”
                    column. In the “Settings” section, click Edit settings.
                    Click “Conversion window.” Select how long to track
                    conversions after an ad interaction from the drop-down. You
                    can set it anywhere from 1 to 30, 60, or 90 days depending
                    on the conversion source. Note that windows of at least 7
                    days are recommended, because they provide a richer set of
                    conversion data. For view-through conversions, click
                    View-through conversion window and select an option from the
                    drop down. Similarly on Facebook as well..in ad account
                    settings. With regards to attribution platforms like GA or
                    Appsflyer - which are last non direct attribution - these
                    cant be changed by default.
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>How do we fetch the data for first clicks?</h3>
                  <div>
                    In GA, we can see the data in modern comparison tool, in
                    conjunction with path to conversion. Doing this would get a
                    view as how do the number of conversions change in first
                    click vs last click
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>
                    What attribution model will be suitable for low involvement
                    products? Like say confectionaries
                  </h3>
                  <div>
                    CPG industries do follow 1st touch or last touch models.
                    however, there is no blanket answer as to which would be
                    more favourable. This needs touchpoint data analysis.
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>
                    How to know which ad from specific channel is which position
                    in consumer journey?
                  </h3>
                  <div>
                    This is the exact data that we get from attribution models
                    in GA etc. Basis the exact user journeys, it tells us the
                    user journey. You can also use the path conversion report.
                  </div>
                </li>

                <li className="mtop-1">
                  <h3>
                    Let's suppose I saw an ad on youtube about some phone and
                    then i purchased that phone by opening Flipkart, then how
                    are we going to see the ROI of youtube?
                  </h3>
                  <div>
                    This is an interesting question. There are ways for
                    advertisers to collaborate with ecommerce websites/aps to
                    give device IDs/mobile numbers of purchasers. If you get
                    hold of the device ids, you can complete the user path to
                    purchase. These are pretty advanced things that we are
                    talking about, entering into new age attribution that
                    requires seamless data sharing between stakeholders.
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>
                    How long does the cookie last? Isn't it time based? So if
                    someone clicks through search first on day 1 and then clicks
                    on fb on day 7, how do you know its Shaista for example that
                    had this journey? Does the cookie last forever?
                  </h3>
                  <div>
                    For Facebook the lifetime of a device ID is 180 days.. FB
                    doesn't use cookies. For Google it is 540 days
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>
                    What is your opinion on view through attribution replacing
                    click through attribution?
                  </h3>
                  <div>
                    View attribution will complement click attribution, but
                    can't replace it. Advertiser are looking at things more and
                    more holistically each day- resulting in more rational
                    attributions by assigning credits to various media touch
                    points. However, click is still a gold standard - just
                    because it conveys more intent than just a view.
                  </div>
                </li>
                <li className="mtop-1">
                  <h3>
                    But how do you track the unique person's identity to know
                    where all they have clicked?
                  </h3>
                  <div>
                    Google uses Google Click ID and device IDs for apps. A lot
                    of the info is taken into account - device ids, ip address,
                    location, cookies, etc. There's a constant stream of
                    information that keeps flowing between Google ads and Google
                    analytics. We as advertsiser wont be able to pinpoint the
                    users, the data is hashed but there are identifiers present.
                    Facebook just uses it's matching out of the devices it has
                    in it's repository. Everyone uses FB using mobile and
                    desktop. So it matches the device iD like a simple vlookup.
                  </div>
                </li>
              </ul>
            </div>
            <div className="mtop-2 style-italics mbottom-4">
              This was originally created by
              <a
                href="https://www.linkedin.com/in/soodarjun/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                {" "}
                Arjun Sood
              </a>{" "}
              in the Kraftshala LIVE session on ‘So which Ad made you buy?’
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default AdMadeYouBuy;
