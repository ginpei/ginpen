/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import "./layout.scss";

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <TopLine />
      <div className="ui-container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Header: React.FC = () => (
  <header className="layout-Header">
    <div className="ui-container">
      <h1 className="layout-Header-siteTitle">
        <Link to="/">Ginpen.com</Link>
      </h1>
    </div>
  </header>
);

const TopLine: React.FC = () => <div className="layout-TopLine" />;

const Footer: React.FC = () => (
  <footer className="layout-Footer">
    <div className="ui-container">Ginpen.com by Takanashi Ginpei</div>
  </footer>
);
