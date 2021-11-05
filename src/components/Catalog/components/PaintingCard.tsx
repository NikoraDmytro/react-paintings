import React from "react";

import { Painting } from "../../../shared/types/Painting";

import { parsePrice } from "../../../utils/parsePrice";

import styles from "./PaintingCard.module.scss";

interface paintingCardProps {
  painting: Painting;
}

export const PaintingCard = ({ painting }: paintingCardProps) => {
  const { name, img, state, price, discount } = painting;

  const isSold = state === "sold";

  let currentPrice = "Продана на аукционе";
  let oldPrice: string | null = null;

  if (!isSold) {
    currentPrice = parsePrice(discount || price);
    oldPrice = discount ? parsePrice(price) : null;
  }

  return (
    <li className={styles.paintingCard}>
      <img className={styles.paintingImage} src={img} alt="Crash" />

      <div className={styles.paintingInfo}>
        <p className={styles.paintingName}>{name}</p>

        <div className={styles.buyPaintingSection}>
          <div>
            <s className={styles.discount}>{oldPrice}</s>
            <strong>{currentPrice}</strong>
          </div>

          {!isSold && <button>Купить</button>}
        </div>
      </div>
    </li>
  );
};
