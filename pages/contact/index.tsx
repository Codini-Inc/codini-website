import Head from 'next/head';
import { ContactForm } from '../../components/contact/contactForm';
import { Seeking } from '../../components/contact/Seeking';
import { ClientTypeSelection } from '../../components/contact/ClientTypeSelection';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { ClientNeeds, ClientType } from '../../_enums';

const steps = [ClientTypeSelection, Seeking, ContactForm];

export const Contact: React.FC = () => {
  const clientTypeSelectionRef = useRef<HTMLDivElement>(null);
  const seekingRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [clientType, setClientType] = useState<ClientType | null>(null);
  const [clientNeed, setClientNeed] = useState<ClientNeeds | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      animateExit();
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };
  const animateExit = () => {
    gsap.to('.step', {
      xPercent: -100,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'expo.out',
    });
    gsap.fromTo(
      '.step',
      {
        xPercent: 0,
        scale: 0.8,
        autoAlpha: 1,
        opacity: 1,
        rotate: 0,
        yoyoEase: 'expo.out',
        yoyo: true,
      },
      {
        xPercent: -40,
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        autoAlpha: 0,
        rotate: -10,
        yoyoEase: 'expo.out',
        yoyo: true,
        ease: 'expo.out',
      },
    );
  };

  useEffect(() => {
    gsap.fromTo(
      '.step',
      {
        xPercent: 100,
        autoAlpha: 0,
        opacity: 0,
        scale: 0.5,
        rotate: 20,
        ease: 'expo.out',
        yoyoEase: 'expo.out',
        yoyo: true,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.9,
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: 'expo.out',
      },
    );
  }, [currentStep]);

  return (
    <>
      <Head>
        <title>Codini | Contact</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <main className="w-full mt-20 h-screen ">
        {currentStep === 0 && (
          <div className="w-full h-full " ref={clientTypeSelectionRef}>
            <ClientTypeSelection
              setClientType={setClientType}
              clientType={clientType}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 1 && (
          <div className="w-full h-full" ref={seekingRef}>
            <Seeking
              setClientNeed={setClientNeed}
              clientNeed={clientNeed}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full h-full" ref={contactFormRef}>
            <ContactForm type={clientType} seeking={clientNeed} />
          </div>
        )}
      </main>
    </>
  );
};

export default Contact;
