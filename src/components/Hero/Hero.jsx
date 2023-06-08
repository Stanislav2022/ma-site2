import React from "react";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.hero__title}>Ефективні рішення для вашого бізнесу</h1>
    </section>
  );
};
export default Hero;
