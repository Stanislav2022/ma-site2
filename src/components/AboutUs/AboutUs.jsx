import React from "react";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={css.section}>
      <ul className={css.desc__list}>
        <li className={css.desc__item}>
          <h2 className={css.title}>Наша мета</h2>
          <p>
            Cтати Вашим надійним бізнес-партнером, надавати послуги з ведення
            бухгалтерського обліку та підготовці звітності відповідно до вимог
            національного та міжнародного стандарту.
          </p>
        </li>
        <li className={css.desc__item}>
          <h2 className={css.title}>Ви отримаєте</h2>
          <p>
            Cтовідсоткову упевненість в тому, що ведення бухгалтерського обліку
            повною мірою відповідатиме законодавству.
          </p>
        </li>
        <li className={css.desc__item}>
          <h2 className={css.title}>Наші переваги</h2>
          Ми завжди в курсі останніх змін в законодавстві, та своєчасно
          інформуємо клієнта про нововведення, що економить Ваш час і Ваші
          гроші.
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
