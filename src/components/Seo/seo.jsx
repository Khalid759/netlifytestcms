import React from "react";
import { Helmet } from "react-helmet";

function SEO(props) {
  const { title, description, url } = props;

  // console.log(props);

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta
        name="facebook-domain-verification"
        content="61fwhgdwdun5wk0mcxhhsi8vl0b6xr"
      />
      <meta property="og:url" content={url} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {props.noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          props.image
            ? props.image
            : "https://kfwebassets.s3.ap-south-1.amazonaws.com/Kraftshala-Social.png"
        }
      />
      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        type="image/png"
        href="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/57x57.png"
      />

      <link
        rel="apple-touch-icon"
        href="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/57x57.png"
      />

      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/72x72.png"
      />

      {props.homeSnipptJSON && (
        <script type="application/ld+json">{props.homeSnipptJSON}</script>
      )}

      {props.courseSnipptJSON && (
        <script type="application/ld+json">{props.courseSnipptJSON}</script>
      )}

      {props.faqSnipptJSON && (
        <script type="application/ld+json">{props.faqSnipptJSON}</script>
      )}

      {props.videoSnipptJSON && (
        <script type="application/ld+json">{props.videoSnipptJSON}</script>
      )}

      {props.eventSnipptJSON && (
        <script type="application/ld+json">{props.eventSnipptJSON}</script>
      )}
    </Helmet>
  );
}

export default SEO;
