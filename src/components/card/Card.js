import React from "react";
import styles from "./Card.module.css";

import cat01Img from "./../../images/categories/cat-01.jpg";
import arrowImg from "./../../images/icons/arrow.svg";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}>
        {" "}
      </a>
      <img className={styles.card__img} src={props.img} alt="category..." />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{props.title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
