import React from "react";
import style from "./Footer.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <a className={style.footerInst} href="https://www.instagram.com/max_24_sh">
        <AiOutlineInstagram size={50} />
      </a>
      <a className={style.footerTelegram} href="https://t.me/maxim_sh">
        <FaTelegramPlane size={50} />
      </a>
      <a className={style.footerGitHub} href="https://github.com/ShamailovMax">
        <FiGithub size={50} />
      </a>
    </div>
  );
};
