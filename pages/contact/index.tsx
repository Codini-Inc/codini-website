import Head from 'next/head';
import styles from '../../components/blog/NewsletterCta.module.css';
import cn from 'classnames';
import { ContactForm } from '../../components/contact/contactForm';
import { Seeking } from '../../components/contact/Seeking';
import { ClientTypeSelection } from '../../components/contact/ClientTypeSelection';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { RefObject } from 'react';

export type ClientType = 'individual' | 'enterprise' | null;

export const Contact: React.FC = () => {
  const clientTypeSelectionRef = useRef<HTMLDivElement>(null);
  const seekingRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [clientType, setClientType] = useState<ClientType>(null);

  const animateStep = (ref: RefObject<HTMLDivElement>, isEnter: boolean) => {
    gsap.fromTo(
      ref.current,
      {
        x: isEnter ? 2000 : 0,
        opacity: isEnter ? 0 : 1,
      },
      {
        x: isEnter ? 0 : -2000,
        opacity: isEnter ? 1 : 0,
        duration: 1.3,
        ease: 'power4.out',
      },
    );
  };

  useEffect(() => {
    animateStep(clientTypeSelectionRef, true);
  }, []);

  useEffect(() => {
    if (clientType === null) return;
    animateStep(clientTypeSelectionRef, false);
  }, [clientType]);

  return (
    <>
      <Head>
        <title>Codini | Contact</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <main className="max-w-7xl w-full mx-auto mt-20 h-full space-y-20">
        <div className="test" ref={clientTypeSelectionRef}>
          <ClientTypeSelection
            setClientType={setClientType}
            clientType={clientType}
          />
        </div>
        <div ref={seekingRef}>
          <Seeking />
        </div>
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Contact;
