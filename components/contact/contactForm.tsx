import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from "../blog/NewsletterCta.module.css"


export const ContactForm: React.FC = () => {
    return (<form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        className={styles['newsletter-cta__div']}
      >
        <div className={styles['newsletter-cta__input-wrapper']}>
          <input
            type="email"
            // className={cn(styles['newsletter-cta__input'], 'w-input')}
            className="px-4 py-2 border border-gray-300 text-lg rounded-md w-full focus:outline-none focus:border-blue-200 transition duration-300 ease-in-out"
            maxLength={256}
            name="Hero-CTA-Email-2"
            data-name="Hero CTA Email 2"
            placeholder="Your email"
            id="Hero-CTA-Email-2"
            required
          />
          <input
            type="submit"
            value="Subscribe"
            data-wait="Please wait..."
            className={cn(styles['newsletter-cta__button'], 'w-button')}
          />
        </div>
        <div className={styles['newsletter-cta__disclaimer']}>
          We care about protecting your data. Here’s our{' '}
          <a href="#" className={styles['newsletter-cta__disclamer-link']}>
            Privacy Policy
          </a>
          .
        </div>
      </form>)
}