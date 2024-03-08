import type { NextPage } from 'next';
import cn from 'classnames';
import Image from 'next/image';
import styles from './Hero.module.css';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

const Hero: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref);

  useEffect(() => {
    animateFromTo(styles.hero__ui, {
      from: { opacity: 0 },
      to: { opacity: 1 },
      start: 0,
      end: 17,
    });
    animateFromTo(styles.hero__hand, {
      // from: { y: 0 },
      // to: { y: -1150 },
      from: { opacity: 1 },
      to: { opacity: 0 },
      start: 0,
      end: 10,
    });
    animateFromTo(styles['hero__transform-target'], {
      from: { x: '0.054%', y: 0, scale: 1 },
      to: { x: '2%', y: 60, scale: 0.519937 },
      start: 0,
      end: 37,
    });
  }, );

  return (
    <div className={cn(styles.hero)}>
      <div className={styles.hero__container}>
        <div ref={ref} className={styles['hero__container-inner']}>
          <div className={styles['hero__scroll-container']}>
            <div className={styles['hero__transform-target']}>
              <h5 className={styles.hero__intro}>
                Codini helps businesses create
                <br />
                websites, mobile apps, and everything in between.
              </h5>
              <div className={styles.hero__headline}>
                <h1 className={styles['hero__headline-text']}>
                 You think, We create
                </h1>
                <Image
                  src="/images/hero-ui_2808w.jpg"
                  loading="eager"
                  alt=""
                  className={styles.hero__ui}
                  width="2808"
                  height="1701"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
