import type { NextPage } from 'next';
import cn from 'classnames';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const Testimonials: NextPage = () => {
  return (
    <div className={cn(styles.testimonials, 'wf-section')}>
      <h2 className={styles.testimonials__heading}>What our clients think</h2>
      <div className={styles.testimonials__wrapper}>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
            Working with Codini was a game-changer for our online presence. Their expertise resulted in a website that surpassed our expectations in the medical industry.
            </div>
            <div className={styles['testimonials__card-info']}>
              <Image
                src="/images/first-testimonial.jpeg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                width="120"
                height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Karim Bouattour
              </h4>
              <div className={styles['testimonials__card-role']}>
                <a href="https://www.sotcot.tn/" target="_blank" className={styles['role_links']}>
                Head of SOTCOT, Tunisia
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
            Codini exceeded our expectations with their expertise, and seamless communication, delivering a top-notch mobile app on App Store and Play Store.
            </div>
            <div className={styles['testimonials__card-info']}>
              <Image
                src="/images/second-testimonial.jpeg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                width="120"
                height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Roy Arwas
              </h4>
              <div className={styles['testimonials__card-role']}>
                <a href="https://www.creativexent.com/home" target="_blank" className={styles['role_links']}>
                  CEO at CXE, Miami
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
            Thanks to Codini, our web app has been transformed into a reliable platform. Their expertise resolved our issues swiftly, ensuring smooth functionality and boosting performance.
            </div>
            <div className={styles['testimonials__card-info']}>
              <Image
                src="/images/testimonial-3-avatar.jpeg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                width="120"
                height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Benedict Rees
              </h4>
              <div className={styles['testimonials__card-role']}>
                <a className={styles['role_links']} href="https://compareprivateplanes.com" target="_blank">
                  CEO at CPP, London
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
