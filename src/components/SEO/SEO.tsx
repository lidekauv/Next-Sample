import React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description: string;
  favicon?;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  favicon,
  description,
  canonical,
  css,
  js,
  image,
}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <link
      href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Hanuman:wght@400;700&family=Kantumruy:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href={favicon} />
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="Proper Noun" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" />
    {css && <link rel="stylesheet" href={`${css}`} />}
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
        <meta
          property="og:image"
          content="https://www.propernoun.co/static/images/proper-noun-social.png"
        />
      )}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <script type="text/javascript" src={`${js}`}></script>}
  </Helmet>
);
