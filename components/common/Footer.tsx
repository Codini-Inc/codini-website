import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './Footer.module.css';

import Logo from '../../assets/icons/logo.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import TikTok from '../../assets/icons/tiktok.svg';

const Footer: NextPage = () => {
  return (
    <div className={cn(styles.footer, 'wf-section')}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__credits}>
          
            <a
            href="/"
              aria-current="page"
              className={cn(styles.footer__logo, 'w-nav-brand', 'w--current')}
            >
              <div className={cn(styles['footer__logo-image'], 'w-embed')}>
                <Logo />
              </div>
            </a>
          

          <div className={styles.footer__copyright}>
            © Copyright 2024 Codini.
          </div>
          <div className={styles.footer__copyright}>All rights reserved.</div>
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
            href="/about"
            className={styles.footer__link}>About</a>


          <a
            href="/blog"
            className={styles.footer__link}>Blog</a>
        </div>
        <div className={styles['footer__links-wrapper']}>
          <h6 className={styles.footer__heading}>Legal</h6>
          <a href="#" className={styles.footer__link}>
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
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
         
                <Facebook />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
              <Instagram />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Linkedin />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
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