import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { gsap } from 'gsap';
import cn from 'classnames';
import styles from './Nav.module.css';
import Logo from '../../assets/icons/logo.svg';
import NavDropdown from './NavDropdown';

const Nav: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        toggleActions: 'play none none reset',
      },
      duration: 0.5,
    });
  }, []);

  const toggleNav = () => setNavOpen((navOpen) => !navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div
        role="banner"
        className={cn(styles.nav, 'w-nav', {
          [styles['nav--purple']]: router.pathname === '/about',
        })}
      >
        <div className={cn(styles.nav__container, 'w-container')}>

          <a
            href="/"
            aria-current={router.pathname === '/' && 'page'}
            className={cn(styles.nav__logo1, 'w-nav-brand')}
          >
            <div >
              <img       
                src="/images/logo-description.png"
                alt="Codini main logo"
              />
            </div>
          </a>

          <nav
            role="navigation"
            className={cn(styles.nav__menu, 'w-nav-menu', styles.nav_header)}
          >

            <a
              href="/"
              aria-current={router.pathname === '/' && 'page'}
              className={cn(
                styles['nav__link-div'],
                styles['nav__link-div--black'],
                styles['nav__link-div--space'],
                'w-inline-block',
                { [styles['w--current']]: router.pathname === '/' },
              )}
            >
              <div className={styles.nav__link}>Home</div>
            </a>
            {/* <a
              href="/about"
              aria-current={router.pathname === '/about' && 'page'}
              className={cn(
                styles['nav__link-div'],
                styles['nav__link-div--black'],
                styles['nav__link-div--space'],
                'w-inline-block',
                { [styles['w--current']]: router.pathname === '/about' },
              )}
            >
              <div className={styles.nav__link}>About</div>
            </a> */}
            <a
              href="#"
              className={cn(
                styles['nav__link-div'],
                styles['nav__link-div--black'],
                styles['nav__link-div--space'],
                styles['nav__link-div--hidedesktop'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Learning</div>
            </a>

            <a
              href="/blog"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Blog</div>
            </a>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Help Center</div>
            </a>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>What&#x27;s New</div>
            </a>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Constant Change</div>
            </a>
            <div className={styles['nav__link-div-jobs']}>
              <a
                href="/contact"
                className={cn(
                  styles['nav__link-div-jobstext'],
                  'w-inline-block',
                )}
              >
                <div className={styles.nav__link}>Contact</div>
              </a>
            </div>
          </nav>
          <div
            id="w-node-_32e10129-2707-fa69-8e71-2a2e29fe89df-29fe89b6"
            className={styles.nav__buttons}
          >
            <a
              href="/contact"
              className={cn(styles.button, styles['button--blue'], 'w-button')}
            >
              Get in touch
            </a>
          </div>
          <button
            className={cn(styles.nav__mobilebutton, 'w-nav-button')}
            onClick={toggleNav}
          >
            <span className={cn(styles.nav__mobileicon)}></span>
          </button>
        </div>
        <NavDropdown isOpen={navOpen} closeNav={closeNav} />
      </div>
      <div ref={ref} className={styles['nav-shadow']}></div>
    </>
  );
};

export default Nav;
