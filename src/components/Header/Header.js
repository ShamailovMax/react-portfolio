import React, { useState } from "react";
import style from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = ({ headerLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className={style.header}>
      <span className={style.headerLogo}>Maxim Shamailov</span>

      {menuClicked ? (
        <FiMenu
          size={25}
          className={style.headerMenu}
          onClick={toggleMenuClick}
        />
      ) : (
        <FiX size={25} className={style.headerMenu} onClick={toggleMenuClick} />
      )}

      <ul
        className={
          menuClicked
            ? style.headerList
            : `${style.headerList} ${style.headerList_active}`
        }
      >
        {headerLinks.map((item) => (
          <li className={style.headerListItem} key={item.title}>
            <a className={style.headerListItemLink} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
