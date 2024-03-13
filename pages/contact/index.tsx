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
  const [isForward, setIsForward] = useState(true);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      animateExit();
      // setTimeout(() => setCurrentStep(currentStep + 1), 300);
      setCurrentStep(currentStep + 1)
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

  const handleNavigateStep = (step: number) => {
    if (step !== currentStep) {
      setIsForward(step > currentStep);
      animateExit();
      setTimeout(() => setCurrentStep(step), 300);
    }
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
      <main className="w-dwh mt-20 h-screen ">
        {/* steps marker */}
        <div className="py-3">
          <div className="flex items-center justify-center gap-8 z-50">
            <div className="relative group">
              <button
                className={`w-3 h-3 rounded-full hover:scale-150 transition-all duration-300 ${
                  currentStep === 0 ? 'bg-[#1e2a78]' : 'bg-gray-300'
                }`}
                onClick={() => handleNavigateStep(0)}
              ></button>
              <div
                className={`absolute top-6 left-1/2 z-50 transform -translate-x-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
              >
                <div className="text-xs font-bold  text-white bg-gray-500 px-4 py-2 rounded-md whitespace-nowrap">
                  User Type
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                className={`w-3 h-3 rounded-full hover:scale-150 transition-all duration-300 ${
                  currentStep === 1 ? 'bg-[#1e2a78]' : 'bg-gray-300'
                }`}
                onClick={() => handleNavigateStep(1)}
              ></button>
              <div
                className={`absolute top-6 left-1/2 z-50 transform -translate-x-1/2 opacity-0  scale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
              >
                <div className="text-xs font-bold text-white bg-gray-500 px-4 py-2 rounded-md">
                  Seeking
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                className={`w-3 h-3 rounded-full hover:scale-150 transition-all duration-300 ${
                  currentStep === 2 ? 'bg-[#1e2a78]' : 'bg-gray-300'
                }`}
                onClick={() => handleNavigateStep(2)}
              ></button>
              <div
                className={`absolute top-6 left-1/2 z-50 transform -translate-x-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
              >
                <div className="text-xs font-bold text-white bg-gray-500 px-4 py-2 rounded-md whitespace-nowrap">
                  Contact form
                </div>
              </div>
            </div>
          </div>
        </div>
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
