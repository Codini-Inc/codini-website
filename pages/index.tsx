import type { NextPage } from 'next';
import Head from 'next/head';

import Cta from '../components/common/Cta';
import Decks from '../components/home/Decks';
import Footer from '../components/common/Footer';
import Formating from '../components/home/Formating';
import Hero from '../components/home/Hero';
import Integrations from '../components/home/Integrations';
import Intro from '../components/home/Intro';
import News from '../components/home/News';
import Sharing from '../components/home/Sharing';
import Testimonials from '../components/home/Testimonials';
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('../components/home/Hero'), {
  ssr: false,
});

const DynamicIntro = dynamic(() => import('../components/home/Intro'), {
  ssr: false,
});

const DynamicDecks = dynamic(() => import('../components/home/Decks'), {
  ssr: false,
});

const DynamicFormating = dynamic(() => import('../components/home/Formating'), {
  ssr: false,
});

const DynamicIntegrations = dynamic(
  () => import('../components/home/Integrations'),
  {
    ssr: false,
  },
);

const DynamicSharing = dynamic(() => import('../components/home/Sharing'), {
  ssr: false,
});

const DynamicNews = dynamic(() => import('../components/home/News'), {
  ssr: false,
});

const DynamicTestimonials = dynamic(
  () => import('../components/home/Testimonials'),
  {
    ssr: false,
  },
);

const DynamicCta = dynamic(() => import('../components/common/Cta'), {
  ssr: false,
});

const DynamicFooter = dynamic(() => import('../components/common/Footer'), {
  ssr: false,
});


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codini | Home</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <DynamicHero />
      <DynamicIntro />
      <DynamicDecks />
      <DynamicFormating />
      <DynamicIntegrations />
      <DynamicSharing />
      <DynamicNews />
      <DynamicTestimonials />
      <DynamicCta />
      <DynamicFooter />
      {/* <Intro />
      <Decks />
      <Formating />
      <Integrations />
      <Sharing />
      <News />
      <Testimonials />
      <Cta />
      <Footer /> */}
    </>
  );
};

export default Home;
