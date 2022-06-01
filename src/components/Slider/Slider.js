import React from "react";
import style from "./Slider.module.scss";
import { useInView } from "react-intersection-observer";

export const Slider = ({ imageURL, title, subtitle, flipped, projectURL }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageURL} alt="Travel" className={style.sliderImage} />
          <div className={style.sliderContent}>
            <h1 className={style.sliderTitle}>{title}</h1>
            <p>{subtitle}</p>
            <br />
            <a className={style.sliderButton} href={projectURL}>
              GitHub
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.sliderContent}>
            <h1 className={style.sliderTitle}>{title}</h1>
            <p>{subtitle}</p>
            <br />
            <a className={style.sliderButton} href={projectURL}>
              GitHub
            </a>
          </div>
          <img src={imageURL} alt="Travel" className={style.sliderImage} />
        </>
      );
    }
  };

  return (
    <div
      id="projects"
      className={inView ? `${style.slider} ${style.slider_zoom}` : style.slider}
      ref={ref}
    >
      {renderContent()}
    </div>
  );
};
