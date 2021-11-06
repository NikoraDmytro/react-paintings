import React, { useState } from "react";

import { NavBar } from "../NavBar/index";

import styles from "./Header.module.scss";

export const Header = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <img src="./img/museumLogo1.svg" alt="Logo" />
      <NavBar />
      <div className={styles.searchBar}>
        <input
          className={styles.searchField}
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Поиск по названию картины"
        />

        <button>Найти</button>
      </div>
    </header>
  );
};
