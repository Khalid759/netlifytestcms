const blogs = [
  {
    id: "convert-summers-to-ppo",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/04.webp",
    title: "Convert Summers to PPO Repository",
    about: "",
    link: "https://www.kraftshala.com/blog/convert-summers-to-ppo",
  },
  {
    id: "marketing-alliances",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/image2.webp",
    title:
      "How to Pursue Marketing Alliances that Unlock Growth in the Digital Ecosystem.",
    about: "",
    link: "https://www.kraftshala.com/blog/marketing-alliances",
  },
  {
    id: "prep-a-kraftshala-repository",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/05.webp",
    title: "Resources for Placement Prep: A Kraftshala Repository.",
    about: "",
    link:
      "https://www.kraftshala.com/blog/resources-for-placement-prep-a-kraftshala-repository",
  },

  {
    id: "how-to-come-up-with-an-innovation",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/How-to-come-up-with-innovation.webp",
    title: "How to come up with an innovation?",
    about: "",
    link: "https://www.kraftshala.com/blog/how-to-come-up-with-an-innovation",
  },

  {
    id: "bringing-your-innovation-to-life",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Bringing-your-innovation-to-life.webp",
    title: "Bringing your innovation to life.",
    about: "",
    link: "https://www.kraftshala.com/blog/bringing-your-innovation-to-life",
  },

  {
    id: "budget-with-aashish-chopra",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Aashish-Session-Thumbnail.webp",
    title:
      "How to create content that goes viral in a shoestring budget with Aashish Chopra",
    about: "",
    link:
      "https://www.kraftshala.com/blog/how-to-create-content-that-goes-viral-in-a-shoestring-budget-with-aashish-chopra",
  },

  {
    id: "build-a-competitive-advantage",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Group-11.webp",
    title: "How Brand Essence can help build a competitive advantage",
    about: "[...]",
    link:
      "https://www.kraftshala.com/blog/how-brand-essence-can-help-build-a-competitive-advantage",
  },

  {
    id: "which-ad-made-you-buy",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/So-which-ad-made-you-buy-1-1.webp",
    title: "Attribution – Which Ad made you buy?",
    about: "[...]",
    link: "https://www.kraftshala.com/blog/attribution-which-ad-made-you-buy",
  },

  {
    id: "delhi-elections-campaigns-2020",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Delhi-election-campaigns-decoded-blog-2-1.webp",
    title: "The Ultimate Marketing Analysis of Delhi Election Campaigns 2020",
    about: "[...]",
    link:
      "https://www.kraftshala.com/blog/the-ultimate-marketing-analysis-of-delhi-elections-campaigns-2020",
  },

  {
    id: "why-is-defining-a-target-audience-critical-for-a-brand",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Why-do-brands-target.webp",
    title: "Why is defining a Target Audience critical for a brand?",
    about: "[...]",
    link:
      "https://www.kraftshala.com/blog/why-is-defining-a-target-audience-critical-for-a-brand",
  },

  {
    id: "healthcare-summerprepseries",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Healthcare-Blog-1920x1080-1.webp",
    title: "Cracking a PPO in Healthcare #SummerPrepSeries",
    about:
      "With this summer prep series, we want to help you crack a PPO in [...]",
    link:
      "https://www.kraftshala.com/blog/cracking-a-ppo-in-healthcare-summerprepseries",
  },

  {
    id: "cracking-a-ppo-in-pharma-summerprepseries",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Pharma-Blog-1920x1080-1.webp",
    title: "Cracking a PPO in Pharma #SummerPrepSeries",
    about:
      "With this summer prep series, we want to help you crack a PPO in [...]",
    link:
      "https://www.kraftshala.com/blog/cracking-a-ppo-in-pharma-summerprepseries",
  },

  {
    id: "banking-summerprepseries",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/got-an-internship-in-banking-blog.webp",
    title: "Cracking a PPO in Banking #SummerPrepSeries",
    about:
      "With this summer prep series, we want to help you crack a PPO in [...]",
    link:
      "https://www.kraftshala.com/blog/cracking-a-ppo-in-banking-summerprepseries",
  },

  {
    id: "fmcd-summerprepseries",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/FMCD-blog-creative.webp",
    title: "Cracking a PPO in FMCD #SummerPrepSeries",
    about:
      "With this summer prep series, we want to help you crack a PPO in [...]",
    link:
      "https://www.kraftshala.com/blog/cracking-a-ppo-in-fmcd-summerprepseries",
  },

  {
    id: "e-commerce-summerprepseries",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Ecom-Blog-1920x1080.webp",
    title: "Cracking a PPO in E-commerce #SummerPrepSeries",
    about:
      "With this summer prep series, we want to help you crack a PPO in [...]",
    link:
      "https://www.kraftshala.com/blog/cracking-a-ppo-in-e-commerce-summerprepseries",
  },

  {
    id: "ultimate-cv-guide",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/thumbnail-2-1_bi2gkz.webp",
    title: "Ultimate CV Guide for Experienced Folks",
    about: "Since you have reached this page, I know that you are [...]",
    link: "https://www.kraftshala.com/blog/blog-ultimate-cv-guide",
  },

  {
    id: "compensation-of-your-job-offer",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Unleavables-W-out-Logo_yxt910.webp",
    title: "Did you evaluate the Real Compensation of your job offer?",
    about:
      "At Kraftshala, we recently made an offer to a talented young professional who had graduated from [...]",
    link:
      "https://www.kraftshala.com/blog/did-you-evaluate-the-real-compensation-of-your-job-offer",
  },

  {
    id: "studio-x-maricos",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/02.webp",
    title: "Studio X: Marico’s First Digital Brand",
    about:
      "Digital-only brand launches from major FMCGs are not the future- they are the reality today. [...]",
    link:
      "https://www.kraftshala.com/blog/studio-x-maricos-first-digital-brand",
  },

  {
    id: "marico-the-giant-startup",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/maxresdefault2.webp",
    title: "Marico The Giant Startup",
    about: "[...]",
    link: "https://www.kraftshala.com/blog/marico-the-giant-startup",
  },

  {
    id: "what-does-an-area-sales-manager-do",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/maxresdefault.webp",
    title: "What Does an Area Sales Manager do?",
    about:
      "Wondering what FMCG sales is really like? Catch Sachin from Unilever, Sudeep from Pidilite and [...]",
    link: "https://www.kraftshala.com/blog/what-does-an-area-sales-manager-do",
  },

  {
    id: "decoding-the-colour",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/maxresdefault3.webp",
    title:
      "Decoding the Colour Experience Store by Asian Paints: A short Marketing Case",
    about: "[...]",
    link:
      "https://www.kraftshala.com/blog/decoding-the-colour-experience-store-by-asian-paints-a-short-marketing-case",
  },

  {
    id: "the-amazon-flywheel",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/0.webp",
    title: "The Amazon Flywheel",
    about:
      "Have you ever wondered what's the secret behind Amazon's worldwide sucess? Here's a look at [...]",
    link: "https://www.kraftshala.com/blog/the-amazon-flywheel",
  },
  {
    id: "kankhajura-tesan",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/03.webp",
    title: "Kankhajura Tesan by HUL and Kraftshala",
    about: "[...]",
    link: "https://www.kraftshala.com/blog/kankhajura-tesan",
  },
  {
    id: "how-to-switch-to-marketing",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/physician-career-change.webp",
    title: "How to Switch to Sales and Marketing After Your Summer Internship?",
    about:
      "Summer Internships have finally concluded in B-Schools across the country.  However, in just a [...]",
    link:
      "https://www.kraftshala.com/blog/how-to-switch-to-marketing-and-sales-after-your-summer-internship",
  },
  {
    id: "how-to-ace-competitions-while-having-fun",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Case-Study-Icon-700x441.webp",
    title: "How to Ace Competitions While Having Fun?",
    about:
      "It is that time of the year when B-schools are buzzing with a lot [...]",
    link:
      "https://www.kraftshala.com/blog/how-to-ace-competitions-while-having-fun",
  },
  {
    id: "unbox-zindagi",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Unbox-Zindagi-Display-Picture-900x500-2.webp",
    title: "The ‘Unbox Zindagi’ Deduction",
    about: "",
    link: "https://www.kraftshala.com/blog/the-unbox-zindagi-deduction",
  },
  {
    id: "personal-storytelling-to-crack-interviews",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Unleavables-1-2-900x500.webp",
    title: "Personal Storytelling to Crack Interviews",
    about: "[...]",
    link:
      "https://www.kraftshala.com/blog/personal-storytelling-to-crack-interviews",
  },
  {
    id: "amazon-interview-questions",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Amazon-1-1-e1531121951917-1.webp",
    title:
      "What questions to expect in an Amazon Interview? Here’s what the 14 Amazon Leadership Principles tell us.",
    about:
      "It would be impossible to produce results in an environment as dynamic as the [...]",
    link: "https://www.kraftshala.com/blog/amazon-interview-questions",
  },
  {
    id: "the-rise-and-rise-of-ppos",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Recruiter2.0-1-900x500-700x441.webp",
    title: "The Rise and rise of PPOs",
    about:
      "Life forces most of us to make certain decisions at different stages, decisions that [...]",
    link: "https://www.kraftshala.com/blog/the-rise-and-rise-of-ppos",
  },
  {
    id: "group-discussions-topics",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Unleavables-2-900x500-e1531124209466-1.webp",
    title: "Group Discussions: How to champion the fish market?",
    about:
      "Placements are a time of great stress and angst for B-school students. Like gallant knights [...]",
    link: "https://www.kraftshala.com/blog/group-discussions-topics",
  },
  {
    id: "png-interview-preparation-sales-marketing",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/PG_logo_dark_blue-min-e1550127294970_xmgyns.webp",
    title: "Decoding the P&G Interview",
    about:
      "William Procter and James Gamble would never have crossed paths if they hadn’t married the [...]",
    link:
      "https://www.kraftshala.com/blog/png-interview-preparation-sales-marketing",
  },
  {
    id: "brace-yourselves-summers-are-coming",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Summers-are-coming-2-900x500-e1515502003182-700x441.webp",
    title: "This is how you can prepare before your summer internship!",
    about:
      "So you went through the summer placement process, dealt with grueling group discussions and interview [...]",
    link: "https://www.kraftshala.com/blog/brace-yourselves-summers-are-coming",
  },
  {
    id: "what-is-it-like-to-work-on-the-best-brand-in-the-world",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Capture-588x363-e1515502463618_za6iax.webp",
    title: "What is it like to work on the Best Brand in the world?",
    about:
      "Hear Sreerupa Banerjee- Vice President, Brand Strategy & Communication at Vodafone, tell us how is [...]",
    link:
      "https://www.kraftshala.com/blog/what-is-it-like-to-work-on-the-best-brand-in-the-world",
  },
  {
    id: "how-to-be-the-best-summer-intern-that-you-can-be",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/Name-card-e1515502536527_y2gbfm.webp",
    title: "How to be the best summer intern that you can be?",
    about:
      "Legend has it that there was once a time when summer internships used to just [...]",
    link:
      "https://www.kraftshala.com/blog/how-to-be-the-best-summer-intern-that-you-can-be",
  },
  {
    id: "6-things-you-should-definitely",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/EAT-SLEEP-RAVE-REPEAT-1-633x363-e1515502612571_uwfgsy.webp",
    title:
      "6 things you should definitely be doing in your summer internship….. or not?",
    about:
      "Summer internships are one of the most transformational experiences of an individual’s B-School life. [...]",
    link:
      "https://www.kraftshala.com/blog/6-things-you-should-definitely-be-doing-in-your-summer-internship-or-not",
  },
  {
    id: "how-to-crack-the-ceo-factory",
    type: "post",
    thumbnail:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/images/unilever-e1531121895260-1.webp",
    title: "How to crack the CEO factory?",
    about:
      "The above statement was posted by Unilever Careers’ FB page this April. Although it [...]",
    link: "https://www.kraftshala.com/blog/how-to-crack-the-ceo-factory",
  },
];

// total blogs 36
// 25 on page one
// rest on page two
const pageOne = blogs.slice(0, 25);
const pageTwo = blogs.slice(25, blogs.length);

// console.log("page one data", pageOne);
// console.log("page two data", pageTwo);

export { pageOne, pageTwo };
