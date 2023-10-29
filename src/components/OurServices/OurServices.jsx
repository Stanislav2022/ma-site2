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
      <div>
        <Imgservices />
      </div>
      <div className={css.title__wrapper}>
        <h2>Раді допомогти</h2>
        <FcMinus size="2em" />
      </div>
      <ul className={css.desc__list}>
        <li className={css.desc__item}>
          <FcOvertime size="3em" />
          <p>Здати звітність</p>
        </li>
        <li className={css.desc__item}>
          <FcCalculator size="3em" />
          <p>Розрахувати податки</p>
        </li>
        <li className={css.desc__item}>
          <FcConferenceCall size="3em" />
          <p>Оформити працівників</p>
        </li>
        <li className={css.desc__item}>
          <FcPlus size="3em" />
          <p>Розрахувати лікарняні</p>
        </li>
        <li className={css.desc__item}>
          <FcBullish size="3em" />
          <p>Оптимізувати податки</p>
        </li>
        <li className={css.desc__item}>
          <FcShop size="3em" />
          <p>Зареєструвати та закрити ФОП</p>
        </li>
        <li className={css.desc__item}>
          <FcPrint size="3em" />
          <p>Зареєструвати касовий апарат</p>
        </li>
        <li className={css.desc__item}>
          <FcInspection size="3em" />
          <p>Перевірити та виправити помилки</p>
        </li>
      </ul>
    </section>
  );
};

export default OurServices;
