import React from "react";
import css from "./AboutUs.module.css";
import { FcDataEncryption, FcDataProtection, FcAcceptDatabase, FcMinus } from "react-icons/fc";

const AboutUs = () => {
  return (
    <section className={css.section}>
      <div className={css.title__wrapper}>
        <h2>Про нас</h2>
        <FcMinus size="2em"/>
      </div>
      <div className={css.text__wrapper}> 
      <p className={css.text}>
        Компанія  БІЗНЕС ЗВІТ займається наданням послуг у сфері бухгалтерського та податкового обліку. Консультвання з питань правильності ведення документообігу. Складання та подання звітності до контролюючих органів. Перевірка поданих звітів та допомога з виправленням помилок, відновлення бухгалтерського обліку. Ми постійно накопичуємо досвід ведення обліку в різних сферах діяльності, що сприяє підвищенню кваліфікації наших фахівців.
</p></div>
      <ul className={css.desc__list}>
        <li className={css.desc__item} >
          <FcDataEncryption size="5em"/>
          <h3 className={css.title}>Наша мета</h3>
          <p className={css.text}>
            Cтати Вашим надійним бізнес-партнером, надавати послуги з ведення бухгалтерського обліку та підготовці звітності відповідно до вимог національного та міжнародного стандарту.
          </p>
        </li>
        <li className={css.desc__item}>
          <FcDataProtection size="5em"/>
          <h3 className={css.title}>Ви отримаєте</h3>
          <p className={css.text}>
            Cтовідсоткову упевненість в тому, що ведення бухгалтерського обліку повною мірою відповідатиме законодавству.
          </p>
        </li>
        <li className={css.desc__item}>
          <FcAcceptDatabase size="5em"/>
          <h3 className={css.title}>Наші переваги</h3>
          <p className={css.text}>
          Ми завжди в курсі останніх змін в законодавстві, та своєчасно інформуємо клієнта про нововведення, що економить Ваш час і Ваші гроші.</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
