/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const env = require("./config/environment");
//for 0.9 priority
const priorityPages = ["/marketing-launchpad/"];

const excludes = [
  "/kraftshala-marketing-courses/",
  "/work-with-us-apply-now/[id]/",
  "/work-with-us/[id]/",
];
module.exports = {
  assetPrefix: env("assetPrefix"),
  /* Your site config here */

  siteMetadata: {
    siteUrl: `https://www.kraftshala.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.kraftshala.com",
        sitemap: "https://www.kraftshala.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
      
            allSitePage { 
                nodes {
                  path
                }             
            }
          }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl;
        },
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.filter((page) => {
            if (excludes.indexOf(page.path) === -1) {
              return { ...page };
            }
          });
        },

        serialize: ({ path }) => {
          if (path === "/") {
            return {
              url: path,
              changefreq: `daily`,
              priority: 1,
            };
          } else if (priorityPages.indexOf(path) > -1) {
            return {
              url: path,
              changefreq: `daily`,
              priority: 0.9,
            };
          } else {
            return {
              url: path,
              changefreq: `daily`,
              priority: 0.5,
            };
          }
        },
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "254822124949497",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-102655297-1", // Google Analytics / GA
        ],
      },
    },

    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
        
      },
      
    },
    `gatsby-plugin-netlify-cms` 
  ],
};
