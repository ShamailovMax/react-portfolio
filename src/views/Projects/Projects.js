import React from "react";
import { Slider } from "../../components/Slider/Slider";
import { projects } from "./Projects_data";

import style from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div id="projects">
      <h1 style={{ textAlign: "center" }}>Мои проекты</h1>
      <br />
      {projects.map((item) => (
        <Slider
          key={item.id}
          imageURL={item.imageURL}
          title={item.title}
          subtitle={item.subtitle}
          projectURL={item.projectURL}
          flipped={item.flipped}
        />
      ))}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h4>
          Полный список проектов доступен на моем{" "}
          <a
            className={style.githref}
            href="https://github.com/ShamailovMax?tab=repositories"
          >
            GitHub
          </a>
        </h4>
      </div>
      <br />
    </div>
  );
};
