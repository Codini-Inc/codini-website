import Head from 'next/head';
import styles from './Contact.module.css';
import cn from 'classnames';
import { useState } from 'react';
import axios from 'axios';
import Footer from '../../components/common/Footer';

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean| null>(null);

  const submitContact = async () => {
    try {
      const response = await axios.post('api/post-contact', {
        "type" : name, "seeking":message, "email":email, "phone":phone
      });
  
      if (response.status === 200) {
      console.error('success');
      (document.getElementById('name') as HTMLInputElement).value = '';
      (document.getElementById('phone') as HTMLInputElement).value = '';
      (document.getElementById('email') as HTMLInputElement).value = '';
      (document.getElementById('message') as HTMLInputElement).value = '';
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSuccess(true);
      }
      else{
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
  };

  const handlePhoneNumberChange = async (value: string) => {
    setPhone(value);
    setSuccess(null);
  };

  const handleEmailChange = (value: string) => {
    setSuccess(null);
    setEmail(value);
  };

  const handleMessageChange = async (value: string) => {
    setSuccess(null);
    setMessage(value);
  };

  const handleNameChange = (value: string) => {
    setSuccess(null);
    setName(value);
  };


  return (
    <>
      <Head>
        <title>Get in Touch | Codini</title>
        <meta content="We would love to connect with you! For any question, please send us an email at contact@codini.tn" name="description" />
        <meta property="og:type" content="We would love to connect with you! For any question, please send us an email at contact@codini.tn" />
        <meta content="Get in Touch | Codini" property="og:title" />
        <meta content="We would love to connect with you! For any question, please send us an email at contact@codini.tn" property="og:description" />
        <meta content="Get in Touch | Codini" property="twitter:title" />
        <meta content="We would love to connect with you! For any question, please send us an email at contact@codini.tn" property="twitter:description" />
      </Head>
      <main className="w-full flex mt-20 h-screen space-y-20 items-center justify-center ">
        <div className={styles["page-content"]}>
          <div className={cn(styles["section"],styles["grey"])}>
            <div className={cn(styles["container"],styles["narrow"])}>
              <div className={styles["section-header"]}>
                <h1 className={styles["size-1"]}>We would love to connect with you.</h1>
                <div className={styles["separator"]}></div>
              </div>
              <div className={cn(styles['form-block'], styles["form-block w-form"])}>
                  <label className={styles["field-label"]}>
                    Name
                  </label>
                  <input onChange={(e) => handleNameChange(e.target.value)} type="text" className={cn(styles["text-field"],styles["w-input"])} maxLength={256} name="name" data-name="Name" id="name" required/>
                    <label  className={styles["field-label"]} >
                        Email Address
                    </label>
                  <input onChange={(e) => handleEmailChange(e.target.value)} type="email" className={cn(styles["w-input"],styles["text-field"])} maxLength={256} name="email" data-name="Email" placeholder="" id="email" required />
                    <label className={styles["field-label"]}>
                      Phone
                    </label>
                  <input onChange={(e) => handlePhoneNumberChange(e.target.value)} type="tel" className={cn(styles["w-input"], styles["text-field"])}  maxLength={256} name="Phone" data-name="Phone" placeholder="" id="phone" required />
                    <label  className={styles["field-label"]}>
                      Message
                    </label>
                  <textarea onChange={(e) => handleMessageChange(e.target.value)} name="field" maxLength={5000} id="message" className={cn(styles["w-input"],styles["text-field"],styles["area"])}>
                  </textarea>
                  <button onClick={submitContact} className={cn(styles.button, styles['button--blue'])} name='submit'>
                    Submit
                  </button>

                {success == true ?
                (<div className={cn(styles["success-message"],styles["w-form-done"])}>
                    Thank you! Your submission has been received!
                  </div>) :
                  success == false ? 
                  (<div className={cn(styles["error-message"],styles["w-form-fail"])}>
                    Oops! Something went wrong while submitting the form.
                  </div>) 
                  :(<div></div>)
                }
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;