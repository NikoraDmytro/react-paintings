import React from "react";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <ul className={styles.navBar}>
      <li>Каталог</li>
      <li>Доставка</li>
      <li>Оплата</li>
      <li>Контакты</li>
      <li>О галерее</li>
    </ul>
  );
};
