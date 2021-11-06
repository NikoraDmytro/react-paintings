import React, { useState } from "react";

import { Painting } from "../../../shared/types/Painting";

import { parsePrice } from "../../../utils/parsePrice";

import styles from "./PaintingCard.module.scss";

export const PaintingCard = ({ painting }: { painting: Painting }) => {
  const [loading, setLoading] = useState(false);
  const { name, img, state, price, discount } = painting;

  const handleClick = async () => {
    try {
      setLoading(true);
      await fetch("https://reqres.in/api/users?delay=3");
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const isSold = state === "sold";

  const oldPrice = !isSold && discount ? parsePrice(price) : null;
  const currentPrice = isSold
    ? "Продана на аукционе"
    : parsePrice(discount || price);

  let button = <button onClick={handleClick}>Купить</button>;

  if (loading) {
    button = <button disabled>...</button>;
  }

  return (
    <li className={styles.paintingCard + (isSold ? " " + styles.sold : "")}>
      <img className={styles.paintingImage} src={img} alt="Crash" />

      <div className={styles.paintingInfo}>
        <p className={styles.paintingName}>{name}</p>

        <div className={styles.buyPaintingSection}>
          <div>
            <s className={styles.discount}>{oldPrice}</s>
            <strong>{currentPrice}</strong>
          </div>

          {!isSold && button}
        </div>
      </div>
    </li>
  );
};
