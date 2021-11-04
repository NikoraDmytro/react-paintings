import React from "react";

import { Painting } from "../../../shared/types/Painting";

import styles from "./PaintingCard.module.scss";

interface paintingCardProps {
  painting: Painting;
}

export const PaintingCard = ({ painting }: paintingCardProps) => {
  return (
    <li className={styles.paintingCard}>
      <img src={painting.img} alt="Crash" />
      <p>{painting.name}</p>
    </li>
  );
};
