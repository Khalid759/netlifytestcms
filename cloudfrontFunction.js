function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var querystring = request.querystring;
  var method = request.headers;
  var redirection = [
    {
      fromPath: "/blogs",
      toPath: "/blog",
    },
    {
      fromPath: "/kraftshala-experience",
      toPath: "/industrycreds-experience",
    },
    {
      fromPath: "/professional-brand-management",
      toPath: "/professional-brand-management-in-the-digital-age",
    },
    {
      fromPath: "/blog/kankhajura-tesan-by-hul-and-kraftshala",
      toPath: "/blog/kankhajura-tesan",
    },
    {
      fromPath: "/blog/group-discussions-how-to-champion-the-fish-market",
      toPath: "/blog/group-discussions-topics",
    },
    {
      fromPath: "/blog/what-questions-to-expect-in-amazon-interview",
      toPath: "/blog/amazon-interview-questions",
    },
    {
      fromPath:
        "/6-things-you-should-definitely-be-doing-in-your-summer-internship-or-not",
      toPath:
        "/blog/6-things-you-should-definitely-be-doing-in-your-summer-internship-or-not",
    },
    {
      fromPath: "/amazon-interview-questions",
      toPath: "/blog/amazon-interview-questions",
    },
    {
      fromPath: "/how-to-raise-the-bar-in-the-amazon-interview",
      toPath: "/blog/amazon-interview-questions",
    },
    {
      fromPath: "/attribution-which-ad-made-you-buy",
      toPath: "/blog/attribution-which-ad-made-you-buy",
    },
    {
      fromPath: "/blog-ultimate-cv-guide",
      toPath: "/blog/blog-ultimate-cv-guide",
    },
    {
      fromPath: "/brace-yourselves-summers-are-coming",
      toPath: "/blog/brace-yourselves-summers-are-coming",
    },
    {
      fromPath: "/bringing-your-innovation-to-life",
      toPath: "/blog/bringing-your-innovation-to-life",
    },
    {
      fromPath: "/convert-summers-to-ppo",
      toPath: "/blog/convert-summers-to-ppo",
    },
    {
      fromPath: "/cracking-a-ppo-in-banking-summerprepseries",
      toPath: "/blog/cracking-a-ppo-in-banking-summerprepseries",
    },
    {
      fromPath: "/cracking-a-ppo-in-e-commerce-summerprepseries",
      toPath: "/blog/cracking-a-ppo-in-e-commerce-summerprepseries",
    },
    {
      fromPath: "/cracking-a-ppo-in-fmcd-summerprepseries",
      toPath: "/blog/cracking-a-ppo-in-fmcd-summerprepseries",
    },
    {
      fromPath: "/cracking-a-ppo-in-healthcare-summerprepseries",
      toPath: "/blog/cracking-a-ppo-in-healthcare-summerprepseries",
    },
    {
      fromPath: "/cracking-a-ppo-in-pharma-summerprepseries",
      toPath: "/blog/cracking-a-ppo-in-pharma-summerprepseries",
    },
    {
      fromPath: "/creative-brief-writing",
      toPath: "/blog/creative-brief-writing",
    },
    {
      fromPath:
        "/decoding-the-colour-experience-store-by-asian-paints-a-short-marketing-case",
      toPath:
        "/blog/decoding-the-colour-experience-store-by-asian-paints-a-short-marketing-case",
    },
    {
      fromPath: "/did-you-evaluate-the-real-compensation-of-your-job-offer",
      toPath: "/blog/did-you-evaluate-the-real-compensation-of-your-job-offer",
    },
    {
      fromPath: "/group-discussions-topics",
      toPath: "/blog/group-discussions-topics",
    },
    {
      fromPath: "/how-brand-essence-can-help-build-a-competitive-advantage",
      toPath: "/blog/how-brand-essence-can-help-build-a-competitive-advantage",
    },
    {
      fromPath: "/how-to-ace-competitions-while-having-fun",
      toPath: "/blog/how-to-ace-competitions-while-having-fun",
    },
    {
      fromPath: "/how-to-be-the-best-summer-intern-that-you-can-be",
      toPath: "/blog/how-to-be-the-best-summer-intern-that-you-can-be",
    },
    {
      fromPath: "/how-to-come-up-with-an-innovation",
      toPath: "/blog/how-to-come-up-with-an-innovation",
    },
    {
      fromPath: "/how-to-crack-the-ceo-factory",
      toPath: "/blog/how-to-crack-the-ceo-factory",
    },
    {
      fromPath:
        "/how-to-create-content-that-goes-viral-in-a-shoestring-budget-with-aashish-chopra",
      toPath:
        "/blog/how-to-create-content-that-goes-viral-in-a-shoestring-budget-with-aashish-chopra",
    },
    {
      fromPath:
        "/how-to-switch-to-marketing-and-sales-after-your-summer-internship",
      toPath:
        "/blog/how-to-switch-to-marketing-and-sales-after-your-summer-internship",
    },
    {
      fromPath: "/kankhajura-tesan",
      toPath: "/blog/kankhajura-tesan",
    },
    {
      fromPath: "/marico-the-giant-startup",
      toPath: "/blog/marico-the-giant-startup",
    },
    {
      fromPath: "/marketing-alliances",
      toPath: "/blog/marketing-alliances",
    },
    {
      fromPath: "/personal-storytelling-to-crack-interviews",
      toPath: "/blog/personal-storytelling-to-crack-interviews",
    },
    {
      fromPath: "/png-interview-preparation-sales-marketing",
      toPath: "/blog/png-interview-preparation-sales-marketing",
    },
    {
      fromPath: "/resources-for-placement-prep-a-kraftshala-repository",
      toPath: "/blog/resources-for-placement-prep-a-kraftshala-repository",
    },
    {
      fromPath: "/studio-x-maricos-first-digital-brand",
      toPath: "/blog/studio-x-maricos-first-digital-brand",
    },
    {
      fromPath: "/the-amazon-flywheel",
      toPath: "/blog/the-amazon-flywheel",
    },
    {
      fromPath: "/the-rise-and-rise-of-ppos",
      toPath: "/blog/the-rise-and-rise-of-ppos",
    },
    {
      fromPath:
        "/the-ultimate-marketing-analysis-of-delhi-elections-campaigns-2020",
      toPath:
        "/blog/the-ultimate-marketing-analysis-of-delhi-elections-campaigns-2020",
    },
    {
      fromPath: "/the-unbox-zindagi-deduction",
      toPath: "/blog/the-unbox-zindagi-deduction",
    },
    {
      fromPath: "/what-does-an-area-sales-manager-do",
      toPath: "/blog/what-does-an-area-sales-manager-do",
    },
    {
      fromPath: "/what-is-it-like-to-work-on-the-best-brand-in-the-world",
      toPath: "/blog/what-is-it-like-to-work-on-the-best-brand-in-the-world",
    },
    {
      fromPath: "/why-is-defining-a-target-audience-critical-for-a-brand",
      toPath: "/blog/why-is-defining-a-target-audience-critical-for-a-brand",
    },
    {
      fromPath: "/sitemap.xml",
      toPath: "/sitemap/sitemap-0.xml",
    },
    {
      fromPath: "/sitemap-0.xml",
      toPath: "/sitemap/sitemap-0.xml",
    },
  ];
  var isUrl = uri.split(".").pop().includes("/");

  if (!isUrl) {
    return request;
  }

  var newUrl = "https://www.kraftshala.com";

  // Add path
  if (uri) {
    newUrl = newUrl + uri;
    redirection.forEach((redirect) => {
      if (
        "https://www.kraftshala.com" + redirect.fromPath === newUrl ||
        "https://www.kraftshala.com" + redirect.fromPath + "/" === newUrl
      ) {
        newUrl = "https://www.kraftshala.com" + redirect.toPath;
      }
    });
  }
  if (newUrl.endsWith("/")) {
    return request;
  } else {
    // Add trailing slash
    newUrl = newUrl + "/";

    // Add query string
    if (querystring && Object.keys(querystring).length > 0) {
      newUrl +=
        "?" +
        Object.keys(querystring)
          .reduce(function (a, k) {
            a.push(k + "=" + encodeURIComponent(querystring[k]["value"]));
            return a;
          }, [])
          .join("&");
    }
    var response = {
      statusCode: 301,
      statusDescription: "Found",
      headers: {
        location: { value: newUrl },
      },
    };
    return response;
  }
}
