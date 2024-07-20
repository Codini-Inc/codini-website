import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutParagraph1.module.css';

const AboutParagraph1: NextPage = () => {
  return (
    <div className={styles['about__paragraph1-wrapper']}>
      <p className={styles.about__paragraph1}>
        Codini began with a belief that when people come together around an
        idea, great things can happen. Great is more than the sum of its parts:
        just like a great team is more than a collection of individuals and
        great applications are more than a collection of files.
      </p>
    </div>
  );
};

export default AboutParagraph1;
