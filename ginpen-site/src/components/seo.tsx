/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO: React.FC<{
  description?: string;
  lang?: string;
  meta?: HelmetProps["meta"];
  title?: string;
}> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const metaValue: HelmetProps["meta"] = useMemo(() => {
    const generalMeta: HelmetProps["meta"] = [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata?.author || ``,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ];

    if (meta) {
      return [...generalMeta, ...meta];
    }

    return generalMeta;
  }, []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaValue}
    />
  );
};

export default SEO;
