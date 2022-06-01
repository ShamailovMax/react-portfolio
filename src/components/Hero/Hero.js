import React from "react";
import style from "./Hero.module.scss";

export const Hero = ({ imageURL }) => {
  return (
    <div className={style.hero}>
      <img src={imageURL} alt="Travel" className={style.heroImage} />
      <h1 className={style.heroTitle}>Сайт портфолио</h1>
    </div>
  );
};
