import React from 'react';
import {
  FaViber,
  FaTelegram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaEnvelope,
} from 'react-icons/fa';
import css from './Futer.module.css';

const Futer = () => {
  return (
    <div className={css.section}>
      <footer className={css.footer}>
        <div className={css.footer__container}>
          <div className={css.footer__title}>
            <h2>Зв’язатися з нами</h2>
          </div>
          <form className={css.main__form}>
            <div className={css.form__row}>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Ім’я"
                  type="type"
                  name="Full Name"
                />
              </div>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Номер телефону"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className={css.full_name}>
                <ul className={css.social__list}>
                  <li className={css.social__item}>
                    <a href="/">
                      <FaViber />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a href="/">
                      <FaTelegram />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a href="/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a href="/">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.form__row}>
              <div className={css.form__message}>
                <textarea
                  className={css.contactus1}
                  placeholder="Повідомлення"
                ></textarea>
              </div>
              <div className={css.btnfeedback}>
                <button className={css.btnfeedback__send}>Надіслати</button>
              </div>
            </div>
          </form>
          <div className={css.footer__info}>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}> БІЗНЕС ЗВІТ</h3>
              <address className={css.footer__address}>
                <ul className={css.contacts__list}>
                  <li className={css.contacts__item}>
                    <a
                      className={css.contacts__link}
                      href="https://goo.gl/maps/EFtCu6V2eu7CJHa77"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={css.contacts__icon}>
                        <FaMapMarkerAlt size="30px" />
                      </span>
                      Київська обл., м.Бровари, вул.Сергія Москаленка, буд.16,
                      оф. 303
                    </a>
                  </li>
                  <li className={css.contacts__item}>
                    <a className={css.contacts__link} href="tell:+380980091004">
                      <span className={css.contacts__icon}>
                        <FaPhoneVolume size="30px" />
                      </span>
                      +38 098 009 10 04
                    </a>
                  </li>
                  <li className={css.contacts__item}>
                    <a
                      className={css.contacts__link}
                      href="mailto:buhsn@ukr.net"
                    >
                      <span className={css.contacts__icon}>
                        <FaEnvelope size="30px" />
                      </span>{' '}
                      buhsn@ukr.net
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}> Корисні Посилання</h3>
              <ul className={css.contacts__list}>
                <li className={css.useful__item}>
                  <a
                    className={css.useful__link}
                    l
                    href="https://cabinet.tax.gov.ua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Кабінет ДФС
                  </a>
                </li>
                <li className={css.useful__item}>
                  {' '}
                  <a
                    className={css.useful__link}
                    l
                    href="https://portal.pfu.gov.ua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Кабінет ПФУ
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a
                    className={css.useful__link}
                    l
                    href="https://usr.minjust.gov.ua/content/free-search"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Безкоштовний пошук у ЄДР
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a
                    className={css.useful__link}
                    l
                    href="https://webrro.tax.gov.ua/account/login?ReturnUrl=%2F"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Програмний ПРРО від ДФС
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}> Розділи</h3>
              <ul className={css.contacts__list}>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Про нас
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Раді допомогти
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Розрахунок ціни
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Наші контакти
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}>Графік роботи</h3>
              <ul className={css.contacts__list}>
                <li className={css.schedule__item}>Понеділок - Пятниця</li>
                <li className={css.schedule__item}>9.00-18.00</li>
                <li className={css.schedule__item}>Субота - Неділя</li>
                <li className={css.schedule__item}>Вихідні</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Futer;
