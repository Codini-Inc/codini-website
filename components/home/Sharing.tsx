import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './Sharing.module.css';
import useAnimation from '../../hooks/useAnimation';

const Sharing: NextPage = () => {
  const sharingTextRef = useRef<HTMLDivElement>(null);
  const sharingPlaneWrapperRef = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(sharingTextRef, true);
  const { animateFromTo } = useAnimation(sharingPlaneWrapperRef, true);

  useEffect(() => {
    animateTo(styles.sharing__text + '> *', {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });

    animateFromTo(styles.sharing__plane, {
      from: { x: 0, y: 100 },
      to: { x: 126, y: -74 },
      start: 0,
      end: 100,
    });
    animateFromTo(styles['sharing__plane-shadow'], {
      from: { x: 50 },
      to: { x: 54 },
      start: 0,
      end: 59,
    });
  }, );

  return (
    <div className={cn(styles.sharing, 'wf-section')}>
      <div ref={sharingTextRef} className={styles.sharing__text}>
        <h2 className={styles['sharing__text-heading']}>
          It all starts with an idea
        </h2>
        <p className={styles['sharing__text-paragraph']}>
          Most of our clients started with an idea, that we've built models for, developed its code, and made sure to keep it maintained.
        </p>
      </div>
      <div className={styles.sharing__wrapper}>
        <div
          ref={sharingPlaneWrapperRef}
          className={styles['sharing__plane-wrapper']}
        >
          <img
            src="/images/plane_800w.png"
            alt=""
            className={styles.sharing__plane}
            // width="800"
            // height="601"
          />
  
        </div>
     
     
      </div>
    </div>
  );
};

export default Sharing;
