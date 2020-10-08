import { Link } from "gatsby";
import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => (
  <header className={styles.root}>
    <div className="ui-container">
      <h1 className={styles.siteTitle}>
        <Link to="/">Ginpen.com</Link>
      </h1>
    </div>
  </header>
);
