import React from 'react';
import css from './OurServices.module.css';
import imgservices from '../../images/untitled5084AF.webp';
import {
  FcMinus,
  FcCalculator,
  FcConferenceCall,
  FcPlus,
  FcOvertime,
  FcBullish,
  FcShop,
  FcPrint,
  FcInspection,
} from 'react-icons/fc';

const OurServices = () => {
  return (
    <section className={css.section}>
      <div className={css.title__wrapper}>
        <h2 className={css.title__section}>Раді допомогти</h2>
        <FcMinus size="2em" />
      </div>
      <div className={css.ourservices__section}>
        <div className={css.img__container}>
          <img
            className={css.ourservices__img}
            src={imgservices}
            alt="Our Service"
            width="700px"
          />
        </div>
        <div>
          <ul className={css.desc__list}>
            <li className={css.desc__item}>
              <FcOvertime size="3em" />
              <p className={css.desc__text}>Здати звітність</p>
            </li>
            <li className={css.desc__item}>
              <FcCalculator size="3em" />
              <p className={css.desc__text}>Розрахувати податки</p>
            </li>
            <li className={css.desc__item}>
              <FcConferenceCall size="3em" />
              <p className={css.desc__text}>Оформити працівників</p>
            </li>
            <li className={css.desc__item}>
              <FcPlus size="3em" />
              <p className={css.desc__text}>Розрахувати лікарняні</p>
            </li>
            <li className={css.desc__item}>
              <FcBullish size="3em" />
              <p className={css.desc__text}>Оптимізувати податки</p>
            </li>
            <li className={css.desc__item}>
              <FcShop size="3em" />
              <p className={css.desc__text}>Зареєструвати та закрити ФОП</p>
            </li>
            <li className={css.desc__item}>
              <FcPrint size="3em" />
              <p className={css.desc__text}>Зареєструвати касовий апарат</p>
            </li>
            <li className={css.desc__item}>
              <FcInspection size="3em" />
              <p className={css.desc__text}>Перевірити та виправити помилки</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
