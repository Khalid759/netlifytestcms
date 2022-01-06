import React, { useEffect } from "react";
import Seo from "../../../components/Seo/seo";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import LazyLoad from "react-lazyload";

const BringingInnovation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

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
        title="Bringing your innovation to life | Kraftshala"
        description="Once you have a great innovation, how do you bring it to life? This guide talks about everything from communication idea, packaging, pricing, media and partnerships, and finally to distribution."
        url="https://www.kraftshala.com/blog/bringing-your-innovation-to-life/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout
          link="https://www.kraftshala.com/blog/bringing-your-innovation-to-life"
          hideSidebar={true}
        >
          <div className="blog-wrapper">
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Bringing-your-innovation-to-life.webp"
                alt="Bringing Your Innovation to Life"
                title="Bringing Your Innovation to Life"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              This is Part 2 of a two-part series on launching innovations. You
              can view Part 1 on How to come up with an innovation{" "}
              <a
                href="https://www.kraftshala.com/blog/how-to-come-up-with-an-innovation/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                {" "}
                here.
              </a>{" "}
            </div>
            <div className="mtop-2">
              In this part, we cover aspects about how to bring your innovation
              to life, including how to
            </div>

            <div className="mtop-2">
              <ul className="bullet-points ">
                <li
                  className="content-li"
                  onClick={() => handleClick("content-1")}
                  aria-hidden="true"
                >
                  Come up with an impactful communication idea,
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-2")}
                  aria-hidden="true"
                >
                  Design packaging that adds to the proposition
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-3")}
                  aria-hidden="true"
                >
                  Figure an appropriate price strategy,
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-4")}
                  aria-hidden="true"
                >
                  Create a high “RoI” media plan
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-5")}
                  aria-hidden="true"
                >
                  Build an effective distribution and Go-to-market plan
                </li>
              </ul>
            </div>

            <div className="mtop-2">So let’s begin!</div>
            <div className="mtop-2">
              <h2 id="content-1">4.1 Communication Idea</h2>
            </div>
            <div className="mtop-2">
              Our next job is to bring our product/ service idea to life through
              impactful communication that inspires our consumers to act.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue" f>
                Communication Challenge
              </h3>
            </div>
            <div className="mtop-2">
              To create such a communication idea, we first need to be clear
              about the task at hand, which in Kraftshala lingo, we call the
              Communication Challenge. It is as articulated as the single thing
              that you want to convince the consumer of.
            </div>
            <div className="mtop-2">
              To craft an appropriate Communication Challenge, you can use the
              following structure:
            </div>

            <div className="mtop-2">
              <ol className="bullet-points-alpha">
                <li>
                  What is the Current Mindset of the Target Consumer that you’d
                  like to change?
                </li>
                <li>
                  What is the Current Behavior of the Target Consumer that you’d
                  like to change?
                </li>
                <li>
                  What is the Desired Mindset that you’d like to instill in the
                  minds of the Target Audience?
                </li>
                <li>
                  What is the Desired Behavior that you’d like to instill in the
                  lives of the Target Audience?
                </li>
                <li>
                  State the Communication Objective as “The singular most
                  important point that I want to convince my Target Consumer of
                  is…”
                </li>
              </ol>
            </div>

            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Frame-12.webp"
                alt="communication challenge framework"
                title="communication challenge framework"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              To illustrate this using our ongoing example of sexual wellness:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Frame-13.webp"
                alt="communication challenge for durex"
                title="communication challenge for durex"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              When crafting your Communication Challenge, you’ll need to ensure
              that it is clear and singular. Try to do too much and you’ll be
              able to land nothing.
            </div>
            <div className="mtop-2">
              <h2>Communication Insight</h2>
            </div>
            <div className="mtop-2">
              Once you have closed the Communication Challenge, your next step
              is to identify a relevant Insight which can be leveraged to create
              impactful brand communication.
            </div>
            <div className="mtop-2">
              A Communication Insight captures a human truth, or a set of human
              truths, that are a source of tension for your consumer, which your
              brand communication can ultimately resolve.
            </div>
            <div className="mtop-2">
              Why do we need a communication insight, you may ask? In simple
              words- because
            </div>

            <div className="mtop-2 styled-text">
              it’s incredibly hard to change human behaviour.
            </div>
            <div className="mtop-2">
              Insights are necessary because people are loathe to change their
              behaviour, and only do so when the motivation comes from a deep
              place within, often encapsulated in a hidden, unarticulated
              tension. In effect, an insight helps you discover an opening
              through which the consumer can move from the Existing mindset/
              behaviour to the Desired mindset/ behaviour:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Frame-14.webp"
                alt="desired mindset/behaviour"
                title="desired mindset/behaviour"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Learning how to discover and write powerful insights is a full
              2-week module in our programs, but to give you a 1 line gist of
              the process, insights emerge when you ask one or more deep-dive
              questions such as “Why is this true” or “So what if it is true”,
              “How does this affect what people think, say and do” etc.
            </div>
            <div className="mtop-2">
              For instance, in the case of DUREX Mutual Climax, if you were to
              discuss with your consumer about
            </div>
            <div className="mtop-2">
              <ul className="bullet-points mtop-2">
                <li>
                  Why it’s so hard to talk about sex with your partner (both)
                </li>
                <li>
                  how it feels to not orgasm/ have a poor sexual experience when
                  your partner has (woman)
                </li>
                <li>
                  how it feels to not be able to sexually satisfy your partner
                  (man)
                </li>
                <li>
                  whether they ever fake an orgasm to help their partner feel
                  more secure (woman)
                </li>
                <li>Implications of poor sex on a relationship (both) etc</li>
              </ul>
            </div>
            <div className="mtop-2">
              The resulting information should be able to help you craft a
              Communication Insight such as:
            </div>

            <div className="mtop-2 styled-text">
              Talking about sexual pleasure can be hard with your partner, but
              if we don’t take care of each others’ fundamental needs (expressed
              or otherwise), the resulting unintentional “selfishness” can
              jeopardise even the healthiest of relationships.
            </div>
            <div className="mtop-2">
              Note how richer and deeper this is than a more basic articulation
              of the problem such as “Sex is so much better when my partner & me
              both climax together. It is such a shame that nature just hasn’t
              designed us that way. Wish there a way out!“
            </div>
            <div className="mtop-2">
              This is why your Product insight and Communication Insight, while
              obviously connected, can be expressed. In the case of DUREX, at
              the product insight level we only captured the need for a condom
              that helps women to climax at the same time as men. At the
              communication stage, we go deeper to understand what it is that
              the consumer fundamentally believes in that we can leverage to
              drive adoption for DUREX Mutual Climax.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">Benefits</h3>
            </div>
            <div className="mtop-2">
              Now that you have identified and articulated the problem part
              really well, you are ready to effectively solve it through brand
              solutions.
            </div>
            <div className="mtop-2">
              To begin, you first need to identify what benefit you want to
              communicate. The best way to understand benefits is to understand
              through a ladder consisting of product/ service attributes, which
              layer up into a functional benefit, which in turn layers up to an
              emotional benefit.
            </div>
            <div className="mtop-2">
              For instance, in the case of a gaming laptop, the ladder can be
              expressed as:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Frame-15.webp"
                alt="Gaming laptop"
                title="Gaming laptop"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Notice that while there can be many attributes, a communication
              idea works best when it is singular, which is why all the
              attributes layer up to a single functional and emotional benefit.
            </div>
            <div className="mtop-2">
              In the case of DUREX, the ladder would look something like:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Frame-16.webp"
                alt="Benefit Ladder: Durex"
                title="Benefit Ladder: Durex"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Finally, always keep in mind that the emotional benefit expressed
              in the ladder must resolve the Communication Insight articulated.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">Big Idea</h3>
            </div>
            <div className="mtop-2">
              A Big Idea is the core idea that underpins all communications that
              will be launched by the brand.
            </div>
            <div className="mtop-2">
              It summarizes the key functional/ emotional benefit for the user
              and makes it memorable and actionable for them.
            </div>
            <div className="mtop-2">
              For the Mutual Climax condom by Durex, the Big Idea can be
              expressed as:
            </div>

            <div className="mtop-2 styled-text">Come Together</div>
            <div className="mtop-2">
              DUREX Mutual Climax condoms speed her up and make him last, so
              both of you come together.
            </div>
            <div className="mtop-2">
              This Big Idea for DUREX Mutual Climax was brought alive through
              the following campaign on TV/ digital:
            </div>
            <div className="mtop-2">
              <div className="yt-video">
                <LazyLoad>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/q74NsOsVIC4"
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
              We’ll talk about how you should plan to amplify in 4.4.
            </div>
            <div className="mtop-2">
              <h2 id="content-2">4.2 Packaging / User Interface</h2>
            </div>
            <div className="mtop-2">
              Doesn't it feel like the bulk of your work in your marketing
              journey is done now that the communication is over? You have
              created an awesome product with some amazing features to solve for
              a real consumer pain point. Nothing is going to stop you from
              success now. But here is where you might lose the plot.
            </div>
            <div className="mtop-2">
              Packaging for products or the user interface for an online
              app/service is the part where you bring your work together and the
              consumer experiences you for the first time- a zero moment of
              truth.
            </div>
            <div className="mtop-2">
              This is what a user sees on the shelf, this is what the consumers
              see on an ecom website amongst many other options, this is what
              they experience for the first time and judge whether you are true
              to what you have made them believe or not.
            </div>
            <div className="mtop-2">
              So imagine this - you see an ad for a super premium chocolate on
              TV. You love the message, you like the minimalism and you feel
              like you want to get your hands on it because of how premium it
              looks.
            </div>
            <div className="mtop-2">
              You go to a shop the next day, and there it is - the same
              chocolate. You reach out for it. And you pick it up - but oops! It
              is made of plastic and it doesn't seem right! Why? They didn't
              really promise whether it was going to be matt or glossy finish in
              their communication that got you interested! They didn't even say
              that they are going to be with matt finish paper instead of the
              normal plastic that you get a cheaper chocolate in. So why doesn't
              it feel right? The answer is fairly simple - they set an imagery
              in your mind. They made you believe that it’s exclusive - but when
              you touched it, it was just like any other cheaper alternative.
              And all the brilliant work that you have done on the product and
              communication would just go down the drain.
            </div>
            <div className="mtop-2">
              Packaging (product)/ User Interface (Service), in short, has 3
              main roles -
            </div>
            <div className="mtop-2">
              <ol className="bullet-points mtop-1">
                <li>
                  <b>
                    Get noticed & bought by a shopper at the moment of purchase:
                  </b>
                  So the shopper is there in the category shelf. They perhaps
                  have seen your ad or maybe not. But in that cluttered space on
                  the shelf, the consumer is also lost in choices.
                </li>
                <div className="blog-hero-img mtop-2">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/get-noticed.webp"
                    alt="Get Noticed"
                    title="Get Noticed"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  Give them prompts and cues to help make their purchase
                  decisions simpler for them.But to do that and get yourself
                  noticed, it is highly critical to first be distinctive. And if
                  you have got their attention, the next job is to communicate
                  proposition or benefits are for them to buy you. Obviously
                  price plays a role here and we will come to that in the next
                  section. But with your packaging design you want to make sure
                  that you are talking to the right person with the right
                  messaging.
                </div>
                <div className="mtop-2">
                  For Mutual Climax condoms, the Black color was chosen as it
                  stood out of the crowd and for a category which consumers are
                  still hesitant to talk about, the color could act as a clue
                  for the retailer to hand over this specific product. It also
                  clearly denotes that its for both men and women and thus a
                  strong differentiator vs the base brand.
                </div>
                <div className="blog-hero-img mtop-2">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/Group-1.webp"
                    alt="durex"
                    title="durex"
                    placeholder="none"
                  />
                </div>
                <div className="mtop-2">
                  It’s always a good idea to create a digital snapshot of how
                  your product would look shelved alongside the competitors or
                  how the user will experience your service through mock-ups.
                </div>
                <li className="mtop-2">
                  <b>Add to the Shelf ROI for a retailer:</b> A retailer would
                  be giving some space to this product of yours. And space for a
                  retailer is money - prime space which catches the attention of
                  a shopper even more! So how can you create this product such
                  that it adds to his ROI? This is why the shampoo sachets flew
                  literally out of thin air and became a success in large part
                  of the world where retail is dominated by small shops, because
                  the packaging enabled the retailer to hang it - it didn’t
                  occupy his shelf space so was not a disruption for him and yet
                  it was right in front of the consumer. So what can you do with
                  your packaging such that it adds to his shelf ROI?
                </li>
                <div className="blog-hero-img mtop-2">
                  <StaticImage
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/image14.webp"
                    alt="shop"
                    title="shop"
                    placeholder="none"
                  />
                </div>
                <li className="mtop-2">
                  <b>Delight the consumer at the moment of consumption:</b> The
                  last part is when consumers are consuming the product. Is
                  there something that you can do to delight them in that moment
                  as well? Including a scoop for a washing powder enough for one
                  load, or a pouch to carry a veet trimmer or a message when
                  they open the lid of a chocolate box are all ways to delight
                  them. And it goes without saying that if you don’t pay
                  attention to this, it could even end up ruining their
                  experience even without really consuming it. For instance,
                  writing your MOP for your noodles brand exactly where they
                  were supposed to tear away the wrapper from, or saving an
                  extra dollar on your raw material costs by installing a
                  cheaper zipper on your pouch which would take a lot of effort
                  to open and close, or adding a lot of plastic in your
                  packaging to wrap a glass bottle when you know the sentiment
                  on plastic - all these are ways to kill your product after
                  doing all the hard work!
                </li>
              </ol>
            </div>
            <div className="mtop-2">
              As far as the packaging design goes, here are a few tips for that
              too:
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  Branding - What is the parent descriptor relationship in your
                  packaging and why? How much space do you want to give to the
                  parent brand and how much to your descriptor or do you want to
                  create a new sub-brand?
                </li>
                <li>
                  Elements - What are the colours, shapes, images and words that
                  you want to put on the packaging. What is the hierarchy of
                  information and why? Keep in mind the brand color palette and
                  aesthetics and what parts do you want to retain and which ones
                  do you want to get rid of and why?
                </li>
                <li>
                  Personality + Message - Does the packaging shout out what the
                  communication is trying to convey. Does it connect with the
                  person that you are trying to bring in?
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              <h2 id="content-3">4.3 Pricing</h2>
            </div>
            <div className="mtop-2">
              Pricing is not just a number. It is a core part of your strategy.
              It forms a part of your scoping as well as it helps in arriving at
              the revenues that you project over the years.
            </div>
            <div className="mtop-2">
              Pricing can act as a signal of quality or exclusivity or luxury.
              Pricing can be used to promise a better experience to your user.
              Did you know that there are dating apps out there where it takes
              close to INR 300 to send a single message? That price points helps
              the women on that app feel safer since the chances of non-serious
              interactions decrease.
            </div>
            <div className="mtop-2">
              Pricing can also be used to signal affordability to bring in or
              retain the masses. Think Tata Nano where they set out to create a
              car for INR 1 lacs to become the first car for a lot of Indians.
              Or the critical price point of INR 5 for FMCG industry (biscuits,
              shampoo, noodles, chocolates etc). In this case, you start from
              the price that the consumer is willing to pay, have a margin in
              mind and work backwards to arrive at the cost and thus optimize
              the product accordingly. The adjustments in product packaging,
              manufacturing, supply chain, distribution, etc. also forms a
              critical part of meeting the price point in this scenario. It is
              also possible that you may realize at this point that it is not
              feasible to hit the price point at all to provide the benefits at
              a reasonable quality. Some product innovations can get scraped off
              at this point, as is the case below:
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/pricing.webp"
                alt="pricing"
                title="pricing"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              Thus, for pricing working on both - a top-down and a bottom-up
              approach – helps us arrive at a price point which works for the
              consumer as well as the business.
            </div>
            <div className="mtop-2">
              <h2 id="content-4">4.4 Amplification: Media and Partnerships</h2>
            </div>
            <div className="mtop-2">
              So you have a great product that addresses a real pain point, and
              a powerful Communication Idea. The next step is to make sure that
              message actually reaches the audience.
            </div>
            <div className="mtop-2">
              On the face of it, this seems to be a straightforward problem to
              solve. Just buy ad spots on TV, digital (YouTube, Facebook,
              Instagram etc), radio, print and outdoors and every other media
              that people consume. Maybe throw in a few influencers and event
              sponsorships.
            </div>
            <div className="mtop-2">
              Sounds like a plan. But is it really one?
            </div>
            <div className="mtop-2">
              To quote our parents here- money doesn’t grow on trees.
            </div>
            <div className="mtop-2">
              The most misleading term in this history of marketing was the 360
              degree plan, because no brand has sufficient money to be present
              everywhere. Not even mega brands have that kind of moolah, forget
              your new, unproven innovation.
            </div>
            <div className="mtop-2">
              An effective promotional strategy that utilizes media budgets
              effectively can really make the difference between an innovation
              dying out or getting those extra 6 months to be able to gain
              traction and kick start sustainable sales. This section is about
              spending money. And anytime that you are spending money, you want
              to ensure that it delivers a ROI.
            </div>
            <div className="mtop-2">
              The first step in creating an effective media strategy is to to
              understand the following:
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  Which media platforms are my consumers spending time on?
                </li>
                <li>
                  What kind of content are they consuming on those platforms?
                  (genres/ formats/ specific shows)
                </li>
                <li>Why are they consuming this media/ content?</li>
              </ul>
            </div>
            <div className="mtop-2">
              These are questions that you can ask in the initial consumer
              research part so you do not return to consumer interviews at this
              stage.
            </div>
            <div className="mtop-2">
              A point to note here is that your media target audience is always
              wider than your communication target audience, because the set of
              people are always wider than the way you define your
              SuperConsumer.
            </div>
            <div className="mtop-2">
              In the case of DUREX Mutual Climax, while a product like that
              obviously appeals to more women than any other condom brand in the
              market, the reality of the condoms category is that in most cases
              the actual brand choice and purchase is made by men. While the
              media plan for Mutual Climax might skew more towards women than
              the average DUREX campaign, it cannot just be running for women/
              highly progressive couples- it’s targeting has to be much wider.
            </div>
            <div className="mtop-2">
              Once you have an exhaustive list of media and content your users
              are consuming, you need to decide the ones to partner with. Let’s
              share a few Golden Rules of Media Planning with you.
            </div>
            <div className="mtop-2">
              In the case of DUREX Mutual Climax, while a product like that
              obviously appeals to more women than any other condom brand in the
              market, the reality of the condoms category is that in most cases
              the actual brand choice and purchase is made by men. While the
              media plan for Mutual Climax might skew more towards women than
              the average DUREX campaign, it cannot just be running for women/
              highly progressive couples- it’s targeting has to be much wider.
            </div>
            <div className="mtop-2">
              Once you have an exhaustive list of media and content your users
              are consuming, you need to decide the ones to partner with. Let’s
              share a few Golden Rules of Media Planning with you.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">Rule 1:</h3>
            </div>
            <div className="mtop-2">
              <h3>
                Talk to your consumer when they are most open to hearing your
                message.
              </h3>
            </div>
            <div className="mtop-2">
              It’s not enough to know who to target. To maximise RoI, you need
              to target them when they are most likely to be interested in your
              message.
            </div>
            <div className="mtop-2">
              To illustrate this, think of a hypothetical fashion brand that
              sells sophisticated fashion wear for women, many of whom are
              working professionals. Therefore, most of their target audience
              are on LinkedIn. Would it be a good idea for the brand to run ads
              on LinkedIn?
            </div>
            <div className="mtop-2">
              The truth is that RoI they’d get on ads running on LinkedIn,
              assuming the platform allows ads for fashion wear, would be much
              worse than Instagram. When people are on Linkedin, they are mostly
              thinking about professional learning, networking, career
              opportunities, and the likes.
            </div>
            <div className="mtop-2">
              Even if they see an ad for a fashion brand, their chances of
              noticing it and actually clicking on it are significantly lesser
              than on a platform more suited for visual content in general and
              fashion in particular.
            </div>
            <div className="mtop-2">
              A corollary of Rule 1 is that if the issues you address are
              already top of my mind in your target audience, or can be brought
              top of my mind, then your consumers automatically become open to
              hearing more about the solutions you have to offer.
            </div>
            <div className="mtop-2">
              In the case of DUREX Mutual Climax, this would mean triggering
              conversations around orgasm before the campaign was released,
              which is exactly what they did. A few days before the campaign was
              launched, DUREX released a survey showing 70% of women don’t
              orgasm every time
            </div>
            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/durex-india.webp"
                alt="durex india twitter"
                title="durex india twitter"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">Rule 2:</h3>
            </div>
            <div className="mtop-2">
              <h3>
                Collaborate with platforms and partners that lend credibility to
                your initiative while delivering reach
              </h3>
            </div>
            <div className="mtop-2">
              This one’s fairly straightforward to understand, and important to
              get right. If DUREX Mutual Climax had released a survey and done
              nothing more than run ads promoting the results it showed, it’s
              unlikely that it would have led to any serious level of
              conversations. To amplify the message, they instead worked with a
              set of celebs and influencers that are known to be progressive and
              fearless voices in India
            </div>

            <div className="twitter-embed mtop-2">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  .{" "}
                  <a href="https://twitter.com/ReallySwara?ref_src=twsrc%5Etfw">
                    @ReallySwara
                  </a>
                  , we hear you, pleasure shouldn&#39;t be solo game especially
                  in bed. Let&#39;s get your views rolling on{" "}
                  <a href="https://twitter.com/hashtag/OrgasmInequality?src=hash&ref_src=twsrc%5Etfw">
                    #OrgasmInequality
                  </a>
                  , guys.{" "}
                  <a href="https://t.co/GLqvydnXCI">
                    pic.twitter.com/GLqvydnXCI
                  </a>
                </p>
                &mdash; Durex India (@DurexIndia){" "}
                <a href="https://twitter.com/DurexIndia/status/1133623018603851776?ref_src=twsrc%5Etfw">
                  May 29, 2019
                </a>
              </blockquote>{" "}
              <br /> <br />
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  When it comes to female orgasms looks like{" "}
                  <a href="https://twitter.com/knowkenny?ref_src=twsrc%5Etfw">
                    @knowkenny
                  </a>{" "}
                  knows a thing or two. Take heed guys and dial-up your bedroom
                  game.{" "}
                  <a href="https://twitter.com/hashtag/OrgasmInequality?src=hash&ref_src=twsrc%5Etfw">
                    #OrgasmInequality
                  </a>{" "}
                  <a href="https://t.co/f6RDgrTgOh">
                    pic.twitter.com/f6RDgrTgOh
                  </a>
                </p>
                &mdash; Durex India (@DurexIndia){" "}
                <a href="https://twitter.com/DurexIndia/status/1133703902724022272?ref_src=twsrc%5Etfw">
                  May 29, 2019
                </a>
              </blockquote>{" "}
              <br /> <br />
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Look who&#39;s spilling the tea on{" "}
                  <a href="https://twitter.com/hashtag/FakeOrgasm?src=hash&ref_src=twsrc%5Etfw">
                    #FakeOrgasm
                  </a>
                  . We feel you{" "}
                  <a href="https://twitter.com/kaneezsurka?ref_src=twsrc%5Etfw">
                    @kaneezsurka
                  </a>{" "}
                  . Girls, if you&#39;ve ever faked it, simply comment with{" "}
                  <a href="https://twitter.com/hashtag/IFakedItToo?src=hash&ref_src=twsrc%5Etfw">
                    #IFakedItToo
                  </a>{" "}
                  or DM us your stories.{" "}
                  <a href="https://twitter.com/hashtag/OrgasmInequality?src=hash&ref_src=twsrc%5Etfw">
                    #OrgasmInequality
                  </a>{" "}
                  <a href="https://t.co/7mVfFubSGw">
                    pic.twitter.com/7mVfFubSGw
                  </a>
                </p>
                &mdash; Durex India (@DurexIndia){" "}
                <a href="https://twitter.com/DurexIndia/status/1134411177885425674?ref_src=twsrc%5Etfw">
                  May 31, 2019
                </a>
              </blockquote>{" "}
            </div>
            <div className="mtop-2">
              The brand also did a live session with Pooja Bedi, a well-known
              progressive voice on sexuality, where she answered audience
              questions around fake orgasms and how to deal with them.
            </div>

            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/durex-india2.webp"
                alt="Lets talk, Fake orgasms with Pooja Bedi"
                title="Lets talk, Fake orgasms with Pooja Bedi"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              As the conversation starts to reach a crescendo, the new product
              is unleashed as a solution on June 1st exactly 4 days after the
              release of the survey.
            </div>

            <div className="blog-hero-img mtop-2">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/bring_innovation/durex-india3.webp"
                alt="Durex India"
                title="Durex India"
                placeholder="none"
              />
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">Rule 3:</h3>
            </div>

            <div className="mtop-2">
              <h3>
                Hearing the same message on multiple platforms works better than
                hearing it from one source only.
              </h3>
            </div>
            <div className="mtop-2">
              This one’s also self-explanatory. It’s the reason why brand
              builders don’t put all of their money on a single large platform
              (like TV), instead preferring to use multiple media to get the
              message across. The only problem with it is it needs to be used in
              conjunction with Rule 4, which is:
            </div>

            <div className="mtop-2">
              <h3 className="text-blue">Rule 4:</h3>
            </div>

            <div className="mtop-2">
              <h3>
                To break clutter on any medium, you need to achieve a threshold
                reach and frequency.
              </h3>
            </div>
            <div className="mtop-2">
              If you do not achieve a certain threshold reach and frequency,
              your entire money might be wasted, because consumers have not been
              exposed enough to your campaign for it to register, making the
              whole attempt an exercise in futility. Therefore, you need to be
              sure that you have enough investment planned behind each medium
              for it to even have a chance to succeed.
            </div>
            <div className="mtop-2">
              The money available is typically a function of the P&L you created
              in Section 3.3. Higher the margins you make on a product/ service,
              the more you can invest behind making it successful.
            </div>
            <div className="mtop-2">
              And thus, keeping the Golden Rules of media planning in mind, your
              objective here is to chart out an integrated media strategy for
              your innovation.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">
                Things to build in your media and amplification plan:
              </h3>
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  Phases of media plan – How do you want to divide your plan to
                  generate max ROI? Is there a pre-launch phase that you want to
                  plan – if yes, why? Would you rather invest in pre-launch or
                  run your campaigns after the stocks have reached the market
                  and add more weeks to your campaigns to directly impact the
                  sales?
                </li>
                <li>
                  Geographies – What would be your focus markets and why? Is
                  there a priority order here?
                </li>
                <li>
                  Budgets – What would be the overall budgets that you would be
                  spending? How are you ensuring that this is the most efficient
                  use of the budgets in terms of delivering the brand and
                  business KPIs?
                </li>
                <li>
                  Media Vehicles (TV, Print, Radio, Outdoor, Digital, Apps,
                  Ecom) – What are the channels that you will go after and why?
                  Are there any special integrations that you can plan in any of
                  the channels which fits in your overall campaign idea? What
                  will be your overall budget split across your various options
                  selected and why? Prioritize different options basis expected
                  acquisition costs and the number of conversions you expect
                  them to drive.
                </li>
                <li>
                  How would you tailor your big idea to suit each channel?
                  Showcase to us how the messaging would look for different
                  channels.
                </li>
                <li>
                  Organic Strategy – Is there any way to generate
                  impressions/views/clicks (whatever KPI is important for you)
                  by creating content? What sort of content should it be? What
                  would the content calendar look like here? How does it add
                  value to the user and why would they care? Is there a role of
                  PR? Be open to explore other content marketing formats such as
                  webinars, podcasts etc.
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              <h2>4.5 Distribution</h2>
            </div>
            <div className="mtop-2">
              A distribution plan, like packaging/ pricing etc, needs to flow
              logically from the proposition itself. You can build a plan based
              on the following basic principles –
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  You should be <b>available</b> in places where the shoppers
                  are most likely to buy you
                </li>
                <li>
                  You should be <b>visible</b> in those places such that the
                  shopper does not miss seeing you
                </li>
                <li>
                  You should be <b>easily accessible</b> in those places as much
                  as possible so that shoppers can experience you. In the
                  ecommerce context, this principle relates to the quality of
                  your product or brand pages which gives all possible details
                  to the consumer
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              For arriving at your distribution plan, start by answering the
              following questions for yourself
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>Who is the shopper going to be?</li>
                <li>Where are the consumers/shoppers when the need arises?</li>
                <li>
                  Where all does the consumer shop currently? This can open up
                  some interesting distribution ideas. For example, a diapers
                  brand stocking their products at baby care creches for
                  purchase by parents before dropping off their babies.
                </li>
                <li>
                  What are their different shopping missions and where do these
                  happen? Shopping missions could be regular monthly shopping,
                  top-up shopping, immediate shopping, experiential shopping,
                  etc
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              Based on the above information, you can start narrowing down on
              the channels using the following –
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  How attractive is the channel – no. of stores, offtake from
                  every store, growth of that channel for overall category,
                  profitability of that channel (E.g. Walmart might be less
                  profitable than an independent store as it requires the
                  company to give a higher margin) etc.
                </li>
                <li>
                  How likely are you to win – How strong is your existing
                  distribution structure for this, How good is your ability to
                  take share in this channel, how closely does it align to your
                  way of doing business and sales etc.
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              There could be more factors for each of the above. Use your best
              judgement to prioritize your channels as that can help you
              determine the investment that you want to make in each channel.
            </div>
            <div className="mtop-2">
              <h2>For DUREX Mutual Climax</h2>
            </div>
            <div className="mtop-2">To finalise priority geographies:</div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  Attractiveness was determined by the size of market-
                  essentially the largest cities in the country.
                </li>
                <li>
                  Likelihood to win was determined by looking at market share of
                  base DUREX products as an indication of brand strength and
                  ability of the consumers to pay the requisite premium
                  (remember, the base DUREX range was already ~2X of other
                  branded competitors, and Mutual Climax was ~3X of competitors’
                  pricing).
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              A similar logic was used to prioritise channels like ecommerce,
              pharmacy chains (Modern Trade) and independent pharmacies/
              medicine stores in major cities where relatively large clusters of
              target audience exist.
            </div>
            <div className="mtop-2">
              E-commerce was obviously a high potential category for DUREX
              Mutual Climax because
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  There are no awkward conversations to be had with the
                  retailer- the product is delivered in a discreet packaging
                  straight to home
                </li>
                <li>
                  It fits the profile of the consumers being targeted- the
                  online platform naturally skews to young, high-end consumers
                  who are also typically more progressive.
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              However, since the bulk of the category purchase happened in
              traditional trade, it was a channel that needed to be cracked as
              well. From a shopper and trade perspective, the condoms category
              presents an interesting challenge.
            </div>

            <div className="mtop-1">
              <ul className="bullet-points">
                <li>
                  On one hand, retailers in many countries prefer to not
                  prominently display condom packs or condom related
                  communication in their stores because they fear many of their
                  customers will not approve (due to societal taboos around
                  discussing sex)
                </li>
                <li>
                  On the other hand, as the most well known brand in the
                  category with a cool, premium packaging design, the more
                  prominently DUREX is visible to a shopper, the higher the
                  chances of them purchasing it over a cheaper competitor
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              Therefore, a large part of the sales team’s effort went into
              incentivising and encouraging retailers to display DUREX inside
              their stores.
            </div>
            <div className="mtop-2">
              <h3 className="text-blue">
                Things to build in your distribution plan:
              </h3>
            </div>
            <div className="mtop-2">
              Basis the above research and analysis on shopper and trade
              behaviour, start constructing your distribution plan
            </div>
            <div className="mtop-1">
              <ul className="bullet-points">
                <li>Which geographies should you launch in?</li>
                <li>What types of stores do you want to launch in?</li>
                <li>
                  What kind of retailer margins can you afford to offer your
                  trade partners?
                </li>
                <li>What are the sell-in quantities for each store?</li>
                <li>
                  What are the visibility guidelines that you want to follow?
                </li>
                <li>
                  What are the special things that you can do on online channels
                  of distribution?
                </li>
              </ul>
            </div>

            <div className="mtop-2">
              Do remember that your distribution plan needs to make
              business/financial sense.
            </div>
            <div className="mtop-2">
              Let’s understand this further by going over how is the sales /
              distribution system structured for an FMCG
            </div>
            <div className="mtop-2">
              <ul className="bullet-points">
                <li>
                  Products are manufactured in factories, which are then sent to
                  warehouses, which are then sent to distributors and are then
                  sent to retailers or smaller wholesalers and so on.
                </li>
                <li>
                  For selling the products to a retailer, you will have salesman
                  going to them and convincing them to try this new product
                </li>
                <li>
                  The retailer should not only buy it, but also push it to
                  consumers or maybe give a prominent place in the store which
                  will cost the company money.
                </li>
                <li>
                  In case the product does not sell, you will have to take it
                  back and compensate the retailer to protect your goodwill and
                  confidence of the retailer in your company.
                </li>
                <li>
                  You might also have to give some additional discounts,
                  incentives or visibility payouts or additional margins.
                </li>
                <li>
                  A new product will also require a special focus from your
                  sales team and they will track the performance and push their
                  teams to meet the targets for this launch and this will come
                  at the cost of some other product.
                </li>
              </ul>
            </div>
            <div className="mtop-2">
              Each of the above things has a cost associated with it and thus a
              distribution plan needs to be in tandem with your media plan.
              Distribution is about fulfilling demand and you want to fulfil
              demand in places where you have generated demand for the return on
              investment and return on effort to be optimized.
            </div>
            <div className="mtop-2">
              <h3>
                A final word- far more innovations have been lost due to faulty
                distribution planning than you can imagine.
              </h3>
            </div>
            <div className="mtop-2">
              The most common mistake that amateur business professionals make
              WRT to the distribution plan is to spray the product in the wrong
              places, or even worse, all places possible. What would happen if a
              premium offering like DUREX Mutual Climax is planned to be sold at
              a small random medicine shop in a remote area? For one, it would
              be super expensive to convince the outlet owner to stock your
              product. It would be expensive to deliver that product in a market
              where you are not as likely to succeed in the first place. And if
              that product doesn’t move from the outlet’s shelves, they are not
              going to stock it again, and worse are unlikely to be that easily
              persuaded for any future innovations you launch. Imagine a company
              like Reckitt that already sells a number of power brands and has a
              large existing business. The moment the trade feedback on the
              product isn’t positive, the sales and distribution team is going
              to prioritise other items, thus further reducing the likelihood of
              success.
            </div>
            <div className="mtop-2">
              You would have been better served to have picked key channels in
              some major cities for the launch phase (based on the principle of
              attractiveness and likelihood to win), and then gradually expanded
              the outlet base as the product acceptance and demand grew.
              Ironically, by planning to sell less, you give your innovation the
              best chance of selling more in the long term.
            </div>
            <div className="mtop-2">
              <hr />
            </div>

            <div className="style-italics mtop-2 mbottom-4">
              Written by Eshu Sharma, Nishtha Jain and Varun Satia, co-founders
              at Kraftshala. Thanks to Anupriya Singhal, Shweta Dogra, Ratika
              Mehra, Alok Sinha, Jaiveer Duggal, Ankita Chakraborty, Saranya
              Mukherjee, Shikha Dsouza and a host of former participants of the
              Reckitt Global Challenge for sharing their inputs and
              perspectives. Design and illustrations by Geetika Sharma.
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default BringingInnovation;
