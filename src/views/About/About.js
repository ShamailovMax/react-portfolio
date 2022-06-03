import React from "react";
import style from "./About.module.scss";

export const About = ({ avatarURL }) => {
  return (
    <div id="about" className={style.about}>
      <br />

      <h1>Обо мне</h1>
      <div className={style.aboutBio}>
        <img src={avatarURL} />
        <p>
          Привет! Меня зовут Максим и я начинающий веб-разработчик. На данный
          момент я оканчиваю 4 курс университета и параллельно изучаю фронтенд.
        </p>
      </div>
    </div>
  );
};
