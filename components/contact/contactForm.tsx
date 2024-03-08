import cn from 'classnames';
import { useState } from 'react';
import axios from 'axios';
import styles from '../blog/NewsletterCta.module.css';
import { ClientNeeds, ClientType } from '../../_enums';
import { NextPage } from 'next';

interface ContactForm {
  type: ClientType | null;
  seeking: ClientNeeds;
}

export const ContactForm: NextPage<ContactForm> = ({ type, seeking }) => {
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

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

  return (
    <form
      // id="email-form"
      // name="email-form"
      // data-name="Email Form"
      className="max-w-3xl w-full mx-auto h-full flex items-center justify-center flex-col gap-10 p-10 bg-white rounded-md shadow-lg"
    >
      <div className="space-y-10 w-full">
        <h2 className="text-center">Your info</h2>
        <div className="flex flex-col items-start gap-4">
          <label htmlFor="" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            // className={cn(styles['newsletter-cta__input'], 'w-input')}
            className="px-4 py-2 border border-gray-300 text-lg rounded-md w-full outline-3 focus:border-blue-200 transition duration-300 ease-in-out"
            maxLength={256}
            name="Hero-CTA-Email-2"
            onChange={(e) => handleEmailChange(e.target.value)}
            data-name="Hero CTA Email 2"
            placeholder="Your email"
            id="Hero-CTA-Email-2"
            required
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <label htmlFor="" className="text-lg font-semibold">
            Phone
          </label>
          <input
            type="phone"
            // className={cn(styles['newsletter-cta__input'], 'w-input')}
            className="px-4 py-2 border border-gray-300 text-lg rounded-md w-full outline-3 focus:border-blue-200 transition duration-300 ease-in-out"
            maxLength={256}
            name="Hero-CTA-Email-2"
            data-name="Hero CTA Email 2"
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            placeholder="Your phone number"
            id="Hero-CTA-Email-2"
            required
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <label htmlFor="" className="text-lg font-semibold">
            Message
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="px-4 py-2 border border-gray-300 text-lg rounded-md w-full outline-3 focus:border-blue-200 transition duration-300 ease-in-out"
          ></textarea>
        </div>

        <button
          onClick={submitContact}
          className="px-4 py-2 bg-[#334ac0] font-bold text-lg text-white rounded-md w-full focus:outline-none focus:border-blue-200 transition duration-300 ease-in-out"
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
  );
};
