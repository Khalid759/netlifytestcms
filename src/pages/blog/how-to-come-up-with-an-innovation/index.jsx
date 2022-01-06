import React from "react";
import Seo from "../../../components/Seo/seo";
// import LazyLoad from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";

const ComeWithInnovation = () => {
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
        title="How to come up with an innovation? | Kraftshala"
        description="The ultimate guide to launching an innovation for an FMCG company. In this article we cover everything from discovering consumer insights, developing product ideas, building a financial plan and its fit with your brand!"
        url="https://www.kraftshala.com/blog/how-to-come-up-with-an-innovation/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout
          link="https://www.kraftshala.com/blog/how-to-come-up-with-an-innovation"
          hideSidebar={true}
        >
          <div className="blog-wrapper">
            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/How-to-come-up-with-innovation.webp"
                alt="How to come up with an innovation"
                title="How to come up with an innovation"
                placeholder="none"
              />
            </div>

            <div className="mtop-2">
              This is Part 1 of a two-part series on launching innovations. You
              can view Part 2 on Bringing your innovation to life{" "}
              <a
                href="https://www.kraftshala.com/blog/bringing-your-innovation-to-life/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                here
              </a>
              .
            </div>

            <div className="mtop-2">
              This guide has been created to provide you directions to attempt
              the Reckitt Global Challenge 2021.
            </div>

            <div className="mtop-2">
              Now we know that some of you hate taking directions, and would
              rather hustle it out yourself. Well all the best to you. Mozart
              needed no teacher.
            </div>

            <div className="blog-hero-img">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image4.webp"
                alt="genuises never ask for direction"
                title="genuises never ask for direction"
                placeholder="none"
                className="w-50 wm-100"
              />
            </div>

            <div className="mtop-2">
              For the rest of you, let us set the context.
            </div>
            <div className="mtop-2">
              Creating an Innovation and marketing it is a challenging task.
              While there is a mob continuously fighting over how many new
              products fail every year, the general agreement is that at least
              as many as 3/4th of new innovations fail. Since this success rate
              is from marketers with years of experience, a line up of research
              agencies and a plethora of creative tools, and you on the other
              hand have, well, probably a fast internet connection and a super
              enthusiastic, slightly weird team mate, we thought we will help
              you out a bit.
            </div>
            <div className="mtop-2">
              This brief in no way advocates any one single way in which things
              should be done, nor does it claim to be an exhaustive hand book
              for everything you will face while attempting the challenge. Think
              of it as reading a book about raising a kitten. It will not
              prepare you for the late night crying or the consistent nail
              scratches, yet it will act as a source of some eternal truths, for
              example, keep them away from tulips, and calm you along the way
              when you see progress as mentioned in the book.
            </div>
            <div className="mtop-2">
              We would suggest you read this guide from start to finish in one
              go, and then probably refer to specific parts again when you are
              actually doing them. So let’s get started!
            </div>
            <div className="mtop-2">
              This is a two-part series on how to launch consumer product/
              service innovations created for participants of the Reckitt Global
              Challenge 2021.
            </div>
            <div className="mtop-2">
              Similar to the previous years, the objective for Reckitt Global
              Challenge 2021 is to launch an innovation which solves an unmet
              need for the consumer, is strongly linked to an Reckitt Brand’s
              Purpose, and fuels brand growth in a scalable and sustainable
              manner. While this series will help you navigate the submission
              requirements as a Global Challenge participant, it will also be
              useful for anyone interested in bringing consumer product or
              service innovations to life, especially in the FMCG space.
            </div>
            <div className="mtop-2">
              In Part 1 of the series, we focus on the big picture by helping
              you understand:
            </div>

            <div className="mtop-1">
              <ul className="bullet-points ">
                <li
                  className="content-li"
                  onClick={() => handleClick("content-1")}
                  aria-hidden="true"
                >
                  What an Innovation is
                </li>
                <li className="content-li">
                  <div
                    className="content-li d-inline"
                    onClick={() => handleClick("content-2")}
                    aria-hidden="true"
                  >
                    {" "}
                    How to discover consumer insights
                  </div>{" "}
                  <div className="d-inline text-black">and</div>{" "}
                  <div
                    className="content-li d-inline"
                    onClick={() => handleClick("content-3")}
                    aria-hidden="true"
                  >
                    leverage them for product ideas
                  </div>
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-4")}
                  aria-hidden="true"
                >
                  How to scope out the opportunity to see if it makes business
                  sense, including evaluating
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-5")}
                  aria-hidden="true"
                >
                  the size of prize, fit with Brand Purpose, and financial
                  viability
                </li>
              </ul>
            </div>

            <div className="mtop-2">
              In Part 2, we cover aspects about{" "}
              <a
                href="https://www.kraftshala.com/blog/bringing-your-innovation-to-life/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                how to bring your innovation to
              </a>
              life, including how to
            </div>

            <ul className="bullet-points">
              <li className="mtop-1">
                Come up with an impactful communication idea,
              </li>
              <li>Design packaging that adds to the proposition</li>
              <li>Figure an appropriate price strategy,</li>
              <li>Create a high “RoI” media plan</li>
              <li>Build an effective distribution and Go-to-market plan</li>
            </ul>

            <div className="mtop-2">So let’s begin!</div>

            <div className="mtop-2">
              <h2 id="content-1">1: What is Innovation?</h2>
              <div className="mtop-2">
                Innovation in business isn’t simply a matter of coming up with
                something new and (seemingly) exciting. Instead, it’s first and
                foremost about creating better value for consumers. In other
                words, innovation, like most parts of business, is about solving
                problems that your consumers face better than any other solution
                available in the marketplace.
              </div>
              <div className="mtop-2">
                Do we really need to convince you of its importance to business
                success? The pace at which products, technologies, trends and
                user needs evolve imply that a company that can master the
                “process” of innovation, if such a thing exists, can build for
                itself a sustainable growth engine- just like Reckitt has.
              </div>
              <div className="mtop-2">
                The goal of innovation, then, is clear- it’s about unlocking
                growth. The obvious question is just how do we do that?
              </div>
              <div className="mtop-2">
                Before we show you the process of innovation you can follow,
                let’s take a moment to look at various innovation possibilities
                through a framework called the Growth Equation.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Growth-Equation-2.webp"
                  alt="Growth Equation"
                  title="Growth Equation"
                  placeholder="none"
                  className="w-50 wm-100"
                />
              </div>
              <div className="mtop-2">
                The reason we love this framework so much is because it buckets
                possibilities for growth in a given market into 4 categories-
                penetration, frequency, average weight of consumption, and
                pricing. To grow, you need to pull any one of these levers.
              </div>
              <div className="mtop-2">
                To understand these possibilities better through the innovation
                prism, let us assume that you are tasked with the goal of
                driving growth for a condom brand.
              </div>

              <div className="mtop-2 text-blue">Penetration</div>

              <div className="mtop-2 styled-text">
                Growing penetration means expanding your audience base by
                attracting consumers that don’t consume your brand currently.
              </div>
              <div className="mtop-2">
                In the case of condoms, you could do this by
              </div>

              <ul className="bullet-points">
                <li className="mtop-2">
                  <div>
                    Addressing barriers that potential users have in consuming
                    your brand today. For instance,
                  </div>
                  <ul className="bullet-points-circle">
                    <li>
                      <div>
                        You could identify untapped or poorly tapped needs and
                        explore if you could solve them better. For instance, a
                        if there is a large section of people who don’t use
                        condoms (or use them but are dissatisfied with their
                        current brand) because they don’t like the “feel” of it
                        during sex, you could launch a product that feels like
                        you have nothing on.
                      </div>
                      <div className="blog-hero-img">
                        <img
                          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/durex-ad-gif.gif"
                          alt="Durex Ad"
                          className="wm-100 w-30"
                        />
                      </div>
                    </li>
                    <li>
                      Or if price is a barrier to purchase, you could create an
                      offering with similar benefits as your base (current)
                      product but at a much lower price.
                    </li>
                    <li>Etc.</li>
                  </ul>
                </li>
              </ul>
              <ul className="bullet-points">
                <li className="mtop-2">
                  <div>
                    Providing better solutions for triggers to consumption
                    (triggers refer to core reasons why people consume a
                    category). For instance,
                  </div>
                  <ul className="bullet-points-circle">
                    <li>
                      If a certain set of condom consumers deeply care for
                      protection against unwanted pregnancy/ disease, you could
                      launch a product that offers more protection to attract
                      this audience to your brand
                    </li>
                    <li>
                      If there a set of users who treat protection as hygiene
                      and are looking for condom brands that maximize pleasure,
                      you could launch a product that offers more on this aspect
                      than current competitors
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="mtop-2 text-blue">Frequency of Consumption</div>

              <div className="mtop-2 styled-text">
                The next lever of growth, frequency of consumption, can be
                driven by providing your brand’s current users with reasons to
                use it more frequently.
              </div>

              <div className="mtop-2">For instance,</div>

              <ul className="bullet-points">
                <li>
                  If you discovered that your current consumers were not using
                  condoms as regularly as they’d have preferred because they
                  simply kept running out of them without warning, you could
                  launch a condom delivery service that would deliver a set
                  number condoms to users’ homes at the start of every month
                </li>
                <li>
                  If you discovered that your current consumers were not using
                  condoms as regularly as they’d have preferred because they
                  simply kept running out of them without warning, you could
                  launch a condom delivery service that would deliver a set
                  number condoms to users’ homes at the start of every month
                </li>
              </ul>

              <div className="mtop-2">
                To point out the obvious, you would NOT launch a new product
                simply because your base brand is not being used on some
                occasion(s). If your base brand works equally well as the
                proposed new product in those untapped occasions, you don’t need
                this new product to drive frequency you could achieve that goal
                faster by simply communicating your base brand’s fit with the
                untapped occasions.
              </div>

              <div className="mtop-2 text-blue">
                Average weight of consumption
              </div>

              <div className="mtop-2 styled-text">
                The third lever of growth you can pull is average weight of
                consumption, which is a measure of how much quantity of your
                brand is consumed in a given occasion.
              </div>

              <div className="mtop-2">
                For instance, you could launch a condom pack of 2, with both
                units supposed to be used in a single occasion. (Of course not
                too many people would need a product like that. Average weight
                of consumption is not usually a lever activated through
                innovation, but you get the point)
              </div>

              <div className="mtop-2 text-blue">Pricing</div>

              <div className="mtop-2 styled-text">
                Finally you could grow by incentivizing your current consumers
                to pay more per unit.
              </div>

              <div className="mtop-2">
                In the case of condoms this could mean:
              </div>

              <ul className="mtop-2 bullet-points">
                <li>
                  <div>
                    If you discover that your brand’s consumers are often
                    looking to add spice and variety to their sex life, you
                    could offer new and exciting flavours of condoms. In fact,
                    you could keep offering new flavours to match ongoing trends
                    (Covid-19 flavoured condoms, anyone?)
                  </div>
                  <div className="blog-hero-img mtop-1">
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/live-your-fantasies-durex.webp"
                      alt="Live your fantasies Durex"
                      title="Live your fantasies Durex"
                      placeholder="none"
                      className="w-50 wm-100"
                    />
                  </div>
                </li>
                <li>
                  You could also launch signature condoms to celebrate special
                  occasions (such as anniversaries)
                </li>
              </ul>

              <div className="mtop-2">
                Note- The assumption is that the new variants are priced higher
                per unit than the base version.
              </div>
              <div className="mtop-2">
                A final suggestion before we get into the ‘how’ of innovation.
              </div>
              <div className="mtop-2">
                <h3>
                  Do not use the ideas mentioned in this document for your
                  global challenge submission.
                </h3>
              </div>
              <div className="mtop-2">Why, you may wonder…?</div>
              <div className="mtop-2">
                For one, evaluators from Reckitt have access to this training
                material, but even more importantly, we have come up with these
                ideas in one sitting without any consumer work, expert speak,
                trend research etc. Some of these exist already, others should
                never exist in the first place. You are not likely to win this
                Challenge with these ideas. Don’t believe us? Read on to find
                out exactly what it takes to come up with winning innovation
                ideas.
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-2">2: Figuring the Insight and Product Idea</h2>

              <div className="mtop-2">
                <h3 className="text-blue">
                  2.1 How to identify which category and brand to work on?
                </h3>
              </div>
              <div className="mtop-2">
                The Global Challenge requires you to innovate for Reckitt for
                either of the following 2 categories: Hygiene, and Health. Each
                is in a unique position to make a difference in the world.
              </div>
              <div className="mtop-2">
                <h3>
                  Here is a glimpse into the purpose of some of the Reckitt
                  brands (not an exhaustive list, but you can find this
                  information easily on{" "}
                  <a
                    href="https://www.rb.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    Reckitt:
                  </a>
                </h3>
              </div>

              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Frame-18Brands-1.webp"
                  alt="Brands"
                  title="Brands"
                  placeholder="none"
                />
              </div>
              <div className="mtop-4">
                Go deep into them and their history to know what the brand
                stands for. Watch the commercials and initiatives that the
                brands have taken in the past 5 years to deeply understand their
                purpose so that you are able to suggest the innovations from a
                Brand Manager’s lens.
              </div>

              <div className="mtop-2">
                Once you have a good sense of the various categories and brands,
                you get started with the problem at hand.
              </div>

              <div className="mtop-2 styled-text">
                The starting point for every innovation is to identify consumer
                pain point.
              </div>

              <div className="mtop-2">
                Changing consumer behaviour is a huge ask and thus, if the pain
                is not real then they will not be motivated to try something
                new. The stronger the pain point, the better the chances of
                innovation working. So, in this step, open up your minds and go
                and talk to consumers and use various other forms of research to
                narrow down on the category and the brand that you want to work
                on.
              </div>

              <div className="mtop-2 text-blue">Step 1: Primary Research</div>
              <div className="mtop-2">
                Talk to 10-20 consumers to understand their needs & problems in
                the areas of health/hygiene. This could be your family/friends
                or anyone whom you have direct access to. Go completely in depth
                in terms of the broader space and if possible, observe them and
                ask questions on practically everything that they are doing.
                This is a divergent exercise thus far and the idea is to make a
                note of all the little things that interest you.
              </div>
              <div className="mtop-2">
                Let’s take examples of 2 different categories here. Make notes
                of consumer verbatims that point to an unresolved problem, an
                unfulfilled expectation or a need. Jot down these verbatims
                like,
              </div>
              <div className="mtop-2">
                Laundry: “I hate when my recently bought clothes lose a shade
                after the first wash”
              </div>
              <div className="mtop-2">
                Sexual wellness:“I wish my sex life was better. I rarely orgasm
                when we have sex. It feels more about him and his pleasure”
              </div>
              <div className="mtop-2">Etc.</div>
              <div className="mtop-2 text-blue">Step 2: Secondary Research</div>
              <div className="mtop-2">
                Do a secondary research i.e. read up on various reports, news
                articles and case studies that address the problems you’re
                interested in.
              </div>
              <div className="mtop-2">
                Ensure that you read up on the problems specific to your country
                and the various trends in these spaces. It would also be useful
                to investigate the various vision statements & sustainability
                goals of different Reckitt brands and find resonance.
              </div>
              <div className="mtop-2">
                For sexual wellness, based on what the consumers have told you,
                you could further research & find lots of reports to see the
                broad sentiment around these topics.
              </div>

              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image18.webp"
                  alt="Orgasm Gap Between Men and Women"
                  title="Orgasm Gap Between Men and Women"
                  placeholder="none"
                />
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image1.webp"
                  alt="Accounting for women's orgasm"
                  title="Accounting for women's orgasm"
                  placeholder="none"
                />
              </div>
              <div className="mtop-4 text-blue">
                Step 3: Explore a few Spaces through additional tools
              </div>
              <div className="mtop-2">
                Now from Step 1 & Step 2 you should have found a few starting
                Spaces. You can now try and substantiate these Spaces using
                additional tools to collect more data points, including (but not
                limited) to the following:
              </div>
              <div className="mtop-4 text-blue">Tool 1: Keyword research</div>
              <div className="mtop-2">
                In Keyword research, you listen into what users are actually
                searching for online.
              </div>
              <div className="mtop-2">
                It is one of the most accurate researches since it isn’t plagued
                by a lot of problems that primary research has, like biased
                researcher, leading questions, etc. It is also very actionable
                as we get precise information about the size of each query.
              </div>
              <div className="mtop-2">
                There are tons of use cases of Keyword research, such as{" "}
                <a
                  href="https://www.youtube.com/watch?v=_CLbubtA3z8&feature=youtu.be"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  this example
                </a>{" "}
                where figuring out the misspellings being searched by users made
                the ad campaign improve dramatically.
              </div>
              <div className="mtop-2">
                Besides running ads, Keyword research is also very useful for:
              </div>

              <ul className="bullet-points mtop-1">
                <li>
                  <div>
                    To suggest new product categories: For example, a new toy
                    company figuring out that toys for children with special
                    needs is being searched for, and deciding to create toys of
                    this category.
                  </div>
                  <div className="blog-hero-img mtop-2">
                    <StaticImage
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image11.webp"
                      alt="search volume"
                      title="search volume"
                      placeholder="none"
                    />
                  </div>
                </li>
                <li className="mtop-2">
                  To create useful content: For example, One Plus can utilise
                  keyword research to figure out that there is a specific issue
                  that is being searched for a lot, and choose to create a video
                  or blog content addressing it.
                </li>
              </ul>

              <div className="mtop-2">
                In this case our objective is to do a Keyword Research to get a
                better understanding of the consumer needs and hopefully find
                out some direction towards unresolved pain points.
              </div>
              <div className="mtop-2">
                <h3>Step 1: Identifying Use-cases</h3>
              </div>

              <div className="mtop-2">
                To be able to do Keyword Research, we must create use cases.
                i.e. finding all the possible use cases that our category has in
                the life of the consumers. It is a very “consumer-out way of
                thinking”.
              </div>
              <div className="mtop-2">Let’s go back to our examples again:</div>
              <div className="mtop-2">
                For Laundry: We would mention each and every use case in which
                the consumer might search for our category. For example,
                searches around:
              </div>

              <ul className="mtop-2 bullet-points">
                <li>‘laundry near me’</li>
                <li>
                  ‘How to get out tough stains’ E.g. Pre-treatment of clothes,
                  etc.
                </li>
                <li>‘How to care for my clothes better’</li>
                <li>
                  ‘Washing clothes of specific colors’ E.g. washing whites,
                  washing dark clothes etc.
                </li>
                <li>‘Shrinking clothes’</li>
              </ul>
              <div className="mtop-2">
                For female orgasm: The following use cases might be important to
                explore:
              </div>
              <div className="mtop-2">Searches around</div>
              <ul className="mtop-2 bullet-points">
                <li>‘how to pleasure a woman?’</li>
                <li>‘women orgasm’</li>
                <li>‘can’t reach orgasm’</li>
                <li>‘better sex’</li>
                <li>‘sexual wellness products online’</li>
                <li>‘How to last longer in bed’</li>
                <li>Etc.</li>
              </ul>
              <div className="mtop-2">
                <h3>Step 2: Extensive Keyword List</h3>
              </div>
              <div className="mtop-2">
                Once all the use cases have been listed, start putting these in
                the{" "}
                <a
                  href="https://ahrefs.com/blog/google-keyword-planner"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Google Keyword Planner
                </a>
                . The GKP will throw up more keywords connected to the keywords
                that you have put in it. Keep putting them in an excel sheet.
                The more the number of people searching for a keyword, the
                bigger the problem is. However even smaller keywords can
                sometimes lead to interesting insights.
              </div>
              <div className="mtop-2 text-blue">
                Tool 2: Answerthepublic.com
              </div>
              <div className="mtop-2">
                This tool can really help build on what you were trying to do in
                Keyword Research. This tool will provide you a list of questions
                that people have with respect to any word. Click on each
                question and read up on what the people who ask these queries
                read. It is a good way to exhaustively research what all is
                being searched for.
              </div>
              <div className="mtop-2 text-blue">Tool 3: Google Trends</div>
              <div className="mtop-2">
                <a
                  href="https://ahrefs.com/blog/how-to-use-google-trends-for-keyword-research"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Google trends
                </a>{" "}
                gives you how a keyword has been trending across a specific time
                frame. It can be used to understand which keywords are growing
                in number and which are declining.
              </div>
              <div className="mtop-2 text-blue">Tool 4: Social Listening</div>
              <div className="mtop-2">
                Social listening is a type of research which can be pretty
                useful for marketers. It helps you study sentiments of consumers
                on social media, providing you relevant data for a number of
                decisions, such as choosing a brand ambassador, making a
                statement, understanding competitor’s strengths, etc.
              </div>
              <div className="mtop-2">
                While it’s a great tool to understand the competitor's{" "}
                <a
                  href="https://www.pixelmattic.com/blog/elements-of-a-brand-strategy/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  brand strategy
                </a>
                , it is an equally useful one to understand what users are
                discussing about a specific category per se.
              </div>
              <div className="mtop-2">
                Multitudes of tools like{" "}
                <a
                  href="https://awario.com/features/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Awario
                </a>{" "}
                ensure that you can look at individual user posts that mention
                the keywords that you are looking for. This gets you to hear
                straight from the users. You can also see what other brands are
                posting about your category and what is the conversation in
                popular culture like.
              </div>
              <div className="blog-hero-img mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image16.webp"
                  alt="chioe grand"
                  title="chioe grand"
                  placeholder="none"
                />
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image13.webp"
                  alt="demand orgasms from male partners"
                  title="demand orgasms from male partners"
                  placeholder="none"
                />
              </div>
              <div className="mtop-4">
                You can also get a macro perspective by looking at reports that
                help you understand trends.
              </div>
              <div className="blog-hero-img mtop-2">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/image17.webp"
                  alt="mentions"
                  title="mentions"
                  placeholder="none"
                />
              </div>
              <div className="mtop-4 text-blue">Step 4: Converge</div>
              <div className="mtop-2">
                Now with all the data points that you have gathered, it’s time
                to converge. Narrow down on Spaces which seem large, align with
                Reckitt’s brands and a deep pain point for the consumer.
              </div>
              <div className="mtop-2">
                Since your goal is to investigate deeply in a short period of
                time, you might be better served by picking a Space where
                expertise will not be hard to come by, either because you
                already have pre-existing information (by being a consumer of it
                yourself), or you can find experts/ real consumers to speak with
                at a short notice
              </div>
              <div className="mtop-2">
                <h3>
                  A common question for students every year is whether you
                  should narrow down a Space first or pick up a brand first.
                </h3>
              </div>
              <div className="mtop-2">
                You can do either, and both options have their pros and cons. If
                you pick up a brand first and then narrow down on the Space, it
                will be much less chaotic and could lead to some deep and
                focused research with a good output, especially if you are on a
                clock. But if you pick up a Space first and struggle with it
                through various sources and with consumers - you will be going
                wide and the journey could be much harder to converge but can
                also lead to a goldmine insight which can then be married with
                the Reckitt brand that fits well with it.
              </div>
              <div className="mtop-2">
                The output of this stage should be the broad category and the
                specific brand that you want to work on.
              </div>
              <div className="mtop-2">
                <h2>2.2 How to do unbiased consumer immersions?</h2>
              </div>
              <div className="mtop-2">
                In the good old pre-Covid days, this would have been best done
                by meeting the consumer in person, but a video call will be a
                good substitute now. You will try and understand their lives
                completely in the category that you want to go after. Structure
                your discussion a bit <b>(with a discussion guide)</b> but let
                it flow as whatever they say will tell you what to ask next.
              </div>
              <div className="mtop-2 text-blue">
                What is a Discussion Guide?
              </div>
              <div className="mtop-2">
                It is a set of questions that you put together to use as a guide
                while conducting consumer immersions. This guide helps us prove
                or disprove the various hypotheses that we have created so far.
              </div>
              <div className="mtop-2">
                One must start with broad questions (on their life, routines,
                food habits) and then move towards your category (hygiene in
                various aspects of life, family members, habits related to
                hygiene, behaviours towards the various aspects related to
                hygiene) and then various products or brands (what all products
                do they use, what do they like, don't like - ideally observe
                them go about their routine because they will not be able to
                tell you all that they struggle with and observe it with an open
                mind for various insights- you are looking for an innovation
                idea so will have to be something that is not available to them
                right now so will not be an a straightforward observation).
              </div>
              <div className="mtop-2 text-blue">
                Points to keep in mind while doing a consumer immersion:
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Make it in a natural conversation format. If you are only
                    asking questions and they are giving you one word/line
                    answers - it is not going well.
                  </li>
                  <li>Make them trust you by sharing your stories as well.</li>
                  <li>Don’t break their flow of thoughts</li>
                  <li>
                    Inform the respondents that there are no right or wrong
                    answers - everything that they say is interesting to you.
                    Let them know that. Be curious, ask them little details
                    about their home, about how life has changed, about what
                    they think about getting back to normal, about their cooking
                    process, about how they order groceries etc. Share your
                    stories as well for her to feel comfortable.
                  </li>
                  <li>Record the conversation if possible</li>
                  <li>Don’t use marketing terms</li>
                  <li>Ask follow up questions</li>
                  <li>Avoid asking leading questions</li>
                </ul>
              </div>
              <div className="mtop-2">
                In consumer immersions, consumers may often give you solutions
                or some specific suggestions. Now for each of these, while you
                must{" "}
                <b>
                  make notes but remember that the more critical thing here is
                  to make a note of the way in which they evaluate and measure
                  value and not the actual suggestion. E.g.
                </b>{" "}
                If the consumer tells you that they want a spray to clean the
                door handles, what they are really telling you is that they
                value portability and want to expend less effort. Customers
                might also use terms like ‘ease of use’ etc which is open to
                interpretation and is not an actionable input as you might have
                a different benchmark of ease of use as compared to someone else
                and there might be multiple ways of delivering it. For this, you
                want to go deeper into understanding what they mean by this.
              </div>
              <div className="mtop-2">
                <h2>2.3 How to identify Product Insights?</h2>
              </div>
              <div className="mtop-2">
                Let’s first understand what we mean by a Product insight.
              </div>
              <div className="mtop-2">
                A Product insight is a problem that a consumer is facing and may
                or may not know about the solution.
              </div>
              <div className="mtop-2">
                <h3>
                  Note: it is always framed from the perspective of the consumer
                  and hence in first person.
                </h3>
              </div>

              <div className="mtop-2">
                Let's take examples of how the conversation with a consumer
                could flow and how can you get to these problems/needs and
                thereby the insights. Let us look at them for the laundry
                category:
              </div>
              <div className="mtop-2">
                You will start the discussion by talking about their usual day
                and set up an understanding of the kind of person they are.
                Let's assume that you are visiting existing users of the
                category i.e. laundry. Let's take a look at the conversation
                that might happen:
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/you-and-consumer.webp"
                  alt="You and consumer"
                  title="You and consumer"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                Some more questions that you can ask -
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>What do you use currently? Why?</li>
                  <li>Have you ever tried something different? What? Why?</li>
                  <li>
                    Do you plan to try something else? Where did you come to
                    know of it? Why do you want to try it?
                  </li>
                  <li>
                    What is your washing routine? How was it different when your
                    maid was washing it?
                  </li>
                  <li>
                    Do you think these additional steps you have taken make your
                    clothes virus-free? Why or why not?
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                <h3>
                  Now from the above conversation, we can infer the following -
                </h3>
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Washing for her is a pain as it is very time consuming
                  </li>
                  <li>Longevity of clothes is very important to her</li>
                  <li>
                    She believes that every cloth needs to be washed differently
                    else they get spoilt
                  </li>
                  <li>
                    The 2 strongest needs for her are saving up on time and
                    customizing the wash as per the cloth type
                  </li>
                  <li>
                    She believes detergents are in general harmful because they
                    contain strong chemicals to remove stains
                  </li>
                  <li>
                    She is aware of other alternatives but none of them help her
                    with a standardised wash (to save time) without spoiling her
                    clothes
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                <h3>
                  Now from the above inferences, we can determine the following
                  insights -
                </h3>
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    I fear that my favorite clothes will get spoilt by washing
                    because that’s what detergents do but I really wish I could
                    have worn those more frequently!
                  </li>
                  <li>
                    I hate washing clothes because I either need to waste time
                    separately washing the whites, inner wear, expensive wear
                    etc or I wash them together and see them getting spoilt.
                  </li>
                  <li>
                    During these pandemic times, I am determined to do
                    everything to keep my family away from the virus. But given
                    that the situation is becoming worse and worse every day, am
                    I doing enough?
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                Let us take the example of the other space on ‘sexual wellness’
                that we had zeroed in.Let us look at some of these
                conversations. We would be interested in talking to couples as
                well as individuals.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Group-3-1.webp"
                  alt="what was the start"
                  title="what was the start"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                <h3>
                  Now from the above conversation, we can draw the following
                  inferences, which can further be drilled down into product
                  insights -
                </h3>
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/inferences-and-insights.webp"
                  alt="inferences to insights"
                  title="inferences to insights"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                <h3>
                  Output of this stage are real consumer insights in the
                  category that you have chosen.
                </h3>
              </div>
              <div className="mtop-2">
                You might have multiple insights at this stage and as you move
                forward, you will narrow down on one of them.
              </div>
              <div className="mtop-2">
                <h2 id="content-3">2.4 From Insights to Product Ideas</h2>
              </div>
              <div className="mtop-2">
                We earlier stressed on identifying a real pain point. But once
                you have landed gold,{" "}
                <b>the job is to build a product that addresses the need.</b>
              </div>
              <div className="mtop-2">
                Every insight that we have identified above could lend itself to
                one or more product ideas. And thus, at this stage you again go
                divergent and let the ideas emerge through a brainstorming
                session. Look for inspiration in other markets, in other
                categories and keep an open mind. Don't constrain yourself with
                any thoughts on feasibility, scalability or sustainability for
                the moment.
              </div>
              <div className="mtop-2">
                For each insight (or a combination of insights), you note down a
                product idea, the benefits and an associated big idea. A product
                idea is when you flip an insight into an opportunity for the
                brand.
              </div>
              <div className="mtop-2">
                For each insight (or a combination of insights), you note down a
                product idea, the benefits and an associated big idea. A product
                idea is when you flip an insight into an opportunity for the
                brand.
              </div>
              <div className="mtop-2">
                Let’s take the example of the laundry again:
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Insight “I fear that my favourite clothes will get spoilt by
                    washing because that’s what detergents do but I really wish
                    I could have worn those more frequently!“
                    <ul className="bullet-points-circle">
                      <li>
                        Product Idea: A natural fabric wash for premium clothes
                      </li>
                      <li>
                        Another Product Idea: Soft wash for clothes which do not
                        have stains
                      </li>
                    </ul>
                  </li>
                  <li className="mtop-1">
                    Insight “I hate washing clothes because I either need to
                    waste time separately washing the whites, inner wear,
                    expensive wear etc or I wash them together and see them
                    getting spoilt.”
                    <ul className="bullet-points-circle">
                      <li>
                        Product Idea: A laundry service which takes your clothes
                        in separate clusters and customizes the laundry process
                        for each of them
                      </li>
                    </ul>
                  </li>
                  <li className="mtop-1">
                    Insight “During these pandemic times, I am determined to do
                    everything to keep my family away from the virus. But given
                    that the situation is becoming worse and worse every day, am
                    I doing enough?”
                    <ul className="bullet-points-circle">
                      <li>
                        Product Idea: A laundry solution that promises extra
                        protection from the virus
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mtop-2">
                Let’s now take the example of sexual wellness:
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/insight-to-ideas.webp"
                  alt="insights to product ideas"
                  title="insights to product ideas"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                We will reject Product Idea 3 & 4, since we are looking for
                innovation ideas and not intent on creating
                content/communication platforms. These ideas can certainly be
                explored later on when we are trying to create content marketing
                pillars as a part of our Media Activation.
              </div>
              <div className="mtop-2">
                Similarly there could be other Product Ideas that could come up
                in this space from some other conversations in section 2.3. For
                example,
              </div>
              <div className="mtop-2">
                Insight 5: “I feel strongly about the environment and try to
                reduce my environmental impact in every sphere of my life. I
                wish my condoms could also follow the lead”
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>Product Idea 6: A more environment friendly condom</li>
                </ul>
              </div>

              <div className="mtop-2">
                Insight 6: “I am genuinely scared of accidental pregnancies, to
                the extent that it can sometimes put me off my mood for sex”
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Product Idea 7: A condom with spermicidal lubricant that can
                    prevent the sperm from fertilizing the egg in the case of
                    condom breakage.
                  </li>
                </ul>
              </div>

              <div className="mtop-2">
                <h2>2.5 Finalising the One Idea</h2>
              </div>
              <div className="mtop-2">
                Once you have identified multiple ideas, the next step is to
                shortlist the one product/ service idea that you want to go
                forward with. This decision should be based on 2 factors – how
                attractive is the opportunity, and how likely are you to win
                with it.
              </div>
              <div className="mtop-2">
                <h3>Attractiveness</h3> is measured by looking at the size of
                the opportunity: how many people are likely to be interested in
                buying your product/ service today, how many people would be
                interested in the future (growth trends), and how profitable is
                your idea.
              </div>
              <div className="mtop-2">
                <h3>Likelihood to win</h3> is measured by evaluating
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Internal factors such the level of technical/ R&D expertise
                    available within the org to solve this problem well, fit
                    with Brand Purpose, investment needed vs available,
                    distribution capabilities etc
                  </li>
                  <li>
                    External factors such as the competitive environment and
                    regulatory framework within a country
                  </li>
                </ul>
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Attractiveness-vs-Likelihood-to-win.webp"
                  alt="Attractiveness vs Likelihood to win"
                  title="Attractiveness vs Likelihood to win"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                Using this framework, we can plot the ideas identified for the
                sexual wellness category and clearly identify that a condom that
                helps couples to climax together is the most promising idea to
                build upon.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Likelihood-to-win.webp"
                  alt="Likelihood to win"
                  title="Likelihood to win"
                  placeholder="none"
                />
              </div>
              <div className="mtop-2">
                Obviously, you’ll still need to deploy your judgement in
                plotting ideas on the 2*2 matrix, especially when you do not
                have enough data, but this framework will help you think about
                the right kind of issues to consider while narrowing down on the
                most promising opportunity to pursue.
              </div>
              <div className="mtop-2">
                <h2>2.6 Detailing the product/service</h2>
              </div>
              <div className="mtop-2">
                Your job here is to be able to list to us the product/service
                attributes that you can find based on your competitive research
                and consumer understanding.
              </div>
              <div className="mtop-2">
                As a brand owner, your typical role will be to brief the R&D
                team on the consumer problem that you want to solve for.
                Sometimes we need to look for inspiration from alternate
                categories/markets etc to help the R&D team to visualize the
                kind of solutions that might work.
              </div>
              <div className="mtop-2">
                For example, say the consumer insight is that “My biggest
                nightmare is that my baby’s in discomfort or worse falling ill,
                and I don’t even know about it.”
              </div>
              <div className="mtop-2">
                The product idea in this case would be “A product that indicates
                the babies’ health to the parents quickly”.
              </div>
              <div className="mtop-2">
                Now it would require some research for us to identify that
                parents associate their baby’s health with their body
                temperature. The traditional solution is to keep feeling your
                baby’s forehead or neck. How can we solve this problem through
                the product which helps them to know the temperature on an
                ongoing basis? Your job is not to find out how to do it but only
                list down the problems that need to be solved for the consumer
                and the R&D team will be the best one to suggest the technical
                solution.
              </div>
              <div className="mtop-2">
                We also start to research about what is already out there that
                can point out a temperature change. You come across dyes &
                paints that can change color based on temperature. Voila! This
                can lead us to the area of thermochromism, and present
                inspiration that can help our R&D team to formulate baby suits
                and sleepwear that change color the moment a baby gets hot.
              </div>
              <div className="mtop-2">
                In short you have to do the job of starting from the consumer
                insight to creating an inspiring product idea, and then also do
                some inspiring research on how you think this product idea can
                be delivered. Mostly that of Steve Jobs, not Wozniak.
              </div>
              <div className="mtop-2">
                Let's go back to the example of the sexual wellness category -
              </div>
              <div className="mtop-2">
                Since your Product Idea is: ‘A condom that helps partners climax
                together’, your objective is to do a thorough competitive
                research to understand what is present out there that can help
                the product deliver this benefit to act as inspiration for the
                R&D as well.
              </div>
              <div className="mtop-2">
                In this specific case, textured condoms (with ribs and dots and
                other textures) were already present out there. These condoms
                provide additional stimulation to sexual partners. At the same
                time other condoms with temporary numbing, using a miniscule
                amount of a local anesthetic were also already present that help
                against premature ejaculation of men.
              </div>
              <div className="mtop-2">
                Our product idea can be brought to life by dovetailing both
                these product attributes. What if we had a condom with the ribs
                and dots on the outside for the additional stimulation of the
                female, as well as the temporary numbing on the inside so that
                the male can perform for longer?
              </div>
              <div className="mtop-2">
                This direction was enough to the R&D team at Reckitt to
                formulate the Mutual Climax condoms that had the following
                attributes: “Ribs and dots on the outer layer that stimulate the
                woman. Performa Lubricant that mildly numbs the men.”
              </div>
              <div className="mtop-2">
                Remember that it is upto you how you bring this to life for the
                evaluator. Present clearly on the things which are needed for
                the consumers and the associated features which solves for it.
                You will also get to take technical inputs from the Reckitt team
                as well once you qualify for a national round.
              </div>
              <div className="mtop-2">
                In this case, since you have to directly propose the solution,
                we recommend the following -
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    For the big pain point that you are trying to solve for,
                    list down the specific consumer problems that need to be
                    addressed by the product/service
                  </li>
                  <li>
                    For each problem, detail out the how will the product or
                    service solve for it with specific features
                  </li>
                  <li>
                    Create a mock-up / video or anything else to help the
                    evaluators visualize this well. Remember this is a very
                    crucial part as the entire work comes together here for
                    folks evaluation your submissions.
                  </li>
                  <li>
                    Check for feasibility and scalability by seeking technical
                    help and some research
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mtop-2">
                <h2 id="content-4">3: Scoping the Opportunity</h2>
              </div>
              <div className="mtop-2">
                To scope out the opportunity, you can leverage some of the work
                done already with more data/ trends to make a persuasive case
                for your product/ service.
              </div>
              <div className="mtop-2">
                <h2>3.1 Calculating the Size of Prize</h2>
              </div>
              <div className="mtop-2">
                Using the working that you have done in 2.5 for assessing the
                attractiveness of the opportunity, present the scope of this
                opportunity (size of prize) in your submissions taking into
                account the size of the market, the share that you will be able
                to occupy, the number of people who will adopt it etc – over a
                horizon of 3-5 years.
              </div>
              <div className="mtop-2">
                <h2>3.2 Reckitt’s right to win</h2>
              </div>
              <div className="mtop-2">
                In this section, you use the working done for “Likelihood to
                Win” in 3.1 to determine Reckitt’s right to win.
              </div>
              <div className="mtop-2">
                You have done the selection of the brand and category in one of
                the earlier steps. But in this section, the idea is to go back
                and make sure that the product idea that you have eventually
                landed is still fitting in that <b>brand’s purpose.</b> Infact,
                as a good practice, this is a check which should be put in at
                almost all levels.
              </div>
              <div className="mtop-2">
                For example, if you have picked VANISH as a brand that you are
                working on, you want to ensure that the problem that you are
                solving has not become whiteness of clothes and is still around
                longevity of clothes.
              </div>
              <div className="mtop-2">
                The second part of checking whether{" "}
                <b>Reckitt has a right to win</b> in the space that you are
                proposing is again by using the logic that you have used to
                narrow down on your opportunity in section 3.1. Mention the
                various reasons why your opportunity has a high likelihood to
                win for Reckitt.
              </div>
              <div className="mtop-2">
                <h2>3.3 Financials</h2>
              </div>
              <div className="mtop-2">
                Any innovation will work if the financials make sense. And this
                forms a crucial part of a brand manager’s role. You will need to
                present a 3-5 year working on the investments and the associated
                returns to get the buy-in from various stakeholders that this is
                a viable innovation for the company to invest in.
              </div>
              <div className="mtop-2">
                Lets walk you through some of the relevant heads within a P&L
                basis which you can make one for your innovation and present the
                key financial KPIs.
              </div>
              <div className="mtop-2 text-underline">Variable cost</div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    These are the costs which vary with output /sales volumes
                  </li>
                  <li>
                    As the volume of production and output increases, variable
                    costs will also increase. Conversely, when fewer products
                    are produced, the variable costs associated with production
                    will consequently decrease
                  </li>
                  <li>
                    Examples: Raw Material, Packaging Material, Variable
                    Manufacturing Expenditure like electricity and labor,
                    transportation of goods from factory to warehouse to
                    customer, and many more.
                  </li>
                </ul>
              </div>

              <div className="mtop-2 text-underline">Fixed cost</div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    A fixed cost is an expense or cost that does not change with
                    an increase or decrease in the number of goods or services
                    produced or sold.
                  </li>
                  <li>
                    Fixed costs are expenses that have to be paid by a company,
                    independent of any{" "}
                    <a
                      href="https://thetechxplosion.com/category/technology/tx-tech/trending/business-talks"
                      target="_blank"
                      rel="noreferrer"
                      className="page-links"
                    >
                      business
                    </a>{" "}
                    activity.
                  </li>
                  <li>
                    Examples: Factory fixed expenses such as salary of factory
                    management, General administrative expenses, Cost of
                    research and product development, Marketing expenses, and
                    many more.
                  </li>
                </ul>
              </div>

              <div className="mtop-2 text-underline">Marginal Contribution</div>
              <div className="mtop-2">
                This helps to evaluate the impact of volume changes. It is the
                amount left over after the payment of variable expenses to cover
                fixed expenses and a profit margin. MC is important because:
              </div>
              <div className="mtop-2">
                <ul className="bullet-points">
                  <li>
                    Measures the success / cost of gaining / losing an extra
                    tonne
                  </li>
                  <li>
                    An increase or decrease in MC directly impacts the bottom
                    line
                  </li>
                  <li>
                    MC must cover all Fixed expenses if we are to make a profit
                  </li>
                </ul>
              </div>

              <div className="mtop-2 text-underline">Relationship:</div>
              <div className="mtop-2">
                Revenue – Variable costs = Marginal Contribution
              </div>
              <div>Marginal Contribution – Fixed Costs = Profit</div>

              <div className="mtop-2 text-underline">Profit</div>
              <div className="mtop-2">
                This is also called the EBIT (Earnings Before Interest and
                Taxes) and from that we can finally get our Net Operating
                Profit.
              </div>
              <div className="blog-hero-img mtop-1">
                <StaticImage
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/come_with_innovation/Frame-11.webp"
                  alt="revenue"
                  title="revenue"
                  placeholder="none"
                />
              </div>

              <div className="mtop-2">
                Your objective would be to create the above for your product for
                a period of 3-5 years. For that you would have to show Sale
                Projections for the next 3-5 years.{" "}
                <b>
                  Present the key KPIs (Revenue, MC, EBIT, Net Operating Profit)
                  in your one-pagers and expand on it in the subsequent rounds.
                </b>
              </div>
              <div className="mtop-2">
                Found this useful? Head over to{" "}
                <a
                  href="https://www.kraftshala.com/blog/bringing-your-innovation-to-life/"
                  target="_blank"
                  rel="noreferrer"
                  className="page-links"
                >
                  Part 2
                </a>{" "}
                of this module to know more about how to bring your innovation
                idea to life
              </div>
              <div className="mtop-2 mbottom-4 style-italics">
                Written by Eshu Sharma, Nishtha Jain and Varun Satia,
                co-founders at Kraftshala. Thanks to Anupriya Singhal, Shweta
                Dogra, Ratika Mehra, Alok Sinha, Jaiveer Duggal, Ankita
                Chakraborty, Saranya Mukherjee, Shikha Dsouza and a host of
                former participants of the Reckitt Global Challenge for sharing
                their inputs and perspectives. Design and illustrations by
                Geetika Sharma.
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default ComeWithInnovation;
