import React from "react";
import Seo from "../../../components/Seo/seo";
// import LazyLoad from "react-lazyload";
// import { StaticImage } from "gatsby-plugin-image";
import BlogLayout from "../../../components/Layout/BlogLayout/blogLayout";
import "./styles.scss";

const GroupDiscussion = () => {
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
        title="Group discussion topics and tips for MBA (2021) | Kraftshala"
        description="Group Discussion is a critical part of any MBA placement process. Here is a list of GD topics on business, marketing, current affairs and also tips to ace a GD"
        url="https://www.kraftshala.com/blog/group-discussions-topics/"
        // courseSnipptJSON={JSON.stringify(courseSnipptJSON)}
      />
      <div className="group-discussion-article">
        <BlogLayout link="https://www.kraftshala.com/blog/group-discussions-topics">
          <div className="blog-wrapper">
            <h1>
              MBA Group Discussion Topics & Tips for 2021: Current and Latest GD
              Topics
            </h1>

            <div className="mtop-2">
              Placements are a time of great stress and angst for B-school
              students. Like gallant knights of the old, candidates have to face
              obstacles like gruelling interviews and insidious group
              discussions in order to obtain the Holy Grail – a job in their
              dream company. Group Discussions are a rite of passage for almost
              all Indian companies including Hindustan Unilever, ITC, PepsiCo
              etc.
            </div>

            <div className="mtop-2">
              In this article, we have compiled for you a list of the latest MBA
              group discussion topics for 2021 across various domains. If you
              are in a hurry, find them at the bottom of this article. But
              first, let us really decode GDs in detail from a recruiter’s
              perspective and how can you crack them
            </div>

            <div className="mtop-2">
              <h2>Table of contents</h2>

              <ol className="bullet-points mtop-1">
                <li
                  className="content-li"
                  onClick={() => handleClick("content-1")}
                  aria-hidden="true"
                >
                  What skills are judged in a Group Discussion?
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-2")}
                  aria-hidden="true"
                >
                  How to prepare for Group Discussion?
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-3")}
                  aria-hidden="true"
                >
                  How to structure a group discussion?
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-4")}
                  aria-hidden="true"
                >
                  Why Mediators Win GDS?
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-5")}
                  aria-hidden="true"
                >
                  How to understand Verbal and Non-verbal Cues
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-6")}
                  aria-hidden="true"
                >
                  Are We On The Same Pag
                </li>
                <li
                  className="content-li"
                  onClick={() => handleClick("content-7")}
                  aria-hidden="true"
                >
                  Mind Your Language!
                </li>
                <li className="content-li">
                  <span
                    onClick={() => handleClick("content-8")}
                    aria-hidden="true"
                  >
                    Parts of a Successful Group Discussion
                  </span>
                  <ol className="bullet-points" type="a">
                    <li
                      onClick={() => handleClick("initiation")}
                      aria-hidden="true"
                    >
                      Initiation{" "}
                    </li>
                    <li
                      onClick={() => handleClick("continuation")}
                      aria-hidden="true"
                    >
                      Continuation
                    </li>
                    <li
                      onClick={() => handleClick("conclusion")}
                      aria-hidden="true"
                    >
                      Conclusion{" "}
                    </li>
                  </ol>
                </li>
                <li className="content-li">
                  <span
                    onClick={() => handleClick("content-9")}
                    aria-hidden="true"
                  >
                    Group Discussion Topics for MBA{" "}
                  </span>
                  <ol className="bullet-points" type="a">
                    <li
                      onClick={() => handleClick("content-9-a")}
                      aria-hidden="true"
                    >
                      Group discussion topics of 2021
                    </li>
                    <li
                      onClick={() => handleClick("content-9-b")}
                      aria-hidden="true"
                    >
                      Current Affairs GD topics{" "}
                    </li>
                    <li
                      onClick={() => handleClick("content-9-c")}
                      aria-hidden="true"
                    >
                      Business and Economy GD topics{" "}
                    </li>
                    <li
                      onClick={() => handleClick("content-9-d")}
                      aria-hidden="true"
                    >
                      Social Issues GD topics{" "}
                    </li>
                    <li
                      onClick={() => handleClick("content-9-e")}
                      aria-hidden="true"
                    >
                      Abstract GD topics
                    </li>
                    <li
                      onClick={() => handleClick("content-9-f")}
                      aria-hidden="true"
                    >
                      Marketing and Sales GD topics
                    </li>
                  </ol>
                </li>
              </ol>
            </div>

            <div className="mtop-2">
              <h2 id="content-1">
                1. What skills are judged in a Group Discussion?
              </h2>

              <div className="mtop-2">
                As any student who has gone through the placements process will
                attest: group discussions are designed to evaluate a lot of
                integral skills a manager must possess and companies want to
                hire candidates who exhibit these qualities. Here are a few of
                those:
              </div>

              <ul className="bullet-points">
                <li>Leadership skills</li>
                <li>Communication Skills</li>
                <li>Team playing skills</li>
                <li>Receptivity to new ideas</li>
                <li>Analytical capabilities</li>
                <li>Problem-solving </li>
                <li>Critical thinking abilities</li>
                <li>Time management skills</li>
                <li>Social mindset and self-confidence</li>
                <li>Capacity to deal with stress.</li>
              </ul>

              <div className="mtop-2">
                So you may choose to love or hate group discussions but you
                can’t escape them. You can, however, prepare for GD. How, you
                may ask? Fear not! That’s coming up next
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-2">2. How to prepare for Group Discussion?</h2>

              <div className="mtop-2">
                We have travelled the expanse of the kingdom, spoken to veteran
                recruiters and B-school candidates, and collated insights that
                will help you crack any arduous sales and marketing group
                discussion.
              </div>

              <div className="mtop-2">
                <h3>Me vs We - You win or lose as a group in GDs.</h3>

                <div className="mtop-2">
                  The first thing you need to remember is that a group
                  discussion isn’t a solo performance. The overall performance
                  of the entire group is evaluated as a whole. Recruiters place
                  a lot of emphasis on good team playing skills when evaluating
                  group discussions. When evaluating a group discussion, it is
                  very rare that recruiters have a fixed number of students they
                  want to take to the next round. They are willing to interview
                  as many students whose performance they like. Your goal should
                  therefore not be to compete for a fixed number of slots, but,
                  as a group, put up a stellar performance that ensures the
                  maximum number of students from the group are making it
                  through to the next round. This subtle shift in group
                  objectives can reap great benefits for all group members.
                  Maintaining professional decorum throughout the discussion is
                  a must. A group discussion that turns hostile can sometimes be
                  scrapped altogether or very few candidates will make it
                  through to the next round. It is also a good idea to use
                  plural pronouns like “we can discuss…” or “the solution as
                  discussed by us…”. A conclusion or solution reached through
                  group consensus is a mark of an effective group discussion.
                </div>
              </div>

              <div className="mtop-2">
                <h3>
                  Familiarizing yourself with different kinds of marketing and
                  sales group discussions
                </h3>
                <div className="mtop-2">
                  Broadly speaking, there are two types of sales and marketing
                  group discussions:{" "}
                </div>

                <ol className="bullet-points">
                  <li>
                    <h4>
                      Case-based - In a case-based GD, students are given a case
                      study that they are expected to read and solve the
                      problems extrapolated in it as a group
                    </h4>
                  </li>

                  <li>
                    <h4>
                      Generic. A generic GD will be on a topic, often inspired
                      by current affairs, and students are expected to make an
                      in-depth study of the topic as a group.
                    </h4>
                  </li>
                </ol>

                <div className="mtop-2">
                  Before placement season starts, students can begin preparing
                  for group discussions along with the rest of their batch.
                </div>

                <div className="mtop-2">
                  A student from one of the top B-schools of the country shares
                  his Day Zero GD Experience with us: “It was utter chaos.
                  Someone was talking about the merits and the very next speaker
                  spoke about the demerits. No one was on the same page. Someone
                  was speaking about the effects on the economy and someone was
                  arguing about the environmental effects. There was no
                  structure to the discussion and good points got buried under a
                  lot of unnecessary and redundant noise”.
                </div>

                <div className="mtop-2">
                  It is therefore a good idea to ideate and decide on a
                  structure for group discussions beforehand to ensure efficient
                  use of the time given for discussion.
                </div>
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-3">3. How to structure a group discussion?</h2>

              <div className="mtop-2">
                One way to bring structure to the discussion is to use
                predefined models to give direction to the discussion.
              </div>

              <ol className="bullet-points mtop-2">
                <li>
                  <h3>For case-based GD topics</h3>
                  <div>
                    Use an STP (Segmentation-Targeting-Positioning) model
                    followed by a thorough discussion of Kotler’s 4Ps (Product –
                    Price – Place – Promotion). This will ensure a holistic
                    discussion of the brand or product given in a case.
                  </div>
                </li>

                <li className="mtop-1">
                  <h3>For generic GD topics </h3>
                  <div className="mtop">
                    Try following the PESTLE model (political, economic, social,
                    technological, legal and environmental) or the 5Cs (Context,
                    Company, Competitors, Customers and Collaborators) to
                    explore an issue from all vantage points.
                  </div>
                </li>
              </ol>

              <div className="mtop-2">
                Mastery of GDs comes through regular practice, and almost all
                B-schools conduct mock GDs before placement season. During such
                practice GDs, it is a good idea to try and apply STP and 4P
                models so as to become habituated to them. If the entire batch
                follows the same model to give structure to their thoughts, it
                can prevent the group discussion from resembling a fish market.
                The discussion will flow in a pre-set manner and explore all
                facets of the topic without becoming chaotic.
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-4">4. Why Mediators Win GDS?</h2>
            </div>
            <div className="mtop-2">
              The mediator in the group discussion is that one guy or girl
              trying to maintain decorum. While everyone around them is losing
              their heads, they, like the speakers in parliament, try to calm
              passions and steer the discussion towards calmer waters.
            </div>

            <div className="mtop-2">
              Recruiters absolutely love that because it is a good indicator of
              not only the <b>person’s leadership qualities</b> but also their
              ability <b>to remain calm under extreme stress</b> . Here are some
              of the things that a mediator does:
            </div>

            <ul className="bullet-points">
              <li>
                A mediator is often the one who initiates the group discussion
                by defining the topic at hand
              </li>
              <li>
                When a discussion meanders away on a tangential path, he or she
                brings the discussion back to the topic at hand.
              </li>
              <li>
                He or she keeps track of passing time. During an engaging
                discussion, it is often easy to forget about the passing time
                and spend a disproportionate amount of time discussing the same
                problem. In such a scenario, the mediator tries to steer the
                discussion by reminding the other participants of the passage of
                time and giving a structure to the discussion: “since we only
                have six minutes left, let’s move on to the second problem in
                the case”.
              </li>
            </ul>

            <div className="mtop-2">
              As the mediator emerges as the informal leader of the team other
              candidates might start addressing their points towards him or her
              through different non-verbal cues. This reflects positively on the
              candidate. Today’s employers look for candidates who can work in a
              team-oriented environment especially when recruiting for a sales
              and marketing role. However, too many interruptions can restrict
              the flow of the discussion and reflect badly on the candidate
              portraying him or her as a control freak.
            </div>

            <div className="mtop-2">
              <h2 id="content-5">
                5. How to understand Verbal and Non-verbal Language Cues
              </h2>

              <div className="mtop-2">
                From the minute you enter the room you are being evaluated. In a
                group discussion, only one participant can speak at a time but
                non-verbal cues like your body language speak even when you
                don’t. Maintaining eye contact with your group members (never
                the panel; remember they are supposed to be invisible) and
                nodding indicates that you are listening attentively and
                reflects positively on you. Gesturing, fidgeting or slouching,
                on the other hand, can be seen as signs of disinterest in the
                discussion or arrogance. Physical gestures such as rubbing the
                back of the head, or touching the nose or hair signals
                discomfort and should be avoided, even if you feel stressed or
                anxious. Sit straight and try to avoid nervous behaviour like
                adjusting clothes, biting your lips, crossing your arms and
                legs, tapping fingers or fidgeting. You want to appear confident
                and calm to the panel.
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-6">6. Are We On The Same Page?</h2>

              <div className="mtop-2">
                Language is symbolic in nature and thus it becomes necessary to
                be on guard against bypassing, in which two or more people have
                different meanings for a word but do not realise it. Bypassing
                can lead either to a false agreement or to the perception that a
                disagreement exists when it really doesn’t. This can arise in
                connection to abstract concepts like ‘patriotism’ etc. In an MBA
                group discussion, it is, therefore, advisable to be as concrete
                and precise as possible and give specific examples of what you
                mean when you have to use an abstract term. It is also a good
                idea to quantify whenever possible. For example, if the topic is
                based on ‘drunk driving’, in the introduction you might define
                drunk driving as “having a level of .08 percent alcohol in the
                blood while driving a vehicle” to eliminate confusion.
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-7">7. Mind Your Language!</h2>

              <div className="mtop-2">
                Emotive words are terms that ignite strong feelings and
                interfere with good listening, and it is a good idea to avoid
                using such words.
              </div>

              <div className="mtop-2">
                In a scenario where the use of an emotive word sparks emotional
                responses, the group mediator may intervene and try to defuse
                the situation.
              </div>

              <div className="mtop-2">
                For instance, if someone says “He’s just a failed politician,
                not a scientist, and he’s grandstanding as he looks for a new
                platform. What could he know about global warming?”
              </div>

              <div className="mtop-2">
                The mediator could paraphrase as follows: “So, in other words,
                you think that the opinions of a non-scientist are not valid on
                scientific issues such as global warming, and you mistrust his
                motives?”
              </div>

              <div className="mtop-2">
                This helps defuse the trigger words (failed politician,
                grandstanding) so the group can focus on the merits of the
                message itself.
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-8">8. Parts of a Successful Group Discussion </h2>

              <div className="mtop-1">
                A group discussion usually can be broadly divided into three
                parts:
                <ol className="bullet-points" type="a">
                  <li className="mtop-1">
                    <h3 id="initiation">Initiation</h3>: As any veteran GD
                    candidate will tell you it is a good idea to initiate the
                    group discussion. Not only does it show leadership skills
                    but it reduces the risk of you missing out on a point
                    because someone already said it before. However, the
                    introduction sets the mood and tone of the discussion. While
                    initiating the discussion, you can tackle the topic head-on
                    by defining the key terms or you may also begin with an
                    adage, popular saying, quote, anecdote or rhetorical
                    question.
                  </li>

                  <li className="mtop-1">
                    <h3 id="continuation">Continuation</h3>: A common problem in
                    group discussions is that participants make points in
                    isolation and there is a lack of continuity in the
                    discussion flow. It is always a good idea to try and refer
                    to a point made earlier and link points together. The
                    discussion must not digress from its focal point and should
                    move forward logically and smoothly to make an in-depth
                    study of the topic.
                    <div className="mtop-1">
                      At all times in the group discussion, it is important to
                      remain professional. Don’t get personally offended or make
                      personal remarks. At all costs avoid colloquial terms like
                      yaar, abbey etc. and never use cuss words.
                    </div>
                  </li>

                  <li className="mtop-1">
                    <h3 id="conclusion">Conclusion</h3>: In this stage, the
                    group discussion is taken to its logical end by summarising
                    all points discussed and reaching a solution through mutual
                    consensus.
                    <div className="mtop-1">
                      Apart from good communication skills, good content is also
                      important to make a lasting impact in a group discussion.
                      Statistics and facts are double-edged swords. If quoted
                      correctly, they help you establish your knowledge
                      superiority in the group. If you do not get them right,
                      you can make a fool of yourself.
                    </div>
                    <div className="mtop-1">
                      To conclude we would like to reemphasize the importance of
                      practice. The more you and the rest of your batch practice
                      group discussions, the easier it will be for you to
                      communicate effectively with each other and also reduce
                      bouts of nervousness.
                    </div>
                    <div className="mtop-1">
                      In the few minutes before the discussion begins, note down
                      all your thoughts on the topic in a priority hierarchy. Do
                      not try to introduce more than one point at a time in the
                      discussion as that will hinder effective discussion.
                      Finally, remember that your success is linked to the
                      group’s success, and therefore it is important to work
                      together.
                    </div>
                    <div className="mtop-1">
                      May the odds be ever in your favour!
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mtop-2">
              <h2 id="content-9">9. Group Discussion Topics for MBA</h2>

              <div className="bullet-points mtop-1">
                <div>
                  <h3 id="content-9-a">Group Discussion Topics of 2021 </h3>

                  <ol className="bullet-points">
                    <li>Coronavirus: Effect of the pandemic on rural India </li>
                    <li>Indian Economic Stagnation</li>
                    <li>Impact of Coronavirus on Indian Economic system</li>
                    <li>COVID 19:Significance of investing in Healthcare </li>
                    <li>Influence of Modern Technology on Jobs</li>
                    <li>Farm Bill Amendment</li>
                    <li>Union Budget 2021: Major Highlights</li>
                    <li>Ban of Chinese App in India – Pros and Cons</li>
                    <li>
                      How will social distancing change the world around us
                    </li>
                    <li>Doklam Standoff - Which side is right?</li>
                  </ol>
                </div>

                <div className="mtop-1">
                  <h3 id="content-9-b">
                    Current Affairs group discussion topics
                  </h3>
                  <ol className="bullet-points">
                    <li>Is making the Aadhaar card mandatory a good idea?</li>
                    <li>Delhi Air Pollution - Risks and Solution </li>
                    <li>
                      Chandrayaan 2: Failure or a stepping stone for future
                      glory?
                    </li>
                    <li>EVMs Vs Paper Ballots </li>
                    <li>
                      National Education Policy 2020 – Impact on Higher
                      Education
                    </li>
                    <li>Advantages and Disadvantages of Online Learning</li>
                    <li>Why is Individual Data Privacy important?</li>
                    <li>Statue of Unity - Pros and Cons</li>
                    <li>
                      Can India afford to spend a fortune on a project like
                      Mission to MARS{" "}
                    </li>
                    <li>
                      One Nation One Election: Discuss benefits and drawbacks
                    </li>
                  </ol>
                </div>

                <div className="mtop-1">
                  <h3 id="content-9-c">
                    Business & Economy group discussion topics
                  </h3>

                  <ol className="bullet-points">
                    <li>Is an MBA necessary to be successful in business?</li>

                    <li>Is CryptoCurrency the future of money?</li>

                    <li>Globalization: An Opportunity or a Threat?</li>

                    <li>How can the IT industry create more jobs in India?</li>

                    <li>
                      Banks Merger in India: Pros and Cons for the Indian
                      Economy?
                    </li>

                    <li>Is FDI Good for the Indian Economy?</li>

                    <li>Startup India: Supporting Entrepreneurship</li>
                    <li>
                      Make in India: How to make India a manufacturing hub
                    </li>
                    <li>Cashless Economy – Pros and Cons </li>
                    <li>
                      Is Corruption in the Economy the root cause for the Indian
                      Economic slowdown?
                    </li>
                  </ol>
                </div>

                <div className="mtop-1">
                  <h3 id="content-9-d">
                    Social Issues group discussion topics
                  </h3>

                  <ol className="bullet-points">
                    <li>Should English be the official language of India?</li>
                    <li>Free metro ride for women: is it justified?</li>
                    <li>
                      Does shortage of open spaces and playgrounds lead to
                      negative tendencies in children?
                    </li>
                    <li>Women Empowerment & Gender Justice</li>
                    <li>Swachh Bharat Mission: Success or Failure </li>
                    <li>
                      Will Beti Bachao Beti Padhao abolish the orthodox mindset?
                    </li>
                    <li>Should Retirement Homes exist? </li>
                    <li>Smart City Projects – How useful will they be?</li>
                    <li>
                      Does India need a uniform civil code - Pros and Cons
                    </li>
                    <li>Effect of social media in our daily life </li>
                  </ol>
                </div>

                <div className="mtop-1">
                  <h3 id="content-9-e">Abstract group discussion topics</h3>

                  <ol className="bullet-points">
                    <li>Hard Work Vs Smart Work</li>
                    <li>Me Too Campaign: Pros and Cons</li>
                    <li>Work-Life Balance is necessary</li>
                    <li>Fact Vs Opinion</li>
                    <li>Patience: A virtue in Business and Management.</li>
                    <li>Innovation Vs Invention: What is more important?</li>
                    <li>Women are better multi-taskers- agree or disagree?</li>
                    <li>Do we need more entrepreneurs than managers?</li>
                    <li>Ethics or Profit?</li>
                    <li>Friends, Enemy or Frenemies?</li>
                  </ol>
                </div>

                <div className="mtop-1">
                  <h3 id="content-9-f">Marketing Group Discussion Topics GD</h3>

                  <ol className="bullet-points">
                    <li>Should you think Product first or Consumer first?</li>
                    <li>Is Consumer Testing useful?</li>
                    <li>
                      Product Quality vs Marketing - which is more important?
                    </li>
                    <li>Advertising is all glitter and no substance.</li>
                    <li>Marketing is manipulation but it can be for good</li>
                    <li>Privatization will lead to Less Corruption</li>
                    <li>
                      Is the current MBA curriculum serving the needs of the
                      modern age?
                    </li>
                    <li>Can Marketing lessons be taken in the classroom?</li>
                    <li>can we sell flawed products with flawless ads?</li>
                    <li>Views on Word of Mouth marketing</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mtop-2">
              If you need help with your CV, check out our{" "}
              <a
                href="https://www.kraftshala.com/blog/blog-ultimate-cv-guide/"
                target="_blank"
                rel="noreferrer"
                className="page-links"
              >
                ‘Ultimate CV guide'
              </a>
              . For help on company specific Interview process,check out these
              articles:
              <div className="bullets-points">
                <div>
                  <a
                    href="https://www.kraftshala.com/blog/what-questions-to-expect-in-amazon-interview/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    -Amazon Interview Question
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.kraftshala.com/blog/how-to-crack-the-ceo-factory/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    -HUL interview questions
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.kraftshala.com/blog/png-interview-preparation-sales-marketing/"
                    target="_blank"
                    rel="noreferrer"
                    className="page-links"
                  >
                    -P&G interview guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </React.Fragment>
  );
};

export default GroupDiscussion;
