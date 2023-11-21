import React from 'react';
import css from './Hero.module.css';
import image1 from '../../images/image1.jpg';

const Hero = () => {
  return (
    <section
      className={css.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(47, 48, 58, 0.4),
            rgba(47, 48, 58, 0.4)),
        url(${image1})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className={css.hero__title}>Ефективні рішення для вашого бізнесу</h1>
    </section>
  );
};
export default Hero;
