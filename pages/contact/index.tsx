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
  const [stepOneVisible, setStepOneVisible] = useState<boolean>(true);
  const [stepTwoVisible, setStepTwoVisible] = useState<boolean>(false);
  const [stepThreeVisible, setStepThreeVisible] = useState<boolean>(false);

  const animateStep = (
    ref: RefObject<HTMLDivElement>,
    delay: number,
    isEnter: boolean,
  ) => {
    const animation = gsap.timeline();
    const tween = gsap.fromTo(
      ref.current,
      {
        x: isEnter ? 1000 : 0,
        duration: 0.9,
        opacity: isEnter ? 0 : 1,
      },
      {
        x: isEnter ? 0 : -300,
        opacity: isEnter ? 1 : 0,
        duration: 0.9,
        delay: delay,
        ease: 'power4.out',
      },
    );
    return tween;
  };

  useEffect(() => {
    let tween: gsap.core.Tween;
    animateStep(clientTypeSelectionRef, 0, true);
    // tween.eventCallback('onComplete', () => {
    //   setStepOneAnimationStarted(true);
    // });

    // if (clientType === null) return;
    // tween = animateStep(clientTypeSelectionRef, 0, false);

    if (clientType !== null && stepOneVisible === true) {
      tween = animateStep(clientTypeSelectionRef, 0, false);
      tween.eventCallback('onComplete', () => {
        console.log('setting step one to false');
        setStepOneVisible(false);
        setStepTwoVisible(true);
      });
    }

    if (clientNeed !== null && stepTwoVisible === true) {
      tween = animateStep(seekingRef, 0, false);
      tween.eventCallback('onComplete', () => {
        console.log('setting step two to false');
        setStepTwoVisible(false);
        setStepThreeVisible(true);
      });
      tween = animateStep(contactFormRef, 0, true);
    }
  }, [clientType, clientNeed]);

  useEffect(() => {
    let tween: gsap.core.Tween;
    if (stepTwoVisible) {
      tween = animateStep(seekingRef, 0, true);
      tween.eventCallback('onComplete', () => {
        console.log('setting step two to true');
        setStepTwoVisible(true);
      });
    }
  }, [stepTwoVisible]);

  useEffect(() => {
    let tween: gsap.core.Tween;
    if (stepThreeVisible) {
      tween = animateStep(contactFormRef, 0, true);
      tween.eventCallback('onComplete', () => {
        console.log('setting step three to true');
        // setStepThreeVisible(true);
      });
    }
  }, [stepThreeVisible]);

  console.log(stepOneVisible, stepTwoVisible, stepThreeVisible);

  return (
    <>
      <Head>
        <title>Codini | Contact</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <main className="w-full mt-20 h-screen space-y-20 items-center justify-center ">
        {stepOneVisible && (
          <div className="w-full h-full " ref={clientTypeSelectionRef}>
            <ClientTypeSelection
              setClientType={setClientType}
              clientType={clientType}
            />
          </div>
        )}
        {stepTwoVisible && (
          <div className="w-full h-full" ref={seekingRef}>
            <Seeking setClientNeed={setClientNeed} clientNeed={clientNeed} />
          </div>
        )}
        {stepThreeVisible && (
          <div className="w-full h-full" ref={contactFormRef}>
            <ContactForm type={clientType} seeking={clientNeed} />
          </div>
        )}
      </main>
    </>
  );
};

export default Contact;
