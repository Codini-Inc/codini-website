import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './Formating.module.css';
import useAnimation from '../../hooks/useAnimation';
import snapLottie from '../../assets/lottie/snap.json';

const Formating: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo, loadAnimation, lottieAnimate } = useAnimation(ref, true);

  useEffect(() => {
    animateTo(styles.formatting__text + '> *', {
      to: { x: 0 },
      duration: 1.2,
      scrub: false,
      toggleActions: 'play none none reset',
      delay: 0,
    });

    const snapAnimation = loadAnimation(snapLottie, styles.formatting__lottie);
    lottieAnimate(snapAnimation, {
      duration: 1,
      scrub: false,
      delay: 1,
    });
  });

  return (
    <div ref={ref} className={cn(styles.formatting, 'wf-section')}>
      <div className={styles.formatting__wrapper}>
        {/* <div className={styles.formatting__lottie}></div> */}
        <Image
          src="/images/dart.gif"
          alt=""
          className={styles['about__culture-photo']}
          width={500}
          height={400}
        />
        {/* 213.186.33.5 */}
        <div className={styles.formatting__text}>
          <h4 className={styles.formatting__heading}>
            An average agency takes 80 days to create an ecommerce website
          </h4>
          <h2
            className={cn(
              styles.formatting__paragraph,
              styles['formatting__paragraph--space'],
            )}
          >
            We do it in 30 days.
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Formating;
