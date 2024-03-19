import Head from 'next/head';
import { ContactForm } from '../../components/contact/contactForm';
import { Seeking } from '../../components/contact/Seeking';
import { ClientTypeSelection } from '../../components/contact/ClientTypeSelection';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { ClientNeeds, ClientType } from '../../_enums';
import Footer from '../../components/common/Footer';
import ConfettiExplosion from 'react-confetti-explosion';

const steps = [ClientTypeSelection, Seeking, ContactForm];

export const Contact: React.FC = () => {
  const clientTypeSelectionRef = useRef<HTMLDivElement>(null);
  const seekingRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [clientType, setClientType] = useState<ClientType | null>(null);
  const [clientNeed, setClientNeed] = useState<ClientNeeds | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [stepsState, setStepsState] = useState([
    { stepNumber: 0, active: true, visited: true, name: 'Who am I ?' },
    { stepNumber: 1, active: false, visited: false, name: 'Looking for ?' },
    { stepNumber: 2, active: false, visited: false, name: 'Contact form' },
  ]);

  const animate = (callback: (className: string) => void) => {
    switch (currentStep) {
      case 0:
        callback('.client-type-selection-step');
        break;
      case 1:
        callback('.seeking-step');
        break;
      case 2:
        callback('.contact-form-step');
        break;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      animate(animateExit);

      setTimeout(() => setCurrentStep(currentStep + 1), 300);
      setStepsState((prev) => {
        const newState = prev.map((step, index) => {
          if (index === currentStep + 1) {
            step.active = true;
            step.visited = true;
          } else {
            step.active = false;
          }
          return step;
        });
        return newState;
      });
    }
  };
  const animateExit = (className: string) => {
    gsap.to(className, {
      xPercent: -100,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'expo.out',
    });
    gsap.fromTo(
      className,
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
      animate(animateExit);
      setTimeout(() => setCurrentStep(step), 300);
      setStepsState((prev) => {
        const newState = prev.map((stepState, index) => {
          if (index === step) {
            stepState.active = true;
          } else {
            stepState.active = false;
          }
          return stepState;
        });
        return newState;
      });
    }
  };

  const animateEnter = (className: string) => {
    gsap.fromTo(
      className,
      {
        x: 0,
        autoAlpha: 0,
        opacity: 0,
        scale: 0,
        rotate: 20,
        ease: 'expo.out',
        yoyoEase: 'expo.out',
        yoyo: true,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.9,
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: 'expo.out',
      },
    );
  };

  useEffect(() => {
    animate(animateEnter);
  }, [currentStep]);

  return (
    <>
      <Head>
        <title>Get in Touch | Codini</title>
        <meta
          content="We would love to connect with you! For any question, please send us an email at contact@codini.tn"
          name="description"
        />
        <meta
          property="og:type"
          content="We would love to connect with you! For any question, please send us an email at contact@codini.tn"
        />
        <meta content="Get in Touch | Codini" property="og:title" />
        <meta
          content="We would love to connect with you! For any question, please send us an email at contact@codini.tn"
          property="og:description"
        />
        <meta content="Get in Touch | Codini" property="twitter:title" />
        <meta
          content="We would love to connect with you! For any question, please send us an email at contact@codini.tn"
          property="twitter:description"
        />
      </Head>
      <main className="mt-20 ">
      <br></br>

        {currentStep === 0 && (
          <div
            className="w-full h-full client-type-selection-step "
            ref={clientTypeSelectionRef}
          >
            <ClientTypeSelection
              setClientType={setClientType}
              clientType={clientType}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 1 && (
          <div className="w-full h-full seeking-step" ref={seekingRef}>
            <Seeking
              setClientNeed={setClientNeed}
              clientNeed={clientNeed}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full h-full contact-form-step" ref={contactFormRef}>
            <ContactForm type={clientType} seeking={clientNeed as ClientNeeds} />
          </div>
        )}
        <br></br>
        <br></br>

          {/* steps marker */}
          <div className="py-3">
          <div className="flex items-center justify-center gap-8 z-50">
            {stepsState.map((step, index) => (
              <div className="relative group" key={index}>
                <button
                  className={`w-3 h-3 rounded-full hover:scale-150 transition-all duration-300 ${
                    step.active ? 'bg-[#1e2a78]' : 'bg-gray-300'
                  }`}
                  onClick={() => handleNavigateStep(index)}
                ></button>
                <div
                  className={`absolute top-6 left-1/2 z-50 transform -translate-x-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                >
                  <div className="text-xs font-bold text-white bg-gray-500 px-4 py-2 rounded-md whitespace-nowrap">
                    {step.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <br></br>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
