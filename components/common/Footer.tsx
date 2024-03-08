import type { NextPage } from 'next';
import cn from 'classnames';
import styles from './Footer.module.css';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import TikTok from '../../assets/icons/tiktok.svg';
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <div className={cn(styles.footer, 'wf-section')}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__credits}>
          
            <a
            href="/"
              aria-current="page"
            >
              <div className={cn(styles['footer__logo-image1'], 'w-embed')}>
                <Image       
                  src="/images/logo-description-dark.png"
                  alt="Codini main dark logo"
                  width={200}
                  height={50}
                />
              </div>
            </a>
          <div className={styles.footer__copyright}>
            © Copyright 2024 Codini.
          </div>
          <div >
            <a href="mailto: contact@codini.tn" className={styles.footer__link} aria-label="Mail">
              contact@codini.tn
            </a>
          </div>
        </div>
        <div className={styles['footer__links-wrapper']}>
          <h6 className={styles.footer__heading}>Company</h6>

          <a
            href="/"
            aria-current="page"
            className={cn(styles.footer__link, 'w--current')}
          >
            Home
          </a>
          <a
            href="/contact"
            className={styles.footer__link}>Contact</a>
        </div>
        <div className={styles['footer__links-wrapper']}>
          <h6 className={styles.footer__heading}>Legal</h6>
          <a href="#" className={styles.footer__link} aria-label="Legal notice">
            Legal Notice
          </a>
          <a href="#" className={styles.footer__link}>
            Privacy Policy
          </a>
        </div>
        <div className={styles.footer__sm}>
          <h6 className={styles.footer__heading}>Follow us</h6>
          <div className={styles['footer__sm-wrapper']}>
            <a
              href="https://www.facebook.com/people/Codinitn/61556850401856/"
              target='_blank'
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
              aria-label="Facebook"
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Facebook />
              </div>
            </a>
            <a
              href="https://www.instagram.com/codini.tn/"
              target='_blank'
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
              aria-label="Instagram"
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
              <Instagram />
              </div>
            </a>
            <a
              href="#"
              target='_blank'
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
              aria-label="Linkedin"
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Linkedin />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@codini.tn"
              target='_blank'
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
              aria-label="TikTok"
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <TikTok />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
