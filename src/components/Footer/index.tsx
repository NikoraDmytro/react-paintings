import React from "react";

import { NavBar } from "../NavBar/index";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <img src="img/museumLogo2.svg" alt="Logo" />
      <NavBar />

      <div className={styles.contacts}>
        <div>
          <img className={styles.icon} src="img/phoneIcon.svg" alt="address" />
          <span>+380 (99) 999-99-99</span>
        </div>

        <div className={styles.address}>
          <img className={styles.icon} src="img/addressIcon.svg" alt="phone" />
          <span>г. Харьков, ул. Академика Павлова., 24</span>
        </div>
      </div>
    </footer>
  );
};
