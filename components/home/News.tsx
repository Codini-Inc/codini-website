import type { NextPage } from 'next';
import cn from "classnames";
import styles from "./News.module.css";
import CardButtonarrow from "../../assets/icons/card-buttonarrow.svg";
import { useEffect, useRef } from "react";
import useAnimation from "../../hooks/useAnimation";
import Link from 'next/link';

const News: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(ref, true);

  useEffect(() => {
    animateTo(styles.news__wrapper + "> *", {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });
  }, );

  return (
    <div ref={ref} className={cn(styles.news, "wf-section")}>
      <div className={styles.news__wrapper}>
        <div className={styles.news__card}>
          <div className={styles["news__card-content"]}>
            <Link
              href="#"
              className={cn(styles["news__card-linkh"], "w-inline-block")}
            >
                <h4  className={cn(
                styles["news__card-paragraph--white"],
              )}>
              An average website loads in 2.5 seconds
              </h4>
              <h3 className={styles["news__card-heading"]}>
              We do it in 1.5 seconds.
              </h3>
            </Link>
          </div>
          
          <h5 className={cn(styles["main-color-paragraph"])}>Wanna see it yourself?</h5>
          <Link
            href="https://pagespeed.web.dev/analysis/https-www-codini-tn/jld5mwvl5e?form_factor=desktop" target="_blank"
            className={cn(styles["news__card-button"], "w-inline-block")}
          >
            <div className={styles["news__card-buttontext"]}>Speed test</div>
            <div className={cn(styles["news__card-buttonarrow"], "w-embed")}>
              <CardButtonarrow />
            </div>
          </Link>
        </div>
        <div className={cn(styles.news__card, styles["news__card--purple"])}>
          <div className={styles["news__card-content"]}>
              <h4  className={cn(
                styles["news__card-paragraph"],
                styles["news__card-paragraph--white"],
              )}>
              We created websites for 
              </h4>
              <h3     className={cn(
                styles["news__card-heading"],
                styles["news__card-heading--white"],
              )}>
              Hospitals, Universities, Entrepreneurs and Creatives.
              </h3>
          </div>
          <h5 className={cn(styles["white-paragraph"],)}>Interested already?</h5>
          <Link
            href="/contact"
            className={cn(styles["news__card-button"], "w-inline-block")}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
