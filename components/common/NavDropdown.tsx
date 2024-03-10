import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { gsap } from 'gsap';
import cn from 'classnames';

import styles from './Nav.module.css';

const NavDropdown = ({
  isOpen,
  closeNav,
}: {
  isOpen: boolean;
  closeNav: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if (isOpen) {
      gsap.set(ref.current, {
        display: 'block',
        height: height - 40,
      });
      gsap.to(ref.current!.querySelector('nav'), {
        y: 0,
        duration: 0.4,
      });
    } else {
      const tl = gsap.timeline();
      tl.to(ref.current!.querySelector('nav'), {
        y: '-101%',
        duration: 0.4,
      });
      tl.set(ref.current, {
        display: 'none',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="w-nav-overlay"
      onClick={closeNav}
      //   style="height: 971px; display: block;"
    >
      <nav role="navigation" className={cn(styles.nav__menu, 'w-nav-menu')}>
        
          <a
            href="/"
            className={cn(
              styles['nav__link-div'],
              styles['nav__link-div--white'],
              styles.space,
              styles['w-inline-block'],
              { [styles['w--current']]: router.pathname === '/' },
            )}
          >
            <div className={styles.nav__link}>Home</div>
          </a>
        
          <a
            href="/contact"
            aria-current="page"
            className={cn(
              styles['nav__link-div'],
              styles['nav__link-div--white'],
              styles.space,
              'w-inline-block',
              'w--current',
              { [styles['w--current']]: router.pathname === '/contact' },
            )}
          >
            <div className={styles.nav__link}>Contact</div>
          </a>
      </nav>
    </div>
  );
};

export default NavDropdown;
