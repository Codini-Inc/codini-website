import cn from 'classnames';
import { RefObject, createRef, useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../blog/NewsletterCta.module.css';
import { ClientNeeds, ClientType } from '../../_enums';
import { NextPage } from 'next';
import contactFormStyles from './contactForm.module.css';
import gsap from 'gsap';

interface ContactForm {
  type: ClientType | null;
  seeking: ClientNeeds;
}

export const ContactForm: NextPage<ContactForm> = ({ type, seeking }) => {
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const inputRef = createRef<HTMLInputElement>();
  const emailInputContainerRef = createRef<HTMLDivElement>();
  const phoneInputContainerRef = createRef<HTMLDivElement>();
  const messageTextareaContainerRef = createRef<HTMLDivElement>();
  const overlayRef = createRef<HTMLDivElement>();

  const submitContact = async () => {
    try {
      const response = await axios.post('api/post-contact', {
        type: type,
        seeking: seeking,
        email: email,
        phone: phoneNumber,
      });

      if (response.status === 200) {
        console.error('success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhoneNumberChange = async (value: string) => {
    setPhoneNumber(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const hanleAnimateInput = (ref: RefObject<any>) => {
    gsap.to(ref.current, {
      scale: 1.25,
      duration: 0.5,
      ease: 'expo.out',
    });

    ref.current?.classList?.add('rounded-md');
    ref.current?.classList?.add('shadow-md');
    ref.current?.classList?.add('p-4');
    ref.current?.classList?.add('border');
    ref.current?.classList?.add('z-50');
    overlayRef.current?.classList?.add('bg-black/5');
    overlayRef.current?.classList?.remove('-z-10');
    overlayRef.current?.classList?.add('z-10');

    // scroll to the input
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const hanleBlurInput = (ref: RefObject<any>) => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.5,
      ease: 'expo.out',
    });
    ref.current?.classList?.remove('rounded-md');
    ref.current?.classList?.remove('shadow-md');
    ref.current?.classList?.remove('p-4');
    ref.current?.classList?.remove('border');
    overlayRef.current?.classList?.remove('bg-black/5');
    overlayRef.current?.classList?.remove('z-10');
    overlayRef.current?.classList?.add('-z-10');
  };

  useEffect(() => {
    gsap.fromTo(
      inputRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
      },
    );
  }, []);

  return (
    <>
      <form
        // id="email-form"
        // name="email-form"
        // data-name="Email Form"
        className="max-w-3xl w-full mx-auto h-full flex items-center justify-center flex-col gap-10 p-10 bg-white rounded-md step"
      >
        <div className="space-y-10 w-full transition-all">
          <h2 className="text-center transition-all">
            We would love to connect with you.
          </h2>
          <div
            className="flex flex-col items-start gap-4 bg-white w-full"
            ref={emailInputContainerRef}
          >
            <label htmlFor="" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="text"
              className={cn(
                'px-4 py-2  text-lg w-full border-none outline-none transition-opacity  rounded-md',
                contactFormStyles['animated-input'],
              )}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="Your email"
              onFocus={() => hanleAnimateInput(emailInputContainerRef)}
              onBlur={() => hanleBlurInput(emailInputContainerRef)}
              onAnimationEnd={() => {
                console.log('animation ended');
              }}
              required
              ref={inputRef}
            />
          </div>

          <div
            className="flex flex-col items-start gap-4 bg-white w-full"
            ref={phoneInputContainerRef}
          >
            <label htmlFor="" className="text-lg font-semibold">
              Phone
            </label>
            <input
              type="phone"
              className={cn(
                'px-4 py-2  text-lg w-full border-none outline-none  rounded-md',
                contactFormStyles['animated-input'],
              )}
              maxLength={256}
              onChange={(e) => handlePhoneNumberChange(e.target.value)}
              onFocus={() => hanleAnimateInput(phoneInputContainerRef)}
              onBlur={() => hanleBlurInput(phoneInputContainerRef)}
              placeholder="Your phone number"
              required
              ref={inputRef}
            />
          </div>

          <div
            className="flex flex-col items-start gap-4 bg-white w-full"
            ref={messageTextareaContainerRef}
          >
            <label htmlFor="" className="text-lg font-semibold">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className={cn(
                'px-4 py-2  text-lg w-full border-none outline-none  rounded-md',
                contactFormStyles['animated-input'],
              )}
              onFocus={() => hanleAnimateInput(messageTextareaContainerRef)}
              onBlur={() => hanleBlurInput(messageTextareaContainerRef)}
            ></textarea>
          </div>

          <button
            onClick={submitContact}
            className={cn(
              'px-4 py-2 bg-[#334ac0] font-bold text-lg text-white rounded-md w-full focus:outline-none focus:border-blue-200 transition duration-300 ease-in-out hover:bg-[#1e2a78] hover:scale-105 ',
            )}
          >
            Submit
          </button>
        </div>
        <div className={styles['newsletter-cta__disclaimer']}>
          We care about protecting your data. Here’s our{' '}
          <a href="#" className={styles['newsletter-cta__disclamer-link']}>
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </>
  );
};
