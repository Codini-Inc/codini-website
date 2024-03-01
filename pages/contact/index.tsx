import Head from 'next/head';

export const Contact: React.FC = () => {
  async function handlesubmit(contact: any) {
    contact.prevenDefault();

    const data = {
      type: String(contact.target.type.value),
      puropose: String(contact.target.puropose.value),
      phonenumber: String(contact.target.phonenumber.value),
      email: String(contact.target.email.value),
    };

    console.log(data);

  }
  return (
    <>
      <Head>
        <title>Codini | Contact</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <div className="p-4 max-w-3xl mx-auto">
        <h1>Contact Us</h1>
        <form>
          <div className="w-full flex flex-col my-4">
            <label className='font-hold text-gray-800' htmlFor="type" >Type</label>
            <input type="text" autoComplete='off' id="type" />

          </div>
          <div className="w-full flex flex-col my-4">
            <label className='font-hold text-gray-800' htmlFor="puropose" >Puropose</label>
            <input type="text" autoComplete='off' id="purpose" />

          </div>
          <div className="w-full flex flex-col my-4">
            <label className='font-hold text-gray-800' htmlFor="phonenumber" >Phone Number</label>
            <input type="text" autoComplete='off' id="phonenumber" />

          </div>
          <div className="w-full flex flex-col my-4">
            <label className='font-hold text-gray-800' htmlFor="email" >Email</label>
            <input type="text" autoComplete='off' id="email" />
          </div>
          <div>
            <textarea rows={4} placeholder='How we can help you?'
              className='w-full' />
          </div>
          <button type='submit' className='px-4 py-2 w-24 bg-gray-700 text-white font-medium rounded'>Send</button>
        </form >
        <p>Please fill in the form below</p>
        <div></div>
        <div></div>
        <div></div>
      </div >
    </>
  );
};

export default Contact;
