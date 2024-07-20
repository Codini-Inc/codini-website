import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutIntro.module.css';

const AboutOutro: NextPage = () => {
  return (
    <div className={cn(styles['about-outro'], 'wf-section')}>
      <div className={styles['about-intro__wrapper']}>
        <p className={styles['about-intro__paragraph"']}>
          At Codini, we pride ourselves on being more than just a team—we are a
          family of passionate innovators and problem-solvers.
        </p>
        <p>
          Our diverse expertise, combined with a collaborative spirit, enables
          us to deliver exceptional results tailored to your unique needs. We
          stay ahead of the curve with the latest technologies and
          methodologies, ensuring that our solutions are not only effective but
        </p>
      </div>
    </div>
  );
};

export default AboutOutro;
