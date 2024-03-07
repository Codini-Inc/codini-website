import Head from 'next/head';
import styles from '../../components/blog/NewsletterCta.module.css';
import cn from 'classnames';
import { ContactForm } from '../../components/contact/contactForm';
import { Seeking } from '../../components/contact/Seeking';
import { ClientTypeSelection } from '../../components/contact/ClientTypeSelection';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { RefObject } from 'react';
import { ClientNeeds, ClientType } from '../../_enums';

export const Contact: React.FC = () => {
  const clientTypeSelectionRef = useRef<HTMLDivElement>(null);
  const seekingRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [clientType, setClientType] = useState<ClientType | null>(null);
  const [clientNeed, setClientNeed] = useState<ClientNeeds | null>(null);
  const [animationStartStepOne, setAnimationStartStepOne] = useState(false);

  const animateStep = (
    ref: RefObject<HTMLDivElement>,
    delay: number,
    isEnter: boolean,
  ) => {
    gsap.fromTo(
      ref.current,
      {
        x: isEnter ? 3000 : 0,

        opacity: isEnter ? 0 : 1,
      },
      {
        x: isEnter ? 0 : -3000,
        opacity: isEnter ? 1 : 0,
        duration: 1.3,
        delay: delay,
        ease: 'power4.out',
      },
    );
  };

  useEffect(() => {
    animateStep(clientTypeSelectionRef, 0, true);
  }, []);

  useEffect(() => {
    if (clientType === null) return;
    animateStep(clientTypeSelectionRef, 0, false);
  }, [clientType]);

  useEffect(() => {
    if (clientType !== null) {
      animateStep(seekingRef, 0.1, true);
    }
    if (clientNeed !== null) {
      animateStep(seekingRef, 0, false);
    }
  }, [clientType, clientNeed]);

  return (
    <>
      <Head>
        <title>Codini | Contact</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <main className="w-full flex mt-20 h-screen space-y-20 items-center justify-center ">
        {clientType === null && (
          <div className="w-full h-full " ref={clientTypeSelectionRef}>
            <ClientTypeSelection
              setClientType={setClientType}
              clientType={clientType}
            />
          </div>
        )}
        {clientType !== null && clientNeed === null && (
          <div className="w-full h-full" ref={seekingRef}>
            <Seeking
              setClientNeed={setClientNeed}
              clientNeed={clientNeed}
            />
          </div>
        )}
        {/* {clientNeed !== null && (
          <div className="w-full h-full" ref={contactFormRef}>
            <ContactForm type={clientType as ClientType} seeking={clientNeed} />
          </div>
        )} */}
      </main>
    </>
  );
};

export default Contact;
