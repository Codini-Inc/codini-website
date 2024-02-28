import type { NextPage } from 'next';

import cn from 'classnames';
import styles from './News.module.css';

import CardButtonarrow from '../../assets/icons/card-buttonarrow.svg';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

const News: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(ref, true);

  useEffect(() => {
    animateTo(styles.news__wrapper + '> *', {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles.news, 'wf-section')}>
      <div className={styles.news__wrapper}>
        <div className={styles.news__card}>
          <div className={styles['news__card-content']}>
            <a
              href="#"
              className={cn(styles['news__card-linkh'], 'w-inline-block')}
            >
              <h3 className={styles['news__card-heading']}>
              An average website loads in 2.5 seconds , we do it in 2.2 seconds.
              </h3>
            </a>
            <img
              src="/images/stealthreveal_header_thumbnail.jpg"
              srcSet="/images/stealthreveal_header_thumbnail-p-500.jpeg 500w, /images/stealthreveal_header_thumbnail-p-800.jpeg 800w, /images/stealthreveal_header_thumbnail-p-1080.jpeg 1080w, /images/stealthreveal_header_thumbnail.jpg 1370w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, (max-width: 991px) 76vw, (max-width: 1279px) 32vw, (max-width: 1919px) 29vw, 544.984375px"
              alt=""
              className={styles['news__card-image']}
              //   width="1370"
              //   height="920"
            />
          </div>
          <a
            href="#"
            className={cn(styles['news__card-button'], 'w-inline-block')}
          >
            <div className={styles['news__card-buttontext']}>Read more</div>
            <div className={cn(styles['news__card-buttonarrow'], 'w-embed')}>
              <CardButtonarrow />
            </div>
          </a>
        </div>
        <div className={cn(styles.news__card, styles['news__card--purple'])}>
          <div className={styles['news__card-content']}>
            <h3
              className={cn(
                styles['news__card-heading'],
                styles['news__card-heading--white'],
              )}
            >
              We created websites for Hospitals, Universities, Entrepreneurs and Creatives.
            </h3>
         
          </div>
          <a
            href="#"
            className={cn(styles['news__card-button'], 'w-inline-block')}
          >
            <div
              className={cn(
                styles['news__card-buttontext'],
                styles['news__card-buttontext--white'],
              )}
            >
              Get yours
            </div>
            <div
              className={cn(
                styles['news__card-buttonarrow'],
                styles['news__card-buttonarrow--white'],
                'w-embed',
              )}
            >
              <CardButtonarrow />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
