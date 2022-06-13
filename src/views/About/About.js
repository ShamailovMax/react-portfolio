import React from "react";
import style from "./About.module.scss";
import js from "../../assets/Group-1.png";
import py from "../../assets/python-logo_1.png";
import reactpng from "../../assets/Group-2.png";
import { stack } from "./About_data";

export const About = ({ avatarURL }) => {
  return (
    <div id="about" className={style.about}>
      <br />

      <h1>Обо мне</h1>
      <div className={style.aboutBio}>
        <img src={avatarURL} alt="avatar" />
        <p>
          Привет! Меня зовут Максим и я начинающий веб-разработчик. На данный
          момент я оканчиваю 4 курс университета, а также изучаю фронтенд.
        </p>
      </div>
      <div className={style.aboutStack}>
        <h2>Технологии</h2>
        <div className={style.aboutTechnologies}>
          <p>В стек технологий, используемых мною, входят</p>
          <br />
          <br />
          <ul>
            {stack.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>

          <img src={js} alt="js" />
          <img src={reactpng} alt="react" />
          <img src={py} alt="python" />
        </div>
      </div>
    </div>
  );
};
