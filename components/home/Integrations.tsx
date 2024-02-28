import type { NextPage } from 'next';
import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './Integrations.module.css';
import useAnimation from '../../hooks/useAnimation';
import integrationsLottie from '../../assets/lottie/integrations.json';

const Integrations: NextPage = () => {
  const integrationsTextRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(integrationsTextRef, true);
  const { loadAnimation, lottieAnimate } = useAnimation(lottieRef, true);

  useEffect(() => {
    animateTo(styles.integrations__text + '> *', {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });

    const integrationsAnimation = loadAnimation(integrationsLottie);
    lottieAnimate(integrationsAnimation, {
      duration: 3.8,
      loop: true,
    });
  }, []);

  return (
    <div className={cn(styles.integrations, 'wf-section')}>
      <div className={styles.integrations__wrapper}>
        <div ref={integrationsTextRef} className={styles.integrations__text}>
          <h2 className={styles['integrations__text-heading']}>
            Scalable solutions
          </h2>
          <p className={styles['integrations__text-paragraph']}>
            An average website loads in <b>2.5 seconds</b> , we do it in <b>2.2 seconds</b>.
          </p>
          <br></br>
          <p className={styles['integrations__text-paragraph']}>
            An average website loads in 2.6 seconds, we do it in 2.2 seconds.
          </p>
        </div>
        <div ref={lottieRef} className={styles.integrations__lottie}></div>
      </div>
    </div>
  );
};

export default Integrations;
