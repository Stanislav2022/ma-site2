import React from "react";
import { GiGears } from "react-icons/gi";
import { FaViber, FaTelegram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import css from "./Futer.module.css";

const Futer = () => {
  return (
    <div>
      <footer className={css.footer}>
        <div className={css.footer__container}>
          <div className={css.foter__section}>
            <h3 className={css.foter__title}> <GiGears size="20px" /> БІЗНЕС ЗВІТ</h3>
            <address className={css.footer__address}>
              <ul className={css.footer__list}>
                <li className={css.footer__item}>
                  <a
                    href="https://goo.gl/maps/EFtCu6V2eu7CJHa77"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Київська обл., м.Бровари, вул.Сергія Москаленка, буд.16, оф.
                    303
                  </a>
                </li>
                <li className={css.footer__item}>
                  <a href="mailto:buhsn@ukr.net">buhsn@ukr.net</a>
                </li>
                <li className={css.footer__item}>
                  <a href="tell:+380980091004">+38 098 009 10 04</a>
                </li>
                <li className={css.footer__item}>
                  <a href="tell:+380678698440">+38 067 869 84 40</a>
                </li>
              </ul>
            </address>
          </div>
          <div className={css.foter__section}>
            <h3 className={css.foter__title}>НАПИСАТИ НАМ</h3>
            <ul className={css.social__list}>
              <li className={css.social__item}>
                <a href="/">
                  <FaViber/>
                </a>
              </li>
              <li className={css.social__item}>
                <a
                  
                  href="/"
                >
                  <FaTelegram/>
                </a>
              </li>
              <li className={css.social__item}>
                <a
                  
                  href="/"
                >
                  <FaFacebook/>
                </a>
              </li>
              <li className={css.social__item}>
                <a

                  href="/"
                >
                  <FaWhatsapp/>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.foter__subscription}>
            <h3 className={css.foter__title}>Графік роботи</h3>
            <p>Пн-Пт 9.00-18.00, Сб-Нд - Вихідні </p>
          </div>
        </div>
        </footer>
    </div>
  );
};
export default Futer;
