import React from "react";
import { GiGears } from "react-icons/gi";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <nav className={css.header__navigation}>
          <a className={css.header__logo} href="/">
            <GiGears size="25px" /> БІЗНЕС ЗВІТ
          </a>
        </nav>
        <ul className={css.header__contactList}>
          <li className={css.header__contactItem}>
            <a href="mailto:buhsn@ukr.net">buhsn@ukr.net</a>
          </li>
          <li className={css.header__contactItem}>
            <a href="tel:+380980091004">+38 098-009-10-04</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
