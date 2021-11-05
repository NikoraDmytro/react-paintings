import React from "react";

import { PaintingCard } from "./components/PaintingCard";

import paintings from "../../paintings.json";

import { Painting } from "../../shared/types/Painting";

import styles from "./Paintings.module.scss";

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <h1 className={styles.title}>Картины эпохи Возрождения</h1>

      <ul className={styles.paintingsList}>
        {paintings.map((painting) => (
          <PaintingCard key={painting.name} painting={painting as Painting} />
        ))}
      </ul>
    </div>
  );
};
