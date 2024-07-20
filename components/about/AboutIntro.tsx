import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutIntro.module.css';

const AboutIntro: NextPage = () => {
  return (
    <div className={cn(styles['about-intro'], 'wf-section')}>
      <div className={styles['about-intro__wrapper']}>
        <p className={styles['about-intro__paragraph"']}>
          Every day, ideas are born. Ideas to start a business. Change a
          community. Transform the world. But ideas alone are not enough.
          <br />‍<br />
          Codini began with a belief that when people come together around an
          idea, great things can happen. Great is more than the sum of its
          parts: just like a great team is more than a collection of individuals
          and great presentations are more than a collection of slides.
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;
